import type { CSSProperties } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <div
      data-reveal=""
      data-revealed="false"
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
      className={[
        "transform-gpu translate-y-8 opacity-0 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
