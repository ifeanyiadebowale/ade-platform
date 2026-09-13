import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Bot, Briefcase, Megaphone, PenTool } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn | Digital Pulse Networks",
  description:
    "Practical learning tracks in AI, digital marketing, business and content creation from Digital Pulse Networks.",
};

const stages = [
  {
    step: "1",
    title: "Foundations",
    detail: "Understand the tools and the mindset before chasing income.",
  },
  {
    step: "2",
    title: "Build",
    detail: "Create your first skill-based product or piece of content.",
  },
  {
    step: "3",
    title: "Share",
    detail: "Put it in front of real people and learn from the response.",
  },
  {
    step: "4",
    title: "Improve",
    detail: "Refine based on what actually worked, not what felt good.",
  },
];

const tracks = [
  {
    icon: Bot,
    title: "Artificial Intelligence",
    description:
      "Using AI tools for research, writing, content and business decisions — practically, not theoretically.",
    topics: ["AI fundamentals", "Prompting for real tasks", "AI for content creation"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "How to get the right people to see your work, without a huge budget.",
    topics: ["Social media basics", "SEO fundamentals", "Email & audience building"],
  },
  {
    icon: Briefcase,
    title: "Business & Entrepreneurship",
    description:
      "Turning a skill into a product, and a product into a repeatable income stream.",
    topics: ["Validating an idea", "Pricing digital products", "Reinvesting revenue"],
  },
  {
    icon: PenTool,
    title: "Content & Personal Branding",
    description:
      "Building a brand people trust, without pretending to be someone you&rsquo;re not.",
    topics: ["Finding your angle", "Short-form video basics", "Consistency systems"],
  },
];

export default function LearnPage() {
  return (
    <div className="container py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-blue">Learn</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Practical skills, taught the way I&rsquo;m learning them.
        </h1>
        <p className="mt-4 text-ink/70">
          Everything here is built around one idea: understand the reasoning,
          then take a practical next step. No 50-item lists, no pretending
          everything is easy.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
          How each track works
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage) => (
            <Panel key={stage.step}>
              <p className="font-display text-2xl font-semibold text-blue">
                {stage.step}
              </p>
              <h3 className="mt-3 text-sm font-semibold text-ink">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{stage.detail}</p>
            </Panel>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
          Learning tracks
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {tracks.map((track) => (
            <Panel key={track.title}>
              <track.icon size={22} className="text-blue" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {track.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{track.description}</p>
              <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm text-ink/70">
                {track.topics.map((topic) => (
                  <li key={topic} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    {topic}
                  </li>
                ))}
              </ul>
            </Panel>
          ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-mist p-8 md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
            Want the guides and templates?
          </h2>
          <p className="mt-2 max-w-md text-ink/70">
            The Resources page has the practical downloads that go with these
            tracks.
          </p>
        </div>
        <Button href="/resources">View resources</Button>
      </div>
    </div>
  );
}
