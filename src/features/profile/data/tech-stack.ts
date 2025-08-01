import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [

  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
    img: "https://svgmix.com/uploads/skillicons/47cfc0-typescript.svg",
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
    img: "https://svgmix.com/uploads/skillicons/8240b8-javascript.svg",
  },
  {
    key: "cpp",
    title: "CPP",
    href: "https://isocpp.org/",
    categories: ["Language"],
    img: "https://svgmix.com/uploads/d9fc67-c.svg",
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
    img: "https://svgmix.com/uploads/eb1e8c-python.svg",
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
    img: "https://svgmix.com/uploads/file/e05c4d-nodejs.svg",
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
    img: {
      dark:"https://assets.chanhdai.com/images/tech-stack-icons/nextjs2-dark.svg",
      light:"https://assets.chanhdai.com/images/tech-stack-icons/nextjs2-light.svg"
    },
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
    img: "https://svgmix.com/uploads/48cb56-react.svg",
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
    img: "https://assets.chanhdai.com/images/tech-stack-icons/tailwindcss.svg",
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Library", "Animation"],
    img: "https://assets.chanhdai.com/images/tech-stack-icons/motion.svg",
  },
  {
    key: "gsap-greensock",
    title: "GSAP (GreenSock Animation Platform)",
    href: "https://greensock.com/gsap/",
    categories: ["Library", "Animation"],
    img: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
    img: {
      dark:"https://assets.chanhdai.com/images/tech-stack-icons/shadcn-ui-dark.svg",
      light:"https://assets.chanhdai.com/images/tech-stack-icons/shadcn-ui-light.svg"
    },
  },
  {
    key: "radixui",
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    categories: ["Library", "Component Library"],
    theme: true,
    img: {
      dark: "https://assets.chanhdai.com/images/tech-stack-icons/radixui-dark.svg",
      light: "https://assets.chanhdai.com/images/tech-stack-icons/radixui-light.svg"
    },
  },
  {
    key: "mobx-state-tree",
    title: "MobX-State-Tree",
    href: "https://mobx-state-tree.js.org/",
    categories: ["State Management"],
    img: "https://assets.chanhdai.com/images/tech-stack-icons/mobx-state-tree.svg",
  },
  {
    key: "redux",
    title: "Redux",
    href: "https://redux.js.org/",
    categories: ["State Management"],
    img: "https://assets.chanhdai.com/images/tech-stack-icons/redux.svg",
  },
  {
    key: "react-router",
    title: "React Router",
    href: "https://reactrouter.com/",
    categories: ["Library", "Navigation"],
    theme: true,
    img: {
      dark: "https://assets.chanhdai.com/images/tech-stack-icons/react-router-dark.svg",
      light: "https://assets.chanhdai.com/images/tech-stack-icons/react-router-light.svg"
    },
  },
  {
    key: "loopback",
    title: "LoopBack",
    href: "https://loopback.io/",
    categories: ["Framework"],
    img: "https://assets.chanhdai.com/images/tech-stack-icons/loopback.svg",
  },
  {
    key: "bun",
    title: "Bun",
    href: "https://bun.sh/",
    categories: ["Runtime Environment"],
    img: "https://assets.chanhdai.com/images/tech-stack-icons/bun.svg",
  },
  {
    key: "webpack",
    title: "Webpack",
    href: "https://webpack.js.org/",
    categories: ["Build Tool"],
    img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/webpack.png",
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
    img: "https://www.svgrepo.com/show/355133/mysql.svg",
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
    img: "https://assets.chanhdai.com/images/tech-stack-icons/mongodb.svg",
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
    img: "https://www.svgrepo.com/show/303460/redis-logo.svg",
  },
  {
    key: "aws",
    title: "Amazon Web Services (AWS)",
    href: "https://aws.amazon.com/",
    categories: ["Cloud"],
    theme: true,
    img: {
      dark: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-color.png",
      light: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/aws-color.png",
    },
  },
  {
    key: "bash",
    title: "Bash",
    href: "https://www.gnu.org/software/bash/",
    categories: ["Shell"],
    img: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bash.png",
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
    img: "https://assets.chanhdai.com/images/tech-stack-icons/git.svg",
  },
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["Containerization"],
    img: "https://www.svgrepo.com/show/448221/docker.svg",
  },
];
