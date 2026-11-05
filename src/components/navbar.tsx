"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, HelpCircle, ChevronRight, Sparkles } from "lucide-react";
import { GameLogo } from "./game-logo";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Game", href: "/#about" },
    { label: "Features", href: "/#features" },
    { label: "How to Play", href: "/#how-to-play" },
    { label: "Screenshots", href: "/#screenshots" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/support" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-game-dark/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <GameLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || (link.href.startsWith("/#") && pathname === "/");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {link.label === "Support" && (
                    <span className="ml-1 inline-block w-2 h-2 rounded-full bg-game-blue animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Download Button Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#download"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-game-purple via-game-blue to-game-purple bg-[length:200%_auto] hover:bg-right font-bold text-sm text-white shadow-game-btn transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              <span>Download Game</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/#download"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-game-purple to-game-blue text-xs font-bold text-white shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-800/80 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-white/10 bg-game-dark/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-game-purple/20 text-white border border-game-purple/40"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.label === "Support" && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-game-blue/20 text-game-blue font-semibold border border-game-blue/30">
                        Help Desk
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}

              <div className="pt-3 border-t border-white/10 mt-3 flex flex-col gap-2">
                <Link
                  href="/#download"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-game-purple via-game-blue to-game-orange font-bold text-white shadow-game-btn"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Arrow Flow Free</span>
                </Link>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
                  <Sparkles className="w-3.5 h-3.5 text-game-yellow" />
                  <span>Available on Google Play & App Store</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

