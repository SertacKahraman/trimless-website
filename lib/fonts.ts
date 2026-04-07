import { Cormorant_Garamond, IBM_Plex_Mono, Sora } from "next/font/google";

export const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
});

export const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: "400",
  display: "optional",
  preload: false,
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: "italic",
  display: "optional",
  preload: true,
});
