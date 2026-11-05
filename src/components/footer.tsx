"use client";

import Link from "next/link";
import { GameLogo } from "./game-logo";
import { siteConfig } from "@/config/site";
import { Mail, HelpCircle, Shield, FileText, Download, Heart, Phone } from "lucide-react";

export function Footer() {
  const currentYear = siteConfig.releaseYear || new Date().getFullYear();

  return (
    <footer className="bg-game-dark-deeper border-t border-white/10 text-slate-400 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-game-purple/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <GameLogo size="md" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Arrow Flow Puzzle Mania is a modern logic puzzle game combining vibrant visuals, calming soundscapes, and brain-teasing arrow sequence levels.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Support Contacts:</span>
              <a
                href={`mailto:${siteConfig.support.email}`}
                className="text-game-blue hover:underline font-mono text-xs flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                {siteConfig.support.email}
              </a>
              {siteConfig.support.phone && (
                <a
                  href={`tel:${siteConfig.support.phone}`}
                  className="text-emerald-400 hover:underline font-mono text-xs flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +91 {siteConfig.support.phone}
                </a>
              )}
              <span className="text-[11px] text-slate-500">
                Typical reply: {siteConfig.support.responseTime}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Game
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-to-play" className="hover:text-white transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/#screenshots" className="hover:text-white transition-colors">
                  Screenshots
                </Link>
              </li>
            </ul>
          </div>

          {/* Player Support & Help */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Player Help
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/support"
                  className="hover:text-white transition-colors text-game-blue flex items-center gap-1.5 font-medium"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Support Desk
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  Help Center & FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Store Downloads */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Get the Game
            </h4>
            <p className="text-xs text-slate-400">
              Available on iOS and Android devices worldwide.
            </p>

            <div className="space-y-2.5 pt-1">
              <a
                href={siteConfig.stores.googlePlay.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-game-blue/50 text-white transition-all text-xs group"
              >
                <Download className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
                <div>
                  <span className="block text-[10px] text-slate-400 font-mono">Google Play Store</span>
                  <span className="font-bold">Android Download</span>
                </div>
              </a>

              <a
                href={siteConfig.stores.appStore.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-game-purple/50 text-white transition-all text-xs group"
              >
                <Download className="w-4 h-4 text-game-blue group-hover:translate-y-0.5 transition-transform" />
                <div>
                  <span className="block text-[10px] text-slate-400 font-mono">Apple App Store</span>
                  <span className="font-bold">iOS Download</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {currentYear} Arrow Flow Puzzle Mania. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link href="/support" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

