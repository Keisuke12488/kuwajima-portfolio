import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-bg-secondary py-12 mt-40">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span
            className="text-sm font-bold tracking-tight text-text-secondary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Kuwajima
          </span>

          <nav className="flex items-center gap-6">
            {[
              { href: "/", label: "トップ" },
              { href: "/about", label: "自己紹介" },
              { href: "/portfolio", label: "実績" },
              { href: "/contact", label: "相談する" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-text-secondary hover:text-text-primary transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-text-secondary text-xs">
            © {new Date().getFullYear()} Kuwajima
          </p>
        </div>
      </div>
    </footer>
  );
}
