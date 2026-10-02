import type { ProjectData } from "./types";

/*
 * Mirrors the website request queue:
 * https://docs.google.com/spreadsheets/d/1tbR7P5Oog9kwcKzv6onO58jGhsv6u_hCcPNQGSm_e00
 *
 * Status mapping: DONE -> "done", MAINTENANCE -> "maintenance",
 * PROG -> "development", PAUSED -> "paused", NA / blank -> "todo".
 * Dropped requests and requests from individuals are left off the public page.
 */

const repo = (name: string) => `https://github.com/campuscoderscrew/${name}`;

export const projectData: ProjectData[] = [
  // Finished
  {
    name: "Terps Racing",
    description:
      "A bold, modern motorsport site for sponsors, members, and alumni.",
    status: "maintenance",
    history: [
      { semester: "Spring '26", team: "Angel" },
      { semester: "Summer '26", team: "Angel" },
      { semester: "Fall '26", team: "Staff Developer" },
    ],
    liveUrl: "https://racing.umd.edu",
    repoUrl: repo("terps-racing"),
  },
  {
    name: "Campus Coders Crew",
    description: "Our own landing page.",
    status: "maintenance",
    history: [
      { semester: "Summer '25", team: "Whale" },
      { semester: "Summer '26", team: "Whale" },
      { semester: "Fall '26", team: "Staff Developer" },
    ],
    liveUrl: "https://campuscoderscrew.com",
    repoUrl: repo("CCC-Website"),
  },
  {
    name: "Climbing Club",
    status: "maintenance",
    history: [{ semester: "Summer '25", team: "Leopard" }],
    liveUrl: "https://go.umd.edu/ccc-climbing-club",
    repoUrl: repo("umd-club-climbing"),
  },
  {
    name: "HGLO Honors Ambassadors",
    status: "maintenance",
    history: [{ semester: "Summer '25", team: "Lemon" }],
    repoUrl: repo("hglo"),
  },
  {
    name: "STICs",
    status: "maintenance",
    history: [
      { semester: "Fall '25", team: "Whale" },
      { semester: "Spring '26", team: "Whale" },
      { semester: "Summer '26", team: "Whale" },
      { semester: "Fall '26", team: "Staff Developer" },
    ],
  },
  {
    name: "Apex Fund",
    status: "done",
    history: [{ semester: "Fall '25", team: "Nurse" }],
    liveUrl: "https://apex-website-beta.vercel.app",
    repoUrl: repo("apex-website"),
  },
  {
    name: "DataCrawl",
    status: "done",
    history: [{ semester: "Summer '25", team: "Zebra" }],
  },

  // In progress
  {
    name: "Yellow Foundation",
    status: "development",
    progress: "90-100%",
    history: [
      { semester: "Fall '25", team: "Shortfin" },
      { semester: "Spring '26", team: "Whale" },
      { semester: "Summer '26", team: "Whale" },
    ],
  },
  {
    name: "Student Leadership Council",
    status: "development",
    progress: "80-90%",
    history: [
      { semester: "Fall '25", team: "Whale" },
      { semester: "Spring '26", team: "Whale" },
      { semester: "Summer '26", team: "Whale" },
    ],
    repoUrl: repo("student-success-leadership-council"),
  },
  {
    name: "The Visibility Project",
    status: "development",
    progress: "80-90%",
    history: [
      { semester: "Summer '25", team: "Lemon" },
      { semester: "Fall '25", team: "Blue" },
      { semester: "Spring '26", team: "Blue" },
      { semester: "Summer '26", team: "Blue" },
      { semester: "Fall '26", team: "Blue" },
    ],
  },
  {
    name: "Ganji",
    status: "development",
    progress: "60-70%",
    history: [
      { semester: "Summer '25", team: "Tiger" },
      { semester: "Fall '25", team: "Silky" },
      { semester: "Spring '26", team: "Silky" },
      { semester: "Summer '26", team: "Shortfin" },
      { semester: "Fall '26", team: "Shortfin" },
    ],
    repoUrl: repo("ganji"),
  },
  {
    name: "Thai Student Association",
    status: "development",
    history: [
      { semester: "Fall '25", team: "Leopard" },
      { semester: "Spring '26", team: "Leopard" },
      { semester: "Summer '26", team: "Leopard" },
    ],
    liveUrl: "https://campuscoderscrew.github.io/tsa-website/",
    repoUrl: repo("tsa-website"),
  },
  {
    name: "CCC HR System",
    description: "Internal tool for managing member records.",
    status: "development",
    progress: "0-10%",
    history: [{ semester: "Summer '26", team: "Whale" }],
    repoUrl: repo("hr-system"),
  },
  {
    name: "Hong Kong Student Association",
    status: "paused",
    progress: "80-90%",
    history: [
      { semester: "Summer '25", team: "Zebra" },
      { semester: "Fall '25", team: "Zebra" },
      { semester: "Spring '26", team: "Zebra" },
    ],
    repoUrl: repo("HKSA"),
  },
  {
    name: "BridgeUMD",
    status: "paused",
    progress: "70-80%",
    history: [
      { semester: "Summer '25", team: "Cookiecutter" },
      { semester: "Fall '25", team: "Cookiecutter" },
      { semester: "Spring '26", team: "Cookiecutter" },
    ],
    liveUrl: "https://bridge-umd.vercel.app",
    repoUrl: repo("bridge-umd"),
  },
  {
    name: "Global Communities Student Association",
    status: "paused",
    history: [{ semester: "Summer '25", team: "Blue" }],
    repoUrl: repo("global-communities-student-association"),
  },

  // To do
  {
    name: "Tri Alpha First Generation Honor Society",
    description:
      "A site for first-gen students celebrating pride, perseverance, and achievement.",
    status: "todo",
    history: [],
  },
  {
    name: "Ekklesion",
    description:
      "A civic-tech AI research lab working on democratic algorithms.",
    status: "todo",
    history: [],
  },
  {
    name: "Hearts in Action",
    description:
      "A student-led nonprofit providing community service and resources.",
    status: "todo",
    history: [],
  },
  {
    name: "The Blood Pressure Screening Project",
    description:
      "A health initiative promoting cardiovascular wellness through screenings.",
    status: "todo",
    history: [],
  },
  {
    name: "Professional Sales Club",
    description: "Teaches sales techniques and communication strategies.",
    status: "todo",
    history: [],
  },
  {
    name: "Maryland Parliamentary Debate Society",
    description: "A showcase of the club and its tournament record.",
    status: "todo",
    history: [],
  },
  {
    name: "Busily",
    description:
      "A data science club promoting workshops and sponsor collaboration.",
    status: "todo",
    history: [],
  },
  {
    name: "1000 Schools",
    description: "A fundraising club with a service travel component.",
    status: "todo",
    history: [],
  },
  {
    name: "UMD School of Public Health Undergraduate Research Journal",
    description: "An academic publication showcasing undergraduate research.",
    status: "todo",
    history: [],
  },
  {
    name: "Infinite Diablo",
    description: "A student org for Chinese yoyo performances.",
    status: "todo",
    history: [],
  },
  {
    name: "Maryland Club Squash",
    description: "UMD's squash club.",
    status: "todo",
    history: [],
  },
  {
    name: "Streamline",
    status: "todo",
    history: [],
  },
];
