import type { IconType } from "react-icons";
import {
  FaExternalLinkAlt,
  FaFileAlt,
  FaFolder,
  FaTable,
  FaWpforms,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import MembersTabs from "../components/MembersTabs";
import {
  resourceGroups,
  type DocTag,
  type Resource,
  type ResourceKind,
} from "../data/resources";

const KIND_ICON: Record<ResourceKind, IconType> = {
  doc: FaFileAlt,
  sheet: FaTable,
  folder: FaFolder,
  form: FaWpforms,
};

const TAG_STYLE: Record<DocTag, string> = {
  SENSITIVE: "bg-red-100 text-red-800",
  "CREW-R": "bg-amber-100 text-amber-900",
  "CREW-W": "bg-amber-100 text-amber-900",
  PUBLIC: "bg-emerald-100 text-emerald-800",
  "PUBLIC-S": "bg-emerald-100 text-emerald-800",
  "PUBLIC-W": "bg-emerald-100 text-emerald-800",
  "PUBLIC-R": "bg-emerald-100 text-emerald-800",
};

function ResourceLink({ resource }: { resource: Resource }) {
  const Icon = KIND_ICON[resource.kind];
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 items-center gap-3 rounded-lg bg-white px-3 py-2.5
        text-[hsl(204,98%,15%)] no-underline shadow-sm
        transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
    >
      <Icon className="shrink-0 text-[hsl(204,90%,25%)]" size={16} aria-hidden />
      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold leading-tight">
          {resource.label}
        </span>
        <span className="block truncate text-xs text-[hsl(204,98%,15%)]/55">
          campuscoderscrew.com/{resource.slug}
        </span>
      </span>
      {resource.tag && (
        <span
          className={`shrink-0 rounded px-1.5 py-0.5 text-[11px] font-bold tracking-wide ${TAG_STYLE[resource.tag]}`}
        >
          {resource.tag}
        </span>
      )}
      <FaExternalLinkAlt
        size={11}
        aria-hidden
        className="shrink-0 opacity-0 transition-opacity group-hover:opacity-50"
      />
    </a>
  );
}

export default function Resources() {
  return (
    <>
      <Navbar />

      <main className="min-h-dvh bg-[#193463] px-4 pb-16 pt-[76px] text-white">
        <div className="mx-auto max-w-5xl">
          <header className="flex flex-col items-center gap-3 text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Resources</h1>
            <MembersTabs />
            <p className="m-0 max-w-xl text-sm text-white/70">
              Shortcuts to CCC documents, logs, and folders. Tags show who can
              open a document; untagged links need a CCC account.
            </p>
          </header>

          <div className="mt-10 flex flex-col gap-12">
            {resourceGroups.map((group) => (
              <section key={group.title}>
                <h2 className="m-0 text-xl font-bold">{group.title}</h2>
                {group.description && (
                  <p className="mb-0 mt-1 text-sm text-white/65">
                    {group.description}
                  </p>
                )}

                <div
                  className={`mt-4 grid grid-cols-1 gap-6 ${
                    group.sections.length > 1 ? "md:grid-cols-2" : ""
                  }`}
                >
                  {group.sections.map((section, i) => (
                    <div key={section.heading ?? i} className="min-w-0">
                      {section.heading && (
                        <h3 className="mb-2 mt-0 text-sm font-bold uppercase tracking-wider text-[hsl(190,85%,80%)]">
                          {section.heading}
                        </h3>
                      )}
                      <div
                        className={`grid grid-cols-1 gap-2 ${
                          group.sections.length > 1
                            ? ""
                            : "md:grid-cols-2"
                        }`}
                      >
                        {section.items.map((item) => (
                          <ResourceLink key={item.slug} resource={item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
