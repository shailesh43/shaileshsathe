import {
  Geist as FontSans,
} from "next/font/google";
// lib/fonts.ts
import localFont from "next/font/local";

export const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = localFont({
  src: "../assets/fonts/LoraSerif.ttf",
  variable: "--font-serif",
  display: "swap",
});

export const fontMono = localFont({
  src: "../assets/fonts/GoogleSansCode.ttf",
  variable: "--font-mono",
  display: "swap",
});

