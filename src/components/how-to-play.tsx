"use client";

import { motion } from "framer-motion";
import { Eye, Search, PlayCircle, Trophy, ArrowRight, Check } from "lucide-react";

export function HowToPlay() {
  const steps = [
    {
      step: "01",
      title: "Observe Arrow Directions",
      desc: "Examine the puzzle grid carefully. Look at which arrows point North, South, East, and West.",
      icon: Eye,
      color: "from-game-purple to-indigo-600",
      accent: "text-game-purple-light",
      boardVisual: (
        <div className="grid grid-cols-2 gap-2 p-3 bg-slate-950/80 rounded-xl border border-white/10">
          <div className="h-10 rounded-lg bg-game-purple/30 border border-game-purple/50 flex items-center justify-center text-sm font-bold text-white">⬆</div>
          <div className="h-10 rounded-lg bg-game-blue/30 border border-game-blue/50 flex items-center justify-center text-sm font-bold text-white">➔</div>
          <div className="h-10 rounded-lg bg-game-orange/30 border border-game-orange/50 flex items-center justify-center text-sm font-bold text-white">⬅</div>
          <div className="h-10 rounded-lg bg-game-yellow/30 border border-game-yellow/50 flex items-center justify-center text-sm font-bold text-slate-900">⬇</div>
        </div>
      ),
    },
    {
      step: "02",
      title: "Identify the Free Arrow",
      desc: "Spot which arrow has an unobstructed exit lane. If an arrow is blocked by another tile, solve the obstacle first.",
      icon: Search,
      color: "from-game-blue to-cyan-600",
      accent: "text-game-blue",
      boardVisual: (
        <div className="p-3 bg-slate-950/80 rounded-xl border border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center text-xs font-bold font-mono">✕ Blocked</span>
            <span className="text-slate-500 font-bold">vs</span>
            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs font-bold font-mono">✓ Free</span>
          </div>
          <span className="text-xs text-game-yellow font-bold">Safe Exit</span>
        </div>
      ),
    },
    {
      step: "03",
      title: "Execute the Sequence",
      desc: "Tap the free arrows one by one in the correct logical sequence. Clear the grid without causing collisions.",
      icon: PlayCircle,
      color: "from-game-orange to-amber-600",
      accent: "text-game-orange",
      boardVisual: (
        <div className="p-3 bg-slate-950/80 rounded-xl border border-white/10 flex items-center justify-center gap-1.5 font-mono text-xs">
          <span className="px-2 py-1 rounded-md bg-game-purple text-white font-bold">1st</span>
          <span className="text-slate-400">➔</span>
          <span className="px-2 py-1 rounded-md bg-game-blue text-white font-bold">2nd</span>
          <span className="text-slate-400">➔</span>
          <span className="px-2 py-1 rounded-md bg-game-orange text-white font-bold">3rd</span>
          <span className="text-slate-400">➔</span>
          <span className="px-2 py-1 rounded-md bg-emerald-500 text-white font-bold">Clear</span>
        </div>
      ),
    },
    {
      step: "04",
      title: "Level Up & Master Puzzles",
      desc: "Earn 3-star ratings, collect coins, unlock new worlds, and tackle intricate daily master stages.",
      icon: Trophy,
      color: "from-game-yellow to-amber-500",
      accent: "text-game-yellow",
      boardVisual: (
        <div className="p-3 bg-slate-950/80 rounded-xl border border-white/10 flex items-center justify-around">
          <span className="text-game-yellow text-base">★★★</span>
          <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Stage Unlocked!</span>
          <span className="px-2 py-0.5 rounded bg-white/10 text-emerald-400 text-[11px] font-bold">+100 IQ</span>
        </div>
      ),
    },
  ];

  return (
    <section id="how-to-play" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-game-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-game-orange/15 border border-game-orange/30 text-xs font-bold text-game-orange uppercase tracking-wider">
            <span>Simple Rules, Deep Logic</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            How to Play in <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-orange via-game-yellow to-game-blue">4 Easy Steps</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Anyone can pick up Arrow Flow in seconds. But can you solve the complex 500+ stages without needing a single hint?
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative p-6 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-game-card group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl font-black text-white/30 group-hover:text-white/60 transition-colors">
                      {item.step}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold text-white mb-2 ${item.accent}`}>
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Visual board illustration card */}
                <div className="mt-auto pt-2">
                  {item.boardVisual}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

