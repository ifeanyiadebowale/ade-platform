import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { ArrowUpRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | Digital Pulse Networks",
  description:
    "Guides, templates and digital products from Digital Pulse Networks, built on Selar.",
};

const resources = [
  {
    title: "Blogging for Beginners",
    category: "Content",
    description:
      "How to start a blog that people can actually find, based on what worked and what didn't.",
  },
  {
    title: "SEO Starter Guide",
    category: "Marketing",
    description:
      "The fundamentals of search traffic, written for someone with zero technical background.",
  },
  {
    title: "Google AdSense Explained",
    category: "Monetization",
    description:
      "A plain-language breakdown of how AdSense works and what to expect realistically.",
  },
  {
    title: "Affiliate Marketing Basics",
    category: "Monetization",
    description:
      "Getting started with affiliate income without falling for the hype around it.",
  },
  {
    title: "Content Writing Toolkit",
    category: "Content",
    description:
      "Templates and prompts for writing faster without losing your own voice.",
  },
  {
    title: "Email Marketing 101",
    category: "Marketing",
    description:
      "Why an email list still matters, and how to start one with no budget.",
  },
  {
    title: "Social Media Growth Guide",
    category: "Marketing",
    description:
      "A practical approach to growing on TikTok and Instagram as a beginner creator.",
  },
  {
    title: "Freelancing for Nigerians",
    category: "Business",
    description:
      "How to find and deliver your first freelance gigs as a digital skill beginner.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="container py-16 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue">Resources</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Guides built from what I&rsquo;ve actually tested.
          </h1>
          <p className="mt-4 text-ink/70">
            These digital products live on the DPN Selar store. Each one
            comes from something I built, tried, or learned the hard way —
            not repackaged theory.
          </p>
        </div>
        <Button
          href="https://selar.co"
          variant="secondary"
        >
          Visit the Selar store <ArrowUpRight size={14} className="ml-1" />
        </Button>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Panel key={resource.title} className="flex h-full flex-col">
            <FileText size={20} className="text-blue" strokeWidth={1.75} />
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink/40">
              {resource.category}
            </p>
            <h3 className="mt-2 font-display text-base font-semibold text-ink">
              {resource.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-ink/60">
              {resource.description}
            </p>
          </Panel>
        ))}
      </div>

      <p className="mt-8 text-sm text-ink/40">
        Placeholder catalog for this first version — direct purchase links
        will connect once the Selar integration is added.
      </p>
    </div>
  );
}
