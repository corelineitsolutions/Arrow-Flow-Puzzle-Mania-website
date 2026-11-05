"use client";

import { motion } from "framer-motion";
import { Lightbulb, Compass, Target, Zap, ShieldCheck, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function AboutGame() {
  const pillars = [
    {
      title: "Plan Your Sequence",
      desc: "Every level is an intricate web of arrows pointing in four directions. Analyze which arrows are blocked and which have a free escape lane.",
      icon: Target,
      color: "from-game-purple to-indigo-600",
      accent: "text-game-purple-light",
    },
    {
      title: "Follow the Arrow Flow",
      desc: "Tap the lead arrow to release it. Watching chains of arrows burst forward creates an immensely satisfying tactile rhythm.",
      icon: Compass,
      color: "from-game-blue to-cyan-600",
      accent: "text-game-blue",
    },
    {
      title: "Master 500+ Handcrafted Stages",
      desc: "Progress through progressively clever mechanics including directional portals, locked arrows, switches, and multi-colored grids.",
      icon: Zap,
      color: "from-game-orange to-amber-600",
      accent: "text-game-orange",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-white/5">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-game-purple/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-game-purple/15 border border-game-purple/30 text-xs font-bold text-game-purple-light uppercase tracking-wider">
            <span>About The Game</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-purple via-game-blue to-game-orange">Arrow Flow Puzzle Mania</span>?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Arrow Flow Puzzle Mania is an exciting puzzle game that challenges your logic, planning, and problem-solving skills. Navigate arrow-based puzzles, discover the correct moves, and complete levels through smart thinking and strategy.
          </p>
        </div>

        {/* Illustrated Game Preview Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Visual Game Board Graphic */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md p-6 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-game-orange animate-pulse" />
                  <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">Interactive Board Concept</span>
                </div>
                <span className="text-xs text-game-yellow font-bold">100% Deterministic</span>
              </div>

              {/* Graphical Puzzle Diagram */}
              <div className="my-6 p-6 rounded-2xl bg-game-dark/95 border border-white/10 flex flex-col gap-3">
                <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>WORLD 1: NEON LABYRINTH</span>
                  <span className="text-game-blue">DIFFICULTY: SMART</span>
                </div>

                <div className="grid grid-cols-4 gap-2.5 my-2">
                  {[
                    { label: "➔", color: "bg-game-purple text-white", status: "Open" },
                    { label: "⬆", color: "bg-game-blue text-white", status: "Blocked" },
                    { label: "➔", color: "bg-game-orange text-white", status: "Open" },
                    { label: "⬇", color: "bg-game-yellow text-slate-900", status: "Open" },
                    { label: "⬅", color: "bg-game-blue text-white", status: "Blocked" },
                    { label: "➔", color: "bg-white/10 text-slate-400 border border-white/15", status: "Free" },
                    { label: "⬆", color: "bg-game-purple text-white", status: "Open" },
                    { label: "⬅", color: "bg-game-orange text-white", status: "Blocked" },
                  ].map((tile, i) => (
                    <div
                      key={i}
                      className={`h-14 rounded-xl flex flex-col items-center justify-center font-bold text-lg shadow-md transition-transform hover:scale-105 ${tile.color}`}
                    >
                      <span>{tile.label}</span>
                      <span className="text-[9px] uppercase tracking-tighter opacity-80 font-mono">{tile.status}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-game-yellow" />
                    <span>Rule: No arrow can hit another in its direct flight lane.</span>
                  </span>
                  <span className="font-bold text-game-blue font-mono">3 Steps</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Fair Logic • No Luck Required</span>
                </span>
                <span>Casual & Mind-Bending</span>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-6 space-y-5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all duration-300 group shadow-game-card"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center shrink-0 shadow-lg text-white`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold text-white group-hover:text-game-blue transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

