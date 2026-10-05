// All site content lives here. Edit this file to update the portfolio —
// components only read from it.

export const profile = {
  name: "Htoo Aung Win",
  initials: "HA",
  role: "Computer Science @ NTU Singapore",
  tagline:
    "I build practical tools with web technology — from live transit companions on Singapore open data to small React apps — and I'm learning something new every week.",
  location: "Singapore · Yangon, Myanmar",
  email: "christopher.htoo07@gmail.com",
  github: "https://github.com/christopherakahaw-dev",
  about: [
    "I grew up in Taikkyi, a township in northern Yangon, and have been drawn to computers for as long as I can remember. Most of what I know about code I taught myself — first HTML and CSS, then JavaScript and React, then Java.",
    "I care about using technology to solve real problems for real people. My recent projects focus on public transport in Singapore: helping commuters, wheelchair users and older riders plan journeys with live, honest data.",
    "I'm now a first-year Computer Science student at Nanyang Technological University. Away from the keyboard you'll find me reading, playing chess or playing guitar.",
  ],
  interests: ["Coding", "Reading", "Chess", "Guitar"],
};

export const highlights = [
  { value: "Top 8", label: "nationwide, Myanmar matriculation exam", detail: "538 / 600 · 6 distinctions" },
  { value: "1st", label: "in school, final matriculation exam", detail: "D. YEC Private High School" },
  { value: "7.0", label: "IELTS overall band", detail: "Reading 7.5 · Writing 7.5" },
  { value: "Google", label: "AI Professional Certificate", detail: "May 2026" },
];

export const projects = [
  {
    title: "Solvik",
    featured: true,
    summary:
      "A Singapore transit companion that tells you when to leave, warns you before the crowds, and never makes a number up.",
    points: [
      "Live map, multi-mode trip planning and turn-by-turn navigation",
      "Station crowd warnings from LTA's 30-minute forecasts for the exact time you'd be there",
      "Learns repeated commutes from trips you actually took",
      "Serverless API keeps OneMap and LTA DataMall credentials off the client",
    ],
    tags: ["React", "Vite", "Leaflet", "Vercel Functions", "Supabase", "Playwright"],
    live: "https://solvik-companion-app.vercel.app",
    code: "https://github.com/christopherakahaw-dev/solvik_companion_app",
    extra: { label: "Write-up", url: "https://github.com/christopherakahaw-dev/solvik" },
  },
  {
    title: "Planner Maps",
    summary:
      "A hackathon pitch to LTA: a step-free journey planner designed around wheelchair users, built entirely on Singapore government open data.",
    points: [
      "Real address search and live bus arrivals",
      "Express backend proxies LTA DataMall and OneMap",
      "Web build plus an Expo (React Native) version",
    ],
    tags: ["React", "TypeScript", "Express", "Leaflet", "Expo"],
    code: "https://github.com/christopherakahaw-dev/commuter_companion",
  },
  {
    title: "Senior Transit Companion",
    summary:
      "An interactive prototype for an older wheelchair user travelling across Toa Payoh — every element of the original design made to work.",
    points: ["No build step: plain ES modules", "Deployed as a static site on Vercel"],
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://nebula-x-omega.vercel.app",
    code: "https://github.com/christopherakahaw-dev/NebulaX",
  },
  {
    title: "Note-Taking Software",
    status: "In progress",
    summary:
      "My capstone project for the Technortal Java Mastery course: a desktop notes app with persistent storage.",
    points: ["JavaFX desktop interface", "MySQL database for notes"],
    tags: ["Java", "JavaFX", "MySQL"],
  },
  {
    title: "Quizzical",
    summary: "A timed trivia quiz app with animated backgrounds and answer checking.",
    points: [],
    tags: ["React", "Vite"],
    live: "https://quizzical-drab.vercel.app",
    code: "https://github.com/christopherakahaw-dev/Quizzical",
  },
];

export const earlierWork = [
  { title: "my-todo", note: "To-do app with login page and sidebar (React)", url: "https://github.com/christopherakahaw-dev/my-todo" },
  { title: "van-life", note: "Multi-page site with React Router", url: "https://github.com/christopherakahaw-dev/van-life" },
  { title: "programming_fundamentals", note: "Course exercises in HTML, CSS, JS and Python", url: "https://github.com/christopherakahaw-dev/programming_fundamentals" },
];

export const skills = [
  { group: "Web", items: [{ name: "HTML", level: "Confident" }, { name: "CSS", level: "Confident" }, { name: "JavaScript", level: "Confident" }, { name: "React", level: "Learning" }] },
  { group: "Programming", items: [{ name: "Java", level: "Confident" }, { name: "JavaFX", level: "Learning" }] },
  { group: "Data & tools", items: [{ name: "MySQL", level: "Learning" }, { name: "Git & GitHub", level: "Confident" }, { name: "Vite", level: "Learning" }] },
  { group: "Languages", items: [{ name: "Burmese", level: "Native" }, { name: "English", level: "Upper-intermediate" }, { name: "Chinese", level: "Basic" }] },
];

export const education = [
  { title: "Nanyang Technological University", place: "Singapore", date: "Aug 2026 – Present", points: ["BSc Computer Science, Year 1"] },
  { title: "Google AI Professional Certificate", place: "Google", date: "May 2026", points: [] },
  { title: "Java Mastery Course", place: "Technortal Learning Centre", date: "Oct 2025", points: ["Capstone: note-taking software with JavaFX and MySQL"] },
  { title: "IELTS Academic — Overall 7.0", place: "", date: "Sep 2025", points: ["Listening 7.0 · Reading 7.5 · Writing 7.5 · Speaking 6.5"] },
  { title: "Java Basics (Coursera)", place: "University of Pennsylvania", date: "Apr 2025", points: [] },
  {
    title: "D. YEC Private High School",
    place: "Hmawbi Township",
    date: "2023 – 2025",
    points: ["Ranked 1st in school in the final matriculation exam", "Top 8 nationwide in Myanmar — 538/600 with 6 distinctions"],
  },
  { title: "N.M.T Private High School", place: "Taikkyi Township", date: "2022 – 2023", points: ["Grade 10"] },
  {
    title: "B.E.H.S (Myoma) Taikkyi",
    place: "Taikkyi Township",
    date: "2012 – 2022",
    points: ["Middle School Scholarship (2016)", "3rd place, Northern Yangon Region Mathematics Competition (Grade 5)"],
  },
];

export const experience = [
  { role: "Logistics Director", org: "NTU Myanmar Community", date: "Sep 2025 – Present" },
  { role: "Volunteer", org: "All People Help Group, Hmawbi", date: "2025", note: "Three months supporting community services" },
  { role: "Class Representative", org: "D. YEC, Grade 12 Section A", date: "2024 – 2025", note: "Led group presentations and school projects" },
  { role: "Guest Speaker", org: "Students' Target Private High School", date: "", note: "Online webinars for Grade 12 exam preparation" },
  { role: "Mentor", org: "Local students", date: "Ongoing", note: "Mentoring two students preparing for the matriculation exam" },
  { role: "Participant", org: "American Center Yangon", date: "Weekly", note: "Saturday programmes and activities" },
];
