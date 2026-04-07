"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsListener() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest<HTMLAnchorElement>("[data-track-event]");

      if (!link) {
        return;
      }

      const eventName = link.dataset.trackEvent;

      if (!eventName) {
        return;
      }

      trackEvent(eventName, {
        label: link.dataset.trackLabel ?? link.href,
        href: link.href,
      });
    };

    document.addEventListener("click", handleClick, { passive: true });

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
