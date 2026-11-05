"use client";

import { motion } from "framer-motion";
import { Brain, Smile, Clock, Zap, Award, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhyPlay() {
  const reasons = [
    {
      title: "Sharpen Logical Thinking",
      desc: "Train your mind to foresee multi-step causal effects. Every move requires deductive reasoning and spatial awareness.",
      icon: Brain,
      color: "from-game-purple to-indigo-600",
      pill: "Neuro-Workout",
    },
    {
      title: "Continuous Brain Challenge",
      desc: "Progress from simple warm-ups to multi-directional puzzle mazes that keep your intellect engaged without feeling overwhelming.",
      icon: Zap,
      color: "from-game-blue to-cyan-600",
      pill: "Active Mind",
    },
    {
      title: "Relaxing, Zen Gameplay",
      desc: "No aggressive countdown timers or stress-inducing penalties. Play at your own pace with soothing audio ambiance.",
      icon: Smile,
      color: "from-emerald-500 to-teal-600",
      pill: "Stress Free",
    },
    {
      title: "Bite-Sized Free Time Sessions",
      desc: "Whether you have 2 minutes on the elevator or 30 minutes on your commute, levels are designed for effortless hop-in sessions.",
      icon: Clock,
      color: "from-game-orange to-amber-600",
      pill: "Anytime, Anywhere",
    },
    {
      title: "Satisfying Chain Reactions",
      desc: "Experience the pure delight of unlocking the final key arrow and watching the remaining arrows burst across the board in harmony.",
      icon: Sparkles,
      color: "from-game-yellow to-amber-500",
      pill: "Pure Satisfaction",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-game-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-game-blue/15 border border-game-blue/30 text-xs font-bold text-game-blue uppercase tracking-wider">
            <span>The Player Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Why Play <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-blue via-game-purple-light to-game-orange">Arrow Flow Puzzle Mania</span>?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Discover why puzzle lovers across the globe make Arrow Flow their favorite daily mental retreat.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-7 rounded-3xl bg-slate-900/70 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-game-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {item.pill}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-game-blue transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-game-purple-light font-bold">
                  <span>Arrow Flow Dynamics</span>
                  <span>➔</span>
                </div>
              </motion.div>
            );
          })}

          {/* Gamified Community Stats Card */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-game-purple/30 via-slate-900/80 to-game-blue/20 border border-game-purple/30 shadow-game-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-game-yellow text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>Player Milestones</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">
                Loved by Puzzle Solvers
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-slate-300">Global Player Rating</span>
                  <span className="text-sm font-bold text-game-yellow font-mono flex items-center gap-1">
                    ★ {siteConfig.stats.rating} / 5.0
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-slate-300">Handcrafted Levels</span>
                  <span className="text-sm font-bold text-game-blue font-mono">
                    {siteConfig.stats.levelsCount}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-slate-300">Worldwide Downloads</span>
                  <span className="text-sm font-bold text-emerald-400 font-mono">
                    {siteConfig.stats.downloadsCount}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 mt-4 text-center">
              * Based on active mobile platform telemetry & store metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

