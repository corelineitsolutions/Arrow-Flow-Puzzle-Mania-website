import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { IssueCategory, SupportTicketRecord } from "@/types";

const VALID_CATEGORIES: IssueCategory[] = [
  "Game Not Opening",
  "Level / Puzzle Issue",
  "Game Progress Lost",
  "Ads Issue",
  "Rewards Issue",
  "Purchase / Payment Issue",
  "Game Crashing",
  "Performance Issue",
  "Account Issue",
  "Feedback / Suggestion",
  "Other",
];

const ALLOWED_MIME_TYPES = ["image/png", "image/jpeg", "image/jpg"];
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      playerId,
      deviceType,
      operatingSystem,
      gameVersion,
      issueCategory,
      subject,
      description,
      screenshot,
    } = body;

    // 1. Validation: Required text fields
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Full Name is required and must be at least 2 characters." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required for us to respond." },
        { status: 400 }
      );
    }

    if (!deviceType || typeof deviceType !== "string" || !deviceType.trim()) {
      return NextResponse.json(
        { error: "Device Type is required." },
        { status: 400 }
      );
    }

    if (!operatingSystem || typeof operatingSystem !== "string" || !operatingSystem.trim()) {
      return NextResponse.json(
        { error: "Operating System is required." },
        { status: 400 }
      );
    }

    if (!gameVersion || typeof gameVersion !== "string" || !gameVersion.trim()) {
      return NextResponse.json(
        { error: "Game Version is required." },
        { status: 400 }
      );
    }

    if (!issueCategory || !VALID_CATEGORIES.includes(issueCategory as IssueCategory)) {
      return NextResponse.json(
        { error: "Please select a valid Issue Category." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 4) {
      return NextResponse.json(
        { error: "Subject is required (minimum 4 characters)." },
        { status: 400 }
      );
    }

    if (!description || typeof description !== "string" || description.trim().length < 15) {
      return NextResponse.json(
        { error: "Detailed description is required (minimum 15 characters)." },
        { status: 400 }
      );
    }

    // 2. Validation: Optional Screenshot
    if (screenshot) {
      if (screenshot.size && screenshot.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { error: "Screenshot file exceeds maximum allowed size of 5 MB." },
          { status: 400 }
        );
      }

      if (screenshot.contentType && !ALLOWED_MIME_TYPES.includes(screenshot.contentType)) {
        return NextResponse.json(
          { error: "Unsupported image format. Allowed formats: PNG, JPG, JPEG." },
          { status: 400 }
        );
      }
    }

    // 3. Generate unique ticket ID
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const ticketId = `AFP-${new Date().getFullYear()}-${randomSuffix}`;
    const timestamp = new Date().toISOString();

    const record: SupportTicketRecord = {
      id: ticketId,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      playerId: playerId ? String(playerId).trim() : undefined,
      deviceType: deviceType.trim(),
      operatingSystem: operatingSystem.trim(),
      gameVersion: gameVersion.trim(),
      issueCategory: issueCategory as IssueCategory,
      subject: subject.trim(),
      description: description.trim(),
      screenshot: screenshot
        ? {
            filename: screenshot.filename || "screenshot.png",
            contentType: screenshot.contentType || "image/png",
            size: screenshot.size || 0,
            // Avoid saving full giant base64 into the metadata log to keep storage light
            base64Data: screenshot.base64Data ? "[Attached Image Validated]" : undefined,
          }
        : undefined,
      createdAt: timestamp,
      status: "open",
    };

    // 4. Persistence: save to JSON file store
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, "support-tickets.json");
      let tickets: SupportTicketRecord[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        try {
          tickets = JSON.parse(fileContent);
        } catch {
          tickets = [];
        }
      }

      tickets.unshift(record);
      fs.writeFileSync(filePath, JSON.stringify(tickets, null, 2), "utf-8");
    } catch (fsError) {
      console.warn("Could not write ticket to local filesystem storage:", fsError);
      // We still proceed if filesystem write fails in read-only hosting environments
    }

    // 5. Optional Webhook dispatch if configured
    const webhookUrl = process.env.SUPPORT_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith("http")) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "new_support_ticket",
            ticket: record,
          }),
        });
      } catch (webhookError) {
        console.error("Webhook notification error:", webhookError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        ticketId,
        message:
          "Your support request has been received. Our team will review it and reply to your email shortly.",
        createdAt: timestamp,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Support API route error:", error);
    return NextResponse.json(
      {
        error: "Failed to process support request. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}

