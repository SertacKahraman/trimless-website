import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteFooter } from "@/components/site-footer";
import { StickyQuickNav } from "@/components/sticky-quick-nav";
import { TrackedLink } from "@/components/tracked-link";
import { cormorant } from "@/lib/fonts";
import { navigationLinks, siteConfig, siteKeywords } from "@/lib/site";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "tr-TR",
  description: siteConfig.description,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phoneHref,
  areaServed: "TR",
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Trimless Led",
  brand: {
    "@type": "Brand",
    name: siteConfig.name,
  },
  category: "Trimless lineer aydınlatma",
  description: siteConfig.description,
  image: [`${siteConfig.url}/trimless-led-profil-urun-gorseli.webp`],
  url: siteConfig.url,
  keywords: siteKeywords.join(", "),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Trimless LED Profil Satışı",
  serviceType: "Trimless led profil ve sıva altı lineer aydınlatma satışı",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: "TR",
  url: siteConfig.url,
  description:
    "Türkiye geneli trimless led profil, çerçevesiz led profil ve sıva altı lineer aydınlatma çözümleri.",
};

const seoPhoneDisplay = siteConfig.phoneDisplay;
const seoPhoneHref = siteConfig.phoneHref;
const seoEmail = siteConfig.email;

const storyBlocks = [
  {
    id: "hikaye-tasarim",
    eyebrow: "Mimari Çözüm",
    title: "Alçıpanla Bütünleşen Kusursuz Tasarım.",
    description:
      "Geleneksel spotların ve kalın çerçeveli aydınlatmaların yerini alan sıva altı çerçevesiz alüminyum LED profil sistemleri, tavanda ve duvarda kesintisiz bir ışık çizgisi yaratır. Alçıpan yüzeyle tamamen sıfırlanarak uygulanan bu sistem, mekânın mimari bütünlüğünü bozmadan premium bir gizli ışık deneyimi sunar.",
  },
  {
    id: "hikaye-isik",
    eyebrow: "Yüksek Performans",
    title: "Göz Yormayan, Homojen Işık Dağılımı.",
    description:
      "Yüksek soğutma kapasiteli orijinal alüminyum gövde, lineer aydınlatma performansını maksimize eder ve LED ömrünü uzatır. Pürüzsüz polikarbon difüzör kapağı sayesinde, çerçevesiz LED uygulamalarınızda göz yormayan, lekesiz ve estetik bir ışık dağılımı elde edersiniz.",
  },
];

const featureCards = [
  {
    title: "İstenilen Ölçüde Lineer Tasarım",
    description:
      "Trimless LED profilleri, mimari projenizin aksına göre uç uca eklenebilir veya istenilen ölçüde kesilebilir. Konut, ofis ve ticari alanlarda limitsiz uzunlukta, kesintisiz lineer aydınlatma sağlar.",
  },
  {
    title: "Sıva Altı Çerçevesiz Montaj",
    description:
      "Sadece ışığın görünmesini sağlayan yenilikçi kanat yapısı sayesinde alçıpan tavana tamamen gömülür. Çerçevesiz LED profil montajı, uygulama sonrasında yüzeyde jilet gibi temiz bir bitiş bırakır.",
  },
  {
    title: "Premium Mimari Dokunuş",
    description:
      "Modern iç mimaride lüks algısını doğrudan yükselten gizli ışık sistemleri, mekânlarınıza derinlik, sakinlik ve minimalist bir zarafet katar.",
  },
];

const seoTopics = [
  {
    title: "Sıva Altı Trimless Led Profil",
    description:
      "Sıva altı trimless led profil sistemleri, yüzeye sıfır bitiş sağlayarak tavanda ve duvarda sadece ışık çizgisinin görünmesini hedefler. Özellikle alçıpan detaylarında daha temiz ve mimari bir sonuç verir.",
  },
  {
    title: "Çerçevesiz Lineer Aydınlatma Etkisi",
    description:
      "Çerçevesiz lineer aydınlatma tercih eden projelerde amaç profil görüntüsünü geri çekip ışığı öne çıkarmaktır. Trimless led bu yüzden minimalist konut, ofis ve ticari mekanlarda daha premium bir algı oluşturur.",
  },
  {
    title: "Trimless Led Kullanım Alanları",
    description:
      "Salon, koridor, mutfak adası, ofis karşılama, mağaza raf hattı, showroom aksı ve otel koridoru gibi alanlarda uzun, homojen ve modern bir lineer aydınlatma etkisi için tercih edilir.",
  },
];

