import driveLinks from "../../drive-links.json";

/*
 * Resources page data. URLs come from drive-links.json (the same file that
 * generates the campuscoderscrew.com/<slug> short links), so a link only ever
 * needs to be changed in one place. Every slug used here must exist there;
 * a missing one fails at build time instead of shipping a dead link.
 *
 * Tags follow "CCC Document Tags" (SENSITIVE, CREW-R, CREW-W, PUBLIC-S,
 * PUBLIC-W, PUBLIC-R). Last checked 2026-10-02: docs that load while signed
 * out are marked "PUBLIC"; everything else is left untagged for now.
 */

export type DocTag =
  | "SENSITIVE"
  | "CREW-R"
  | "CREW-W"
  | "PUBLIC"
  | "PUBLIC-S"
  | "PUBLIC-W"
  | "PUBLIC-R";

export type ResourceKind = "doc" | "sheet" | "folder" | "form";

export interface Resource {
  label: string;
  /** Key in drive-links.json; also the short link path. */
  slug: string;
  kind: ResourceKind;
  tag?: DocTag;
  url: string;
}

export interface ResourceGroup {
  title: string;
  description?: string;
  /** Optional sub-headings inside a group (e.g. one per sector). */
  sections: { heading?: string; items: Resource[] }[];
}

type LinkTree = { [key: string]: string | LinkTree };

function collect(node: LinkTree, out = new Map<string, string>()) {
  for (const [key, value] of Object.entries(node)) {
    if (typeof value === "string") out.set(key, value);
    else collect(value, out);
  }
  return out;
}

const urls = collect(driveLinks as LinkTree);

function r(
  label: string,
  slug: string,
  kind: ResourceKind,
  tag?: DocTag
): Resource {
  const url = urls.get(slug);
  if (!url) throw new Error(`resources.ts: "${slug}" is not in drive-links.json`);
  return { label, slug, kind, tag, url };
}

export const resourceGroups: ResourceGroup[] = [
  {
    title: "Getting Started",
    sections: [
      {
        items: [
          r("Development Onboarding", "development-onboarding", "doc", "PUBLIC"),
          r("CCC General Directory", "drive", "folder"),
        ],
      },
    ],
  },
  {
    title: "Interest Meeting RSVPs",
    sections: [
      {
        items: [
          r("9/22/26 Interest Meeting", "RSVP/9-22-26", "form", "PUBLIC"),
          r("8/20/26 Interest Meeting", "RSVP/8-20-26", "form", "PUBLIC"),
        ],
      },
    ],
  },
  {
    title: "Productivity Logs",
    description: "Weekly logs for each sector, department, and dev team.",
    sections: [
      {
        heading: "Internal Operations",
        items: [
          r("All Internal Ops Logs", "int-ops-logs", "sheet", "PUBLIC"),
          r("Analytics", "analytics-logs", "sheet", "PUBLIC"),
          r("Finance", "finance-logs", "sheet", "PUBLIC"),
          r("Human Resources", "hr-logs", "sheet", "PUBLIC"),
          r("Resource Management", "rm-logs", "sheet", "PUBLIC"),
          r("Executive Board", "eboard-logs", "sheet", "PUBLIC"),
        ],
      },
      {
        heading: "External Operations",
        items: [
          r("All External Ops Logs", "ext-ops-logs", "sheet", "PUBLIC"),
          r("Events", "events-logs", "sheet", "PUBLIC"),
          r("Graphic Design", "gd-logs", "sheet", "PUBLIC"),
          r("Marketing", "marketing-logs", "sheet", "PUBLIC"),
          r("Public Relations", "pr-logs", "sheet", "PUBLIC"),
          r("Recruitment", "recruitment-logs", "sheet", "PUBLIC"),
        ],
      },
      {
        heading: "Development Operations",
        items: [
          r("All Dev Ops Logs", "dev-ops-logs", "sheet", "PUBLIC"),
          r("Development", "dev-logs", "sheet", "PUBLIC"),
          r("Product", "product-logs", "sheet", "PUBLIC"),
          r("Quality Assurance", "qa-logs", "sheet", "PUBLIC"),
        ],
      },
      {
        heading: "Development Teams",
        items: [
          r("Team Angel", "angel-logs", "sheet", "PUBLIC"),
          r("Team Blue", "blue-logs", "sheet", "PUBLIC"),
          r("Team Cookiecutter", "cookiecutter-logs", "sheet", "PUBLIC"),
          r("Team Hammerhead", "hammerhead-logs", "sheet", "PUBLIC"),
          r("Team Lemon", "lemon-logs", "sheet", "PUBLIC"),
          r("Team Leopard", "leopard-logs", "sheet", "PUBLIC"),
          r("Team Shortfin", "shortfin-logs", "sheet", "PUBLIC"),
          r("Team Silky", "silky-logs", "sheet", "PUBLIC"),
          r("Team Tiger", "tiger-logs", "sheet", "PUBLIC"),
          r("Team Whale", "whale-logs", "sheet", "PUBLIC"),
          r("Team Zebra", "zebra-logs", "sheet", "PUBLIC"),
        ],
      },
    ],
  },
  {
    title: "Operations Folders",
    description: "Shared Drive folders. Sign in with your CCC account to open.",
    sections: [
      {
        heading: "Internal Operations",
        items: [
          r("Internal Operations", "int-ops", "folder"),
          r("Analytics", "analytics", "folder"),
          r("Finance", "finance", "folder"),
          r("Human Resources", "hr", "folder"),
          r("Resource Management", "rm", "folder"),
          r("Executive Board", "eboard", "folder"),
        ],
      },
      {
        heading: "External Operations",
        items: [
          r("External Operations", "ext-ops", "folder"),
          r("Events", "events", "folder"),
          r("Marketing", "marketing", "folder"),
          r("Public Relations", "pr", "folder"),
          r("Recruitment", "recruitment", "folder"),
        ],
      },
      {
        heading: "Development Operations",
        items: [
          r("Development Operations", "dev-ops", "folder"),
          r("Development", "development", "folder"),
          r("Product", "product", "folder"),
          r("Quality Assurance", "qa", "folder"),
        ],
      },
    ],
  },
];
