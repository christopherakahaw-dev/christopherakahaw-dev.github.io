// All site content lives here. Edit this file to update the portfolio —
// components only read from it.

export const profile = {
  name: "Htoo Aung Win",
  firstName: "Htoo",
  lastName: "Aung Win",
  initials: "HA",
  role: "Computer Science · NTU Singapore",
  tagline:
    "I build practical tools with web technology — live transit companions on Singapore open data, small React apps, and a Java desktop app in progress.",
  location: "Singapore · Yangon",
  email: "christopher.htoo07@gmail.com",
  github: "https://github.com/christopherakahaw-dev",
  githubHandle: "christopherakahaw-dev",
  about: [
    "I grew up in Taikkyi, a township in northern Yangon, and have been drawn to computers for as long as I can remember. Most of what I know about code I taught myself — first HTML and CSS, then JavaScript and React, then Java.",
    "I care about using technology to solve real problems for real people. Lately that means public transport: helping commuters, wheelchair users and older riders plan journeys with live, honest data.",
    "Now I'm a first-year Computer Science student at Nanyang Technological University. Off the keyboard: reading, chess and guitar.",
  ],
  interests: ["Coding", "Reading", "Chess", "Guitar"],
};

// Page sections, in order. Used by the navigation and section headers.
export const sections = [
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "route", name: "Education" },
  { id: "service", name: "Experience" },
  { id: "contact", name: "Contact" },
];

// Rows on the hero's split-flap departure board.
export const departures = [
  { time: "2012", dest: "TAIKKYI SCHOOL", status: "ARRIVED" },
  { time: "2025", dest: "TOP 8 NATIONWIDE", status: "ARRIVED" },
  { time: "2026", dest: "NTU COMPUTER SCI", status: "BOARDING" },
  { time: "NEXT", dest: "YOUR TEAM?", status: "ON TIME" },
];

export const highlights = [
  { value: "Top 8", label: "nationwide, Myanmar matriculation", detail: "538/600 · 6 distinctions" },
  { value: "#1", label: "in school, final matriculation exam", detail: "D. YEC High School" },
  { value: "7.0", label: "IELTS overall band", detail: "R 7.5 · W 7.5" },
  { value: "AI", label: "Google AI Professional Certificate", detail: "May 2026" },
];

export const projects = [
  {
    title: "Solvik",
    featured: true,
    kicker: "Singapore transit companion",
    summary:
      "Tells you when to leave, warns you before the crowds, and never makes a number up.",
    points: [
      "Live map, multi-mode trip planning and turn-by-turn navigation",
      "Crowd warnings from LTA's 30-minute station forecasts, for the exact time you'd be there",
      "Learns repeated commutes from trips you actually took",
      "Serverless API keeps OneMap and LTA DataMall keys off the client",
    ],
    tags: ["React", "Vite", "Leaflet", "Vercel Functions", "Supabase", "Playwright"],
    live: "https://solvik-companion-app.vercel.app",
    code: "https://github.com/christopherakahaw-dev/solvik_companion_app",
    extra: { label: "Write-up", url: "https://github.com/christopherakahaw-dev/solvik" },
  },
  {
    title: "Planner Maps",
    kicker: "Hackathon · pitch to LTA",
    summary:
      "A step-free journey planner designed around wheelchair users, built entirely on Singapore government open data.",
    tags: ["React", "TypeScript", "Express", "Leaflet", "Expo"],
    code: "https://github.com/christopherakahaw-dev/commuter_companion",
  },
  {
    title: "Senior Transit Companion",
    kicker: "Interactive prototype",
    summary:
      "A working prototype for an older wheelchair user travelling across Toa Payoh — every element of the design made to work.",
    tags: ["JavaScript", "ES Modules", "Vercel"],
    live: "https://nebula-x-omega.vercel.app",
    code: "https://github.com/christopherakahaw-dev/NebulaX",
  },
  {
    title: "Note-Taking Software",
    kicker: "Java capstone",
    status: "In progress",
    summary: "Capstone for the Technortal Java Mastery course: a desktop notes app with persistent storage.",
    tags: ["Java", "JavaFX", "MySQL"],
  },
  {
    title: "Quizzical",
    kicker: "React mini-project",
    summary: "A timed trivia quiz with animated backgrounds and answer checking.",
    tags: ["React", "Vite"],
    live: "https://quizzical-drab.vercel.app",
    code: "https://github.com/christopherakahaw-dev/Quizzical",
  },
];

