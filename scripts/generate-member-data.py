"""Generate src/data/members/2026W39.ts from the Fall 26 Members sheet (CSV)."""

import csv
import json
import re
import sys

VERSION = "2026W39"
START_DATE = "2026-09-21"  # Monday of ISO week 2026-W39

rows = list(csv.reader(open(sys.argv[1], encoding="utf-8")))
warnings: list[str] = []

# ------------------------------------------------------------------ helpers


def clean(v: str) -> str:
    return re.sub(r"\s+", " ", v.replace('"', "")).strip()


def is_email(v: str) -> bool:
    return bool(re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", v))


PROF_RE = re.compile(r"^(?:\([A-Z]\)\s*)?[\dX](?:-[\dX]){2,4}")


def looks_prof(v: str) -> bool:
    return bool(PROF_RE.match(v))


# Google Sheets turned some "1-5" style ranges into date serials.
SERIAL_RANGES = {"46027": "1-5", "46183": "6-10", "46341": "11-15"}


def parse_availability(raw: str, default_status: str):
    v = clean(raw)
    status = default_status
    if v.startswith("(INACTIVE?)"):
        status = "INACTIVE"
        v = v.replace("(INACTIVE?)", "").strip()
    v = SERIAL_RANGES.get(v, v)
    if v == "BREAK":
        return {"kind": "hoursUnknown", "status": "BREAK"}
    if looks_prof(v):  # a proficiency value sitting in the wrong row
        v = ""
    m = re.fullmatch(r"(\d+)-(\d+)", v)
    if m:
        return {"kind": "range", "min": int(m[1]), "max": int(m[2]), "status": status}
    m = re.fullmatch(r"(\d+)\+", v)
    if m:
        return {"kind": "atLeast", "min": int(m[1]), "status": status}
    m = re.fullmatch(r"<\s*(\d+)(?: hours?)?", v)
    if m:
        return {"kind": "lessThan", "max": int(m[1]), "status": status}
    if v not in ("", "-"):
        warnings.append(f"unparsed availability {raw!r}")
    return {"kind": "hoursUnknown", "status": status}


def parse_proficiency(raw: str):
    v = clean(raw)
    v = re.sub(r"^\([A-Z]\)\s*", "", v)
    m = re.match(r"([\dX](?:-[\dX]){2,4})\s*(?:=\s*(\d+)|\(\s*(\d+)\s*\))?", v)
    if not m:
        return None
    keys = ["frontEnd", "backEnd", "design", "versionControl", "devOps"]
    out = {}
    for k, part in zip(keys, m[1].split("-")):
        out[k] = "X" if part == "X" else int(part)
    total = m[2] or m[3]
    if total:
        out["totalSum"] = int(total)
    return out


ROLE_CODES = {
    "PL": "Primary Lead",
    "SL": "Secondary Lead",
    "TL": "Team Lead",
    "H": "Head",
    "HEAD": "Head",
    "M": "Member",
}
ROLE_WORDS = {
    "analyst": "Analyst",
    "rm": "Resource Manager",
    "hr specialist": "Human Resources Specialist",
    "fa": "Financial Analyst",
    "fundraiser": "Fundraiser",
    "accountant": "Accountant",
    "ec": "Member",  # Events Coordinator isn't a modeled role
    "recruiter": "Recruiter",
    "pm": "Product Manager",
    "developer": "Developer",
    "devleoper": "Developer",
    "designer": "Designer",
    "assistant": "Assistant",
    "president": "President",
}


def parse_role_token(tok: str):
    """-> (role, experienceLevel) or None"""
    t = tok.strip()
    level = "Intermediate"
    m = re.match(r"^(A\.|Assoc\.|Jr\.)\s*(.*)$", t)
    if m:
        level, t = "Associate", m[2]
    t = re.sub(r"\s*\(Development\)$", "", t)
    if re.fullmatch(r"[A-Za-z]+ H", t):  # e.g. "Marketing H" (a Head on the passive roster)
        return "Head", level
    if t.upper() in ROLE_CODES:
        return ROLE_CODES[t.upper()], level
    if t.lower() in ROLE_WORDS:
        return ROLE_WORDS[t.lower()], level
    return None


def parse_role_cell(raw: str):
    """-> (list of (role, level), desiredRoles)"""
    v = clean(raw)
    desired = []
    for d in re.findall(r"\(([A-Z]{1,3})\)", v):
        if d in ROLE_CODES:
            desired.append(ROLE_CODES[d])
        # (SD) has no modeled role; skipped
    v = re.sub(r"\([A-Z]{1,3}\)", "", v)
    roles = []
    for tok in re.split(r"[,/]", v):
        tok = tok.strip()
        if not tok or tok == "-":
            continue
        r = parse_role_token(tok)
        if r:
            roles.append(r)
        else:
            warnings.append(f"unknown role {tok!r} in {raw!r}")
    return roles, desired


def clean_name(v: str) -> str:
    v = clean(v)
    v = re.sub(r"\s+-\s+[A-Z]$", "", v)  # "Mark J. - P"
    v = re.sub(r"\s+\([A-Z]\)$", "", v)  # "Aleksandar A. (P)"
    return v


# ------------------------------------------------------------------ sections

# Each section: (context dict). Context keys: sector, department, team,
# cluster, status, kind ("advisory" | "exec" | "dept" | "team" | "passive")
EXEC_ROLES = {
    "President": ("President", None, None),
    "Internal VP": ("Vice President", "Internal Operations", None),
    "External VP": ("Vice President", "External Operations", None),
    "Development VP": ("Vice President", "Development Operations", None),
    "HR H": ("Head", "Internal Operations", "Human Resources"),
    "Finance H": ("Head", "Internal Operations", "Finance"),
    "Analytics H": ("Head", "Internal Operations", "Analytics"),
    "RM H": ("Head", "Internal Operations", "Resource Management"),
    "Marketing H": ("Head", "External Operations", "Marketing"),
    "PR H": ("Head", "External Operations", "Public Relations"),
    "Events H": ("Head", "External Operations", "Events"),
    "Development H": ("Head", "Development Operations", "Development"),
    "QA H": ("Head", "Development Operations", "Quality Assurance"),
    "PM H": ("Head", "Development Operations", "Product"),
}

DEPARTMENTS = {
    "Analytics Department": ("Internal Operations", "Analytics", None),
    "Resource Management Department": ("Internal Operations", "Resource Management", None),
    "Human Resources Department": ("Internal Operations", "Human Resources", None),
    "Finance Department": ("Internal Operations", "Finance", None),
    "Finance Department: Stock Investment Team": ("Internal Operations", "Finance", "Investment"),
    "Finance Department: Fundraising Team": ("Internal Operations", "Finance", "Fundraising"),
    "Finance Department: Accounting Team": ("Internal Operations", "Finance", "Accounting"),
    "Events Department": ("External Operations", "Events", None),
    "Marketing Department": ("External Operations", "Marketing", None),
    "Marketing Department: Recruitment Team": ("External Operations", "Marketing", "Recruitment"),
    "Marketing Department: Graphic Design Team": ("External Operations", "Marketing", "Graphic Design"),
    "Public Relations Department": ("External Operations", "Public Relations", None),
    "Product Management Department": ("Development Operations", "Product", None),
    "Quality Assurance Department": ("Development Operations", "Quality Assurance", None),
    "Development Department": ("Development Operations", "Development", None),
}

PASSIVE = {
    "PASSIVE ROSTER: Unassigned Development Members": ("Undergoing Processing", "ACTIVE"),
    "PASSIVE ROSTER: NOT IN DISCORD": ("Not In Discord", "UNKNOWN"),
    "PASSIVE ROSTER: BREAK": ("BREAK", "BREAK"),
    "PASSIVE ROSTER: INACTIVE": ("INACTIVE", "INACTIVE"),
    "PASSIVE ROSTER: Alums": ("INACTIVE", "INACTIVE"),
}

BLOCK_LABELS = {"Role", "Name", "Email", "Discord", "Availability", "Proficiency", "GitHub", "Club"}

people = []  # raw entries: dict(name, email, discord, github, positions, desired)


def flush(block, ctx):
    if not block or ctx is None:
        return
    n = max(len(r) for r in block.values())
    get = lambda label, i: clean(block.get(label, [])[i]) if i < len(block.get(label, [])) else ""
    entries = []
    for i in range(n):
        name = clean_name(get("Name", i))
        if not name:
            continue
        email, discord = get("Email", i), get("Discord", i)
        if not is_email(email) and is_email(discord):  # swapped rows
            email, discord = discord, email
        prof_raw, gh = get("Proficiency", i), get("GitHub", i)
        if not looks_prof(prof_raw) and looks_prof(gh):  # swapped cells
            prof_raw, gh = gh, prof_raw
        avail_raw = get("Availability", i)
        role_raw = get("Role", i)
        entries.append(dict(name=name, email=email, discord=discord, gh=gh,
                            prof_raw=prof_raw, avail_raw=avail_raw, role_raw=role_raw))

    # Section leader = first Head / Primary Lead / Team Lead with a name
    leader = None
    for e in entries:
        roles, _ = parse_role_cell(e["role_raw"]) if ctx["kind"] not in ("advisory", "exec") else ([], [])
        if any(r in ("Head", "Primary Lead", "Team Lead") for r, _ in roles):
            leader = e
            break

    for e in entries:
        avail = parse_availability(e["avail_raw"], ctx["status"])
        prof = parse_proficiency(e["prof_raw"])
        positions, desired = [], []
        base = {}
        if ctx["kind"] == "advisory":
            positions.append({"role": "Advisor", "experienceLevel": "Intermediate"})
        elif ctx["kind"] == "exec":
            label = e["role_raw"]
            if label not in EXEC_ROLES:
                warnings.append(f"unknown exec role {label!r}")
                continue
            role, sector, dept = EXEC_ROLES[label]
            p = {"role": role, "experienceLevel": "Intermediate"}
            if sector:
                p["operationsSector"] = sector
            if dept:
                p["department"] = dept
            positions.append(p)
        else:
            if ctx["department"] == "Development" and ctx.get("team") is None and ctx["kind"] == "dept":
                # "Whale + Angel PL" etc. duplicate the team blocks; keep only the Head
                if re.search(r"\bPL$", e["role_raw"]):
                    continue
            roles, desired = parse_role_cell(e["role_raw"])
            if not roles:
                roles = [("Member", "Intermediate")]
            for role, level in roles:
                p = {"role": role, "experienceLevel": level,
                     "operationsSector": ctx["sector"], "department": ctx["department"]}
                if ctx.get("team"):
                    p["team"] = ctx["team"]
                if ctx.get("cluster"):
                    p["cluster"] = ctx["cluster"]
                positions.append(p)
        for p in positions:
            if leader is not None and leader is not e and ctx["kind"] not in ("advisory", "exec"):
                p["supervisor"] = [leader["name"], leader["email"]]
            p["availability"] = avail
            if prof and p["role"] in ("Developer", "Designer", "Primary Lead", "Secondary Lead", "Team Lead", "Member") and (
                ctx["department"] in ("Development", "Undergoing Processing", "Not In Discord", "BREAK", "INACTIVE")
                if ctx["kind"] not in ("advisory", "exec") else False
            ):
                p["proficiency"] = prof
        gh = e["gh"]
        if gh in ("-", "") or " " in gh:
            gh = re.sub(r"\s*\(I think\)$", "", gh) if "(I think)" in gh else ""
        people.append(dict(name=e["name"], email=e["email"] if is_email(e["email"]) else "",
                           discord="" if e["discord"] in ("-", "NOT IN DISCORD") else e["discord"],
                           github=gh, positions=positions, desired=desired))


ctx = None
block: dict[str, list[str]] = {}
cluster = None
pending_role = False
for r in rows:
    if not r or not any(c.strip() for c in r):
        continue
    label = r[0].strip()
    rest = r[1:]
    if label in BLOCK_LABELS:
        # a new Role row (or a Name row after a complete block) starts a new block
        if label in block and label in ("Role", "Name"):
            flush(block, ctx)
            block = {}
        if label == "Club":
            continue
        block[label] = rest
        continue
    if label.startswith("Availability:"):
        continue
    # section header
    flush(block, ctx)
    block = {}
    h = label
    if h == "ADVISORY BOARD":
        ctx = dict(kind="advisory", status="ACTIVE", sector=None, department=None)
    elif h in ("Internal Operations", "External Operations", "Development Operations"):
        ctx = dict(kind="exec", status="ACTIVE", sector=h, department=None)
    elif h in ("EXECUTIVE BOARD", "MINOR BOARD", "INTERNAL OPERATIONS", "ETERNAL OPERATIONS",
               "DEVELOPMENT OPERATIONS"):
        ctx = None if h == "MINOR BOARD" else ctx
    elif h in DEPARTMENTS:
        sector, dept, team = DEPARTMENTS[h]
        ctx = dict(kind="dept", status="ACTIVE", sector=sector, department=dept, team=team)
    elif h.startswith("DEVELOPMENT TEAMS:"):
        m = re.match(r"DEVELOPMENT TEAMS: (\w+) Cluster \((\w+)\)", h)
        cluster = m[1]
        ctx = None
    elif re.match(r"Te?a?m \w+", h):
        team = re.match(r"Te?a?m (\w+)", h)[1]
        ctx = dict(kind="team", status="ACTIVE", sector="Development Operations",
                   department="Development", team=team, cluster=cluster)
    elif h in PASSIVE:
        dept, status = PASSIVE[h]
        ctx = dict(kind="passive", status=status, sector="Passive Roster", department=dept)
    else:
        warnings.append(f"unknown header {h!r}")
        ctx = None
flush(block, ctx)

# ------------------------------------------------------------------ merge people

members: list[dict] = []
index: dict[str, dict] = {}


def keys_of(p):
    ks = []
    if p["email"]:
        ks.append("e:" + p["email"].lower())
    if p["discord"]:
        ks.append("d:" + p["discord"].lower())
    return ks


for p in people:
    target = next((index[k] for k in keys_of(p) if k in index), None)
    if target is None:
        # fall back to exact name when neither email nor discord is known
        if not keys_of(p):
            target = next((m for m in members if m["name"] == p["name"]), None)
    if target is None:
        target = dict(name=p["name"], emails=[], discord="", github="", positions=[], desired=[])
        members.append(target)
    if len(p["name"]) > len(target["name"]):
        target["name"] = p["name"]
    if p["email"] and p["email"].lower() not in [e.lower() for e in target["emails"]]:
        target["emails"].append(p["email"])
    if p["discord"] and not target["discord"]:
        target["discord"] = p["discord"]
    if p["github"] and not target["github"]:
        target["github"] = p["github"]
    for pos in p["positions"]:
        sig = (pos["role"], pos.get("operationsSector"), pos.get("department"), pos.get("team"))
        if not any((q["role"], q.get("operationsSector"), q.get("department"), q.get("team")) == sig
                   for q in target["positions"]):
            target["positions"].append(pos)
    for d in p["desired"]:
        if d not in target["desired"]:
            target["desired"].append(d)
    for k in keys_of(p):
        index.setdefault(k, target)

members.sort(key=lambda m: m["name"].lower())

# ------------------------------------------------------------------ emit TS


def ts(v, indent=0):
    pad = "  " * indent
    if isinstance(v, dict):
        items = [f"{pad}  {k}: {ts(x, indent + 1)}," for k, x in v.items()]
        return "{\n" + "\n".join(items) + f"\n{pad}}}"
    if isinstance(v, list):
        return "[" + ", ".join(ts(x, indent) for x in v) + "]"
    if isinstance(v, str):
        return json.dumps(v)
    return str(v)


ORDER = ["role", "experienceLevel", "startDate", "operationsSector", "department", "team",
         "cluster", "supervisor", "availability", "proficiency"]

out = [
    'import type { Membership } from "../hr-system-types";',
    "",
    f"// Member data version {VERSION}.",
    "// Generated from the CCC Crew Formations [CREW-R] spreadsheet,",
    '// "Fall 26 Members" sheet, on 2026-09-25.',
    f"// Every position is current: it starts {START_DATE} and carries no endDate.",
    '// Experience level: "A."/"Assoc." prefixes map to Associate; every other',
    "// listing is Intermediate. Roles in parentheses become desiredRoles.",
    "// Supervisor = the Head / Primary Lead / Team Lead listed in the same block.",
    "",
    f'export const MEMBER_DATA_VERSION = "{VERSION}";',
    "",
    "export const memberData: Membership[] = [",
]
for m in members:
    out.append("  {")
    out.append(f"    name: {json.dumps(m['name'])},")
    out.append(f"    emails: {ts(m['emails'])},")
    if m["discord"]:
        out.append(f"    discord: {json.dumps(m['discord'])},")
    if m["github"]:
        out.append(f"    github: {json.dumps(m['github'])},")
    if m["desired"]:
        out.append(f"    desiredRoles: {ts(m['desired'])},")
    out.append("    positionHistory: [")
    for pos in m["positions"]:
        pos = dict(pos)
        pos["startDate"] = None
        out.append("      {")
        for k in ORDER:
            if k not in pos or pos[k] is None and k != "startDate":
                continue
            if k == "startDate":
                out.append(f'        startDate: new Date("{START_DATE}"),')
            elif k == "supervisor":
                out.append(f"        supervisor: [{json.dumps(pos[k][0])}, {json.dumps(pos[k][1])}],")
            elif isinstance(pos[k], dict):
                inner = ", ".join(f"{kk}: {json.dumps(vv)}" for kk, vv in pos[k].items())
                out.append(f"        {k}: {{ {inner} }},")
            else:
                out.append(f"        {k}: {json.dumps(pos[k])},")
        out.append("      },")
    out.append("    ],")
    out.append("  },")
out.append("];")
out.append("")
open(sys.argv[2], "w", encoding="utf-8").write("\n".join(out))

print(f"{len(members)} members, {sum(len(m['positions']) for m in members)} positions")
for w in sorted(set(warnings)):
    print("WARN", w)
