"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle, MessageSquare } from "lucide-react";
import { FAQItem } from "@/types";

interface FAQAccordionProps {
  items: FAQItem[];
  allowSearch?: boolean;
  allowCategories?: boolean;
  defaultExpandedIndex?: number;
}

export function FAQAccordion({
  items,
  allowSearch = false,
  allowCategories = false,
  defaultExpandedIndex = 0,
}: FAQAccordionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(
    items[defaultExpandedIndex]?.id || null
  );

  const categories = useMemo(() => {
    const cats = Array.from(new Set(items.map((i) => i.category)));
    return ["All", ...cats];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [items, searchQuery, selectedCategory]);

  const toggleItem = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full space-y-6">
      {/* Search Bar */}
      {allowSearch && (
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. progress recovery, level tips, crashes)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-white/10 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-game-blue transition-colors shadow-inner"
          />
        </div>
      )}

      {/* Category Pills */}
      {allowCategories && (
        <div className="flex flex-wrap items-center gap-2 pt-1 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-game-purple text-white shadow-glow-purple"
                  : "bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-slate-900/50 border border-white/10">
            <HelpCircle className="w-10 h-10 text-slate-500 mx-auto mb-2" />
            <p className="text-white font-bold text-sm">No matching questions found</p>
            <p className="text-xs text-slate-400 mt-1">
              Try adjusting your search terms or submit a ticket to our Support Desk.
            </p>
          </div>
        ) : (
          filteredItems.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? "bg-slate-900/95 border-game-blue/40 shadow-game-card"
                    : "bg-slate-900/60 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-game-blue shrink-0" />
                    <span className="text-base font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-game-blue" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5 space-y-2">
                        <p>{faq.answer}</p>
                        <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono">
                          <span>Category: {faq.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

