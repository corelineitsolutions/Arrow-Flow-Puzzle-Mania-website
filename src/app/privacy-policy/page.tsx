import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, FileText, Mail, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description:
    "Privacy Policy for Arrow Flow Puzzle Mania. Learn how player data, game telemetry, and privacy rights are handled.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 5, 2026";

  return (
    <div className="pt-28 pb-20 relative overflow-hidden bg-radial-gradient">
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-game-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs text-slate-400 font-mono">
            Last Updated: {lastUpdated} • Game: {siteConfig.name}
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">1. Introduction</h2>
            <p>
              This Privacy Policy explains how <strong>Arrow Flow Puzzle Mania</strong> (referred to as &quot;the Game&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and safeguards information when you play our mobile game application or visit our official website.
            </p>
            <p className="text-xs text-slate-400 bg-white/5 p-3 rounded-xl border border-white/10">
              <em>Note for Legal Compliance:</em> This document includes configurable operational placeholders representing typical casual game data processing frameworks. Specific third-party vendor contracts (e.g. ad networks, analytics suites) should be finalized in accordance with applicable regional laws prior to live store deployment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">2. Information Collected</h2>
            <p>
              We collect information in the following categories to provide gameplay stability, leaderboard features, and customer support:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Player Support Submissions:</strong> Information provided voluntarily through our support desk (full name, email address, player ID, issue descriptions, and uploaded screenshot attachments).
              </li>
              <li>
                <strong className="text-white">In-Game Purchases:</strong> Transaction receipts validated via Apple App Store or Google Play Store. We do not store or process payment card numbers directly.
              </li>
              <li>
                <strong className="text-white">Voluntary Feedback:</strong> Suggestions and ratings shared through official feedback channels.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">3. Device Information</h2>
            <p>
              When you download and run the Game, certain device metrics may be collected automatically by runtime diagnostic frameworks:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Device model and manufacturer (e.g. iPhone 15, Samsung S23).</li>
              <li>Operating system type and version (iOS, iPadOS, Android).</li>
              <li>Screen resolution, GPU family, and available system memory (RAM).</li>
              <li>Unique advertising identifiers (such as IDFA or GAID, subject to user consent permissions on your device).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">4. Game Usage Data</h2>
            <p>
              To balance puzzle difficulty and detect broken stages, the Game collects anonymous gameplay telemetry:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Level completion status, retry counts, and puzzle completion durations.</li>
              <li>Number of hints consumed per puzzle pack.</li>
              <li>Crash logs, memory exceptions, and application freeze reports.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">5. Advertising & Analytics</h2>
            <p>
              The Game may integrate third-party mobile advertising and analytics partners (e.g., Google AdMob, Unity Ads, Firebase Analytics) to support free-to-play availability.
            </p>
            <p>
              These services may use cookies or device IDs to deliver relevant ads and evaluate performance. You can reset or opt out of personalized advertising anytime in your mobile device&apos;s privacy settings:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-slate-300">
              <li><strong>iOS:</strong> Settings &gt; Privacy &amp; Security &gt; Tracking</li>
              <li><strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Delete Advertising ID</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">6. Data Storage & Security</h2>
            <p>
              Game save states (such as highest level reached and stars unlocked) are stored locally on your device and, if enabled, synchronized with official cloud services (Apple iCloud / Google Play Saved Games).
            </p>
            <p>
              Support tickets and diagnostic crash data are stored in secure environments with encrypted transport (TLS 1.3). We enforce role-based access controls to prevent unauthorized data exposure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">7. Data Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may disclose data only under the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>With certified infrastructure and analytics partners who assist in game operation.</li>
              <li>When required by law, subpoena, or valid judicial request.</li>
              <li>To protect the security, integrity, and intellectual property of the Game.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">8. User Rights & Data Deletion</h2>
            <p>
              Depending on your jurisdiction (such as GDPR in the European Union or CCPA/CPRA in California), you may have the right to request access to, correction of, or permanent deletion of your data.
            </p>
            <p>
              To request account or progress data deletion, please contact our privacy desk at{" "}
              <a href={`mailto:${siteConfig.support.email}`} className="text-game-blue underline">
                {siteConfig.support.email}
              </a>{" "}
              with the subject &quot;Data Deletion Request&quot; and your Player ID.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black text-white">9. Contact Information</h2>
            <p>
              For any questions regarding this Privacy Policy or your personal information, reach out to our team at:
            </p>
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-1 font-mono text-xs">
              <p className="text-white font-bold">{siteConfig.name} - Privacy Desk</p>
              <p>Email: <a href={`mailto:${siteConfig.support.email}`} className="text-game-blue">{siteConfig.support.email}</a></p>
              <p>Website: <a href={siteConfig.url} className="text-game-blue">{siteConfig.url}</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

