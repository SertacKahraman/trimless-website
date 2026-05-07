import { Cormorant_Garamond, Sora } from "next/font/google";

export const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: "italic",
  display: "optional",
  preload: true,
});
