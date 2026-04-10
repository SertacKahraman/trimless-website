import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { AnalyticsListener } from "@/components/analytics-listener";
import { ibmPlexMono, sora } from "@/lib/fonts";
import { GA_TRACKING_ID } from "@/lib/analytics";
import { siteConfig, siteKeywords } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteKeywords,
  applicationName: siteConfig.name,
  icons: {
    icon: [
      {
        url: "/favicon.ico?v=20260410",
        sizes: "256x256",
        type: "image/x-icon",
      },
      {
        url: "/icon.svg?v=20260410",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico?v=20260410",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  category: "lighting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f3ee",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${sora.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <body className="overflow-x-hidden">
        {children}
        {GA_TRACKING_ID ? <AnalyticsListener /> : null}
      </body>
      {GA_TRACKING_ID ? <GoogleAnalytics gaId={GA_TRACKING_ID} /> : null}
    </html>
  );
}
