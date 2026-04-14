function normalizePhone(phone: string) {
  return phone.replace(/\D/g, "");
}

const phoneDisplay =
  process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY ?? "05413746161";
const phoneDigits = normalizePhone(
  process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "05413746161",
);
const whatsAppDigits = normalizePhone(
  process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? "905413746161",
);
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://trimlessled.com").replace(
  /\/$/,
  "",
);
const phoneHrefDigits = phoneDigits.startsWith("90")
  ? phoneDigits
  : phoneDigits.startsWith("0")
    ? `90${phoneDigits.slice(1)}`
    : phoneDigits;

export const siteKeywords = [
  "trimless led",
  "trimless led profil",
  "trimless led aydınlatma",
  "sıva altı led profil",
  "çerçevesiz led profil",
  "alçıpan led profil",
  "lineer led profil",
  "trimless lineer aydınlatma",
  "minimal tavan aydınlatma",
  "gömme lineer led",
  "modern lineer aydınlatma",
  "gizli ışık sistemi",
];

export const siteConfig = {
  name: "Trimless LED",
  url: siteUrl,
  title: "Trimless LED Profil | Sıva Altı Çerçevesiz Lineer Aydınlatma",
  description:
    "Trimless LED profil çözümleri ile sıva altı, çerçevesiz ve lineer aydınlatma sistemlerini keşfedin. Türkiye geneli satış, hızlı teklif ve WhatsApp desteği.",
  primaryImagePath: "/trimless-led-seo-urun-gorseli.png",
  primaryImageUrl: `${siteUrl}/trimless-led-seo-urun-gorseli.png`,
  primaryImageAlt: "Trimless LED sıva altı profil ürün görseli",
  primaryImageWidth: 2048,
  primaryImageHeight: 2048,
  logoPath: "/trimless-led-logo-mark-light.svg",
  logoUrl: `${siteUrl}/trimless-led-logo-mark-light.svg`,
  phoneDisplay,
  phoneHref: `tel:+${phoneHrefDigits}`,
  whatsAppDigits,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "temelbeytekin52@gmail.com",
  getWhatsAppUrl(message: string) {
    return `https://wa.me/${whatsAppDigits}?text=${encodeURIComponent(message)}`;
  },
  whatsAppUrl: `https://wa.me/${whatsAppDigits}?text=${encodeURIComponent(
    "Merhaba, trimless led için bilgi almak istiyorum.",
  )}`,
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? undefined,
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
};

export const navigationLinks = [
  { label: "Ürün", href: "#urun" },
  { label: "Uygulama Alanları", href: "#galeri" },
  { label: "Teknik Detay", href: "#ozellikler" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];
