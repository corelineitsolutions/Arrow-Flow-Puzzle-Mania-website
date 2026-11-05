export const siteConfig = {
  name: "Arrow Flow Puzzle Mania",
  shortName: "Arrow Flow",
  tagline: "Think Smart. Move Arrows. Master the Puzzle!",
  subheading:
    "Challenge your mind with addictive arrow puzzles. Follow the flow, solve tricky levels, and become the ultimate puzzle master!",
  description:
    "Arrow Flow Puzzle Mania is an exciting casual mobile puzzle game that challenges your logic, planning, and problem-solving skills. Navigate arrow-based puzzles, discover the correct moves, and complete levels through smart thinking and strategy.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://arrowflowgame.com",
  version: "v1.2.4",
  releaseYear: 2026,
  support: {
    email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "corelineitsolutions@gmail.com",
    phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE || "8624851123",
    responseTime: process.env.NEXT_PUBLIC_SUPPORT_RESPONSE_TIME || "Within 24-48 business hours",
    hours: "Monday - Friday, 9:00 AM - 6:00 PM",
  },
  stores: {
    googlePlay: {
      url: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL || "https://play.google.com/store/apps/details?id=com.arrowflow.puzzlemania",
      name: "Google Play",
      available: true,
      badgeText: "GET IT ON",
    },
    appStore: {
      url: process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apps.apple.com/app/arrow-flow-puzzle-mania/id1234567890",
      name: "App Store",
      available: true,
      badgeText: "Download on the",
    },
  },
  stats: {
    rating: "4.8",
    reviewsCount: "12,400+",
    levelsCount: "500+",
    downloadsCount: "500K+",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Game", href: "/#about" },
    { label: "Features", href: "/#features" },
    { label: "How to Play", href: "/#how-to-play" },
    { label: "Screenshots", href: "/#screenshots" },
    { label: "FAQ", href: "/faq" },
    { label: "Support", href: "/support" },
  ],
  keywords: [
    "Arrow Flow Puzzle Mania",
    "Arrow puzzle game",
    "Arrow flow game",
    "Logic puzzle game",
    "Brain puzzle game",
    "Mobile puzzle game",
    "Casual puzzle games",
    "Brain training games",
    "Offline puzzle games",
  ],
};

