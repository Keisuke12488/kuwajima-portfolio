import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="gradient-text">K</span>
              <span className="text-text-primary">uwajima</span>
            </span>
            <p className="text-text-muted text-sm mt-1">
              AI × SNS — テクノロジーで事業を加速させる
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Kuwajima. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