export const earlierWork = [
  { title: "my-todo", note: "To-do app with login and sidebar", url: "https://github.com/christopherakahaw-dev/my-todo" },
  { title: "van-life", note: "Multi-page React Router site", url: "https://github.com/christopherakahaw-dev/van-life" },
  { title: "programming_fundamentals", note: "HTML, CSS, JS and Python exercises", url: "https://github.com/christopherakahaw-dev/programming_fundamentals" },
];

// Skills shown as keyboard keys. level: "core" (solid key) | "learning" (outlined key)
export const skillGroups = [
  { name: "Web", items: [{ name: "HTML", level: "core" }, { name: "CSS", level: "core" }, { name: "JavaScript", level: "core" }, { name: "React", level: "learning" }] },
  { name: "Java", items: [{ name: "Java", level: "core" }, { name: "OOP", level: "core" }, { name: "JavaFX", level: "learning" }] },
  { name: "Data & Tools", items: [{ name: "Git", level: "core" }, { name: "GitHub", level: "core" }, { name: "MySQL", level: "learning" }, { name: "Vite", level: "learning" }] },
  { name: "Languages", items: [{ name: "Burmese", level: "core", note: "Native" }, { name: "English", level: "core", note: "IELTS 7.0" }, { name: "Chinese", level: "learning", note: "Basic" }] },
];

// Education as a timeline. region groups the entries (Myanmar → online → Singapore).
export const education = [
  { year: "2012", title: "B.E.H.S (Myoma) Taikkyi", place: "Taikkyi, Yangon", region: "mm", points: ["KG to Grade 9", "Middle School Scholarship (2016)", "3rd, Northern Yangon Region Maths Competition"] },
  { year: "2022", title: "N.M.T Private High School", place: "Taikkyi, Yangon", region: "mm", points: ["Grade 10"] },
  { year: "2023", title: "D. YEC Private High School", place: "Hmawbi, Yangon", region: "mm", points: ["1st in school, final matriculation exam", "Whole Burma Top 8 — 538/600, 6 distinctions"], major: true },
  { year: "2025", title: "Java Basics (Coursera)", place: "University of Pennsylvania · online", region: "online", points: ["April 2025"] },
  { year: "2025", title: "IELTS Academic — 7.0", place: "September 2025", region: "online", points: ["L 7.0 · R 7.5 · W 7.5 · S 6.5"] },
  { year: "2025", title: "Java Mastery Course", place: "Technortal Learning Centre", region: "online", points: ["Capstone: JavaFX + MySQL notes app"] },
  { year: "2026", title: "Google AI Professional Certificate", place: "Google · May 2026", region: "online", points: [] },
  { year: "2026", title: "Nanyang Technological University", place: "Singapore", region: "sg", points: ["BSc Computer Science, Year 1"], major: true, interchange: "Moved to Singapore" },
];

export const experience = [
  { role: "Logistics Director", org: "NTU Myanmar Community", date: "Sep 2025 – now" },
  { role: "Volunteer", org: "All People Help Group, Hmawbi", date: "2025", note: "Three months supporting community services" },
  { role: "Class Representative", org: "D. YEC, Grade 12 Section A", date: "2024 – 2025", note: "Led group presentations and school projects" },
  { role: "Guest Speaker", org: "Students' Target High School", date: "Webinars", note: "Grade 12 exam preparation sessions" },
  { role: "Mentor", org: "Local students", date: "Ongoing", note: "Mentoring two students for the matriculation exam" },
  { role: "Participant", org: "American Center Yangon", date: "Weekly", note: "Saturday programmes and activities" },
];
