import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ADE | Digital Pulse Networks",
  description:
    "The story behind ADE — a young Nigerian entrepreneur building Digital Pulse Networks from scratch.",
};

const timeline = [
  {
    year: "Stage 1",
    title: "Finished secondary school",
    detail:
      "Standing at a transition point — not yet in university, but already building.",
  },
  {
    year: "Stage 2",
    title: "Started experimenting",
    detail:
      "Blogging, SEO, a Selar store, digital guides, a WhatsApp community — testing what works.",
  },
  {
    year: "Stage 3",
    title: "Chose focus over more projects",
    detail:
      "Narrowed everything into three layers: education (law), personal brand (ADE), and business (DPN).",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-[0.55fr_0.45fr]">
        <div>
          <p className="text-sm font-medium text-blue">About</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            I&rsquo;m Ifeanyi Adebowale. Most people know me as ADE.
          </h1>
          <div className="mt-6 max-w-prose space-y-4 text-ink/70">
            <p>
              I&rsquo;m a young Nigerian building myself and my business from
              the ground up. I haven&rsquo;t entered university yet — one of
              my long-term goals is to become a successful international
              lawyer — but I don&rsquo;t want law to be my whole identity.
            </p>
            <p>
              I see myself combining law, entrepreneurship, education and
              technology. Digital Pulse Networks is where that shows up
              first: a place to learn practical AI and digital skills,
              documented honestly as I learn them myself.
            </p>
            <p>
              I&rsquo;ve tried a lot already — blogging, digital products, a
              community, different content formats. Some of it worked, some
              didn&rsquo;t. I&rsquo;d rather show that process than pretend
              I arrived here as an expert.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>

        <Panel className="h-fit bg-mist">
          <p className="text-sm font-medium text-ink/50">What I&rsquo;m focused on</p>
          <ul className="mt-5 space-y-4 text-sm text-ink/70">
            <li>
              <span className="font-medium text-ink">Layer 1 — Education.</span>{" "}
              Law and academics, the long game.
            </li>
            <li>
              <span className="font-medium text-ink">Layer 2 — ADE.</span>{" "}
              My personal brand, where I document and teach.
            </li>
            <li>
              <span className="font-medium text-ink">Layer 3 — DPN.</span>{" "}
              The business, built deliberately over time.
            </li>
          </ul>
        </Panel>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
          How I got here
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {timeline.map((item) => (
            <Panel key={item.title}>
              <p className="text-sm font-medium text-blue">{item.year}</p>
              <h3 className="mt-3 font-display text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{item.detail}</p>
            </Panel>
          ))}
        </div>
      </div>
    </div>
  );
}
