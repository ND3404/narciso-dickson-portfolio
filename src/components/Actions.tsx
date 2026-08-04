import Link from "next/link";

function isPlaceholder(value?: string) {
  return !value || value.startsWith("TODO_");
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  external?: boolean;
}) {
  const className = `btn btn-${variant}`;
  if (isPlaceholder(href)) {
    return (
      <span className={`${className} btn-disabled`} aria-disabled="true" title="Link pending approval">
        {children}
      </span>
    );
  }

  if (external || href?.startsWith("http") || href?.startsWith("mailto:")) {
    return (
      <a
        className={className}
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href ?? "/"}>
      {children}
    </Link>
  );
}
