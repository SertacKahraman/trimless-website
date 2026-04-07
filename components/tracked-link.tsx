type TrackedLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  eventName: string;
  eventLabel?: string;
};

export function TrackedLink({
  href,
  children,
  className,
  eventName,
  eventLabel,
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={className}
      data-track-event={eventName}
      data-track-label={eventLabel ?? href}
    >
      {children}
    </a>
  );
}
