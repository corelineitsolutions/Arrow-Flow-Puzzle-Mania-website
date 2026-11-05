"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Compass, Brain, Trophy, Coffee, Star, ArrowUpRight, Play } from "lucide-react";
import { InteractiveBoard } from "./interactive-board";
import { siteConfig } from "@/config/site";

export function Hero() {
  const highlightBadges = [
    { icon: Brain, label: "Brain Training", color: "text-game-purple-light border-game-purple/30 bg-game-purple/10" },
    { icon: Trophy, label: "500+ Challenging Levels", color: "text-game-orange border-game-orange/30 bg-game-orange/10" },
    { icon: Coffee, label: "Relaxing Gameplay", color: "text-game-blue border-game-blue/30 bg-game-blue/10" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Dynamic Animated Background Aura & Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-gradient-to-tr from-game-purple/25 via-game-blue/20 to-game-orange/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-game-blue/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-game-orange/15 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Floating Animated Arrows in Background */}
      <FloatingDecorations />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Top Game Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-white/10 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-game-blue animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Official Mobile Puzzle Release
              </span>
              <span className="text-xs text-game-yellow font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-game-yellow text-game-yellow" />
                {siteConfig.stats.rating} Rating
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Think Smart. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-blue via-game-purple-light to-game-orange">
                Move Arrows.
              </span>{" "}
              <br />
              Master the Puzzle!
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Challenge your mind with addictive arrow puzzles. Follow the flow, solve tricky levels, and become the ultimate puzzle master!
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-game-purple via-game-blue to-game-purple bg-[length:200%_auto] hover:bg-right text-white font-black text-base shadow-game-btn hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Now</span>
              </Link>

              <Link
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 text-white font-bold text-base border border-white/15 backdrop-blur-md transition-all duration-200 hover:border-game-blue/50"
              >
                <Compass className="w-5 h-5 text-game-blue" />
                <span>Explore Game</span>
              </Link>
            </div>

            {/* Feature Badges Highlight */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {highlightBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold backdrop-blur-md ${badge.color}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{badge.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Game Mockup / Interactive Playable Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Interactive puzzle device frame */}
            <InteractiveBoard />

            {/* Caption under phone frame */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Tap arrows above to preview actual core logic!</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Arrow 1 - Top Left */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [15, 25, 15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-[8%] w-12 h-12 rounded-xl bg-game-purple/30 border border-game-purple/40 backdrop-blur-md flex items-center justify-center shadow-glow-purple"
      >
        <span className="text-xl font-bold text-game-purple-light">➔</span>
      </motion.div>

      {/* Arrow 2 - Top Right */}
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [-20, -10, -20] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-28 right-[12%] w-14 h-14 rounded-2xl bg-game-blue/25 border border-game-blue/40 backdrop-blur-md flex items-center justify-center shadow-glow-blue"
      >
        <span className="text-2xl font-bold text-game-blue">➔</span>
      </motion.div>

      {/* Arrow 3 - Bottom Left */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [-45, -35, -45] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 left-[15%] w-10 h-10 rounded-xl bg-game-orange/30 border border-game-orange/40 backdrop-blur-md flex items-center justify-center shadow-glow-orange"
      >
        <span className="text-lg font-bold text-game-orange">➔</span>
      </motion.div>

      {/* Arrow 4 - Middle Right */}
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [90, 105, 90] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-1/2 right-[5%] w-11 h-11 rounded-xl bg-game-yellow/20 border border-game-yellow/40 backdrop-blur-md flex items-center justify-center shadow-glow-yellow"
      >
        <span className="text-lg font-bold text-game-yellow">➔</span>
      </motion.div>
    </div>
  );
}

