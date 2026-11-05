import { Hero } from "@/components/hero";
import { AboutGame } from "@/components/about-game";
import { GameFeatures } from "@/components/game-features";
import { HowToPlay } from "@/components/how-to-play";
import { ScreenshotsGallery } from "@/components/screenshots-gallery";
import { WhyPlay } from "@/components/why-play";
import { DownloadSection } from "@/components/download-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { allFaqs } from "@/data/faqs";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

export default function HomePage() {
  const previewFaqs = allFaqs.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About the Game */}
      <AboutGame />

      {/* 3. Game Features */}
      <GameFeatures />

      {/* 4. How to Play */}
      <HowToPlay />

      {/* 5. Gameplay Screenshots */}
      <ScreenshotsGallery />

      {/* 6. Why Play Arrow Flow Puzzle Mania? */}
      <WhyPlay />

      {/* 7. Home FAQ Preview Section */}
      <section className="py-20 relative overflow-hidden bg-slate-950/90 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-game-purple/15 border border-game-purple/30 text-xs font-bold text-game-purple-light uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-300">
              Quick answers about playing Arrow Flow Puzzle Mania.
            </p>
          </div>

          <FAQAccordion items={previewFaqs} defaultExpandedIndex={0} />

          <div className="text-center pt-2">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-game-blue/50 text-white font-bold text-sm transition-all"
            >
              <span>View All Questions & Answers</span>
              <ArrowRight className="w-4 h-4 text-game-blue" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Download CTA Section */}
      <DownloadSection />
    </div>
  );
}

