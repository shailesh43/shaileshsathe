# How to Replicate the Basic Structure of This Next.js App

This guide will help you set up a minimal Next.js project similar to the structure found in this repository, including installing all dependencies using either `npm` or `pnpm`.

---

## Tech Stack Icons

<div style="width:400px; display: flex; gap: 20px; align-items:center; flex-wrap:wrap; margin-bottom:20px">
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/typescript.svg" alt="TypeScript" style="width: 40px">&nbsp;&nbsp;
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/js.svg" alt="JavaScript" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/python.svg" alt="Python" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/c++.png" alt="C++" style="width: 40px; height:40px;">&nbsp;&nbsp;
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/nodejs.svg" alt="Node.js" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/react.svg" alt="React" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/tailwindcss.svg" alt="Tailwind CSS" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/redux.svg" alt="Redux" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/nextjs2-light.svg" alt="Next.js" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/shadcn_ui.png" alt="shadcn/ui" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/motion.svg" alt="Motion" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" alt="GSAP" style="width: 40px;">&nbsp;&nbsp;
</div>
<div>  
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/bun.svg" alt="Bun" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://www.svgrepo.com/show/303460/redis-logo.svg" alt="Redis" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="PostgreSQL" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/mongodb.svg" alt="MongoDB" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/webpack.png" alt="Webpack" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/git.svg" alt="Git" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://assets.chanhdai.com/images/tech-stack-icons/docker.svg" alt="Docker" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://svgmix.com/uploads/skillicons/29026e-aws-dark.svg" alt="AWS" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://svgmix.com/uploads/skillicons/b72830-gcp-dark.svg" alt="GCP" style="width: 40px;">&nbsp;&nbsp;
    <img src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bash.png" alt="Bash" style="width: 40px;">&nbsp;&nbsp;
</div>

---

## 1. Prerequisites

- **Node.js** (v20 or newer recommended)
- **pnpm** (preferred) or **npm**

Install pnpm globally (if not already):

```sh
npm install -g pnpm
```

---

## 2. Create a New Next.js App

You can use either `pnpm` or `npm` to bootstrap a new Next.js app:

### Using pnpm
```sh
pnpm create next-app@latest my-portfolio-app --typescript
cd my-portfolio-app
```

### Using npm
```sh
npm create next-app@latest my-portfolio-app -- --typescript
cd my-portfolio-app
```

---

## 3. Set Up the Directory Structure

Inside your project folder, create the following structure (mimicking the original):

```
my-portfolio-app/
  portfolio/
    src/
      app/
        (app)/
        (llms)/
        api/
      components/
      config/
      content/
      data/
      features/
      hooks/
      lib/
      registry/
      scripts/
      styles/
      types/
      utils/
    public/
    learn/
```

> **Tip:** You can use `mkdir -p` to create nested folders quickly:
>
> ```sh
> mkdir -p portfolio/src/{app/{(app),(llms),api},components,config,content,data,features,hooks,lib,registry,scripts,styles,types,utils} portfolio/public portfolio/learn
> ```

---

## 4. Add a `package.json` and Install Dependencies

Copy the `package.json` from the original project (or use the dependencies below) and install them:

### Using pnpm
```sh
pnpm install
```

### Using npm
```sh
npm install
```

---

## 5. Example `package.json` Dependencies

Here are the main dependencies (from the original project):

```json
"dependencies": {
  "next": "15.3.5",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "@bprogress/next": "^3.2.12",
  "@hookform/resolvers": "^4.1.0",
  "@ncdai/react-wheel-picker": "^1.0.13",
  "@vercel/analytics": "^1.5.0",
  "@vercel/speed-insights": "^1.2.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "cmdk": "^1.1.1",
  "dayjs": "^1.11.13",
  "fumadocs-core": "^15.5.0",
  "jotai": "^2.12.5",
  "libphonenumber-js": "^1.12.4",
  "lucide-react": "^0.516.0",
  "motion": "^12.18.1",
  "next-mdx-remote": "^5.0.0",
  "next-themes": "^0.4.6",
  "radix-ui": "^1.4.2",
  "react-confetti": "^6.3.0",
  "react-hook-form": "^7.54.2",
  "react-markdown": "^10.1.0",
  "react-use": "^17.6.0",
  "schema-dts": "^1.1.5",
  "shadcn": "2.6.4",
  "sonner": "^2.0.5",
  "swr": "^2.3.3",
  "tailwind-merge": "^3.3.1",
  "vcard-creator": "^0.7.2",
  "zod": "^3.24.2"
},
"devDependencies": {
  "@eslint/eslintrc": "^3.3.0",
  "@tailwindcss/postcss": "^4.1.11",
  "@tailwindcss/typography": "^0.5.16",
  "@types/node": "^20.14.12",
  "@types/react": "19.1.8",
  "@types/react-dom": "19.1.6",
  "eslint": "^9.22.0",
  "eslint-config-next": "15.3.5",
  "eslint-config-prettier": "^10.1.1",
  "eslint-plugin-boundaries": "^5.0.1",
  "eslint-plugin-simple-import-sort": "^12.1.1",
  "gray-matter": "^4.0.3",
  "husky": "^9.1.7",
  "libphonenumber-metadata-generator": "^1.1.0",
  "lint-staged": "^16.0.0",
  "prettier": "^3.5.3",
  "prettier-plugin-tailwindcss": "^0.6.13",
  "puppeteer-core": "^24.10.1",
  "rehype-external-links": "^3.0.0",
  "rehype-pretty-code": "^0.14.0",
  "rehype-slug": "^6.0.0",
  "remark-gfm": "^4.0.1",
  "rimraf": "^6.0.1",
  "shiki": "1.9.1",
  "strip-indent": "^4.0.0",
  "tailwindcss": "^4.1.11",
  "tsx": "^4.19.3",
  "tw-animate-css": "^1.3.4",
  "typescript": "5.7.3",
  "unist-builder": "3.0.0",
  "unist-util-visit": "^5.0.0"
}
```

> **Note:** You can copy the full `package.json` from the original project for exact versions and scripts.

---

## 6. Start the Development Server

### Using pnpm
```sh
pnpm dev
```

### Using npm
```sh
npm run dev
```

---

## 7. Next Steps
- Add your own components, pages, and configuration as needed.
- Refer to the original project for advanced features and structure.

---

**You now have a minimal Next.js app structure ready for development!** 