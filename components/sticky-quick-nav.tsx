"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/lib/site";

export function StickyQuickNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 88);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      data-sticky-nav=""
      className={[
        "pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 transition-all duration-500 ease-out sm:top-4 sm:px-6 lg:px-7",
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-4 opacity-0",
      ].join(" ")}
    >
      <div className="pointer-events-auto flex w-full max-w-[1880px] justify-center">
        <div className="relative flex w-full max-w-[1080px] items-center justify-between gap-2 overflow-hidden rounded-[1.4rem] border border-white/45 bg-[linear-gradient(180deg,rgba(247,241,232,0.92)_0%,rgba(247,241,232,0.78)_100%)] px-2.5 py-2 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:gap-3 sm:rounded-[1.65rem] sm:px-4">
          <div className="absolute inset-x-[20%] top-0 h-full bg-[radial-gradient(circle,rgba(185,151,115,0.12)_0%,rgba(185,151,115,0)_68%)]" />

          <div className="relative flex min-w-0 items-center gap-2 sm:gap-3">
            <div className="shrink-0 overflow-hidden rounded-[1rem] border border-white/70 shadow-[0_10px_24px_rgba(84,60,34,0.12)]">
              <Image
                src="/trimless-led-logo-mark-light.svg"
                alt="Trimless LED"
                width={256}
                height={256}
                unoptimized
                className="h-10 w-10 max-w-none sm:h-12 sm:w-12"
              />
            </div>

            <div className="min-w-0">
              <p className="hidden truncate text-[0.74rem] font-semibold tracking-[0.14em] text-slate-900 uppercase min-[360px]:block sm:text-[0.78rem] sm:tracking-[0.16em]">
                trimlessled.com
              </p>
              <p className="hidden text-[0.7rem] text-slate-600/80 sm:block">
                Mimari projeler için hızlı teklif hattı
              </p>
            </div>
          </div>

          <div className="relative hidden items-center gap-3 text-[0.68rem] uppercase tracking-[0.16em] text-slate-700/72 lg:flex">
            <span className="h-px w-8 bg-[#b99773]/55" />
            <span>WhatsApp Destek</span>
            <span className="h-px w-8 bg-[#b99773]/55" />
          </div>

          <TrackedLink
            href={siteConfig.getWhatsAppUrl(
              "Merhaba, projem için trimless led teklifi almak istiyorum.",
            )}
            eventName="click_whatsapp"
            eventLabel="sticky_quick_nav_whatsapp"
            className="relative inline-flex shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#25D366_0%,#1fb558_100%)] px-3 py-2.5 text-[0.73rem] font-semibold text-white shadow-[0_14px_36px_rgba(37,211,102,0.24)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_18px_44px_rgba(37,211,102,0.32)] sm:px-5 sm:text-[0.82rem]"
          >
            <span className="sm:hidden">Teklif Al</span>
            <span className="hidden sm:inline">WhatsApp&apos;tan Teklif Al</span>
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}
