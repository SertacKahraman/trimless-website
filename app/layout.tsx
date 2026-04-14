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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
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
        url: siteConfig.primaryImageUrl,
        width: siteConfig.primaryImageWidth,
        height: siteConfig.primaryImageHeight,
        alt: siteConfig.primaryImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.primaryImageUrl,
        width: siteConfig.primaryImageWidth,
        height: siteConfig.primaryImageHeight,
        alt: siteConfig.primaryImageAlt,
      },
    ],
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
      <head>
        <link rel="image_src" href={siteConfig.primaryImageUrl} />
      </head>
      <body className="overflow-x-hidden">
        {children}
        {GA_TRACKING_ID ? <AnalyticsListener /> : null}
      </body>
      {GA_TRACKING_ID ? <GoogleAnalytics gaId={GA_TRACKING_ID} /> : null}
    </html>
  );
}
