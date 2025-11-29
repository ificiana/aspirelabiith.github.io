export const FORKING_USERNAME: string | null = "ificiana";

export const SITE_CONFIG = {
  name: "ASPIRE Lab",
  fullName:
    "Autonomous Systems, Perception, Intelligence, Robotics, and Exploration",
  baseUrl: FORKING_USERNAME
    ? `https://${FORKING_USERNAME}.github.io`
    : "https://aspirelabiith.github.io",
  department: "Department of Mechanical and Aerospace Engineering",
  institution: "IIT Hyderabad",
  address: {
    line1: "C-205, MAE Block",
    line2: "Department of Mechanical & Aerospace Engineering",
    line3: "IIT Hyderabad",
    line4: "Kandi, Sangareddy, Telangana - 502284",
  },
} as const;

export const NAV_ITEMS = [
  { title: "Home", url: "/" },
  { title: "People", url: "/people" },
  { title: "Publications", url: "/publications" },
  { title: "Projects", url: "/projects" },
  { title: "Positions", url: "/positions" },
] as const;

export const SOCIAL_LINKS = [
  {
    name: "IIT Hyderabad",
    url: "https://www.iith.ac.in",
    icon: "Home" as const,
  },
  {
    name: "MAE Department",
    url: "https://mae.iith.ac.in",
    icon: "GraduationCap" as const,
  },
  {
    name: "Dr. R Prasanth Kumar",
    url: "https://people.iith.ac.in/rpkumar/",
    icon: "User" as const,
  },
] as const;
