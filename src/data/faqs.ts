import { FAQItem } from "@/types";

export const allFaqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "Gameplay",
    question: "How do I start playing Arrow Flow Puzzle Mania?",
    answer:
      "Simply download the game from Google Play or the App Store, launch it, and complete the quick 3-level interactive tutorial. Each level presents a grid with directional arrows. Your goal is to tap the arrows that have an unobstructed exit path off the board or into designated targets without colliding with neighboring tiles.",
  },
  {
    id: "faq-2",
    category: "Technical Issues",
    question: "Why is my game crashing?",
    answer:
      "Game crashes can occur due to low device memory, outdated operating systems, or corrupted temporary cache files. Try restarting your mobile device, freeing up at least 500 MB of storage, and ensuring you are running the latest version of Arrow Flow Puzzle Mania from your app store. If crashes persist, submit a ticket via our Support page with your device model.",
  },
  {
    id: "faq-3",
    category: "Progress",
    question: "How can I recover my game progress?",
    answer:
      "If you linked your game to Google Play Games (Android) or Apple Game Center / Apple ID (iOS), your progress is automatically saved to the cloud. Simply log into the same store account on your new device and launch the game. If you played offline as a guest and lost progress after a reinstall, please reach out through our Support page with your approximate level and Player ID.",
  },
  {
    id: "faq-4",
    category: "Gameplay",
    question: "What should I do if a level is not working?",
    answer:
      "Every single level in Arrow Flow Puzzle Mania is mathematically verified to have at least one valid solution. If an arrow seems unresponsive, ensure no other arrow is blocking its escape path. You can also use the in-game 'Hint' lightbulb button or the 'Restart' button. If an arrow genuinely freezes or visual artifacts appear, please take a screenshot and report it through our Support form.",
  },
  {
    id: "faq-5",
    category: "Technical Issues",
    question: "How do I report a bug?",
    answer:
      "Navigate to our dedicated Support page (/support), select 'Feedback / Suggestion' or 'Level / Puzzle Issue' in the category dropdown, provide a concise subject, and describe what happened right before the bug occurred. Attaching a screenshot helps our development team isolate and patch the issue quickly.",
  },
  {
    id: "faq-6",
    category: "General",
    question: "How can I contact support?",
    answer:
      "You can submit a ticket directly through our website support form at /support, call or message our helpline at 8624851123, or email us at corelineitsolutions@gmail.com. Our support team typically reviews inquiries within 24-48 business hours.",
  },
  {
    id: "faq-7",
    category: "Payments",
    question: "How do I request help with a purchase?",
    answer:
      "If you purchased an in-game item (such as Ad-Free mode, coin packs, or extra hints) and didn't receive it, first tap the 'Restore Purchases' button in the game settings menu. If it still doesn't appear, fill out the support form selecting 'Purchase / Payment Issue' and attach your Google Play Order Receipt (GPA number) or Apple App Store receipt.",
  },
  {
    id: "faq-8",
    category: "Gameplay",
    question: "Can I play Arrow Flow Puzzle Mania offline?",
    answer:
      "Yes! Arrow Flow Puzzle Mania supports full offline play for all core puzzle levels. You don't need Wi-Fi or cellular data to solve puzzles on planes, subways, or remote areas. An internet connection is only needed for cloud saves, daily online tournaments, and restoring purchases.",
  },
  {
    id: "faq-9",
    category: "Gameplay",
    question: "How does the Hint System work?",
    answer:
      "When you are stuck on a complex maze of interlocking arrows, tap the Hint lightbulb at the bottom of the screen. The game will highlight the next safe arrow that can be cleared without causing a deadlock.",
  },
  {
    id: "faq-10",
    category: "Progress",
    question: "Can I sync progress between Android and iOS?",
    answer:
      "Cross-platform synchronization is supported if you sign into your Coreline Cloud Account inside the game settings. Linking allows your stars, unlocked puzzle packs, and coin balance to seamlessly travel between your phone and tablet.",
  },
  {
    id: "faq-11",
    category: "Payments",
    question: "Is Arrow Flow Puzzle Mania free to play?",
    answer:
      "Yes, Arrow Flow Puzzle Mania is 100% free to download and play. All core levels can be completed without spending any real money. Optional in-app purchases are available for players who want extra hints, cosmetic arrow skins, or an ad-free experience.",
  },
];

// FAQs specifically featured on the Support page as requested
export const supportFaqs = allFaqs.slice(0, 7);

