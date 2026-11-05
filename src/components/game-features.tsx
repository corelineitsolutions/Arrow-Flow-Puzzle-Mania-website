"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Trophy,
  Smartphone,
  Palette,
  Volume2,
  WifiOff,
  CalendarDays,
  Lightbulb,
} from "lucide-react";
import { gameFeatures } from "@/data/features";

export function GameFeatures() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return Brain;
      case "Sparkles":
        return Sparkles;
      case "Trophy":
        return Trophy;
      case "Smartphone":
        return Smartphone;
      case "Palette":
        return Palette;
      case "Volume2":
        return Volume2;
      case "WifiOff":
        return WifiOff;
      case "CalendarDays":
        return CalendarDays;
      case "Lightbulb":
        return Lightbulb;
      default:
        return Sparkles;
    }
  };

  const getColorStyles = (color: string) => {
    switch (color) {
      case "purple":
        return {
          iconBg: "from-purple-600 to-indigo-600 text-white shadow-glow-purple",
          badge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
          borderHover: "hover:border-purple-500/50",
          accentText: "group-hover:text-game-purple-light",
        };
      case "blue":
        return {
          iconBg: "from-sky-500 to-blue-600 text-white shadow-glow-blue",
          badge: "bg-sky-500/10 text-sky-300 border-sky-500/30",
          borderHover: "hover:border-sky-500/50",
          accentText: "group-hover:text-game-blue",
        };
      case "orange":
        return {
          iconBg: "from-orange-500 to-amber-600 text-white shadow-glow-orange",
          badge: "bg-orange-500/10 text-orange-300 border-orange-500/30",
          borderHover: "hover:border-orange-500/50",
          accentText: "group-hover:text-game-orange",
        };
      case "yellow":
        return {
          iconBg: "from-yellow-400 to-amber-500 text-slate-950 shadow-glow-yellow font-black",
          badge: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
          borderHover: "hover:border-yellow-500/50",
          accentText: "group-hover:text-game-yellow",
        };
      default:
        return {
          iconBg: "from-purple-600 to-blue-600 text-white shadow-glow-purple",
          badge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
          borderHover: "hover:border-purple-500/50",
          accentText: "group-hover:text-white",
        };
    }
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-game-dark">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-game-blue/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-game-orange/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-game-blue/15 border border-game-blue/30 text-xs font-bold text-game-blue uppercase tracking-wider">
            <span>Power Packed Features</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Designed for Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-yellow via-game-orange to-game-purple-light">Puzzle Bliss</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every mechanic in Arrow Flow Puzzle Mania is finely tuned to provide maximum satisfaction, crisp visuals, and a calming mental workout.
          </p>
        </div>

        {/* Feature Cards Grid (9 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gameFeatures.map((feature, index) => {
            const Icon = getIcon(feature.iconName);
            const style = getColorStyles(feature.color);

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative p-7 rounded-3xl bg-slate-900/70 border border-white/10 ${style.borderHover} transition-all duration-300 shadow-game-card flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${style.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    {feature.badge && (
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${style.badge}`}
                      >
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Heading & Description */}
                  <h3
                    className={`text-xl font-bold text-white mb-2.5 transition-colors ${style.accentText}`}
                  >
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                  <span className="font-mono text-[11px] uppercase tracking-wider">
                    Feature #{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    ➔
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

