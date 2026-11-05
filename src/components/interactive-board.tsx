"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, RotateCcw, Sparkles, ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from "lucide-react";

interface PuzzleArrow {
  id: number;
  row: number;
  col: number;
  direction: "up" | "down" | "left" | "right";
  color: "purple" | "blue" | "orange" | "yellow";
  cleared: boolean;
  orderToSolve: number; // for solution verification or ease
}

const INITIAL_ARROWS: PuzzleArrow[] = [
  { id: 1, row: 0, col: 1, direction: "up", color: "purple", cleared: false, orderToSolve: 1 },
  { id: 2, row: 1, col: 0, direction: "left", color: "blue", cleared: false, orderToSolve: 2 },
  { id: 3, row: 1, col: 2, direction: "right", color: "orange", cleared: false, orderToSolve: 3 },
  { id: 4, row: 2, col: 1, direction: "down", color: "yellow", cleared: false, orderToSolve: 4 },
];

export function InteractiveBoard() {
  const [arrows, setArrows] = useState<PuzzleArrow[]>(INITIAL_ARROWS);
  const [feedback, setFeedback] = useState<string>("Tap an arrow that has a clear exit path!");
  const [score, setScore] = useState(0);

  const clearedCount = arrows.filter((a) => a.cleared).length;
  const isComplete = clearedCount === arrows.length;

  const handleArrowClick = (arrow: PuzzleArrow) => {
    if (arrow.cleared) return;

    // In this mini demo, any unobstructed arrow can fly out!
    // Arrow 1 flies UP (row 0, nothing above it -> CLEAR!)
    // Arrow 2 flies LEFT (col 0, nothing left -> CLEAR!)
    // Arrow 3 flies RIGHT (col 2, nothing right -> CLEAR!)
    // Arrow 4 flies DOWN (row 2, nothing below -> CLEAR!)
    setArrows((prev) =>
      prev.map((a) => (a.id === arrow.id ? { ...a, cleared: true } : a))
    );
    setScore((prev) => prev + 25);
    setFeedback("Nice move! Clear the remaining arrows.");
  };

  const handleReset = () => {
    setArrows(INITIAL_ARROWS);
    setFeedback("Tap an arrow that has a clear exit path!");
    setScore(0);
  };

  const getColorClasses = (color: PuzzleArrow["color"]) => {
    switch (color) {
      case "purple":
        return "from-purple-600 to-indigo-600 shadow-glow-purple border-purple-400/40 text-white";
      case "blue":
        return "from-sky-500 to-blue-600 shadow-glow-blue border-sky-400/40 text-white";
      case "orange":
        return "from-orange-500 to-amber-600 shadow-glow-orange border-orange-400/40 text-white";
      case "yellow":
        return "from-yellow-400 to-amber-500 shadow-glow-yellow border-yellow-300/40 text-slate-950 font-bold";
    }
  };

  const renderIcon = (dir: PuzzleArrow["direction"]) => {
    switch (dir) {
      case "up":
        return <ArrowUp className="w-7 h-7 stroke-[2.5]" />;
      case "down":
        return <ArrowDown className="w-7 h-7 stroke-[2.5]" />;
      case "left":
        return <ArrowLeft className="w-7 h-7 stroke-[2.5]" />;
      case "right":
        return <ArrowRight className="w-7 h-7 stroke-[2.5]" />;
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] rounded-3xl bg-slate-900/90 border-2 border-white/15 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
      {/* Phone Header Mockup */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
        <div className="flex items-center gap-1.5 font-bold text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>STAGE 01</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-game-purple/30 text-game-purple-light border border-game-purple/40 text-[11px] font-semibold">
            Interactive Demo
          </span>
          <button
            onClick={handleReset}
            className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="Reset Puzzle"
            aria-label="Reset mini puzzle"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Game Board Grid 3x3 */}
      <div className="relative my-4 p-4 rounded-2xl bg-game-dark/80 border border-white/10 aspect-square flex items-center justify-center overflow-hidden">
        {/* Subtle grid lines background */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-3 opacity-30 pointer-events-none">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-dashed border-white/20" />
          ))}
        </div>

        {/* Victory Overlay */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-game-dark/95 backdrop-blur-md p-4 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-2 shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-xl font-black text-white">LEVEL CLEARED!</h4>
              <p className="text-xs text-slate-300 mt-1 max-w-[200px]">
                Logic sequence solved! 500+ more stages await in the full game.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-game-purple to-game-blue text-xs font-bold text-white shadow-game-btn hover:scale-105 active:scale-95 transition-all"
              >
                Play Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Arrows Placed on Grid */}
        <div className="relative z-10 grid grid-cols-3 grid-rows-3 gap-3 w-full h-full p-2">
          {/* Row 0 */}
          <div />
          <div className="flex items-center justify-center">
            <ArrowButton
              arrow={arrows[0]}
              onClick={() => handleArrowClick(arrows[0])}
              colorClass={getColorClasses(arrows[0].color)}
              icon={renderIcon(arrows[0].direction)}
            />
          </div>
          <div />

          {/* Row 1 */}
          <div className="flex items-center justify-center">
            <ArrowButton
              arrow={arrows[1]}
              onClick={() => handleArrowClick(arrows[1])}
              colorClass={getColorClasses(arrows[1].color)}
              icon={renderIcon(arrows[1].direction)}
            />
          </div>
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 text-[11px] font-bold">
              <Sparkles className="w-4 h-4 text-game-yellow animate-spin" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ArrowButton
              arrow={arrows[2]}
              onClick={() => handleArrowClick(arrows[2])}
              colorClass={getColorClasses(arrows[2].color)}
              icon={renderIcon(arrows[2].direction)}
            />
          </div>

          {/* Row 2 */}
          <div />
          <div className="flex items-center justify-center">
            <ArrowButton
              arrow={arrows[3]}
              onClick={() => handleArrowClick(arrows[3])}
              colorClass={getColorClasses(arrows[3].color)}
              icon={renderIcon(arrows[3].direction)}
            />
          </div>
          <div />
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-game-yellow" />
          <span>{isComplete ? "Solved!" : feedback}</span>
        </span>
        <span className="font-mono font-bold text-game-blue">{clearedCount}/4 Cleared</span>
      </div>
    </div>
  );
}

function ArrowButton({
  arrow,
  onClick,
  colorClass,
  icon,
}: {
  arrow: PuzzleArrow;
  onClick: () => void;
  colorClass: string;
  icon: React.ReactNode;
}) {
  if (arrow.cleared) {
    return (
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-dashed border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center">
        <CheckCircle2 className="w-5 h-5 text-emerald-400/80" />
      </div>
    );
  }

  const exitAnimation = {
    up: { y: -80, opacity: 0 },
    down: { y: 80, opacity: 0 },
    left: { x: -80, opacity: 0 },
    right: { x: 80, opacity: 0 },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={onClick}
      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${colorClass} border flex items-center justify-center cursor-pointer shadow-lg transition-transform active:translate-y-0.5`}
      aria-label={`Arrow pointing ${arrow.direction}`}
    >
      {icon}
    </motion.button>
  );
}

