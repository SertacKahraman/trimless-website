type LoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

const responsiveVariants: Record<string, number[]> = {
  "/homojen-isik-dagilimi-trimless-led.webp": [384, 640, 750, 828],
  "/siva-alti-trimless-led-mimari-cozum.webp": [384, 640, 750, 828],
  "/trimless-led-hero-arka-plan.webp": [640, 750, 828, 1080],
  "/trimless-led-profil-urun-gorseli.webp": [384, 640, 750, 828],
};

function getVariantPath(src: string, width: number) {
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;
  const variants = responsiveVariants[normalizedSrc];

  if (!variants) {
    return normalizedSrc;
  }

  const matchedWidth = variants.find((candidate) => width <= candidate);

  if (!matchedWidth) {
    return normalizedSrc;
  }

  const dotIndex = normalizedSrc.lastIndexOf(".");

  if (dotIndex === -1) {
    return normalizedSrc;
  }

  const base = normalizedSrc.slice(0, dotIndex);
  const extension = normalizedSrc.slice(dotIndex);

  return `${base}-${matchedWidth}w${extension}`;
}

export default function imageLoader({ src, width }: LoaderProps) {
  return getVariantPath(src, width);
}
