import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaGlobe,
  FaSearch,
  FaChevronDown,
  FaClipboardList,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/HomePage/Footer";
import singleShark from "@assets/single-shark.png";
import { projectData } from "../data/ProjectData";
import {
  SEMESTERS,
  type ProjectData,
  type ProjectStatus,
  type ProjectTeamAssignment,
  type Semester,
} from "../data/types";

const ALL = "All";

const GITHUB_ORG_URL = "https://github.com/campuscoderscrew";
const DEV_TEAM_LOGS_URL =
  "https://docs.google.com/spreadsheets/d/1U0E0pJvZlwv6fXohMfq_yWEojLph2R_8uT7GP8Mp3ZU/edit?gid=1042117028#gid=1042117028";

/** "Whale" -> "Team Whale"; roles like "Staff Developer" stay as-is. */
const teamLabel = (team: string) =>
  team.startsWith("Staff") ? team : `Team ${team}`;

/** "Summer '25" -> 2025 */
const yearOf = (semester: Semester) => 2000 + parseInt(semester.slice(-2));

const sections: {
  id: string;
  title: string;
  subtitle: string;
  statuses: ProjectStatus[];
}[] = [
  {
    id: "finished",
    title: "Finished",
    subtitle: "Live sites we've shipped and keep maintained.",
    statuses: ["maintenance", "done"],
  },
  {
    id: "in-progress",
    title: "In Progress",
    subtitle: "Sites our teams are building right now.",
    statuses: ["development", "paused"],
  },
  {
    id: "todo",
    title: "To Do",
    subtitle: "Requests in the queue that haven't started development yet.",
    statuses: ["todo"],
  },
];

const statusBadge: Record<
  ProjectStatus,
  { label: (p: ProjectData) => string; className: string } | null
> = {
  maintenance: {
    label: () => "In maintenance",
    className: "bg-emerald-100 text-emerald-800",
  },
  done: {
    label: () => "Complete",
    className: "bg-emerald-100 text-emerald-800",
  },
  development: {
    label: (p) => (p.progress ? `${p.progress} done` : "In development"),
    className: "bg-sky-light text-ocean-dark",
  },
  paused: {
    label: (p) => (p.progress ? `Paused at ${p.progress}` : "Paused"),
    className: "bg-sand-dark text-amber-900",
  },
  todo: null,
};

