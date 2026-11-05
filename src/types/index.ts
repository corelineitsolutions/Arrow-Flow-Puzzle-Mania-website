export type IssueCategory =
  | "Game Not Opening"
  | "Level / Puzzle Issue"
  | "Game Progress Lost"
  | "Ads Issue"
  | "Rewards Issue"
  | "Purchase / Payment Issue"
  | "Game Crashing"
  | "Performance Issue"
  | "Account Issue"
  | "Feedback / Suggestion"
  | "Other";

export interface SupportTicketSubmission {
  fullName: string;
  email: string;
  playerId?: string;
  deviceType: string;
  operatingSystem: string;
  gameVersion: string;
  issueCategory: IssueCategory;
  subject: string;
  description: string;
  screenshot?: {
    filename: string;
    contentType: string;
    base64Data?: string;
    size: number;
  };
}

export interface SupportTicketRecord extends SupportTicketSubmission {
  id: string;
  createdAt: string;
  status: "open" | "in-review" | "resolved";
}

export interface FAQItem {
  id: string;
  category: "Gameplay" | "Technical Issues" | "Progress" | "Payments" | "General";
  question: string;
  answer: string;
}

export interface GameFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  color: "purple" | "blue" | "orange" | "yellow";
}

export interface GameScreenshot {
  id: string;
  title: string;
  subtitle: string;
  caption: string;
  accent: string;
  type: "classic" | "boss" | "daily" | "victory" | "themes";
}

