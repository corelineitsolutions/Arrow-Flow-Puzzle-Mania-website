"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Sparkles, Trophy, Star, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { gameScreenshots } from "@/data/screenshots";
import { GameScreenshot } from "@/types";

export function ScreenshotsGallery() {
  const [activeItem, setActiveItem] = useState<GameScreenshot | null>(null);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = gameScreenshots.findIndex((s) => s.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % gameScreenshots.length;
    setActiveItem(gameScreenshots[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = gameScreenshots.findIndex((s) => s.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + gameScreenshots.length) % gameScreenshots.length;
    setActiveItem(gameScreenshots[prevIndex]);
  };

  return (
    <section id="screenshots" className="py-24 relative overflow-hidden bg-game-dark border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] bg-game-purple/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-game-yellow/15 border border-game-yellow/30 text-xs font-bold text-game-yellow uppercase tracking-wider">
            <span>Visual Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Gameplay <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-yellow via-game-orange to-game-purple">Screenshots & Previews</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Take a look inside Arrow Flow Puzzle Mania. Explore the vibrant boards, soothing dark mode environments, and colorful stages.
          </p>

          <p className="text-xs text-slate-400">
            * Gameplay simulation previews shown. Click any screen to open fullscreen view.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gameScreenshots.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-3xl bg-slate-900/80 border border-white/10 hover:border-game-blue/50 p-4 transition-all duration-300 shadow-game-card relative overflow-hidden flex flex-col"
            >
              {/* Phone Frame Simulator */}
              <div className="w-full aspect-[9/16] max-h-[380px] rounded-2xl bg-game-dark-deeper border border-white/10 relative overflow-hidden flex flex-col p-4 shadow-inner">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pb-2 border-b border-white/5">
                  <span>9:41</span>
                  <div className="w-16 h-3 rounded-full bg-black/50 border border-white/10" />
                  <span className="text-game-blue font-bold">100%</span>
                </div>

                {/* Level Title Bar */}
                <div className="pt-3 pb-2 text-center">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                    {item.subtitle}
                  </span>
                  <h4 className="text-sm font-black text-white tracking-tight">
                    {item.title}
                  </h4>
                </div>

                {/* Simulated Game Graphic Board depending on type */}
                <div className="flex-1 my-2 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-center p-3 relative overflow-hidden">
                  <ScreenSimulationGraphic type={item.type} />
                </div>

                {/* Bottom Bar Controls */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-game-yellow">
                    <Star className="w-3 h-3 fill-game-yellow" />
                    <span>Score: 1,450</span>
                  </span>
                  <span className="font-mono text-xs text-game-purple-light font-bold">3 Hints</span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-game-purple/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center mb-2 shadow-lg">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider">Preview Fullscreen</span>
                  <p className="text-[11px] text-slate-200 mt-1 max-w-[160px] line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Card Meta below simulator */}
              <div className="pt-3.5 px-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-game-blue transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">{item.subtitle}</span>
                </div>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-slate-900 border border-white/15 rounded-3xl p-6 shadow-2xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next controls */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-game-blue font-bold uppercase tracking-wider">
                    {activeItem.subtitle}
                  </span>
                  <h3 className="text-2xl font-black text-white">{activeItem.title}</h3>
                </div>
                <div className="flex items-center gap-1.5 mr-10">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Fullscreen Mobile Screen Representation */}
              <div className="w-full aspect-[9/13] rounded-2xl bg-game-dark-deeper border border-white/10 p-5 flex flex-col justify-between my-2">
                <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>Arrow Flow Mobile Preview</span>
                  <span className="text-emerald-400 font-bold">120 FPS HDR</span>
                </div>

                <div className="flex-1 my-4 flex items-center justify-center">
                  <div className="w-full max-w-[280px]">
                    <ScreenSimulationGraphic type={activeItem.type} large />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <p className="text-xs text-slate-200">{activeItem.caption}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ScreenSimulationGraphic({
  type,
  large = false,
}: {
  type: GameScreenshot["type"];
  large?: boolean;
}) {
  const sizeClass = large ? "w-14 h-14 text-xl" : "w-9 h-9 text-base";

  if (type === "victory") {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-2">
        <div className="flex gap-1 text-game-yellow text-2xl animate-bounce">
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/40">
          PERFECT FLOW!
        </div>
        <span className="text-[11px] text-slate-400 font-mono">+350 Points</span>
      </div>
    );
  }

  if (type === "themes") {
    return (
      <div className="grid grid-cols-3 gap-2">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white text-xs font-bold shadow-glow-purple">
          ➔
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-glow-blue">
          ⬆
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-slate-900 text-xs font-bold shadow-glow-orange">
          ⬇
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      <div className={`${sizeClass} rounded-xl bg-game-purple flex items-center justify-center text-white font-black shadow-md`}>
        ➔
      </div>
      <div className={`${sizeClass} rounded-xl bg-game-blue flex items-center justify-center text-white font-black shadow-md`}>
        ⬆
      </div>
      <div className={`${sizeClass} rounded-xl bg-game-orange flex items-center justify-center text-white font-black shadow-md`}>
        ⬅
      </div>
      <div className={`${sizeClass} rounded-xl bg-game-yellow flex items-center justify-center text-slate-900 font-black shadow-md`}>
        ⬇
      </div>
      <div className={`${sizeClass} rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-game-purple-light font-black`}>
        ★
      </div>
      <div className={`${sizeClass} rounded-xl bg-game-purple flex items-center justify-center text-white font-black shadow-md`}>
        ➔
      </div>
    </div>
  );
}

