import { TrackedLink } from "@/components/tracked-link";
import { cormorant } from "@/lib/fonts";
import { navigationLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      id="iletisim"
      className="relative -mt-[2.8rem] overflow-hidden scroll-mt-28 pt-[2.8rem] text-[#f6efe5] sm:-mt-[3.4rem] sm:scroll-mt-32 sm:pt-[3.4rem] lg:-mt-[4rem] lg:scroll-mt-36 lg:pt-[4rem]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,181,138,0.14)_0%,rgba(216,181,138,0)_34%)]" />
      <div className="absolute right-[-8%] top-[10%] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(216,181,138,0.12)_0%,rgba(216,181,138,0)_72%)] blur-3xl" />

      <div className="hero-grid relative z-10 mx-auto max-w-[1880px]">
        <div className="hero-main px-1 pb-10 pt-10 sm:px-3 md:px-12 lg:px-14 lg:pb-8 lg:pt-12">
          <div className="border-t border-white/10 pt-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,24rem)] lg:items-end">
              <div className="max-w-[48rem]">
                <div className="flex flex-wrap items-center gap-3 text-[0.7rem] tracking-[0.22em] uppercase sm:text-[0.76rem] sm:tracking-[0.28em]">
                  <span className="h-px w-10 bg-[#b99773]/50" />
                  <span className="text-[#b9a28a]">trimlessled.com</span>
                </div>

                <h2 className="mt-4 text-[1.8rem] leading-[0.98] font-light tracking-tight text-[#f6efe5] sm:text-[2.8rem] lg:text-[3.35rem]">
                  Mimaride temiz çizgi,
                  <br />
                  <em
                    className={`${cormorant.className} font-normal italic text-[#d8b58a]`}
                  >
                    daha sakin bir yüzey.
                  </em>
                </h2>

                <p className="mt-5 max-w-[60ch] text-[0.96rem] leading-7 text-[#c5bdb3]">
                  Trimless LED; sıva altı çerçevesiz led profil, gizli ışık
                  sistemleri ve lineer aydınlatma çözümleri için Türkiye
                  geneline hizmet veren bir mimari aydınlatma markasıdır.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <TrackedLink
                  href={siteConfig.whatsAppUrl}
                  eventName="click_whatsapp"
                  eventLabel="footer_whatsapp"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#f6efe5] px-6 py-3.5 text-center text-sm font-semibold text-[#2c2a29] transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  WhatsApp ile Teklif Al
                </TrackedLink>

                <TrackedLink
                  href={siteConfig.phoneHref}
                  eventName="click_phone"
                  eventLabel="footer_phone"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/14 px-6 py-3.5 text-center text-sm font-semibold text-[#f6efe5] transition hover:bg-white/10 sm:w-auto"
                >
                  Telefon: {siteConfig.phoneDisplay}
                </TrackedLink>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/14 px-6 py-3.5 text-center text-sm font-semibold text-[#f6efe5] transition hover:bg-white/10 sm:w-auto"
                >
                  <span className="break-all">E-posta: {siteConfig.email}</span>
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.74rem] uppercase tracking-[0.12em]">
              <span className="text-[#b9a28a]">Türkiye Geneli Hızlı Teslimat</span>
              <span className="h-px w-6 bg-white/14" />
              <span className="text-[#b9a28a]">
                Mimari Projeler İçin Özel İskonto
              </span>
            </div>

            <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="flex flex-wrap gap-4 text-sm text-[#b9b1a7]">
                {navigationLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <p className="max-w-[44rem] text-[0.82rem] leading-6 text-[#958d84] lg:text-center">
                Trimless led profili seçiminden uygulama detaylarına kadar,
                konut, ofis ve ticari projeler için hızlı yönlendirme sunuyoruz.
              </p>

              <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[#8f877e] lg:text-right">
                trimlessled.com
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.78rem] text-[#8f877e] lg:flex-row lg:items-center lg:justify-between">
              <p>© 2026 Trimless LED. Tüm hakları saklıdır.</p>
              <p>
                Türkiye Geneli Mimari Aydınlatma Çözümleri • Design by Sertaç
                Kahraman
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
