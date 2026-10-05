import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Namish Yadav",
  description:
    "How this portfolio handles your data. Short version: it does not collect any.",
};

const sections = [
  {
    title: "What this site collects",
    body: "Nothing. This portfolio is a static showcase. There are no accounts, no login, and no forms that store data on this site itself.",
  },
  {
    title: "Contact form",
    body: "If you use the contact form, your name, email, subject, and message are sent to Web3Forms so Namish can read and reply to your message. Your details are not stored anywhere on this site.",
  },
  {
    title: "Cookies",
    body: "This site does not set any cookies. No consent banner is shown because there is nothing to consent to.",
  },
  {
    title: "Analytics",
    body: "In production this site uses Vercel Analytics, which records anonymous page-view statistics to understand traffic. It does not use cookies and does not identify you.",
  },
  {
    title: "Links to other sites",
    body: "Links to GitHub, LinkedIn, Instagram, and the main portfolio open external sites. Their own privacy policies apply once you leave this page.",
  },
  {
    title: "Questions",
    body: "If you have questions about this policy, reach out through the contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-4xl font-bold mb-2">
          Privacy Policy<span className="text-[#e945f5]">.</span>
        </h1>
        <p className="text-neutral-500 text-sm mb-10">Last updated: October 2026</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold mb-2 text-white">
                {section.title}
              </h2>
              <p className="text-neutral-400 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
