"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Star, QrCode, Smartphone, Sparkles, Check, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

export function DownloadSection() {
  const [showQr, setShowQr] = useState(false);

  const googlePlayUrl = siteConfig.stores.googlePlay.url;
  const appStoreUrl = siteConfig.stores.appStore.url;

  return (
    <section id="download" className="py-24 relative overflow-hidden bg-gradient-to-b from-game-dark to-game-dark-deeper border-t border-white/5">
      {/* Background glowing rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-game-purple/20 via-game-blue/20 to-game-orange/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-900/90 border-2 border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-2xl overflow-hidden">
          {/* Subtle animated background shapes */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-game-purple/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-game-blue/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-game-orange/15 border border-game-orange/30 text-xs font-bold text-game-orange uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start Playing Free Today</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Ready to Master the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-yellow via-game-orange to-game-purple-light">
                  Arrow Flow?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Download Arrow Flow Puzzle Mania and start your puzzle adventure today!
              </p>

              {/* Store Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {/* Google Play Button */}
                <a
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold border border-white/15 hover:border-game-blue/50 shadow-lg hover:scale-105 active:scale-95 transition-all group"
                  aria-label="Download on Google Play"
                >
                  {/* Google Play Logo SVG */}
                  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24">
                    <path
                      d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1 9.9-9.9v-.2L3.7 1.7l-.1.1z"
                      fill="#00E676"
                    />
                    <path
                      d="M16.9 15.6l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2-.1.1z"
                      fill="#FFD600"
                    />
                    <path
                      d="M13.6 12.1L3.6 22.2c.4.4 1 .4 1.7 0l11.7-6.6-3.4-3.5z"
                      fill="#FF1744"
                    />
                    <path
                      d="M13.6 11.9L17 8.5 5.3 1.9C4.6 1.5 4 1.5 3.6 1.9l10 10z"
                      fill="#00B0FF"
                    />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-normal">
                      GET IT ON
                    </span>
                    <span className="block text-base font-black tracking-tight text-white">
                      Google Play
                    </span>
                  </div>
                </a>

                {/* Apple App Store Button */}
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold border border-white/15 hover:border-game-purple/50 shadow-lg hover:scale-105 active:scale-95 transition-all group"
                  aria-label="Download on App Store"
                >
                  {/* Apple Logo SVG */}
                  <svg className="w-7 h-7 shrink-0 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.6-1.19.82-2.37.7-3.87-1.12.05-2.42.75-3.15 1.6-.62.72-1.15 1.88-.99 3.32 1.27.1 2.84-.75 3.44-1.05" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-normal">
                      Download on the
                    </span>
                    <span className="block text-base font-black tracking-tight text-white">
                      App Store
                    </span>
                  </div>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Free to Play</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Supports Offline Play</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>No Intrusive Full-Screen Ads</span>
                </span>
              </div>
            </div>

            {/* Right Card: QR Code & Mobile Fast Connect */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="p-6 rounded-2xl bg-game-dark/95 border border-white/10 shadow-xl text-center max-w-xs w-full">
                <div className="flex items-center justify-center gap-2 mb-3 text-xs font-bold text-game-blue uppercase tracking-wider">
                  <QrCode className="w-4 h-4" />
                  <span>Scan to Play on Mobile</span>
                </div>

                {/* Stylized QR Code Graphic */}
                <div className="relative mx-auto w-44 h-44 p-3 bg-white rounded-xl shadow-inner flex items-center justify-center overflow-hidden">
                  {/* Generated QR Matrix SVG */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Corners */}
                    <rect x="5" y="5" width="25" height="25" fill="#111827" rx="3" />
                    <rect x="9" y="9" width="17" height="17" fill="#ffffff" rx="2" />
                    <rect x="13" y="13" width="9" height="9" fill="#6C3BFF" rx="1" />

                    <rect x="70" y="5" width="25" height="25" fill="#111827" rx="3" />
                    <rect x="74" y="9" width="17" height="17" fill="#ffffff" rx="2" />
                    <rect x="78" y="13" width="9" height="9" fill="#27B8FF" rx="1" />

                    <rect x="5" y="70" width="25" height="25" fill="#111827" rx="3" />
                    <rect x="9" y="74" width="17" height="17" fill="#ffffff" rx="2" />
                    <rect x="13" y="78" width="9" height="9" fill="#FF8B35" rx="1" />

                    {/* QR data patterns */}
                    <rect x="36" y="8" width="6" height="6" fill="#111827" />
                    <rect x="46" y="8" width="6" height="6" fill="#111827" />
                    <rect x="56" y="14" width="6" height="6" fill="#111827" />
                    <rect x="36" y="24" width="6" height="6" fill="#111827" />
                    <rect x="48" y="26" width="6" height="6" fill="#6C3BFF" />
                    <rect x="10" y="40" width="6" height="6" fill="#111827" />
                    <rect x="22" y="44" width="6" height="6" fill="#111827" />
                    <rect x="34" y="42" width="6" height="6" fill="#27B8FF" />
                    <rect x="44" y="44" width="12" height="12" fill="#111827" rx="2" />
                    <rect x="62" y="40" width="6" height="6" fill="#111827" />
                    <rect x="76" y="44" width="6" height="6" fill="#111827" />
                    <rect x="86" y="40" width="6" height="6" fill="#FF8B35" />
                    <rect x="36" y="64" width="6" height="6" fill="#111827" />
                    <rect x="48" y="72" width="6" height="6" fill="#111827" />
                    <rect x="64" y="66" width="6" height="6" fill="#6C3BFF" />
                    <rect x="76" y="74" width="6" height="6" fill="#111827" />
                    <rect x="86" y="84" width="6" height="6" fill="#111827" />

                    {/* Center Arrow logo badge */}
                    <circle cx="50" cy="50" r="10" fill="#111827" />
                    <text x="50" y="54" fontSize="12" fill="#FFD84D" textAnchor="middle" fontWeight="bold">➔</text>
                  </svg>
                </div>

                <p className="text-[11px] text-slate-400 mt-3">
                  Point your phone's camera at this code to install instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

