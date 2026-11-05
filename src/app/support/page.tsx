import type { Metadata } from "next";
import { Mail, Clock, Gamepad2, Shield, LifeBuoy, Sparkles, MessageSquare, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SupportForm } from "@/components/support-form";
import { FAQAccordion } from "@/components/faq-accordion";
import { supportFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: `Player Support & Help Center | ${siteConfig.name}`,
  description:
    "Need help with Arrow Flow Puzzle Mania? Contact our official support team for technical assistance, level help, account recovery, and feedback.",
};

export default function SupportPage() {
  return (
    <div className="pt-28 pb-20 relative overflow-hidden bg-radial-gradient">
      {/* Background glowing orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-game-purple/20 via-game-blue/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Support Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-game-blue/15 border border-game-blue/30 text-xs font-bold text-game-blue uppercase tracking-wider">
            <LifeBuoy className="w-4 h-4" />
            <span>Official Help Desk</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Need Help? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-blue via-game-purple-light to-game-orange">
              We&apos;re Here for You!
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Having trouble with Arrow Flow Puzzle Mania? Our support team is here to help you.
          </p>
        </div>

        {/* Support Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Support Phone (Clickable) */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 transition-colors shadow-game-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Direct Helpline
              </span>
              <h3 className="text-xl font-black text-white mt-1 mb-2">
                Phone Support
              </h3>
              <p className="text-xs text-slate-300 mb-3">
                Call or message our official developer support helpline.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href={`tel:${siteConfig.support.phone}`}
                className="inline-flex items-center gap-2 text-base font-bold text-emerald-400 hover:text-white transition-colors"
              >
                <span>{siteConfig.support.phone}</span>
                <span>➔</span>
              </a>
            </div>
          </div>

          {/* Card 2: Support Email (Clickable) */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 hover:border-game-blue/40 transition-colors shadow-game-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-game-blue/20 border border-game-blue/40 text-game-blue flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Direct Inquiries
              </span>
              <h3 className="text-xl font-black text-white mt-1 mb-2">
                Support Email
              </h3>
              <p className="text-xs text-slate-300 mb-3">
                Reach our customer care directly from any email client.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <a
                href={`mailto:${siteConfig.support.email}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-game-blue hover:text-white transition-colors break-all"
              >
                <span>{siteConfig.support.email}</span>
                <span>➔</span>
              </a>
            </div>
          </div>

          {/* Card 3: Response Window */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 shadow-game-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-game-orange/20 border border-game-orange/40 text-game-orange flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Support Hours
              </span>
              <h3 className="text-xl font-black text-white mt-1 mb-2">
                Response Window
              </h3>
              <p className="text-xs text-slate-300 mb-3">
                Tickets are queued and handled by dedicated game engineers.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5">
              <p className="text-xs font-bold text-game-yellow font-mono">
                {siteConfig.support.responseTime}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {siteConfig.support.hours}
              </p>
            </div>
          </div>

          {/* Card 4: Product Info */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 shadow-game-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-game-purple/20 border border-game-purple/40 text-game-purple-light flex items-center justify-center mb-4">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Product Info
              </span>
              <h3 className="text-xl font-black text-white mt-1 mb-2">
                {siteConfig.name}
              </h3>
              <p className="text-xs text-slate-300">
                Official casual puzzle game by Coreline Studios. Version {siteConfig.version}.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/5 text-xs text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Operational 24/7</span>
            </div>
          </div>
        </div>

        {/* Contact Support Form */}
        <div className="max-w-4xl mx-auto">
          <SupportForm />
        </div>

        {/* Support Page FAQ Section (7 Core FAQs from requirement) */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-white/10 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-game-purple/15 border border-game-purple/30 text-xs font-bold text-game-purple-light uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Quick Answers</span>
            </div>
            <h2 className="text-3xl font-black text-white">
              Frequently Asked Support Questions
            </h2>
            <p className="text-sm text-slate-300">
              Check if your question is answered below before submitting a ticket.
            </p>
          </div>

          <FAQAccordion items={supportFaqs} defaultExpandedIndex={0} />
        </div>
      </div>
    </div>
  );
}

