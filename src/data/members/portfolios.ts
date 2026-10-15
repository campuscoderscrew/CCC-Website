import type { Membership } from "../hr-system-types";

// Portfolio links for the org chart, keyed by the member's GitHub username
// (lowercase). Not by email or Discord: those are kept out of the public data. Clicking a member's box opens their link in a new tab;
// members without one get a plain, unclickable box.
//
// Kept separate from the generated member files so regenerating them from
// the sheet doesn't wipe these.
export const portfolios: Record<string, string> = {
  brthhule: "https://brennenle.com",
};

/** A member's portfolio link: their own `portfolio`, else one from the map above. */
export function portfolioFor(member: Membership): string | undefined {
  return (
    member.portfolio ??
    (member.github ? portfolios[member.github.toLowerCase()] : undefined)
  );
}
