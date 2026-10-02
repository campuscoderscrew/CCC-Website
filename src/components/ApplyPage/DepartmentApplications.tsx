import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

import Accordion from "../Accordion";
import { applicationFormData } from "../../data/ApplicationFormData";
import type {
  ApplicationSector,
  DepartmentApplicationData,
} from "../../data/types";

/** The sheet's short sector keys, spelled out for the page. */
const SECTOR_LABELS: Record<ApplicationSector, string> = {
  Development: "Development Operations",
  Internal: "Internal Operations",
  External: "External Operations",
};

/**
 * The one department expanded when the page loads, so visitors land on the
 * department most of them are here for. Every other panel starts closed.
 */
const DEFAULT_OPEN_DEPARTMENT = "Development";

/** Short label for each tab. */
const SECTOR_TABS: Record<ApplicationSector, string> = {
  Development: "Development",
  Internal: "Internal",
  External: "External",
};

/** Shown at the top of each sector's tab. */
const SECTOR_DESCRIPTIONS: Record<ApplicationSector, string> = {
  Development:
    "Development Operations builds the websites and products we ship for our " +
    "clients. Developers and designers work in small teams, each paired with " +
    "a client, while Product Management keeps projects on scope and Quality " +
    "Assurance makes sure everything we ship meets club standards.",
  Internal:
    "Internal Operations keeps the club itself running. Human Resources looks " +
    "after members and onboarding, Analytics tracks how the club is doing, " +
    "Finance handles accounting, fundraising, and investments, and Resource " +
    "Management maintains the documents and tools everyone relies on.",
  External:
    "External Operations connects the club to campus and to the people who " +
    "might join it. Marketing shapes how we look and recruits new members, " +
    "Public Relations manages our relationships with clients and partners, " +
    "and Events plans our meetings, socials, and workshops.",
};

/**
 * Body of one department's accordion panel: where to apply, what the
 * department is working on, and the positions it does and does not have open.
 *
 * Rendered inside the `Accordion` panel, which supplies the white background,
 * so the position lists use tinted surfaces rather than white cards.
 */
function DepartmentPanel(props: { data: DepartmentApplicationData }) {
  const { data } = props;
  const open = data.applicationPositions.filter((p) => !p.closed);
  const closed = data.applicationPositions.filter((p) => p.closed);

  return (
    <div className="pb-2 space-y-6 text-base">
      {/* Links */}
      {/* px-0.5 keeps the outlined button's edge clear of the panel's overflow clip */}
      <div className="flex max-xs:flex-col flex-wrap items-start gap-3 px-0.5">
        <a
          href={data.applicationLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3
            bg-ocean-light rounded-lg text-sand-light font-bold
            transition duration-300
            hover:bg-transparent hover:outline-2 hover:text-ocean-light"
        >
          Apply to {data.department}
          <FaChevronRight aria-hidden className="text-sm" />
        </a>

        <a
          href={data.departmentInitativesLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3
            rounded-lg outline-2 outline-ocean-light/40 font-bold
            text-ocean-light transition duration-300
            hover:outline-ocean-light hover:bg-sky-light/50"
        >
          Department Initiatives
        </a>
      </div>

      {/* Currently accepting */}
      {open.length > 0 && (
        <section className="space-y-3">
          <h5 className="font-semibold">Currently accepting</h5>
          <ul className="space-y-2">
            {open.map((position) => (
              <li
                key={position.position}
                className="px-4 py-3 bg-sky-light/40 rounded-lg"
              >
                <p className="font-semibold">{position.position}</p>
                <p className="text-pretty">{position.positionDescription}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Listed for context, but not open this season */}
      {closed.length > 0 && (
        <section className="space-y-3">
          <h5 className="font-semibold">Not currently accepting</h5>
          <ul className="space-y-2">
            {closed.map((position) => (
              <li
                key={position.position}
                className="px-4 py-3 rounded-lg outline outline-black/10"
              >
                <p className="flex flex-wrap items-center gap-2 font-semibold">
                  <span className="opacity-70">{position.position}</span>
                  <span
                    className="px-2 py-0.5 bg-black/8 rounded-full
                      text-xs font-bold uppercase tracking-wide opacity-70"
                  >
                    Closed
                  </span>
                </p>
                <p className="text-pretty opacity-70">
                  {position.positionDescription}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

/**
 * Every department's application form, grouped by operations sector. Sectors
 * are tabs (like the Members page's sub-navigation); each tab opens with a
 * description of the sector, then an accordion of its departments so only one
 * department is expanded at a time.
 */
export default function DepartmentApplications() {
  const sectors = applicationFormData.applicationSectors;
  const [active, setActive] = useState<ApplicationSector>(
    sectors.some((s) => s.sector === "Development")
      ? "Development"
      : sectors[0].sector
  );
  const current = sectors.find((s) => s.sector === active) ?? sectors[0];

  /* Arrow keys move between tabs, per the WAI-ARIA tabs pattern. */
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const i = sectors.findIndex((s) => s.sector === active);
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = sectors[(i + step + sectors.length) % sectors.length].sector;
    setActive(next);
    document.getElementById(`sector-tab-${next}`)?.focus();
  };

  return (
    <section className="w-full max-w-4xl space-y-8 text-ocean-dark">
      <div className="space-y-2 text-center">
        <h3 className="text-3xl font-bold">Apply by Department</h3>
        <p className="mx-auto max-w-200 text-pretty">
          Each department runs its own application. Pick a sector, then open a
          department to see what it works on and which positions it's hiring
          for. You're welcome to apply to more than one (be wary of applying to
          too many positions; since we accept all applications, some members
          get burnt out by applying to too many departments).
        </p>
      </div>

      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label="Operations sectors"
          onKeyDown={onKeyDown}
          className="inline-flex justify-center gap-1 p-1
            rounded-xl bg-ocean-dark/8 ring-1 ring-ocean-dark/10"
        >
          {sectors.map(({ sector }) => {
            const selected = sector === active;
            return (
              <button
                key={sector}
                id={`sector-tab-${sector}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`sector-panel-${sector}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(sector)}
                className={`px-3.5 sm:px-5 py-2 rounded-lg font-bold cursor-pointer
                  max-[380px]:text-sm
                  border-none transition-colors duration-200
                  ${
                    selected
                      ? "bg-ocean-light text-sand-light shadow"
                      : "bg-transparent text-ocean-dark/75 hover:bg-white/70 hover:text-ocean-dark"
                  }`}
              >
                {SECTOR_TABS[sector]}
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={current.sector}
        id={`sector-panel-${current.sector}`}
        role="tabpanel"
        aria-labelledby={`sector-tab-${current.sector}`}
        className="space-y-6"
      >
        <div
          className="p-5 sm:p-6 space-y-2 rounded-2xl
            bg-white/70 ring-1 ring-ocean-light/15"
        >
          <h4 className="text-2xl font-bold">
            {SECTOR_LABELS[current.sector]}
          </h4>
          <p className="text-pretty">{SECTOR_DESCRIPTIONS[current.sector]}</p>
          <p className="text-sm text-ocean-light">
            {current.departments.length} departments:{" "}
            {current.departments.map((d) => d.department).join(", ")}
          </p>
        </div>

        <Accordion
          /* -1 in every sector that lacks it, which leaves those closed. */
          defaultOpenId={current.departments.findIndex(
            (d) => d.department === DEFAULT_OPEN_DEPARTMENT
          )}
          labels={current.departments.map((d) => d.department)}
          content={current.departments.map((d) => (
            <DepartmentPanel key={d.department} data={d} />
          ))}
        />
      </div>
    </section>
  );
}
