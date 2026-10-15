import type { Membership } from "../hr-system-types";

// Member data version 2026W42.
// Generated from the CCC Crew Formations [CREW-R] spreadsheet,
// "Fall 26 Members" sheet, on 2026-10-15.
// Every position is current: it starts 2026-10-12 and carries no endDate.
// Experience level: "A."/"Assoc." prefixes map to Associate; every other
// listing is Intermediate. Roles in parentheses become desiredRoles.
// Supervisor = the Head / Primary Lead / Team Lead listed in the same block,
// by name only. Emails and Discord handles are not published.

export const MEMBER_DATA_VERSION = "2026W42";

export const memberData: Membership[] = [
  {
    name: "Aadit S.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 1, totalSum: 8 },
      },
    ],
  },
  {
    name: "Aarav G.",
    positionHistory: [
      {
        role: "Product Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Product",
        supervisor: ["Nura I."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Aaron S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Aashvith J.",
    github: "Aashvith",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Cookiecutter",
        cluster: "Bering",
        supervisor: ["Guillaume N. K."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 1, backEnd: 1, design: 1, versionControl: 1, devOps: 1, totalSum: 5 },
      },
    ],
  },
  {
    name: "Abhinav A.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 6, max: 10, status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Abhinav G.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 1, max: 5, status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Abhiram K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Faith C."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
      },
    ],
  },
  {
    name: "Abhiram K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Abigail C.",
    github: "abigailyc",
    positionHistory: [
      {
        role: "Secondary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Silky",
        cluster: "Bering",
        supervisor: ["Rishi S."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 1, versionControl: 2, devOps: 1, totalSum: 7 },
      },
    ],
  },
  {
    name: "Ada Z.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Aditya B.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Faith C."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 1, versionControl: 2, totalSum: 6 },
      },
    ],
  },
  {
    name: "Adnan K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Adrian Q.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Adrianna B.",
    positionHistory: [
      {
        role: "Product Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 6, max: 10, status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Advay M.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Afrah S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Aidan P.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Ajay C.",
    github: "actsknn",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, totalSum: 7 },
      },
    ],
  },
  {
    name: "Akash E.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 1, totalSum: 6 },
      },
    ],
  },
  {
    name: "Akshay K.M.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 1, backEnd: 1, design: 1, versionControl: 2, totalSum: 5 },
      },
    ],
  },
  {
    name: "Alan Joshua S.",
    github: "alanjegan",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Zebra",
        cluster: "Bering",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 1, versionControl: 3, devOps: 1, totalSum: 10 },
      },
    ],
  },
  {
    name: "Alan W.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Angel",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 2, devOps: "X", totalSum: 8 },
      },
    ],
  },
  {
    name: "Alec Z.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Faith C."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
      },
    ],
  },
  {
    name: "Aleksandar A.",
    github: "aleksandarangelov06",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Hammerhead",
        cluster: "Caribbean",
        supervisor: ["Raghav S."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 3, versionControl: 2, devOps: "X", totalSum: 9 },
      },
    ],
  },
  {
    name: "Alex K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 4, design: 1, versionControl: 4, totalSum: 12 },
      },
    ],
  },
  {
    name: "Alex O.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 6, max: 10, status: "UNKNOWN" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 1, versionControl: 2, devOps: "X" },
      },
    ],
  },
  {
    name: "Alexander S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Alexander T.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Ali H.",
    github: "alihamza21117-cyber",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Cookiecutter",
        cluster: "Bering",
        supervisor: ["Guillaume N. K."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 2, devOps: 2, totalSum: 10 },
      },
    ],
  },
  {
    name: "Allen S.",
    positionHistory: [
      {
        role: "Accountant",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Finance",
        team: "Accounting",
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Allison L.",
    github: "alli7596",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 3, versionControl: 2, totalSum: 10 },
      },
    ],
  },
  {
    name: "Amanda T.",
    github: "amytxc",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 3 },
      },
    ],
  },
  {
    name: "Amanee J.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Amber L.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        supervisor: ["Khaymar M."],
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Ami A.G.",
    github: "aami11",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Sydney L."],
        availability: { kind: "range", min: 1, max: 5, status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 1, versionControl: 2, totalSum: 6 },
      },
    ],
  },
  {
    name: "Ananya D.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        supervisor: ["Khaymar M."],
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Andrea I.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Andrew G.",
    github: "Andrewg314",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "range", min: 11, max: 15, status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 3, devOps: "X", totalSum: 9 },
      },
    ],
  },
  {
    name: "Andrew Y.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Hammerhead",
        cluster: "Caribbean",
        supervisor: ["Raghav S."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, devOps: "X", totalSum: 7 },
      },
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Andy X.",
    github: "andy.xu",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, totalSum: 7 },
      },
    ],
  },
  {
    name: "Anica D.",
    github: "anica19999",
    desiredRoles: ["Secondary Lead"],
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Cookiecutter",
        cluster: "Bering",
        supervisor: ["Guillaume N. K."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 1, devOps: 1, totalSum: 7 },
      },
    ],
  },
  {
    name: "Anika Ryah A.",
    github: "aaracan",
    positionHistory: [
      {
        role: "Secondary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 4, design: 4, versionControl: 2 },
      },
    ],
  },
  {
    name: "Anna L.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Ansh K.",
    github: "Keshaans000",
    positionHistory: [
      {
        role: "Secondary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Cookiecutter",
        cluster: "Bering",
        supervisor: ["Guillaume N. K."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 4, backEnd: 2, design: 4, versionControl: 4, devOps: 2, totalSum: 16 },
      },
    ],
  },
  {
    name: "Anthony B.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Anthony C.",
    github: "achan112233",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 3, versionControl: 3 },
      },
    ],
  },
  {
    name: "Anushka A.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Anvita K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 1, max: 5, status: "UNKNOWN" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 1, versionControl: 1 },
      },
    ],
  },
  {
    name: "Anvitha R.",
    github: "anvite1107",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "April S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        supervisor: ["Khaymar M."],
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Archita N.",
    positionHistory: [
      {
        role: "Advisor",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 4, versionControl: 3 },
      },
    ],
  },
  {
    name: "Ariella H.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Arik H.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Arman I.",
    github: "DarkHawkx",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 2, totalSum: 8 },
      },
    ],
  },
  {
    name: "Arnav D.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Arslan H.",
    github: "ahashmi15",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 3 },
      },
    ],
  },
  {
    name: "Ashim T.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Averie A.",
    positionHistory: [
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Shortfin",
        cluster: "Caribbean",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 3, versionControl: 3, devOps: "X", totalSum: 10 },
      },
    ],
  },
  {
    name: "Ayushi M.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Bao N.",
    github: "didgeridoo1",
    positionHistory: [
      {
        role: "Secondary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Shortfin",
        cluster: "Caribbean",
        supervisor: ["Averie A."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 3, design: 2, versionControl: 4, devOps: 4, totalSum: 15 },
      },
    ],
  },
  {
    name: "Benjamin T.",
    github: "bthomas279",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Jasir S."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 4, design: 1, versionControl: 4, totalSum: 12 },
      },
    ],
  },
  {
    name: "Bhavesh M.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Boubacar D.",
    github: "b0uu",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Blue",
        cluster: "Caribbean",
        supervisor: ["Franco M"],
        availability: { kind: "range", min: 11, max: 15, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 2, devOps: 1, totalSum: 10 },
      },
    ],
  },
  {
    name: "Brandon B.",
    github: "Bran170",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Nurse",
        cluster: "Bering",
        supervisor: ["Francis A."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, devOps: 1, totalSum: 8 },
      },
    ],
  },
  {
    name: "Brennen L.",
    github: "brthhule",
    positionHistory: [
      {
        role: "President",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Head",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Analytics",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Assistant",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Resource Management",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Head",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Human Resources",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Assistant",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Finance",
        supervisor: ["Krishna D."],
        availability: { kind: "range", min: 5, max: 10, status: "ACTIVE" },
      },
      {
        role: "Head",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "External Operations",
        department: "Events",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Assistant",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "External Operations",
        department: "Marketing",
        supervisor: ["Krishna D."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "External Operations",
        department: "Marketing",
        team: "Recruitment",
        availability: { kind: "range", min: 16, max: 20, status: "ACTIVE" },
      },
      {
        role: "Assistant",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Product",
        supervisor: ["Nura I."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Staff Developer",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        supervisor: ["Franco M."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Angel",
        cluster: "Caribbean",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 3, versionControl: 3, totalSum: 12 },
      },
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Whale",
        cluster: "Caribbean",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 3, versionControl: 3, totalSum: 12 },
      },
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Zebra",
        cluster: "Bering",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 3, versionControl: 3, devOps: 1, totalSum: 13 },
      },
      {
        role: "Assistant",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Nurse",
        cluster: "Bering",
        supervisor: ["Francis A."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Brett N.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Bryan G.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 3 },
      },
    ],
  },
  {
    name: "Bryan W.",
    positionHistory: [
      {
        role: "Advisor",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Candela L.",
    github: "candelalespada",
    positionHistory: [
      {
        role: "Product Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Product",
        supervisor: ["Nura I."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Secondary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Hammerhead",
        cluster: "Caribbean",
        supervisor: ["Raghav S."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 4, backEnd: 4, design: 4, versionControl: 3, devOps: 3, totalSum: 18 },
      },
    ],
  },
  {
    name: "Carmi W.",
    positionHistory: [
      {
        role: "Financial Analyst",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Finance",
        team: "Investment",
        availability: { kind: "range", min: 11, max: 15, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Carolina H.",
    github: "caroherrera24",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 4, backEnd: 2, design: 4, versionControl: 3 },
      },
    ],
  },
  {
    name: "Carolyn L.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Cedric Y.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Chetan M.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Ching L.",
    github: "ChingWLam",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 4, design: 2, versionControl: 3, devOps: 1, totalSum: 12 },
      },
    ],
  },
  {
    name: "Chris Y.",
    github: "Quackz12345",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 3, totalSum: 8 },
      },
    ],
  },
  {
    name: "Christina P.",
    positionHistory: [
      {
        role: "Financial Analyst",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Finance",
        team: "Investment",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Christopher H.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 1, backEnd: 2, design: 1, versionControl: 1, totalSum: 5 },
      },
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Christopher S.",
    github: "christophersotropa",
    desiredRoles: ["Secondary Lead"],
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Nurse",
        cluster: "Bering",
        supervisor: ["Francis A."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 2, devOps: 1, totalSum: 9 },
      },
    ],
  },
  {
    name: "Chunlin J.",
    github: "CJ171",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Whale",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 1, versionControl: 3, devOps: 3, totalSum: 12 },
      },
    ],
  },
  {
    name: "Cindy P.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 1, totalSum: 7 },
      },
    ],
  },
  {
    name: "Colin K.",
    github: "colin-kurniawan",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 2, totalSum: 9 },
      },
    ],
  },
  {
    name: "Cyncia C.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 4, backEnd: 2, design: 1, versionControl: 1, totalSum: 8 },
      },
    ],
  },
  {
    name: "Danie G.",
    positionHistory: [
      {
        role: "Advisor",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Quality Assurance",
        supervisor: ["Gisele M."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Daniel P.",
    github: "dpetrov07",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 4, design: 1, versionControl: 3, devOps: "X", totalSum: 11 },
      },
    ],
  },
  {
    name: "Daphne L.",
    github: "daphlee55",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 4, versionControl: 2 },
      },
    ],
  },
  {
    name: "Dawood R.",
    github: "d-rauf-dev",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 1, max: 5, status: "UNKNOWN" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 3, versionControl: 4, totalSum: 12 },
      },
    ],
  },
  {
    name: "Dean T.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Declan N.",
    github: "DeclanNice",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Cookiecutter",
        cluster: "Bering",
        supervisor: ["Guillaume N. K."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 3, design: 2, versionControl: 3, devOps: 1, totalSum: 11 },
      },
      {
        role: "Designer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Cookiecutter",
        cluster: "Bering",
        supervisor: ["Guillaume N. K."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 3, design: 2, versionControl: 3, devOps: 1, totalSum: 11 },
      },
    ],
  },
  {
    name: "Delancey O.",
    github: "delowens05",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 1, max: 5, status: "UNKNOWN" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 3, versionControl: 2, totalSum: 8 },
      },
    ],
  },
  {
    name: "Derek H.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Devarajan P.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        supervisor: ["Khaymar M."],
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Devin D.",
    github: "justDeeevin",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 3, design: 2, versionControl: 4, totalSum: 11 },
      },
    ],
  },
  {
    name: "Dilan K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        supervisor: ["Khaymar M."],
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Dishita M.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 1, backEnd: 1, design: 1, versionControl: 3, totalSum: 6 },
      },
    ],
  },
  {
    name: "Divyansh B.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Sydney L."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
      },
    ],
  },
  {
    name: "Diya B.",
    github: "dbiguvu",
    positionHistory: [
      {
        role: "Secondary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Angel",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 11, max: 15, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 2, devOps: 2, totalSum: 10 },
      },
    ],
  },
  {
    name: "Efrem A.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Eileen J.",
    github: "ejia29",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 1, backEnd: 1, design: 1, versionControl: 1 },
      },
    ],
  },
  {
    name: "Ekansh S.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 3, versionControl: 4, totalSum: 11 },
      },
    ],
  },
  {
    name: "Elianna N.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Elizabeth A.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 3, design: 3, versionControl: 1, totalSum: 9 },
      },
    ],
  },
  {
    name: "Emanuel M.",
    github: "CrispyEsel",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Zebra",
        cluster: "Bering",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 3, devOps: 1, totalSum: 11 },
      },
    ],
  },
  {
    name: "Emily P.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Eric Z.",
    github: "Eric2422",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Shortfin",
        cluster: "Caribbean",
        supervisor: ["Averie A."],
        availability: { kind: "atLeast", min: 20, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 4, devOps: 1, totalSum: 13 },
      },
    ],
  },
  {
    name: "Eric Z.",
    github: "foggylake73",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Hammerhead",
        cluster: "Caribbean",
        supervisor: ["Raghav S."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 3, devOps: "X", totalSum: 9 },
      },
    ],
  },
  {
    name: "Erik J.",
    positionHistory: [
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Whale",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 3, versionControl: 3, devOps: "X", totalSum: 11 },
      },
    ],
  },
  {
    name: "Eunice Y.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Hammerhead",
        cluster: "Caribbean",
        supervisor: ["Raghav S."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, devOps: "X", totalSum: 7 },
      },
    ],
  },
  {
    name: "Everton W.",
    github: "hambalon",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Angel",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 2, devOps: 1, totalSum: 9 },
      },
    ],
  },
  {
    name: "Faith C.",
    positionHistory: [
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 1, backEnd: 1, design: 1, versionControl: 2, totalSum: 5 },
      },
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Feifan L.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Fola A.",
    github: "folaadesanya13",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Sydney L."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 3, versionControl: 4, devOps: 1, totalSum: 12 },
      },
    ],
  },
  {
    name: "Francis A.",
    github: "Francis-A67",
    positionHistory: [
      {
        role: "Staff Developer",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        supervisor: ["Franco M."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Assistant",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Whale",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Nurse",
        cluster: "Bering",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 4, devOps: 2, totalSum: 14 },
      },
    ],
  },
  {
    name: "Franco M.",
    positionHistory: [
      {
        role: "Head",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Blue",
        cluster: "Caribbean",
        availability: { kind: "range", min: 0, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 3, versionControl: 3, totalSum: 12 },
      },
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Gabe A.-T.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Gavin S.",
    github: "gavinks25",
    positionHistory: [
      {
        role: "Secondary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Nurse",
        cluster: "Bering",
        supervisor: ["Francis A."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 1, versionControl: 3, devOps: 2, totalSum: 11 },
      },
    ],
  },
  {
    name: "Gianna O.",
    github: "vitaminwater26",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Blue",
        cluster: "Caribbean",
        supervisor: ["Franco M"],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 1, backEnd: 1, design: 1, versionControl: 1, devOps: 1, totalSum: 5 },
      },
    ],
  },
  {
    name: "Gisele M.",
    positionHistory: [
      {
        role: "Head",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Quality Assurance",
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Grace L.",
    github: "gmin101",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 1, versionControl: 1, totalSum: 5 },
      },
    ],
  },
  {
    name: "Grace M.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 3, versionControl: 2 },
      },
    ],
  },
  {
    name: "Guillaume N. K.",
    positionHistory: [
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Cookiecutter",
        cluster: "Bering",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 4, backEnd: 2, design: 1, versionControl: 2, devOps: "X", totalSum: 9 },
      },
    ],
  },
  {
    name: "Hannah S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Hans G.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Jasir S."],
        availability: { kind: "range", min: 1, max: 5, status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 3, versionControl: 1, totalSum: 7 },
      },
    ],
  },
  {
    name: "Hansika Y.",
    github: "hansi8y",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Zebra",
        cluster: "Bering",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 1, versionControl: 4, devOps: 1, totalSum: 9 },
      },
      {
        role: "Designer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Zebra",
        cluster: "Bering",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 1, versionControl: 4, devOps: 1, totalSum: 9 },
      },
    ],
  },
  {
    name: "Harini N.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Harini T.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Harrison J.",
    github: "TheBigBean-Cyber",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Leopard",
        cluster: "Caribbean",
        supervisor: ["Krish P."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, devOps: 1, totalSum: 8 },
      },
    ],
  },
  {
    name: "Harsh D.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Hayat K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
      },
    ],
  },
  {
    name: "Heath C.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Helena T.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        supervisor: ["Khaymar M."],
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Hellen O.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Hengyu T.",
    github: "htao1-max",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Angel",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 4, devOps: 2, totalSum: 12 },
      },
    ],
  },
  {
    name: "Henry G.",
    positionHistory: [
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Faith C."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
      },
    ],
  },
  {
    name: "Hernan G.",
    github: "gonzaher3",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Shortfin",
        cluster: "Caribbean",
        supervisor: ["Averie A."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, devOps: 1, totalSum: 8 },
      },
    ],
  },
  {
    name: "Ian P.",
    github: "IanP07",
    positionHistory: [
      {
        role: "Secondary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "range", min: 1, max: 5, status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 3, design: 3, versionControl: 4, totalSum: 12 },
      },
    ],
  },
  {
    name: "Immama K.",
    github: "ikhan125",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Cookiecutter",
        cluster: "Bering",
        supervisor: ["Guillaume N. K."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 1, backEnd: 1, design: 1, versionControl: 1, devOps: 1, totalSum: 5 },
      },
    ],
  },
  {
    name: "Indira S.",
    github: "ishafii00",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 4, versionControl: 3, totalSum: 12 },
      },
    ],
  },
  {
    name: "Jackson B.",
    github: "JacksonBennett05",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 3 },
      },
    ],
  },
  {
    name: "Jacob K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Jadon T.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 1, versionControl: 1, totalSum: 5 },
      },
    ],
  },
  {
    name: "Jake J.",
    github: "jakeski2015",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 1, backEnd: 1, design: 1, versionControl: 4, totalSum: 7 },
      },
    ],
  },
  {
    name: "Jakob R.",
    github: "Promeum",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2 },
      },
    ],
  },
  {
    name: "James Z.",
    github: "jameszhou-dev",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
        proficiency: { frontEnd: 4, backEnd: 4, design: 2, versionControl: 4, totalSum: 14 },
      },
    ],
  },
  {
    name: "Jamie Z.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Jamila N.",
    github: "Jchare",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2 },
      },
    ],
  },
  {
    name: "Jana A.",
    github: "jana1454",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Shortfin",
        cluster: "Caribbean",
        supervisor: ["Averie A."],
        availability: { kind: "range", min: 11, max: 15, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 4, devOps: 1, totalSum: 12 },
      },
    ],
  },
  {
    name: "Jared D.",
    github: "methodlackingman",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 3, design: 1, versionControl: 2, devOps: 2, totalSum: 10 },
      },
    ],
  },
  {
    name: "Jared K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Jasir S.",
    github: "Jasir-Siddiqui",
    positionHistory: [
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "range", min: 1, max: 5, status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 4, design: 2, versionControl: 4, devOps: 3, totalSum: 16 },
      },
    ],
  },
  {
    name: "Jasmine N.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2 },
      },
    ],
  },
  {
    name: "Jason D.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Jason O.",
    positionHistory: [
      {
        role: "Advisor",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Jason S.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "range", min: 1, max: 5, status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 1, versionControl: 1, devOps: "X", totalSum: 5 },
      },
    ],
  },
  {
    name: "Jasper T.L.",
    github: "JasperThorneLyman",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 4, design: 2, versionControl: 4, totalSum: 13 },
      },
    ],
  },
  {
    name: "Javier. L.-C.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Jay G.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Jayden L.",
    github: "jlee4639",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Silky",
        cluster: "Bering",
        supervisor: ["Rishi S."],
        availability: { kind: "range", min: 11, max: 15, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 2, devOps: 1, totalSum: 11 },
      },
    ],
  },
  {
    name: "Jennifer (Jenny) D.",
    github: "jng7937",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Whale",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 2, totalSum: 9 },
      },
    ],
  },
  {
    name: "Jenny L.",
    positionHistory: [
      {
        role: "Advisor",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Jiayi Q.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Faith C."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 3, totalSum: 10 },
      },
    ],
  },
  {
    name: "Jimmy Z.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 4, backEnd: 3, design: 4, versionControl: 3 },
      },
    ],
  },
  {
    name: "John V.",
    github: "johnnvalencia",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 3, totalSum: 10 },
      },
    ],
  },
  {
    name: "Joshua W.",
    github: "wongjoshua2005",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, totalSum: 7 },
      },
    ],
  },
  {
    name: "Justin H.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Justin M.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 6, max: 10, status: "UNKNOWN" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 3 },
      },
    ],
  },
  {
    name: "Kaelyn F.",
    github: "kaelynf-commits",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Shortfin",
        cluster: "Caribbean",
        supervisor: ["Averie A."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 1, backEnd: 2, design: 1, versionControl: 2, devOps: "X", totalSum: 6 },
      },
    ],
  },
  {
    name: "Kaliza M.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, devOps: "X", totalSum: 7 },
      },
    ],
  },
  {
    name: "Kamdi N.",
    github: "kjnwakibu",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 6, max: 10, status: "UNKNOWN" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 3 },
      },
    ],
  },
  {
    name: "Kamya M.",
    github: "Kdm2633",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "External Operations",
        department: "Marketing",
        team: "Graphic Design",
        supervisor: ["Myura N."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 4, design: 4, versionControl: 4, totalSum: 15 },
      },
    ],
  },
  {
    name: "Kashi A.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Kashish P.",
    github: "kashishp695",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Faith C."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 4, totalSum: 12 },
      },
    ],
  },
  {
    name: "Katherine H.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Kathryn M.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Kelly B.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Shortfin",
        cluster: "Caribbean",
        supervisor: ["Averie A."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 1, devOps: "X", totalSum: 6 },
      },
    ],
  },
  {
    name: "Kevin P.C.",
    github: "kpuentec",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Sydney L."],
        availability: { kind: "range", min: 1, max: 5, status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 1, versionControl: 3, totalSum: 9 },
      },
    ],
  },
  {
    name: "Kevin Z.",
    github: "KevinZhang2135",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Whale",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 3, versionControl: 3, totalSum: 12 },
      },
    ],
  },
  {
    name: "Khasan Y.",
    github: "khasan-coding",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Silky",
        cluster: "Bering",
        supervisor: ["Rishi S."],
        availability: { kind: "range", min: 11, max: 15, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 3, devOps: 2, totalSum: 12 },
      },
    ],
  },
  {
    name: "Khawaja A. K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Khaymar M.",
    positionHistory: [
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Kidus E.",
    github: "KidusEsa",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, totalSum: 7 },
      },
    ],
  },
  {
    name: "Killian A.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Krish P.",
    github: "ChrisBlitz",
    positionHistory: [
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Leopard",
        cluster: "Caribbean",
        availability: { kind: "atLeast", min: 20, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 3, versionControl: 3, devOps: 3, totalSum: 15 },
      },
    ],
  },
  {
    name: "Krishna D.",
    positionHistory: [
      {
        role: "Head",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Finance",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Head",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "External Operations",
        department: "Marketing",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Lahari C.",
    positionHistory: [
      {
        role: "Product Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Product",
        supervisor: ["Nura I."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Lakshmi K.",
    github: "LakshmiK-cloud",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 4, versionControl: 2, totalSum: 10 },
      },
    ],
  },
  {
    name: "Layan A.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Laynce L.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Leo C.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Lexie L.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Leyan",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Lillianne D.",
    github: "lilliannedavis",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 3, versionControl: 3 },
      },
    ],
  },
  {
    name: "Luis C.",
    github: "lc-newb",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Angel",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 1, totalSum: 6 },
      },
    ],
  },
  {
    name: "Luis M.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Lydia P.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Lynn H.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 3, versionControl: 3, totalSum: 10 },
      },
    ],
  },
  {
    name: "Mahita K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Mako",
        cluster: "Bering",
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Manan R.",
    github: "mraj05",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Whale",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 3, devOps: "X", totalSum: 8 },
      },
    ],
  },
  {
    name: "Mann P.",
    positionHistory: [
      {
        role: "Financial Analyst",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Finance",
        team: "Investment",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Manvi S.",
    positionHistory: [
      {
        role: "Product Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Product",
        supervisor: ["Nura I."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Manya G.",
    github: "manyagarg23",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 4, backEnd: 4, design: 3, versionControl: 4 },
      },
    ],
  },
  {
    name: "Mark J.",
    github: "snowymark",
    positionHistory: [
      {
        role: "Resource Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Resource Management",
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Blue",
        cluster: "Caribbean",
        supervisor: ["Franco M"],
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 1, backEnd: 1, design: 2, versionControl: 1, devOps: 1, totalSum: 6 },
      },
    ],
  },
  {
    name: "Mary N.",
    positionHistory: [
      {
        role: "Analyst",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Analytics",
        supervisor: ["Brennen L."],
        availability: { kind: "atLeast", min: 20, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Matthew S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Max I.",
    github: "misenstadt",
    desiredRoles: ["Secondary Lead"],
    positionHistory: [
      {
        role: "Resource Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Resource Management",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Zebra",
        cluster: "Bering",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, devOps: 1, totalSum: 8 },
      },
    ],
  },
  {
    name: "Maya C.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Maya K.",
    github: "mayakonduru",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Whale",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 11, max: 15, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 4, versionControl: 4, devOps: "X", totalSum: 14 },
      },
    ],
  },
  {
    name: "Maya K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Melat A.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Meron A.",
    positionHistory: [
      {
        role: "Advisor",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Michael M.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        supervisor: ["Khaymar M."],
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Michal G.",
    github: "mgiczela",
    desiredRoles: ["Secondary Lead"],
    positionHistory: [
      {
        role: "Designer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Leopard",
        cluster: "Caribbean",
        supervisor: ["Krish P."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 1, devOps: 1, totalSum: 7 },
      },
    ],
  },
  {
    name: "Michelle C.",
    positionHistory: [
      {
        role: "Advisor",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Mika P.",
    github: "mpersaud7",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 3, totalSum: 10 },
      },
    ],
  },
  {
    name: "Monu S.",
    github: "monopneuma",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 11, max: 15, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 2, totalSum: 9 },
      },
    ],
  },
  {
    name: "Munachiso O.",
    github: "fullscreen_",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 1, versionControl: 3, devOps: 1, totalSum: 10 },
      },
    ],
  },
  {
    name: "Mutsawashe (MJ) M.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 3 },
      },
    ],
  },
  {
    name: "Myura N.",
    positionHistory: [
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "External Operations",
        department: "Marketing",
        team: "Graphic Design",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "External Operations",
        department: "Public Relations",
        supervisor: ["Zoey T."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Namai K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Nathaniel D.",
    github: "nsdiggs7",
    positionHistory: [
      {
        role: "Resource Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Resource Management",
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2 },
      },
    ],
  },
  {
    name: "Natheer M.",
    github: "Natheer-Muwonge",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 3, versionControl: 4, totalSum: 13 },
      },
    ],
  },
  {
    name: "Nazia R.V.",
    positionHistory: [
      {
        role: "Secondary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2 },
      },
    ],
  },
  {
    name: "Neha C.",
    github: "nmc18450",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 1, max: 5, status: "UNKNOWN" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 1, versionControl: 2, devOps: 1, totalSum: 7 },
      },
    ],
  },
  {
    name: "Neha J.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Neil N.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 6, max: 10, status: "UNKNOWN" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 1, versionControl: 2 },
      },
    ],
  },
  {
    name: "Nick Y.",
    github: "NickYuannn",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 11, max: 15, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 4, devOps: "X", totalSum: 12 },
      },
    ],
  },
  {
    name: "Nicole I.",
    positionHistory: [
      {
        role: "Product Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Product",
        supervisor: ["Nura I."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Nikhil S. V.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        supervisor: ["Khaymar M."],
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Nimita K.",
    github: "nimitakompally",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 1, totalSum: 6 },
      },
    ],
  },
  {
    name: "Nishant V.",
    github: "nvellanki11",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 1, max: 5, status: "UNKNOWN" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 3 },
      },
    ],
  },
  {
    name: "Noah W.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 6, max: 10, status: "UNKNOWN" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 1 },
      },
    ],
  },
  {
    name: "Nura I.",
    positionHistory: [
      {
        role: "Head",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Product",
        availability: { kind: "range", min: 11, max: 15, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Nyaing K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Omeed Z.",
    github: "omeedz1",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 3, totalSum: 9 },
      },
    ],
  },
  {
    name: "Oscar R.",
    positionHistory: [
      {
        role: "Human Resources Specialist",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Human Resources",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Owen S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Parsa T.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "range", min: 1, max: 5, status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 3, devOps: "X", totalSum: 11 },
      },
    ],
  },
  {
    name: "Pauline S.",
    positionHistory: [
      {
        role: "Financial Analyst",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Finance",
        team: "Investment",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Fundraiser",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Finance",
        team: "Fundraising",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Product Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Product",
        supervisor: ["Nura I."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Peter B.",
    positionHistory: [
      {
        role: "Recruiter",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 16, max: 20, status: "INACTIVE" },
      },
      {
        role: "Product Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 16, max: 20, status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Phoenix T.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Phuocsang T.",
    positionHistory: [
      {
        role: "Financial Analyst",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Finance",
        team: "Investment",
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
      {
        role: "Accountant",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Finance",
        team: "Accounting",
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Pradham R.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Pranav P.",
    github: "pmpatil304",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Sydney L."],
        availability: { kind: "range", min: 6, max: 10, status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 4, devOps: 1, totalSum: 12 },
      },
    ],
  },
  {
    name: "Pranav S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Priyam K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Priyanshu B.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Purnima S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Raghav (Rajo) J.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Hammerhead",
        cluster: "Caribbean",
        supervisor: ["Raghav S."],
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 4, devOps: "X", totalSum: 11 },
      },
    ],
  },
  {
    name: "Raghav K.",
    github: "Raghavkam",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 3, totalSum: 8 },
      },
    ],
  },
  {
    name: "Raghav S.",
    github: "ragjoshi",
    positionHistory: [
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Hammerhead",
        cluster: "Caribbean",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 4, backEnd: 4, design: 3, versionControl: 4, devOps: "X", totalSum: 15 },
      },
    ],
  },
  {
    name: "Raine M.",
    github: "rainegarden",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "lessThan", max: 1, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 3, devOps: 4, totalSum: 13 },
      },
    ],
  },
  {
    name: "Rawlinson P.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Ray Z.",
    positionHistory: [
      {
        role: "Product Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Sydney L."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
      },
    ],
  },
  {
    name: "Rayan E.",
    positionHistory: [
      {
        role: "Advisor",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Rena K.",
    positionHistory: [
      {
        role: "Product Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Product",
        supervisor: ["Nura I."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Rence L.",
    github: "spacehead10",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Leopard",
        cluster: "Caribbean",
        supervisor: ["Krish P."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 1, backEnd: 1, design: 2, versionControl: 2, devOps: 1, totalSum: 7 },
      },
    ],
  },
  {
    name: "Richa G.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Rishabh S.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 3 },
      },
    ],
  },
  {
    name: "Rishi K.",
    github: "TENTHeRtloRtyLUX",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 3, devOps: 1, totalSum: 9 },
      },
    ],
  },
  {
    name: "Rishi R.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Rishi S.",
    github: "rsaravanan23",
    positionHistory: [
      {
        role: "Primary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Silky",
        cluster: "Bering",
        availability: { kind: "range", min: 11, max: 15, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 3, devOps: 2, totalSum: 10 },
      },
    ],
  },
  {
    name: "Ritvik M.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Rona R.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Ronald W.",
    github: "hapredy",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Zebra",
        cluster: "Bering",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 3, versionControl: 3, devOps: 1, totalSum: 11 },
      },
    ],
  },
  {
    name: "Rudrank S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Ryan K.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Saad A.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Sailee V.",
    github: "Sailee",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Sydney L."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 3, totalSum: 8 },
      },
    ],
  },
  {
    name: "Salman F. P.",
    positionHistory: [
      {
        role: "Secondary Lead",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 3, versionControl: 4 },
      },
    ],
  },
  {
    name: "Samuel A.",
    github: "sam-abr",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 3, totalSum: 11 },
      },
    ],
  },
  {
    name: "Samuel M.",
    github: "SammyMerz",
    positionHistory: [
      {
        role: "Designer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Nurse",
        cluster: "Bering",
        supervisor: ["Francis A."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 3, design: 2, versionControl: 4, devOps: 2, totalSum: 13 },
      },
    ],
  },
  {
    name: "Sana G.R.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Faith C."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
      },
    ],
  },
  {
    name: "Sarah D.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 1, totalSum: 6 },
      },
    ],
  },
  {
    name: "Sarina P.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "range", min: 1, max: 5, status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Saurabh G.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 4 },
      },
    ],
  },
  {
    name: "Savar T.",
    github: "SavarToteja",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 2, totalSum: 8 },
      },
    ],
  },
  {
    name: "Sean A.",
    github: "07sakumatey",
    positionHistory: [
      {
        role: "Designer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Silky",
        cluster: "Bering",
        supervisor: ["Rishi S."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, devOps: 1, totalSum: 8 },
      },
    ],
  },
  {
    name: "Selena L.",
    github: "slu12821",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 3, versionControl: 3 },
      },
    ],
  },
  {
    name: "Shahbaz S.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Whale",
        cluster: "Caribbean",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 3, devOps: "X", totalSum: 11 },
      },
    ],
  },
  {
    name: "Shivani N.",
    github: "jadeDiucon",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Sydney L."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 2, totalSum: 9 },
      },
    ],
  },
  {
    name: "Shreeya G.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 4, devOps: "X", totalSum: 11 },
      },
    ],
  },
  {
    name: "Shreyas T.",
    positionHistory: [
      {
        role: "Resource Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Resource Management",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 3, totalSum: 10 },
      },
    ],
  },
  {
    name: "Shriya R.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 3, versionControl: 2, totalSum: 9 },
      },
    ],
  },
  {
    name: "Siddanth V.",
    github: "siddanthvinay",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 1, versionControl: 3, devOps: "X", totalSum: 10 },
      },
    ],
  },
  {
    name: "Sidharth P.",
    positionHistory: [
      {
        role: "Advisor",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Sidharth V.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Sitara C.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 3, design: 1, versionControl: 4, totalSum: 10 },
      },
    ],
  },
  {
    name: "Sneha B.",
    github: "sb1002",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Sydney L."],
        availability: { kind: "range", min: 1, max: 5, status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 3, totalSum: 10 },
      },
    ],
  },
  {
    name: "Sofia S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Sohamm R.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Soma H.",
    github: "pi3ngineergirlx",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Shortfin",
        cluster: "Caribbean",
        supervisor: ["Averie A."],
        availability: { kind: "lessThan", max: 1, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 3, versionControl: 2, totalSum: 10 },
      },
    ],
  },
  {
    name: "Somil G.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Faith C."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 3, devOps: "X", totalSum: 10 },
      },
    ],
  },
  {
    name: "Sonaya D.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Spencer Z.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 3, design: 1, versionControl: 3, totalSum: 9 },
      },
    ],
  },
  {
    name: "Sreenesh A.",
    github: "sreenesh-allu",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 1, backEnd: 1, design: 1, versionControl: 1 },
      },
    ],
  },
  {
    name: "Srihas I.",
    positionHistory: [
      {
        role: "Resource Manager",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Resource Management",
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Member",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "External Operations",
        department: "Events",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Suhrudh C.",
    github: "SuhrudhC",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Leopard",
        cluster: "Caribbean",
        supervisor: ["Krish P."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 3, devOps: 2, totalSum: 13 },
      },
      {
        role: "Designer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Leopard",
        cluster: "Caribbean",
        supervisor: ["Krish P."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 3, devOps: 2, totalSum: 13 },
      },
    ],
  },
  {
    name: "Sulagna (Sula) D.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Suneth R. G.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Surya K.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Hammerhead",
        cluster: "Caribbean",
        supervisor: ["Raghav S."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, totalSum: 7 },
      },
    ],
  },
  {
    name: "Sydney L.",
    positionHistory: [
      {
        role: "Head",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
      },
    ],
  },
  {
    name: "Sydney L.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Tanay S.",
    github: "HandledShoe881",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 1, versionControl: 2, totalSum: 8 },
      },
    ],
  },
  {
    name: "Tanishk M.",
    positionHistory: [
      {
        role: "Advisor",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Tanvi S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Tanya S.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 1 },
      },
    ],
  },
  {
    name: "Tara M.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Thiru",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Thomas S.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Shortfin",
        cluster: "Caribbean",
        supervisor: ["Averie A."],
        availability: { kind: "range", min: 11, max: 15, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 2, versionControl: 3, devOps: 2, totalSum: 13 },
      },
    ],
  },
  {
    name: "Thuy N.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Tyre B.",
    positionHistory: [
      {
        role: "Analyst",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Internal Operations",
        department: "Analytics",
        supervisor: ["Brennen L."],
        availability: { kind: "range", min: 1, max: 5, status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Vedant S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Quality Assurance",
        supervisor: ["Gisele M."],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
      },
      {
        role: "Analyst",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Vibhu S.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Victor S.",
    github: "victorsorkin",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Nurse",
        cluster: "Bering",
        supervisor: ["Francis A."],
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
    ],
  },
  {
    name: "Vikram N.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "atLeast", min: 20, status: "UNKNOWN" },
        proficiency: { frontEnd: 4, backEnd: 4, design: 2, versionControl: 4, devOps: "X", totalSum: 14 },
      },
    ],
  },
  {
    name: "Vishnu G.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 3, versionControl: 2, totalSum: 9 },
      },
    ],
  },
  {
    name: "Wonwoo C.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "hoursUnknown", status: "INACTIVE" },
      },
    ],
  },
  {
    name: "Yaheli A.",
    github: "yaheli-azani",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        supervisor: ["Faith C."],
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 1, design: 2, versionControl: 2 },
      },
    ],
  },
  {
    name: "Yashas J.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 3, design: 3, versionControl: 1, totalSum: 10 },
      },
    ],
  },
  {
    name: "Yashwant P.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "Not In Discord",
        availability: { kind: "hoursUnknown", status: "UNKNOWN" },
      },
    ],
  },
  {
    name: "Yik Hin L.",
    github: "hl709",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Blue",
        cluster: "Caribbean",
        supervisor: ["Franco M"],
        availability: { kind: "range", min: 6, max: 10, status: "ACTIVE" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 2, versionControl: 4, devOps: 1, totalSum: 12 },
      },
    ],
  },
  {
    name: "Yiqun D.",
    github: "Peterdyq",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Development Operations",
        department: "Development",
        team: "Silky",
        cluster: "Bering",
        supervisor: ["Rishi S."],
        availability: { kind: "atLeast", min: 20, status: "ACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 3, devOps: 2, totalSum: 10 },
      },
    ],
  },
  {
    name: "Yuan Y.",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, totalSum: 7 },
      },
    ],
  },
  {
    name: "Yuchen S.",
    github: "WakabaMutsum1",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 11, max: 15, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 1, design: 1, versionControl: 2, devOps: 1, totalSum: 7 },
      },
    ],
  },
  {
    name: "Yutika D.",
    positionHistory: [
      {
        role: "Member",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 1, max: 5, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 2, versionControl: 3, totalSum: 9 },
      },
    ],
  },
  {
    name: "Zachary L.",
    github: "zluersen",
    positionHistory: [
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "INACTIVE",
        availability: { kind: "range", min: 6, max: 10, status: "INACTIVE" },
        proficiency: { frontEnd: 2, backEnd: 2, design: 1, versionControl: 2, totalSum: 7 },
      },
    ],
  },
  {
    name: "Zoey T.",
    positionHistory: [
      {
        role: "Head",
        experienceLevel: "Intermediate",
        startDate: new Date("2026-10-12"),
        operationsSector: "External Operations",
        department: "Public Relations",
        availability: { kind: "hoursUnknown", status: "ACTIVE" },
      },
      {
        role: "Developer",
        experienceLevel: "Associate",
        startDate: new Date("2026-10-12"),
        operationsSector: "Passive Roster",
        department: "BREAK",
        availability: { kind: "hoursUnknown", status: "BREAK" },
        proficiency: { frontEnd: 3, backEnd: 2, design: 4, versionControl: 3 },
      },
    ],
  },
];
