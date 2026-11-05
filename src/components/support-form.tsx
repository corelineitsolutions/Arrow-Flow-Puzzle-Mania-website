"use client";

import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  FileImage,
  X,
  Loader2,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { IssueCategory, SupportTicketSubmission } from "@/types";
import { siteConfig } from "@/config/site";

const ISSUE_CATEGORIES: IssueCategory[] = [
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

const DEVICE_OPTIONS = [
  "Apple iPhone",
  "Apple iPad",
  "Samsung Galaxy",
  "Google Pixel",
  "Xiaomi / Redmi",
  "OnePlus",
  "Other Android Device",
  "Tablet (Android)",
  "Other",
];

const OS_OPTIONS = [
  "iOS 18+",
  "iOS 17",
  "iOS 16 or earlier",
  "iPadOS",
  "Android 15+",
  "Android 14",
  "Android 13",
  "Android 12 or earlier",
  "Other",
];

const GAME_VERSIONS = [
  "v1.2.4 (Latest)",
  "v1.2.0",
  "v1.1.5",
  "v1.0.0",
  "Not sure",
];

export function SupportForm() {
  const [formData, setFormData] = useState<SupportTicketSubmission>({
    fullName: "",
    email: "",
    playerId: "",
    deviceType: "",
    operatingSystem: "",
    gameVersion: GAME_VERSIONS[0],
    issueCategory: "Level / Puzzle Issue",
    subject: "",
    description: "",
  });

  const [screenshotFile, setScreenshotFile] = useState<{
    file: File;
    previewUrl: string;
    sizeFormatted: string;
  } | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<{
    ticketId: string;
    message: string;
  } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Full Name is required.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Email Address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid email format.";
    }

    if (!formData.deviceType) {
      errs.deviceType = "Please select your device type.";
    }

    if (!formData.operatingSystem) {
      errs.operatingSystem = "Please select your operating system.";
    }

    if (!formData.gameVersion) {
      errs.gameVersion = "Please specify game version.";
    }

    if (!formData.issueCategory) {
      errs.issueCategory = "Please select an issue category.";
    }

    if (!formData.subject.trim()) {
      errs.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 4) {
      errs.subject = "Subject should be at least 4 characters.";
    }

    if (!formData.description.trim()) {
      errs.description = "Detailed description is required.";
    } else if (formData.description.trim().length < 15) {
      errs.description = "Please describe the issue in at least 15 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type
    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        screenshot: "Only PNG, JPG, or JPEG images are supported.",
      }));
      return;
    }

    // Validate size (max 5 MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        screenshot: "Image must be under 5 MB in size.",
      }));
      return;
    }

    setErrors((prev) => {
      const copy = { ...prev };
      delete copy.screenshot;
      return copy;
    });

    const previewUrl = URL.createObjectURL(file);
    const sizeFormatted = (file.size / (1024 * 1024)).toFixed(2) + " MB";

    setScreenshotFile({
      file,
      previewUrl,
      sizeFormatted,
    });
  };

  const removeScreenshot = () => {
    if (screenshotFile?.previewUrl) {
      URL.revokeObjectURL(screenshotFile.previewUrl);
    }
    setScreenshotFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      let screenshotPayload = undefined;

      if (screenshotFile) {
        // Read as base64 data url for upload preview & payload
        const base64Promise = new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(screenshotFile.file);
        });

        const base64Data = await base64Promise;
        screenshotPayload = {
          filename: screenshotFile.file.name,
          contentType: screenshotFile.file.type,
          size: screenshotFile.file.size,
          base64Data,
        };
      }

      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          screenshot: screenshotPayload,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit request.");
      }

      setSubmitSuccess({
        ticketId: result.ticketId,
        message: result.message,
      });

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        playerId: "",
        deviceType: "",
        operatingSystem: "",
        gameVersion: GAME_VERSIONS[0],
        issueCategory: "Level / Puzzle Issue",
        subject: "",
        description: "",
      });
      removeScreenshot();
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative rounded-3xl bg-slate-900/90 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
      {/* Top Header Badge */}
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
        <div>
          <h3 className="text-2xl font-black text-white">Contact Support Form</h3>
          <p className="text-xs text-slate-400 mt-1">
            Fill in your details below. All fields with * are required.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Direct Ticket Routing</span>
        </div>
      </div>

      {/* Success Notification Modal / Card */}
      <AnimatePresence>
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-emerald-950/80 to-slate-900 border-2 border-emerald-500/50 shadow-glow-blue"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-lg font-black text-white">
                    Support Request Received!
                  </h4>
                  <span className="font-mono text-sm px-2.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-black">
                    Ticket: {submitSuccess.ticketId}
                  </span>
                </div>
                <p className="text-sm text-slate-200">{submitSuccess.message}</p>
                <div className="text-xs text-slate-400 pt-2 border-t border-emerald-500/20 flex flex-wrap gap-4">
                  <span>
                    Email: <strong className="text-white">{siteConfig.support.email}</strong>
                  </span>
                  <span>
                    Helpline: <strong className="text-white">{siteConfig.support.phone}</strong>
                  </span>
                  <span>
                    Response Window: <strong className="text-white">{siteConfig.support.responseTime}</strong>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSubmitSuccess(null)}
                className="text-slate-400 hover:text-white p-1"
                aria-label="Dismiss message"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* General Submission Error */}
      {submitError && (
        <div className="mb-6 p-4 rounded-xl bg-red-950/70 border border-red-500/50 flex items-center gap-3 text-red-200 text-sm">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Main Support Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Alex Mercer"
              className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                errors.fullName ? "border-red-500" : "border-white/10 focus:border-game-blue"
              } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. alex@example.com"
              className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                errors.email ? "border-red-500" : "border-white/10 focus:border-game-blue"
              } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
            />
            {errors.email && (
              <p className="text-xs text-red-400 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Row 2: Player ID (Optional) & Game Version */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Player ID <span className="text-slate-500 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              value={formData.playerId}
              onChange={(e) => setFormData({ ...formData, playerId: e.target.value })}
              placeholder="Found in Game Settings (e.g. #AFP-9941)"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 focus:border-game-blue text-white placeholder-slate-500 text-sm focus:outline-none transition-colors font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Game Version <span className="text-red-400">*</span>
            </label>
            <select
              value={formData.gameVersion}
              onChange={(e) => setFormData({ ...formData, gameVersion: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                errors.gameVersion ? "border-red-500" : "border-white/10 focus:border-game-blue"
              } text-white text-sm focus:outline-none transition-colors`}
            >
              {GAME_VERSIONS.map((v) => (
                <option key={v} value={v} className="bg-slate-900 text-white">
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 3: Device Type & Operating System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Device Type <span className="text-red-400">*</span>
            </label>
            <select
              value={formData.deviceType}
              onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                errors.deviceType ? "border-red-500" : "border-white/10 focus:border-game-blue"
              } text-white text-sm focus:outline-none transition-colors`}
            >
              <option value="" disabled className="text-slate-500">
                Select your device
              </option>
              {DEVICE_OPTIONS.map((device) => (
                <option key={device} value={device} className="bg-slate-900 text-white">
                  {device}
                </option>
              ))}
            </select>
            {errors.deviceType && (
              <p className="text-xs text-red-400 mt-1">{errors.deviceType}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Operating System <span className="text-red-400">*</span>
            </label>
            <select
              value={formData.operatingSystem}
              onChange={(e) => setFormData({ ...formData, operatingSystem: e.target.value })}
              className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
                errors.operatingSystem ? "border-red-500" : "border-white/10 focus:border-game-blue"
              } text-white text-sm focus:outline-none transition-colors`}
            >
              <option value="" disabled className="text-slate-500">
                Select operating system
              </option>
              {OS_OPTIONS.map((os) => (
                <option key={os} value={os} className="bg-slate-900 text-white">
                  {os}
                </option>
              ))}
            </select>
            {errors.operatingSystem && (
              <p className="text-xs text-red-400 mt-1">{errors.operatingSystem}</p>
            )}
          </div>
        </div>

        {/* Row 4: Issue Category (All 11 required categories) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Issue Category <span className="text-red-400">*</span>
          </label>
          <select
            value={formData.issueCategory}
            onChange={(e) =>
              setFormData({ ...formData, issueCategory: e.target.value as IssueCategory })
            }
            className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
              errors.issueCategory ? "border-red-500" : "border-white/10 focus:border-game-blue"
            } text-white text-sm focus:outline-none transition-colors`}
          >
            {ISSUE_CATEGORIES.map((cat) => (
              <option key={cat} value={cat} className="bg-slate-900 text-white">
                {cat}
              </option>
            ))}
          </select>
          {errors.issueCategory && (
            <p className="text-xs text-red-400 mt-1">{errors.issueCategory}</p>
          )}
        </div>

        {/* Row 5: Subject */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Subject <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="Brief summary of what happened"
            className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
              errors.subject ? "border-red-500" : "border-white/10 focus:border-game-blue"
            } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
          />
          {errors.subject && (
            <p className="text-xs text-red-400 mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Row 6: Detailed Description */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Detailed Description <span className="text-red-400">*</span>
          </label>
          <textarea
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Please detail the steps to reproduce, what you expected, and what actually occurred..."
            className={`w-full px-4 py-3 rounded-xl bg-slate-950 border ${
              errors.description ? "border-red-500" : "border-white/10 focus:border-game-blue"
            } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-y`}
          />
          {errors.description && (
            <p className="text-xs text-red-400 mt-1">{errors.description}</p>
          )}
        </div>

        {/* Row 7: Screenshot Upload (Max 5 MB, PNG/JPG/JPEG) */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
            Attach Screenshot <span className="text-slate-500 font-normal lowercase">(optional, max 5 MB, PNG/JPG)</span>
          </label>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/png, image/jpeg, image/jpg"
            className="hidden"
          />

          {!screenshotFile ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`p-6 rounded-2xl border-2 border-dashed ${
                errors.screenshot ? "border-red-500 bg-red-950/20" : "border-white/15 hover:border-game-blue/50 bg-slate-950/50"
              } cursor-pointer text-center transition-all hover:bg-slate-950/80`}
            >
              <UploadCloud className="w-8 h-8 text-game-blue mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-200">
                Click to browse or drop screenshot here
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Supported formats: PNG, JPG, JPEG (Max file size: 5 MB)
              </p>
            </div>
          ) : (
            <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={screenshotFile.previewUrl}
                  alt="Upload preview"
                  className="w-12 h-12 object-cover rounded-lg border border-white/15"
                />
                <div className="text-left text-xs">
                  <p className="font-bold text-white truncate max-w-[200px] sm:max-w-xs">
                    {screenshotFile.file.name}
                  </p>
                  <p className="text-slate-400">{screenshotFile.sizeFormatted}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeScreenshot}
                className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                title="Remove image"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {errors.screenshot && (
            <p className="text-xs text-red-400 mt-1">{errors.screenshot}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-game-purple via-game-blue to-game-purple bg-[length:200%_auto] hover:bg-right font-black text-white text-base shadow-game-btn hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting Support Request...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Support Request</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

