import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, Mail, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FAQAccordion } from "@/components/faq-accordion";
import { allFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${siteConfig.name}`,
  description:
    "Find answers to all questions regarding gameplay, puzzle solutions, technical troubleshooting, progress recovery, and payments in Arrow Flow Puzzle Mania.",
};

export default function FAQPage() {
  return (
    <div className="pt-28 pb-20 relative overflow-hidden bg-radial-gradient">
      {/* Background radial highlight */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-game-purple/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-game-yellow/15 border border-game-yellow/30 text-xs font-bold text-game-yellow uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Knowledge Base</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-yellow via-game-orange to-game-purple-light">Questions</span>
          </h1>

          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Search our knowledge base by keyword or filter by category to find instant answers about Arrow Flow Puzzle Mania.
          </p>
        </div>

        {/* Searchable and Categorized FAQ Accordion */}
        <FAQAccordion
          items={allFaqs}
          allowSearch={true}
          allowCategories={true}
          defaultExpandedIndex={0}
        />

        {/* Still Need Help Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-game-dark to-slate-900 border border-game-blue/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <h3 className="text-xl font-black text-white">
              Didn&apos;t find what you were looking for?
            </h3>
            <p className="text-sm text-slate-300 max-w-md">
              Our player support team is ready to investigate bugs, restore lost progress, or assist with purchases.
            </p>
          </div>

          <Link
            href="/support"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-game-purple via-game-blue to-game-purple bg-[length:200%_auto] hover:bg-right font-bold text-sm text-white shadow-game-btn hover:scale-105 active:scale-95 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Open Support Ticket</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

