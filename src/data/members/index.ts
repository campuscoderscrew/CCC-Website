import type { Membership } from "../hr-system-types";

/**
 * Every generated roster in this folder, newest first. A file named like
 * `2026W42.ts` (ISO year + week) is picked up automatically, so adding a week
 * is just running scripts/generate-member-data.py with a new output filename.
 */

interface VersionModule {
  memberData: Membership[];
  MEMBER_DATA_VERSION: string;
}

export interface MemberDataVersion {
  /** e.g. "2026W42" */
  version: string;
  /** Monday the week's positions start on. */
  start: Date;
  /** e.g. "Week 42 · Oct 12, 2026" */
  label: string;
  memberData: Membership[];
}

const modules = import.meta.glob<VersionModule>("./[0-9][0-9][0-9][0-9]W[0-9][0-9].ts", {
  eager: true,
});

/** Monday of an ISO week (week 1 contains Jan 4). */
function isoWeekMonday(year: number, week: number): Date {
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const mondayOfWeek1 = jan4.getTime() - ((jan4.getUTCDay() + 6) % 7) * 86_400_000;
  return new Date(mondayOfWeek1 + (week - 1) * 7 * 86_400_000);
}

export const memberDataVersions: MemberDataVersion[] = Object.values(modules)
  .map(({ memberData, MEMBER_DATA_VERSION }) => {
    const [, year, week] = MEMBER_DATA_VERSION.match(/^(\d{4})W(\d{2})$/) ?? [];
    const start = isoWeekMonday(Number(year), Number(week));
    const date = start.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
    return {
      version: MEMBER_DATA_VERSION,
      start,
      label: `Week ${Number(week)} · ${date}`,
      memberData,
    };
  })
  .sort((a, b) => b.version.localeCompare(a.version));

export const latestMemberData = memberDataVersions[0];
