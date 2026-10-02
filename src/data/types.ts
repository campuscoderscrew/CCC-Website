export interface MeetingData {
  day: string;
  time: string;
  title: string;
  tags: string[];
  description: string;
  contact: string;
  location: string;
}

export type ApplicationSector = "Internal" | "External" | "Development";

export interface ApplicationSectorApplicationData {
  sector: ApplicationSector;
  departments: DepartmentApplicationData[];
}

export interface ApplicationPosition {
  position: string;
  positionDescription: string;
  closed: boolean;
}

export interface DepartmentApplicationData {
  /** Display name, e.g. "Quality Assurance". */
  department: string;
  applicationLink: string;
  departmentInitativesLink: string;
  applicationPositions: ApplicationPosition[];
}

export interface ApplicationData {
  applicationSectors: ApplicationSectorApplicationData[];
}

/** Where a project sits in the request queue. */
export type ProjectStatus =
  "done" | "maintenance" | "development" | "paused" | "todo";

/** Semesters in chronological order. Add new ones to the end. */
export const SEMESTERS = [
  "Summer '25",
  "Fall '25",
  "Spring '26",
  "Summer '26",
  "Fall '26",
] as const;

export type Semester = (typeof SEMESTERS)[number];

export interface ProjectTeamAssignment {
  semester: Semester;
  /**
   * Dev team name without the "Team" prefix, e.g. "Whale", or a role that
   * owns the project instead of a team, e.g. "Staff Developer".
   */
  team: string;
}

export interface ProjectData {
  name: string;
  description?: string;
  status: ProjectStatus;
  /** Rough completion from the request queue, e.g. "80-90%". */
  progress?: string;
  /** Which team worked on it each semester. Empty for projects not started. */
  history: ProjectTeamAssignment[];
  liveUrl?: string;
  repoUrl?: string;
  /** Screenshot or logo. Falls back to the project's initials. */
  image?: string;
  /**
   * Full-page screenshot of the live site (a tall image, 800px wide). The
   * card shows the top and scrolls through the rest on hover. Takes
   * precedence over `image`. Files live in src/assets/projects/.
   */
  screenshot?: string;
}
