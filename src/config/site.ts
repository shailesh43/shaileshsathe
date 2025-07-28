import { USER } from "@/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://shaileshsathe.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Blogs",
    href: "/blog",
  },
];

export const SOURCE_CODE_GITHUB_URL = "https://github.com/shailesh43/shaileshsathe";

export const UTM_PARAMS = {
  utm_source: "chanhdai.com",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
