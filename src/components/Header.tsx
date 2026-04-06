"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/about", label: "自己紹介" },
  { href: "/portfolio", label: "実績" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-5xl px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-[#999999]">W</span><span className="text-text-primary">elza</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span
                    className={
                      isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                    }
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-px bg-text-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-text-primary px-5 py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
              style={{ fontFamily: "var(--font-display)" }}
            >
              相談する
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden ml-auto p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-semibold tracking-tight transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <span
                      className={
                        pathname === item.href
                          ? "text-text-primary"
                          : "text-text-secondary hover:text-text-primary"
                      }
                    >
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: navItems.length * 0.06 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group inline-flex items-center gap-2 rounded-full bg-text-primary px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  相談する
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header backdrop */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />
    </header>
  );
}
