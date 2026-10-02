import type { Membership } from "../hr-system-types";

// Hand-maintained. Faculty aren't on the CCC Crew Formations sheet, so they
// live here instead of in the generated member files, and
// scripts/generate-member-data.py never touches this file.
export const facultyData: Membership[] = [
  {
    name: "Dr. James Purtilo",
    emails: [],
    portfolio: "https://seam.cs.umd.edu/purtilo/",
    positionHistory: [
      {
        role: "Faculty Advisor",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-09-21"),
      },
    ],
  },
];
