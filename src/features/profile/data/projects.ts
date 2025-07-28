import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "socratic",
    title: "Socratic",
    period: {
      start: "07.2025",
    },
    link: "https://github.com/shailesh43/Socratic",
    skills: [
      "Open Source",
      "React",
      "TypeScript",
      "shadcn/ui",
      "Monorepo",
      "Judge0",
      "GenAI",
      "Postgres",
      "NPM Registry",
      "d3js",
    ],
    description: `Master coding concepts with personalized hints that guide your thinking process, helping you discover solutions independently.
- Interactive Coding Environment with real-time hints/suggestions.
- Multi-language support for C/C++, Java, Python, JavaScript & GoLang
- Large set of questions with range of difficulty (EASY, MEDIUM and HARD)
- Personalized dashboards of user progress & learning areas`,
    logo: "https://github.com/shailesh43/Socratic/blob/main/public/socratic-mono.png?raw=true",
    isExpanded: true,
  },
  {
    id: "pomesh",
    title: "Pomeshh",
    period: {
      start: "01.2025",
    },
    link: "https://pomeshh-v1.vercel.app/",
    skills: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "MDX",
      "Vercel",
      "Mob-X-Tree",
      "Redux",
      "Clerk-Auth",
    ],
    description: `Pomeshh is a minimal and elegant Pomodoro timer built to help you improve focus, manage time effectively, and complete tasks faster. It is currently under development and being built in public.
- Customizable work and break intervals  
- Task management integration  
- Beautiful, distraction-free interface  
- Progress tracking and statistics`,
    logo: "https://icons.veryicon.com/png/o/emoticon/25d-numbers-letters/p-01.png",
    isExpanded: true,
  },
  {
    id: "astrus",
    title: "Astrus",
    period: {
      start: "06.2025",
    },
    link: "https://marketplace.visualstudio.com/items?itemName=shailesh43.astrus",
    skills: [
      "VS code Theme",
      "json-schema",
      "UI/UX",
      "npm",
      "Documentation",
    ],
    description: `Astrus is a sleek & minimal Dark - Multivariant VS code theme for those who code among the constellations.
- Install Astrus directly from the VSCode IDE or Marketplace. 
- Minimalistic design with clean syntactic highlighting.
- Available in three variants (STANDARD, MIDNIGHT, NEBULA).  
- Thoughtfully designed color contrasts make it easier to navigate, understand,`,
    isExpanded: true,
    logo: "https://shailesh43.gallerycdn.vsassets.io/extensions/shailesh43/astrus/0.1.3/1751810867095/Microsoft.VisualStudio.Services.Icons.Default",
  },
];
