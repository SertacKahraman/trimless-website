export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string | Date,
      params?: Record<string, string | number | boolean>,
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {},
) {
  if (
    typeof window === "undefined" ||
    !GA_TRACKING_ID ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", eventName, params);
}
