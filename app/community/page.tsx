import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { MessageCircle, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Community | Digital Pulse Networks",
  description:
    "DPN Community — a space for students, beginners and young creators building digital skills together.",
};

const pillars = [
  {
    icon: Users,
    title: "Peer accountability",
    description:
      "Share what you're building, get honest feedback, and stay consistent with people on the same path.",
  },
  {
    icon: MessageCircle,
    title: "Direct access",
    description:
      "Ask questions on AI, content and business directly — this isn't a broadcast-only channel.",
  },
  {
    icon: Sparkles,
    title: "Early access",
    description:
      "See new guides, resources and experiments from DPN before they go public.",
  },
];

export default function CommunityPage() {
  return (
    <div className="container py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-blue">Community</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          DPN Community
        </h1>
        <p className="mt-4 text-ink/70">
          A space for students, beginners and young creators who want to
          build digital skills — AI, content, business — alongside other
          people doing the same thing, not alone.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Panel key={pillar.title}>
            <pillar.icon size={22} className="text-blue" strokeWidth={1.75} />
            <h3 className="mt-4 font-display text-base font-semibold text-ink">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm text-ink/60">{pillar.description}</p>
          </Panel>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-mist p-8 md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
            Ready to join?
          </h2>
          <p className="mt-2 max-w-md text-ink/70">
            The community currently runs on WhatsApp while DPN builds a
            dedicated space. Reach out and I&rsquo;ll add you personally.
          </p>
        </div>
        <Button href="/auth">Join the community</Button>
      </div>
    </div>
  );
}
