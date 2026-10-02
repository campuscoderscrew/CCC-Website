import type { Membership } from "../hr-system-types";

// Portfolio links for the org chart, keyed by any of the member's emails
// (lowercase). Clicking a member's box opens their link in a new tab;
// members without one get a plain, unclickable box.
//
// Kept separate from the generated member files so regenerating them from
// the sheet doesn't wipe these.
export const portfolios: Record<string, string> = {
  "ble2005@terpmail.umd.edu": "https://brennenle.com",
};

/** A member's portfolio link: their own `portfolio`, else one from the map above. */
export function portfolioFor(member: Membership): string | undefined {
  return (
    member.portfolio ??
    member.emails.map((e) => portfolios[e.toLowerCase()]).find(Boolean)
  );
}
