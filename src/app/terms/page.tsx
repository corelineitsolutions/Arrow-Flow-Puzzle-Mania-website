import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteConfig.name}`,
  description:
    "Terms and Conditions governing the use of Arrow Flow Puzzle Mania mobile game and website.",
};

export default function TermsPage() {
  const lastUpdated = "November 5, 2026";

  return (
    <div className="pt-28 pb-20 relative overflow-hidden bg-radial-gradient">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-game-purple/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="space-y-3 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-game-purple/15 border border-game-purple/30 text-game-purple-light text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Agreement</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Terms &amp; Conditions
          </h1>

          <p className="text-xs text-slate-400 font-mono">
            Last Updated: {lastUpdated} • Game: {siteConfig.name}
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">1. Agreement to Terms</h2>
            <p>
              By installing, downloading, accessing, or playing <strong>Arrow Flow Puzzle Mania</strong> (&quot;the Game&quot;), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not download, install, or use the Game.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">2. Gameplay Rules & Fair Play</h2>
            <p>
              Arrow Flow Puzzle Mania is intended for personal, non-commercial entertainment. Players agree to maintain fair sportsmanship:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>You may not use bots, automated scripts, memory editors, or cheats to manipulate puzzle scores or level completion records.</li>
              <li>You may not reverse-engineer, decompile, or extract source assets, code, or audio files from the application.</li>
              <li>You may not exploit game glitches or bugs to artificially gain in-game currency or hints; please report bugs via our Support page.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">3. Virtual Items & Purchases</h2>
            <p>
              The Game may offer virtual currency, cosmetic skins, ad-removal passes, or hint packs. All purchases are processed securely through the Apple App Store or Google Play Store.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Virtual items have no monetary value in the real world and cannot be transferred, exchanged, or refunded except as provided by platform store policies.</li>
              <li>We reserve the right to manage, modify, or eliminate virtual currency or item quantities at our discretion without liability.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">4. Intellectual Property</h2>
            <p>
              All game mechanics, puzzle layouts, artwork, user interface designs, logos, sound effects, soundtracks, animations, and branding associated with Arrow Flow Puzzle Mania are the exclusive intellectual property of the game developers and publishers.
            </p>
            <p>
              No portion of the Game may be copied, reproduced, distributed, or modified without prior written authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">5. Disclaimer of Warranties</h2>
            <p>
              Arrow Flow Puzzle Mania is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. While we strive to ensure a smooth, bug-free gameplay experience, we do not guarantee uninterrupted, crash-free, or error-free performance on all hardware configurations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, the creators and operators of Arrow Flow Puzzle Mania shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or inability to use the Game.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate player access to online features, tournaments, or cloud services if a player violates these terms or engages in fraudulent activity.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">8. Contact Information</h2>
            <p>
              If you have any questions or require legal clarification regarding these terms, please contact:
            </p>
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-1 font-mono text-xs">
              <p className="text-white font-bold">{siteConfig.name} - Legal Compliance</p>
              <p>Email: <a href={`mailto:${siteConfig.support.email}`} className="text-game-blue">{siteConfig.support.email}</a></p>
              <p>Support URL: <Link href="/support" className="text-game-blue">{siteConfig.url}/support</Link></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

