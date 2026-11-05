"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

interface GameLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showSubtitle?: boolean;
}

export function GameLogo({
  size = "md",
  className = "",
  showSubtitle = true,
}: GameLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-3xl sm:text-4xl",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group select-none ${className}`}
      aria-label="Arrow Flow Puzzle Mania Home"
    >
      {/* Animated Arrow Hexagon/Shield Badge */}
      <div
        className={`relative ${iconSizes[size]} rounded-2xl bg-gradient-to-br from-game-purple via-game-blue to-game-orange p-[2px] shadow-glow-purple transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3`}
      >
        <div className="w-full h-full bg-game-dark rounded-2xl flex items-center justify-center relative overflow-hidden">
          {/* Subtle grid pattern inside icon */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#27B8FF_1px,transparent_1px)] [background-size:6px_6px]" />

          {/* Dynamic Stylized 3-Arrow Flow Icon */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-3/4 h-3/4 text-white drop-shadow-[0_2px_8px_rgba(39,184,255,0.7)]"
          >
            <path
              d="M6 16L14 8V13H22V19H14V24L6 16Z"
              fill="url(#logo-grad-1)"
              className="transition-transform group-hover:translate-x-0.5"
            />
            <path
              d="M17 7L24 13L21.5 15.5L17 11.5L12.5 15.5L10 13L17 7Z"
              fill="url(#logo-grad-2)"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="logo-grad-1" x1="6" y1="8" x2="22" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#27B8FF" />
                <stop offset="0.5" stopColor="#6C3BFF" />
                <stop offset="1" stopColor="#FF8B35" />
              </linearGradient>
              <linearGradient id="logo-grad-2" x1="10" y1="7" x2="24" y2="15.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD84D" />
                <stop offset="1" stopColor="#FF8B35" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-tight leading-none text-white ${textSizes[size]}`}
          >
            Arrow<span className="text-game-blue">Flow</span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-gradient-to-r from-game-orange to-game-yellow text-game-dark shadow-sm">
            MANIA
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 group-hover:text-game-blue transition-colors">
            Mobile Logic Puzzle
          </span>
        )}
      </div>
    </Link>
  );
}