const faqItems = [
  {
    question: "Trimless led profil nedir?",
    answer:
      "Trimless led profil, sıva altına gömülen ve çerçeve görünümünü minimuma indirerek yüzeyde daha temiz bir ışık çizgisi oluşturan lineer aydınlatma çözümüdür.",
  },
  {
    question: "Sıva altı led profil ile standart lineer led arasındaki fark nedir?",
    answer:
      "Standart lineer profiller daha görünür bir çerçeve bırakırken sıva altı trimless sistemlerde profil yüzeyin içine alınır. Böylece daha sade, daha bütünlüklü ve daha mimari bir sonuç elde edilir.",
  },
  {
    question: "Trimless led hangi alanlarda kullanılır?",
    answer:
      "Konut, ofis, mağaza, showroom, otel ve modern ticari projelerde; tavanda, duvarda, koridorda veya vurgu akslarında kullanılabilir.",
  },
  {
    question: "Alçıpan tavanda trimless led uygulaması yapılabilir mi?",
    answer:
      "Evet. Trimless led özellikle alçıpan tavan ve alçıpan duvar detaylarında tercih edilir. Doğru profil ve uygulama detayı ile yüzeye gömülü bir bitiş sağlanır.",
  },
  {
    question: "Türkiye geneli gönderim ve satış yapıyor musunuz?",
    answer:
      "Evet. Site, Türkiye geneli trimless led satış talebi toplamak ve doğru ürün yönlendirmesi yapmak için hazırlanmıştır.",
  },
  {
    question: "Trimless led fiyatı nasıl belirlenir?",
    answer:
      "Fiyat; profil tipi, ölçü, metraj, uygulama detayı ve proje senaryosuna göre değişir. Hızlı teklif için telefon veya WhatsApp üzerinden bilgi paylaşabilirsiniz.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="relative min-h-screen bg-[#f7f1e8] px-4 pt-1.5 pb-0 sm:px-6 sm:pt-2 sm:pb-0 lg:px-7 lg:pt-3 lg:pb-0">
        <RevealObserver />
        <div className="page-mesh-gradient pointer-events-none absolute inset-0" />
        <div className="relative z-10">
        <div className="mx-auto mb-2 flex h-auto min-h-7 max-w-[1880px] items-center justify-center px-4 py-1 text-center sm:mb-3 sm:h-8 sm:py-0">
          <p
            className="font-akkurat block text-[0.76rem] font-bold leading-[1] tracking-[0.02em] text-slate-700 sm:text-[0.82rem]"
            style={{ fontFamily: "AkkuratLL, sans-serif" }}
          >
            Mimari projelerinize özel Trimless LED fiyat teklifi almak için bize ulaşın.
          </p>
        </div>

        <section className="relative mx-auto h-[calc(100svh-3.25rem)] w-full max-w-[1880px] overflow-hidden rounded-b-[2rem] rounded-t-none bg-[#b99773] shadow-[0_20px_80px_rgba(15,23,42,0.08)] sm:h-[calc(100svh-4rem)] sm:rounded-b-[2.2rem] lg:h-[calc(100svh-4.75rem)] lg:rounded-b-[2.4rem]">
          <Image
            src="/trimless-led-hero-arka-plan.webp"
            alt="Trimless LED arka plan görseli"
            fill
            preload
            fetchPriority="high"
            className="object-cover object-center brightness-[0.92] contrast-[1.06] saturate-[0.86] sepia-[0.12] hue-rotate-[-6deg]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,248,238,0.12),rgba(255,248,238,0)_36%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,241,232,0.10),rgba(247,241,232,0.03)_26%,rgba(34,24,18,0.16)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,232,0.95)_0%,rgba(247,241,232,0.84)_16%,rgba(247,241,232,0.54)_31%,rgba(247,241,232,0.14)_48%,rgba(247,241,232,0)_68%)] md:bg-[linear-gradient(90deg,rgba(247,241,232,0.90)_0%,rgba(247,241,232,0.76)_16%,rgba(247,241,232,0.40)_32%,rgba(247,241,232,0.08)_49%,rgba(247,241,232,0)_67%)]" />
          <div className="absolute inset-y-0 right-0 w-[46%] bg-[linear-gradient(90deg,rgba(191,153,115,0)_0%,rgba(191,153,115,0.14)_45%,rgba(191,153,115,0.28)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-[14%] bg-[linear-gradient(90deg,rgba(38,24,12,0.12)_0%,rgba(38,24,12,0.05)_38%,rgba(38,24,12,0)_100%)]" />
          <div className="absolute inset-y-0 right-0 w-[18%] bg-[linear-gradient(270deg,rgba(38,24,12,0.14)_0%,rgba(38,24,12,0.06)_40%,rgba(38,24,12,0)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-[12%] bg-[linear-gradient(180deg,rgba(33,21,12,0.10)_0%,rgba(33,21,12,0)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[16%] bg-[linear-gradient(0deg,rgba(33,21,12,0.16)_0%,rgba(33,21,12,0)_100%)]" />
          <div className="absolute right-[6%] top-[21%] hidden h-[40vh] w-[40vh] rounded-full bg-[radial-gradient(circle,rgba(255,244,228,0.55)_0%,rgba(255,232,206,0.18)_36%,rgba(255,232,206,0)_72%)] blur-3xl md:block lg:top-[19%] lg:h-[44vh] lg:w-[44vh]" />

          <div className="absolute right-[3%] top-[19%] bottom-[4%] z-[1] hidden items-center justify-end md:flex md:w-[53%] lg:right-[4%] lg:top-[16%] lg:w-[50%] xl:right-[5%] xl:top-[15%] xl:w-[48%]">
            <div className="relative flex h-full w-full max-w-[880px] items-center justify-center overflow-hidden rounded-[2.2rem] border border-white/28 bg-[linear-gradient(140deg,rgba(247,241,232,0.28)_0%,rgba(215,194,170,0.18)_48%,rgba(129,97,66,0.22)_100%)] px-[3.5%] py-[3.5%] shadow-[0_30px_90px_rgba(53,35,18,0.20)] backdrop-blur-[14px]">
              <div className="absolute inset-[1px] rounded-[2.05rem] border border-white/20" />
              <div className="absolute inset-x-[10%] top-[7%] h-[20%] rounded-full bg-[radial-gradient(circle,rgba(255,247,236,0.75)_0%,rgba(255,247,236,0)_72%)] blur-2xl" />
              <div className="absolute bottom-[-12%] right-[-8%] h-[52%] w-[52%] rounded-full bg-[radial-gradient(circle,rgba(176,135,97,0.22)_0%,rgba(176,135,97,0)_72%)] blur-3xl" />
              <Image
                src="/trimless-led-profil-urun-gorseli.webp"
                alt="Trimless LED ürün fotoğrafı"
                width={1600}
                height={1600}
                loading="eager"
                sizes="(max-width: 1279px) 50vw, 44vw"
                className="relative z-[1] h-[100%] w-[100%] scale-[1.08] object-contain object-center brightness-[1.03] contrast-[1.07] saturate-[0.98] drop-shadow-[0_34px_84px_rgba(53,35,18,0.24)]"
              />
            </div>
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <div className="hero-grid h-full content-between pt-4 pb-4 md:pt-6 md:pb-0 lg:px-5 lg:pb-3">
              <div className="hero-main">
                <div className="relative flex items-center justify-between py-2 md:py-0">
                  <span className="font-mono text-[0.82rem] tracking-[0.18em] text-slate-700 uppercase">
                    trimlessled.com
                  </span>

                  <nav className="font-akkurat absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-sm text-slate-700 md:flex">
                    {navigationLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="transition-colors hover:text-slate-950"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <div className="hidden rounded-full border border-black/10 px-4 py-3 text-xs text-slate-700 md:flex">
                    TR
                  </div>
                </div>

                <div className="mt-4 max-w-full sm:mt-10 sm:max-w-[380px] md:mt-[8vh] md:max-w-[430px] lg:max-w-[35%]">
                  <span className="mb-4 flex items-center justify-center md:justify-start">
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
                      Trimless Led
                    </span>
                  </span>

                  <h1 className="bg-linear-to-br from-[#17120d] via-[#5e4327] to-[#b3895d] bg-clip-text text-center text-[2.7rem] leading-none font-medium tracking-tight text-transparent sm:text-[4.3rem] md:text-left md:text-[5rem] lg:text-[4.3vw] xl:text-[4.6rem]">
                    Trimless LED
                  </h1>
                  <h2
                    className={`${cormorant.className} mt-2 min-h-[1.18em] overflow-visible pt-[0.06em] pb-[0.18em] bg-linear-to-r from-[#5d4329] via-[#6c4f31] to-[#866445] bg-clip-text text-center text-[1.95rem] leading-[1.08] font-normal text-transparent italic sm:text-[3rem] sm:leading-[1.02] md:mt-4 md:text-left md:text-[3.4rem] md:leading-[1.02] lg:text-[3vw] lg:leading-[1.03] xl:text-[3.4rem]`}
                  >
                    Mimaride Kesintisiz Işık Çizgisi
                  </h2>
                </div>
              </div>

              <div className="hero-main hidden md:block">
                <div className="mb-4 flex flex-wrap items-end gap-8 lg:mb-6">
                  <TrackedLink
                    href={siteConfig.whatsAppUrl}
                    eventName="click_whatsapp"
                    eventLabel="hero_whatsapp"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-4 text-sm font-bold text-[#f7f1e8] transition hover:bg-[#8b6b45]"
                  >
                    WhatsApp ile Teklif Al
                  </TrackedLink>

                  <div className="space-y-1 text-sm text-slate-700">
                    <p>
                      Telefon:{" "}
                      <TrackedLink
                        href={seoPhoneHref}
                        eventName="click_phone"
                        eventLabel="hero_phone"
                        className="break-all font-semibold text-slate-950"
                      >
                        {seoPhoneDisplay}
                      </TrackedLink>
                    </p>
                    <p>
                      E-posta:{" "}
                      <a
                        href={`mailto:${seoEmail}`}
                        className="break-all font-semibold text-slate-950"
                      >
                        {seoEmail}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-950">
                        trimlessled.com
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="hero-main flex justify-center md:hidden">
                <div className="relative w-full max-w-[22rem] overflow-hidden rounded-[1.8rem] border border-white/28 bg-[linear-gradient(140deg,rgba(247,241,232,0.3)_0%,rgba(215,194,170,0.2)_48%,rgba(129,97,66,0.22)_100%)] px-4 py-3 shadow-[0_18px_48px_rgba(53,35,18,0.18)] backdrop-blur-[10px]">
                  <div className="absolute inset-[1px] rounded-[1.65rem] border border-white/18" />
                  <div className="absolute inset-x-[14%] top-[8%] h-[18%] rounded-full bg-[radial-gradient(circle,rgba(255,247,236,0.72)_0%,rgba(255,247,236,0)_72%)] blur-xl" />
                  <Image
                    src="/trimless-led-profil-urun-gorseli.webp"
                    alt="Trimless LED ürün fotoğrafı"
                    width={1200}
                    height={1200}
                    loading="eager"
                    sizes="(max-width: 420px) 216px, 240px"
                    className="relative z-[1] mx-auto h-[21vh] min-h-[9.5rem] w-full max-w-[88%] scale-[1.01] object-contain object-center brightness-[1.01] contrast-[1.04] saturate-[0.96] drop-shadow-[0_18px_40px_rgba(53,35,18,0.18)]"
                  />
                </div>
              </div>

              <div className="hero-main flex flex-col items-center self-end md:hidden">
                <div className="mb-2 w-full space-y-3">
                  <div className="flex justify-center">
                    <TrackedLink
                      href={siteConfig.whatsAppUrl}
                      eventName="click_whatsapp"
                      eventLabel="hero_whatsapp_mobile"
                      className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-[#f7f1e8] transition hover:bg-[#8b6b45]"
                    >
                      WhatsApp ile Teklif Al
                    </TrackedLink>
                  </div>

                  <div className="text-center text-sm text-slate-700">
                    <p>
                      Telefon:{" "}
                      <TrackedLink
                        href={seoPhoneHref}
                        eventName="click_phone"
                        eventLabel="hero_phone_mobile"
                        className="font-semibold text-slate-950"
                      >
                        {seoPhoneDisplay}
                      </TrackedLink>
                    </p>
                    <p className="mt-1">
                      E-posta:{" "}
                      <a
                        href={`mailto:${seoEmail}`}
                        className="font-semibold text-slate-950"
                      >
                        {seoEmail}
                      </a>
                    </p>
                    <p className="mt-1 font-semibold text-slate-950">
                      trimlessled.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StickyQuickNav />

        <section
          id="hikaye"
          className="relative mx-auto w-full max-w-[1880px] scroll-mt-28 py-18 sm:scroll-mt-32 sm:py-22 lg:scroll-mt-36 lg:py-30"
        >
          <div className="absolute left-[8%] top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(185,151,115,0.14)_0%,rgba(185,151,115,0)_72%)] blur-3xl" />
          <div className="hero-grid relative">
            <div className="hero-main space-y-14 lg:space-y-18">
              <Reveal>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,28rem)] lg:items-end">
                  <div className="max-w-[52rem]">
                    <p className="font-akkurat text-[0.76rem] font-bold tracking-[0.24em] text-[#8b6b45] uppercase">
                      {storyBlocks[0]?.eyebrow}
                    </p>
                    <h2 className="mt-4 text-[2.45rem] leading-[0.96] font-light tracking-tight text-slate-900 sm:text-[3.15rem] lg:text-[4.35rem]">
                      Alçıpanla Bütünleşen
                      <br />
                      <em
                        className={`${cormorant.className} font-normal italic text-[#b99773]`}
                      >
                        kusursuz tasarım.
                      </em>
                    </h2>
                  </div>

                  
                </div>
              </Reveal>

              <div className="space-y-14 lg:space-y-18">
                {storyBlocks.map((block, index) => {
                  const isReversed = index % 2 === 1;

                  return (
                    <Reveal key={block.id} delay={index * 120}>
                      <div className="grid gap-7 lg:grid-cols-12 lg:gap-8 xl:gap-12">
                        <div
                          className={[
                            "relative",
                            isReversed
                              ? "lg:order-2 lg:col-span-7"
                              : "lg:col-span-7",
                          ].join(" ")}
                        >
                          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#e1d4c3] bg-[linear-gradient(180deg,rgba(255,252,248,0.96)_0%,rgba(247,241,232,0.9)_100%)] p-4 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-5">
                            <div className="absolute inset-x-[12%] top-0 h-20 rounded-full bg-[radial-gradient(circle,rgba(185,151,115,0.14)_0%,rgba(185,151,115,0)_72%)] blur-3xl" />
                            <div className="bg-slate-200 relative min-h-[320px] overflow-hidden rounded-[1.7rem] border border-white/70 sm:min-h-[380px] lg:min-h-[430px]">
                              {index === 0 ? (
                                <>
                                  <Image
                                    src="/siva-alti-trimless-led-mimari-cozum.webp"
                                    alt="Mimari çözüm trimless led uygulama görseli"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 639px) calc(100vw - 64px), (max-width: 1023px) calc(100vw - 96px), 44vw"
                                  />
                                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_42%,rgba(185,151,115,0.12)_100%)]" />
                                </>
                              ) : index === 1 ? (
                                <>
                                  <Image
                                    src="/homojen-isik-dagilimi-trimless-led.webp"
                                    alt="Yüksek performans trimless led uygulama görseli"
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 639px) calc(100vw - 64px), (max-width: 1023px) calc(100vw - 96px), 44vw"
                                  />
                                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_42%,rgba(185,151,115,0.12)_100%)]" />
                                </>
                              ) : (
                                <>
                                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0)_48%,rgba(185,151,115,0.08)_100%)]" />
                                  <div className="absolute left-6 top-6 rounded-full border border-slate-400/20 bg-white/70 px-3 py-1 text-[0.7rem] font-medium tracking-[0.12em] text-slate-500 uppercase">
                                    Görsel Alanı
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div
                          className={[
                            "flex items-center",
                            isReversed
                              ? "lg:order-1 lg:col-span-4 lg:col-start-1"
                              : "lg:col-span-4 lg:col-start-9",
                          ].join(" ")}
                        >
                          <div className="max-w-[31rem]">
                            <p className="font-akkurat text-[0.74rem] font-bold tracking-[0.2em] text-[#8b6b45] uppercase">
                              {block.eyebrow}
                            </p>
                            <h2 className="mt-4 text-[2rem] leading-[1.02] font-light tracking-tight text-slate-900 sm:text-[2.5rem] lg:text-[3.1rem]">
                              {block.title}
                            </h2>
                            <p className="mt-5 max-w-[56ch] text-[1rem] leading-8 text-slate-700 sm:text-[1.03rem]">
                              {block.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="ozellikler"
          className="mx-auto w-full max-w-[1880px] scroll-mt-28 pb-16 sm:scroll-mt-32 sm:pb-20 lg:scroll-mt-36 lg:pb-28"
        >
          <div className="hero-grid">
            <div className="hero-main">
              <Reveal>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)] lg:items-end">
                  <div className="max-w-[46rem]">
                    <p className="font-akkurat text-[0.76rem] font-bold tracking-[0.24em] text-[#8b6b45] uppercase">
                      Özellikler
                    </p>
                    <h2 className="mt-4 text-[2.3rem] leading-[0.98] font-light tracking-tight text-slate-900 sm:text-[3rem] lg:text-[4rem]">
                      Daha Sade Bir Görünüm.
                      <br />
                      <em
                        className={`${cormorant.className} font-normal italic text-[#b99773]`}
                      >
                        Daha Güçlü Bir Etki.
                      </em>
                    </h2>
                  </div>

                  
                </div>
              </Reveal>

              <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
                {featureCards.map((card, index) => (
                  <Reveal
                    key={card.title}
                    delay={index * 100}
                    className="h-full"
                  >
                    <article
                      className={[
                        "group relative flex h-full min-h-[220px] overflow-hidden rounded-[2rem] border p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:min-h-[236px] sm:p-6 lg:p-7",
                        index === 0
                          ? "border-slate-800/10 bg-[linear-gradient(160deg,rgba(29,39,51,0.98)_0%,rgba(21,30,42,0.96)_54%,rgba(16,24,34,0.98)_100%)] text-[#f7f1e8]"
                          : index === 1
                            ? "border-[#e6d7c4] bg-[linear-gradient(160deg,rgba(255,251,246,0.98)_0%,rgba(247,241,232,0.92)_100%)] text-slate-900"
                            : "border-[#ddcfbc] bg-[linear-gradient(160deg,rgba(185,151,115,0.16)_0%,rgba(255,255,255,0.9)_38%,rgba(247,241,232,0.94)_100%)] text-slate-900",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "absolute rounded-full blur-3xl transition duration-300 group-hover:scale-110",
                          index === 0
                            ? "-right-14 top-10 h-52 w-52 bg-[radial-gradient(circle,rgba(185,151,115,0.28)_0%,rgba(185,151,115,0)_72%)]"
                            : "-right-10 -top-8 h-36 w-36 bg-[radial-gradient(circle,rgba(185,151,115,0.16)_0%,rgba(185,151,115,0)_72%)]",
                        ].join(" ")}
                      />
                      <div className="relative flex h-full w-full flex-col justify-between gap-6">
                        <div>
                          <p
                            className={[
                              "font-akkurat text-[0.72rem] font-bold tracking-[0.18em] uppercase",
                              index === 0 ? "text-[#d4b089]" : "text-[#8b6b45]",
                            ].join(" ")}
                          >
                            0{index + 1}
                          </p>
                          <h3 className="mt-3 max-w-[18ch] text-[1.3rem] leading-[1.04] font-medium tracking-tight sm:text-[1.55rem] lg:text-[1.72rem]">
                            {card.title}
                          </h3>
                        </div>

                        <div className="space-y-4">
                          <p
                            className={[
                              "max-w-[34ch] text-[0.92rem] leading-6 sm:text-[0.95rem]",
                              index === 0 ? "text-[#f7f1e8]/80" : "text-slate-700",
                            ].join(" ")}
                          >
                            {card.description}
                          </p>

                          <div
                            className={[
                              "inline-flex rounded-full px-3 py-1.5 text-[0.72rem] tracking-[0.14em] uppercase",
                              index === 0
                                ? "border border-white/10 bg-white/8 text-[#e7d5bf]"
                                : "border border-[#dccab3] bg-white/60 text-[#8b6b45]",
                            ].join(" ")}
                          >
                            {index === 0
                              ? "Trimless led profili"
                              : index === 1
                                ? "Çerçevesiz led"
                                : "Gizli ışık sistemleri"}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="detay"
          className="mx-auto w-full max-w-[1880px] scroll-mt-28 py-16 sm:scroll-mt-32 sm:py-20 lg:scroll-mt-36 lg:py-28"
        >
          <div className="hero-grid">
            <div className="hero-main">
              <Reveal>
                <div className="mx-auto flex max-w-[980px] flex-col items-center text-center">
                  <p className="text-[2.35rem] leading-[1.08] font-light tracking-tight text-[#8a6a47] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.8rem]">
                    Daha sade bir görünüm.
                    <br />
                    <em className={`${cormorant.className} font-normal italic text-[#6c4c2d]`}>
                      Daha güçlü bir etki.
                    </em>
                  </p>

                  <TrackedLink
                    href={siteConfig.whatsAppUrl}
                    eventName="click_whatsapp"
                    eventLabel="detail_section_whatsapp"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[#8b6b45] px-6 py-3 text-sm font-semibold text-[#f7f1e8] transition hover:bg-slate-900 lg:mt-12"
                  >
                    WhatsApp ile Bilgi Al
                  </TrackedLink>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="galeri"
          className="mx-auto w-full max-w-[1880px] scroll-mt-28 pb-20 sm:scroll-mt-32 sm:pb-24 lg:scroll-mt-36 lg:pb-32"
        >
          <div className="hero-grid">
            <div className="hero-main">
              <Reveal>
                <div className="grid gap-5 md:grid-cols-3 lg:gap-7">
                  <article className="group overflow-hidden rounded-[1.8rem] border border-[#e5d6c3] bg-white/55 shadow-[0_18px_50px_rgba(53,35,18,0.08)] backdrop-blur-[6px]">
                    <div className="relative aspect-[4/4.5] overflow-hidden bg-[#e9dccb]">
                      <Image
                        src="/yuzeye-gomulu-temiz-isik-cizgisi-trimless-led.webp"
                        alt="Trimless LED gerçek mekan uygulaması"
                        fill
                        className="object-cover object-[center_52%] scale-[1.06] transition duration-500 group-hover:scale-[1.1]"
                        sizes="(max-width: 767px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0)_38%,rgba(12,10,9,0.16)_58%,rgba(12,10,9,0.62)_100%)]" />
                      <div className="absolute inset-x-0 bottom-0 z-[1] p-5 lg:p-6">
                        <p className="font-akkurat text-[1.02rem] leading-[1.1] font-medium text-white sm:text-[1.08rem]">
                          Yüzeye gömülü
                          <br />
                          <em className={`${cormorant.className} text-[1.7rem] font-normal italic sm:text-[1.95rem]`}>
                            temiz ışık çizgisi.
                          </em>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="group overflow-hidden rounded-[1.8rem] border border-[#e5d6c3] bg-white/55 shadow-[0_18px_50px_rgba(53,35,18,0.08)] backdrop-blur-[6px]">
                    <div className="relative aspect-[4/4.5] overflow-hidden bg-[#e9dccb]">
                      <Image
                        src="/tavanda-duvarda-butunluklu-gorunum-trimless-led.webp"
                        alt="Alçıpan trimless led profil uygulaması"
                        fill
                        className="object-cover object-[center_44%] scale-[1.05] transition duration-500 group-hover:scale-[1.09]"
                        sizes="(max-width: 767px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0)_38%,rgba(12,10,9,0.16)_58%,rgba(12,10,9,0.62)_100%)]" />
                      <div className="absolute inset-x-0 bottom-0 z-[1] p-5 lg:p-6">
                        <p className="font-akkurat text-[1.02rem] leading-[1.1] font-medium text-white sm:text-[1.08rem]">
                          Tavanda ve duvarda
                          <br />
                          <em className={`${cormorant.className} text-[1.7rem] font-normal italic sm:text-[1.95rem]`}>
                            bütünlüklü görünüm.
                          </em>
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="group overflow-hidden rounded-[1.8rem] border border-[#e5d6c3] bg-white/55 shadow-[0_18px_50px_rgba(53,35,18,0.08)] backdrop-blur-[6px]">
                    <div className="relative aspect-[4/4.5] overflow-hidden bg-[#e9dccb]">
                      <Image
                        src="/premium-isik-etkisi-modern-mekan-trimless-led.webp"
                        alt="Modern mekanda trimless led kullanımı"
                        fill
                        className="object-cover object-[center_46%] scale-[1.05] transition duration-500 group-hover:scale-[1.09]"
                        sizes="(max-width: 767px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0)_38%,rgba(12,10,9,0.16)_58%,rgba(12,10,9,0.62)_100%)]" />
                      <div className="absolute inset-x-0 bottom-0 z-[1] p-5 lg:p-6">
                        <p className="font-akkurat text-[1.02rem] leading-[1.1] font-medium text-white sm:text-[1.08rem]">
                          Modern mekanlarda
                          <br />
                          <em className={`${cormorant.className} text-[1.7rem] font-normal italic sm:text-[1.95rem]`}>
                            premium ışık etkisi.
                          </em>
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1880px] pb-20 sm:pb-24 lg:pb-28">
          <div className="hero-grid">
            <div className="hero-main">
              <Reveal>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
                  <div className="max-w-[42rem]">
                    <p className="font-akkurat text-[0.76rem] font-bold tracking-[0.24em] text-[#8b6b45] uppercase">
                      SEO Odaklı İçerik
                    </p>
                    <h2 className="mt-4 text-[2.2rem] leading-[0.98] font-light tracking-tight text-slate-900 sm:text-[2.9rem] lg:text-[3.8rem]">
                      Trimless LED Profil
                      <br />
                      <em
                        className={`${cormorant.className} font-normal italic text-[#b99773]`}
                      >
                        hakkında daha net bilgiler.
                      </em>
                    </h2>
                  </div>

                  
                </div>
              </Reveal>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {seoTopics.map((topic, index) => (
                  <Reveal key={topic.title} delay={index * 90} className="h-full">
                    <article className="h-full rounded-[2rem] border border-[#e3d7c8] bg-[linear-gradient(180deg,rgba(255,252,248,0.92)_0%,rgba(247,241,232,0.84)_100%)] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
                      <p className="font-akkurat text-[0.72rem] font-bold tracking-[0.18em] text-[#8b6b45] uppercase">
                        0{index + 1}
                      </p>
                      <h3 className="mt-3 text-[1.35rem] leading-[1.08] font-medium tracking-tight text-slate-900 sm:text-[1.55rem]">
                        {topic.title}
                      </h3>
                      <p className="mt-4 text-[0.98rem] leading-7 text-slate-700">
                        {topic.description}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="sss"
          className="mx-auto w-full max-w-[1880px] scroll-mt-28 pb-20 sm:scroll-mt-32 sm:pb-24 lg:scroll-mt-36 lg:pb-32"
        >
          <div className="hero-grid">
            <div className="hero-main">
              <Reveal>
                <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
                  <div className="max-w-[38rem]">
                    <p className="font-akkurat text-[0.76rem] font-bold tracking-[0.24em] text-[#8b6b45] uppercase">
                      SSS
                    </p>
                    <h2 className="mt-4 text-[2.2rem] leading-[0.98] font-light tracking-tight text-slate-900 sm:text-[2.9rem] lg:text-[3.8rem]">
                      Trimless LED ile ilgili
                      <br />
                      <em
                        className={`${cormorant.className} font-normal italic text-[#b99773]`}
                      >
                        sık sorulan sorular.
                      </em>
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {faqItems.map((item, index) => (
                      <Reveal key={item.question} delay={index * 70}>
                        <details className="group rounded-[1.8rem] border border-[#e2d4c3] bg-white/70 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                          <summary className="cursor-pointer list-none text-[1.02rem] font-semibold text-slate-900 marker:hidden">
                            <span className="flex items-center justify-between gap-4">
                              <span>{item.question}</span>
                              <span className="text-[#8b6b45] transition group-open:rotate-45">
                                +
                              </span>
                            </span>
                          </summary>
                          <p className="mt-4 pr-8 text-[0.98rem] leading-7 text-slate-700">
                            {item.answer}
                          </p>
                        </details>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          id="urun"
          className="relative z-10 -mx-4 w-auto max-w-none scroll-mt-28 bg-[linear-gradient(180deg,#302e2d_0%,#2c2a29_100%)] pb-0 sm:-mx-6 sm:scroll-mt-32 lg:-mx-7 lg:scroll-mt-36"
        >
          <div className="relative z-10 overflow-hidden rounded-t-none rounded-b-[3.2rem] bg-[#1c1b1a] shadow-[0_30px_90px_rgba(12,10,9,0.18)] sm:rounded-b-[4rem] lg:rounded-b-[4.8rem]">
            <div className="hero-grid relative isolate mx-auto max-w-[1880px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,179,136,0.18),rgba(214,179,136,0)_38%)]" />
              <div className="absolute inset-y-0 right-[-12%] w-[36%] rounded-full bg-[radial-gradient(circle,rgba(214,179,136,0.12)_0%,rgba(214,179,136,0)_72%)] blur-3xl" />
              <div className="hero-main relative py-14 sm:py-16 lg:py-20">
                <Reveal>
                  <div className="mx-auto max-w-[1260px] px-3 sm:px-5 lg:px-5">
                    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14">
                      <div>
                        <p className="font-akkurat mb-7 text-[0.95rem] font-bold tracking-[0.16em] text-white uppercase sm:mb-8 sm:text-base">
                          Trimless LED Nedir?
                        </p>
                        <div className="overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/4 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                          <div className="relative aspect-[1.2/1]">
                          <Image
                            src="/trimless-led-nedir-uygulama-gorseli.webp"
                            alt="Trimless LED modern iç mekân uygulaması"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1023px) 100vw, 44vw"
                          />
                          </div>
                        </div>
                      </div>

                      <div className="max-w-[520px]">
                        <h2 className="mt-6 text-[2.35rem] leading-[1.02] font-light tracking-tight text-[#f6efe5] sm:text-[3rem] lg:text-[4rem]">
                          Trimless LED
                          <br />
                          <em className={`${cormorant.className} font-normal italic text-[#d8b58a]`}>
                            nedir?
                          </em>
                        </h2>
                        <p className="mt-6 text-[1rem] leading-7 text-[#c7c0b7] sm:text-[1.05rem]">
                          Trimless LED, İngilizce &quot;çerçevesiz&quot; anlamına gelen,
                          alçıpan yüzeylere tamamen sıfırlanarak monte edilen
                          modern bir mimari aydınlatma çözümüdür. Görünen hiçbir
                          metal veya plastik çerçevesi olmadığı için, ışık
                          doğrudan tavanın veya duvarın kendi içinden
                          süzülüyormuş gibi görünür. Profil görüntüsünü gizleyen
                          ve yüzeyi kusursuz gösteren bu sıva altı lineer
                          sistemler, mekânlarınıza ultra modern ve bütünlüklü bir
                          karakter kazandırır.
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          <SiteFooter />
        </section>
        </div>
      </main>
    </>
  );
}