/** Up to four initials for the image placeholder, skipping "The". */
function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => w.toLowerCase() !== "the" && /^[A-Za-z0-9]/.test(w))
    .slice(0, 4)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function Shark({ className }: { className: string }) {
  return (
    <div
      aria-hidden
      className={`absolute pointer-events-none ${className}`}
      style={{
        WebkitMaskImage: `url(${singleShark})`,
        maskImage: `url(${singleShark})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        backgroundColor: "#1e3362",
      }}
    />
  );
}

function FilterChip({
  label,
  active,
  onClick,
  size = "lg",
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  size?: "lg" | "sm";
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`font-bold cursor-pointer border-none
        transition-colors duration-300 ease-out
        ${size === "lg" ? "w-26 min-[400px]:w-32 py-3 rounded-xl" : "px-4 py-2 rounded-lg text-sm"}
        ${
          active
            ? "bg-white text-[#193463]"
            : "bg-[#193463] text-white hover:bg-white hover:text-[#193463]"
        }`}
    >
      {label}
    </button>
  );
}

function ProjectLinks({ project }: { project: ProjectData }) {
  const links = [
    project.liveUrl && {
      href: project.liveUrl,
      label: `Visit the ${project.name} website`,
      Icon: FaGlobe,
    },
    project.repoUrl && {
      href: project.repoUrl,
      label: `View the ${project.name} source code on GitHub`,
      Icon: FaGithub,
    },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof FaGlobe }[];

  if (links.length === 0) return null;

  return (
    <div className="flex gap-1.5">
      {links.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="w-8 h-8 rounded flex items-center justify-center
            bg-ocean-dark text-white transition-colors duration-300
            hover:bg-ocean-light"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}

/**
 * Full-page screenshot in a square frame. At rest it shows the top of the
 * site; while the card is hovered (or focused) it pans down through the whole
 * page, at a pace scaled to the page's length, then eases back up on leave.
 */
function SiteScreenshot({ project }: { project: ProjectData }) {
  /* screenshot height / width; 1 until the image loads */
  const [ratio, setRatio] = useState(1);
  const scrollSeconds = Math.max(2, (ratio - 1) * 2.5);

  return (
    <div className="aspect-square w-full overflow-hidden rounded bg-[#043e6c]">
      <img
        src={project.screenshot}
        alt={`Screenshot of the ${project.name} website`}
        loading="lazy"
        onLoad={(e) =>
          setRatio(e.currentTarget.naturalHeight / e.currentTarget.naturalWidth)
        }
        style={{ ["--scroll-time" as string]: `${scrollSeconds}s` }}
        className="block size-full object-cover object-top
          transition-[object-position] duration-700 ease-out
          group-hover:object-bottom group-focus-within:object-bottom
          group-hover:ease-in-out group-focus-within:ease-in-out
          group-hover:[transition-duration:var(--scroll-time)]
          group-focus-within:[transition-duration:var(--scroll-time)]
          motion-reduce:transition-none"
      />
    </div>
  );
}

function ProjectCard({
  project,
  assignment,
}: {
  project: ProjectData;
  assignment?: ProjectTeamAssignment;
}) {
  const badge = statusBadge[project.status];

  return (
    <div
      className="group relative bg-white border-2 border-white rounded-lg p-4 w-65
        flex flex-col gap-3
        transition duration-300 ease-out
        hover:z-10 hover:scale-[1.08] hover:shadow-2xl
        focus-within:z-10 focus-within:scale-[1.08] focus-within:shadow-2xl
        motion-reduce:hover:scale-100 motion-reduce:focus-within:scale-100"
    >
      {/* Two-line min height keeps the rows below aligned across cards */}
      <h3
        className="font-bold text-ocean-dark text-lg text-center leading-tight
          min-h-[2.5em] flex items-center justify-center m-0"
      >
        {project.name}
      </h3>

      {project.screenshot ? (
        <SiteScreenshot project={project} />
      ) : project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="aspect-square w-full object-cover rounded"
        />
      ) : (
        <div
          aria-hidden
          className="aspect-square bg-[#043e6c] rounded flex items-center
            justify-center text-5xl font-bold text-sky-dark/60 select-none"
        >
          {initials(project.name)}
        </div>
      )}

      {assignment && (
        <div className="text-sm text-center text-ocean-dark">
          {teamLabel(assignment.team)} - {assignment.semester}
        </div>
      )}

      <div className="mt-auto flex justify-between items-center gap-2 min-h-8">
        {badge && (
          <span
            className={`text-xs font-bold px-2 py-1 rounded ${badge.className}`}
          >
            {badge.label(project)}
          </span>
        )}
        <ProjectLinks project={project} />
      </div>
    </div>
  );
}

function TodoCard({ project }: { project: ProjectData }) {
  return (
    <div
      className="bg-white border-2 border-white rounded-lg p-4 w-65
        flex flex-col gap-2
        transition duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <h3 className="font-bold text-ocean-dark text-lg leading-tight">
        {project.name}
      </h3>
      {project.description && (
        <p className="text-sm text-ocean-dark/80 m-0">{project.description}</p>
      )}
    </div>
  );
}

export default function Projects() {
  const [yearFilter, setYearFilter] = useState(ALL);
  const [teamFilter, setTeamFilter] = useState(ALL);
  const [search, setSearch] = useState("");

  const years = useMemo(
    () =>
      [
        ...new Set(
          projectData.flatMap((p) => p.history.map((h) => yearOf(h.semester)))
        ),
      ].sort((a, b) => b - a),
    []
  );

  const teams = useMemo(
    () =>
      [
        ...new Set(projectData.flatMap((p) => p.history.map((h) => h.team))),
      ].sort(),
    []
  );

  const matchesAssignment = (h: ProjectTeamAssignment) =>
    (yearFilter === ALL || yearOf(h.semester) === Number(yearFilter)) &&
    (teamFilter === ALL || h.team === teamFilter);

  const filterActive = yearFilter !== ALL || teamFilter !== ALL;

  /** Most recent semester matching the active filters (or overall). */
  const shownAssignment = (p: ProjectData) =>
    p.history
      .filter(matchesAssignment)
      .sort(
        (a, b) => SEMESTERS.indexOf(b.semester) - SEMESTERS.indexOf(a.semester)
      )[0];

  const visible = projectData.filter((p) => {
    if (!p.name.toLowerCase().includes(search.trim().toLowerCase()))
      return false;
    if (!filterActive) return true;
    return p.history.some(matchesAssignment);
  });

  const visibleSections = sections
    .map((s) => ({
      ...s,
      projects: visible.filter((p) => s.statuses.includes(p.status)),
    }))
    .filter((s) => s.projects.length > 0);

  return (
    <div className="relative flex flex-col">
      <Navbar />

      {/* Title */}
      <section
        className="bg-white flex flex-col items-center px-4"
        style={{ paddingTop: "calc(3rem + 30px)" }}
      >
        <h1 className="relative z-10 text-3xl font-bold text-ocean-dark pt-8 pb-0 leading-none">
          Projects
        </h1>
        <p className="text-ocean-dark text-center mt-3 mb-0">
          Every project we build is open source.
        </p>
        <p
          className="max-w-xl text-center text-ocean-dark mt-4 mb-0 px-5 py-3
            rounded-xl bg-sky-light/60 border border-sky-light"
        >
          <strong>Built to last.</strong> We're committed to maintaining our
          projects long term, so our clients keep getting value from their
          sites well after launch.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-5">
          {[
            { href: GITHUB_ORG_URL, label: "Our GitHub", Icon: FaGithub },
            {
              href: DEV_TEAM_LOGS_URL,
              label: "Dev team logs",
              Icon: FaClipboardList,
            },
          ].map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold
                no-underline bg-ocean-dark text-white
                transition-colors duration-300 ease-out
                hover:bg-sky-light hover:text-ocean-dark"
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </div>
      </section>

      {/*
       * Top wave divider (SVG, mirror of bottom). The viewBox is cropped to
       * the band where the waves curve (the flat white strip above and the
       * flat dark strip below are cut), and the height is clamped instead of
       * scaling with width, so wide screens don't get a tall empty band.
       */}
      <svg
        className="block w-full h-[clamp(4rem,9vw,8rem)] -mb-px"
        viewBox="0 30 1200 190"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1200" height="250" fill="#044377" />
        <path
          d="M0,170 C300,90 800,250 1200,180 L1200,0 L0,0 Z"
          fill="#065387"
        />
        <path
          d="M0,130 C350,55 750,210 1200,140 L1200,0 L0,0 Z"
          fill="#2d88b5"
        />
        <path d="M0,70 C300,0 800,140 1200,80 L1200,0 L0,0 Z" fill="white" />
      </svg>

      {/* Projects */}
      <section className="relative overflow-hidden bg-[#044377] pt-6 pb-12 px-4">
        <Shark className="left-[calc((100%_-_40rem)/6_+_1.5rem)] top-45 w-20 h-20 rotate-[-60deg]" />
        <Shark className="right-[calc((100%_-_40rem)/6_-_1rem)] top-40 w-40 h-40 rotate-[20deg]" />
        <Shark className="left-[calc((100%_-_40rem)/6_-_0.5rem)] top-[45%] w-28 h-28 rotate-[-150deg]" />
        <Shark className="right-[calc((100%_-_40rem)/6_+_1rem)] top-[65%] w-24 h-24 rotate-[40deg]" />
        <Shark className="left-[calc((100%_-_40rem)/6_-_0.5rem)] bottom-14 w-36 h-36 rotate-[-130deg]" />
        <Shark className="right-[calc((100%_-_40rem)/6_+_0.5rem)] bottom-10 w-28 h-28 rotate-[115deg]" />

        {/* Search bar */}
        <div className="relative z-10 flex justify-center mb-8">
          <div
            className="flex items-center gap-3 w-full max-w-[700px]
              bg-white rounded-full px-5 py-2"
          >
            <button
              className="flex items-center gap-1.5 bg-transparent border-none
                cursor-pointer text-ocean-dark font-medium whitespace-nowrap"
            >
              Project
              <FaChevronDown size={11} />
            </button>
            <div className="w-px h-6 bg-gray-300" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              aria-label="Search projects"
              className="flex-1 min-w-0 bg-transparent border-none outline-none
                text-ocean-dark placeholder:text-gray-400"
            />
            <FaSearch className="text-ocean-dark shrink-0" size={16} />
          </div>
        </div>

        {/* Filters: years and teams are separate, and combine */}
        <div className="relative z-10 flex flex-col items-center gap-5 mb-12 max-w-4xl mx-auto">
          <div
            role="group"
            aria-label="Filter by year"
            className="flex flex-wrap justify-center gap-2 min-[400px]:gap-3"
          >
            {[ALL, ...years.map(String)].map((y) => (
              <FilterChip
                key={y}
                label={y === ALL ? "All years" : y}
                active={yearFilter === y}
                onClick={() => setYearFilter(y)}
              />
            ))}
          </div>

          <div
            role="group"
            aria-label="Filter by team"
            className="flex flex-wrap justify-center gap-2"
          >
            {[ALL, ...teams].map((t) => (
              <FilterChip
                key={t}
                size="sm"
                label={t === ALL ? "All teams" : teamLabel(t)}
                active={teamFilter === t}
                onClick={() => setTeamFilter(t)}
              />
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="relative z-10 flex flex-col gap-16">
          {visibleSections.map((s) => (
            <div key={s.id} id={s.id} className="flex flex-col items-center">
              <h2 className="text-white text-2xl font-bold text-center m-0">
                {s.title}{" "}
                <span className="text-sky-dark/70 font-medium">
                  ({s.projects.length})
                </span>
              </h2>
              <p className="text-sky-light/80 text-center mt-2 mb-8">
                {s.subtitle}
              </p>

              {/* Wraps at three cards (3 x 16.25rem + gaps); partial rows center */}
              <div className="flex flex-wrap justify-center gap-y-12 gap-x-16 max-w-[57rem]">
                {s.projects.map((p) =>
                  s.id === "todo" ? (
                    <TodoCard key={p.name} project={p} />
                  ) : (
                    <ProjectCard
                      key={p.name}
                      project={p}
                      assignment={shownAssignment(p)}
                    />
                  )
                )}
              </div>
            </div>
          ))}

          {visibleSections.length === 0 && (
            <p className="text-white text-center text-lg">
              No projects match those filters.
            </p>
          )}
        </div>
      </section>

      {/* Bottom wave + CTA combined */}
      <div className="bg-sky-light">
        {/* Bottom wave divider (SVG) */}
        <svg
          className="block w-full -mt-px -mb-px"
          viewBox="0 0 1200 250"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1200" height="250" className="fill-sky-light" />
          <path
            d="M0,180 C300,110 700,215 1200,250 L1200,0 L0,0 Z"
            fill="#2d88b5"
          />
          <path
            d="M0,140 C350,65 650,177 1200,215 L1200,0 L0,0 Z"
            fill="#065387"
          />
          <path
            d="M0,80 C300,0 700,120 1200,160 L1200,0 L0,0 Z"
            fill="#044377"
          />
        </svg>

        {/* CTA */}
        <section className="px-4 pt-2 pb-12 flex flex-col items-center gap-6 text-ocean-dark">
          <h2 className="text-2xl font-bold text-center">
            Want to see your project here?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://go.umd.edu/CCC-website-request"
              className="px-6 py-3 bg-ocean-dark text-white font-bold rounded-lg
                no-underline transition-colors duration-300 ease-out
                hover:bg-sand-light hover:text-ocean-dark"
            >
              Request a Website!
            </a>
            <Link
              to="/requests"
              className="px-6 py-3 border-2 border-ocean-dark text-ocean-dark
                font-bold rounded-lg no-underline
                transition-colors duration-300 ease-out
                hover:bg-ocean-dark hover:text-white"
            >
              How requests work
            </Link>
          </div>
        </section>

        {/* Footer */}
        <div className="px-4 pb-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
