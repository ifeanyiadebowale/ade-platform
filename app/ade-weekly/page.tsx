import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADE Weekly | Digital Pulse Networks",
  description:
    "ADE Weekly — a short, honest weekly email on AI, digital skills and building Digital Pulse Networks.",
};

const pastTopics = [
  "What I learned testing 3 AI tools for content research",
  "Why my blog traffic stayed flat for 4 months",
  "A simple system for staying consistent without burning out",
  "How I priced my first digital product on Selar",
];

export default function AdeWeeklyPage() {
  return (
    <div className="container py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-[0.55fr_0.45fr] md:items-start">
        <div>
          <p className="text-sm font-medium text-blue">Newsletter</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            ADE Weekly
          </h1>
          <p className="mt-4 max-w-md text-ink/70">
            One short email a week. One thing I learned about AI, one thing
            I learned building Digital Pulse Networks, and one practical
            action you can take this week. That&rsquo;s it — no noise.
          </p>

          <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:max-w-md">
            <label htmlFor="weekly-email" className="sr-only">
              Email address
            </label>
            <input
              id="weekly-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-full border border-line bg-paper px-5 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:border-blue focus-visible:outline-none"
            />
            <Button className="shrink-0">Subscribe</Button>
          </form>
          <p className="mt-3 text-xs text-ink/40">
            Free, weekly, unsubscribe anytime. Sign-up isn&rsquo;t connected
            yet in this first version of the site.
          </p>
        </div>

        <Panel className="bg-mist">
          <p className="text-sm font-medium text-ink/50">Recent topics</p>
          <ul className="mt-5 space-y-4 text-sm text-ink/70">
            {pastTopics.map((topic) => (
              <li key={topic} className="flex gap-3 border-b border-line pb-4 last:border-0 last:pb-0">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                {topic}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
