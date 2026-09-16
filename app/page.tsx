import Link from "next/link";
import { ArrowUpRight, BookOpen, Bot, Briefcase, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/panel";

const buildingBlocks = [
  { label: "Products live on Selar", value: "10" },
  { label: "Days of public content challenge", value: "30" },
  { label: "Focus areas, not forty", value: "3" },
];

const tracks = [
  {
    icon: Bot,
    title: "Artificial Intelligence",
    description:
      "Practical AI tools for research, content and business — not just theory.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Content, SEO and social media that actually reach people, tested in public.",
  },
  {
    icon: Briefcase,
    title: "Business & Entrepreneurship",
    description:
      "How to turn a skill into a product, and a product into an income stream.",
  },
  {
    icon: BookOpen,
    title: "Personal Development",
    description:
      "The habits, focus and discipline behind building something that lasts.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="container grid gap-12 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <p className="text-sm font-medium text-blue">
              Digital Pulse Networks
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
              I&rsquo;m ADE. I&rsquo;m building a digital business from
              scratch, in public.
            </h1>
            <p className="mt-6 max-w-md text-base text-ink/70">
              Digital Pulse Networks is where I document what actually works
              in AI, digital skills and online business — no pretending to be
              an expert, just what I&rsquo;ve tested and learned.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/ade-weekly">Join ADE Weekly</Button>
              <Button href="/about" variant="secondary">
                About ADE
              </Button>
            </div>
          </div>

          <div className="flex items-center">
            <Panel className="w-full bg-mist">
              <p className="text-sm font-medium text-ink/50">
                Currently building
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {buildingBlocks.map((block) => (
                  <div key={block.label}>
                    <p className="font-display text-3xl font-semibold text-ink">
                      {block.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-ink/60">
                      {block.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-line pt-6">
                <p className="text-sm text-ink/70">
                  &ldquo;I&rsquo;d rather show you the process than pretend
                  I&rsquo;ve already arrived.&rdquo;
                </p>
                <p className="mt-2 text-xs text-ink/40">— ADE</p>
              </div>
            </Panel>
          </div>
        </div>
      </section>

      {/* About ADE, short */}
      <section className="border-b border-line py-16 md:py-20">
        <div className="container grid gap-10 md:grid-cols-[0.4fr_0.6fr] md:gap-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Who ADE is
          </h2>
          <div className="max-w-prose space-y-4 text-ink/70">
            <p>
              ADE is the personal brand of Ifeanyi Adebowale, a Nigerian
              digital entrepreneur building his skills and businesses from
              the ground up — in public, mistakes included.
            </p>
            <p>
              The long-term goal is bigger than one product or one platform:
              financial independence, useful skills, and a body of work that
              helps other young people take digital opportunities seriously.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-blue"
            >
              Read the full story <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* What DPN is */}
      <section className="border-b border-line bg-mist py-16 md:py-20">
        <div className="container grid gap-10 md:grid-cols-[0.4fr_0.6fr] md:gap-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            What Digital Pulse Networks is
          </h2>
          <div className="max-w-prose space-y-4 text-ink/70">
            <p>
              Digital Pulse Networks (DPN) is the business behind ADE — a
              digital education and resource platform for young people,
              students, creators and beginners who want practical skills in
              AI, digital marketing, business and career-building.
            </p>
            <p>
              It&rsquo;s built deliberately, one layer at a time: audience
              first, trust first, skills first — then products and
              monetization grow around that foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Learn / tracks */}
      <section className="border-b border-line py-16 md:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              What you can learn here
            </h2>
            <Link
              href="/learn"
              className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-blue"
            >
              See the full learning path <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((track) => (
              <Panel key={track.title} className="h-full">
                <track.icon size={22} className="text-blue" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {track.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60">{track.description}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* ADE Weekly */}
      <section className="border-b border-line bg-blue-deep py-16 text-paper md:py-20">
        <div className="container grid gap-10 md:grid-cols-[0.55fr_0.45fr] md:items-center">
          <div>
            <p className="text-sm font-medium text-paper/60">Newsletter</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
              ADE Weekly
            </h2>
            <p className="mt-4 max-w-md text-paper/70">
              One short email a week — one thing I learned about AI, one
              thing I learned about building DPN, and one practical action
              you can take. No noise, no hype.
            </p>
          </div>
          <div>
            <div className="ml-embedded" data-form="1J1IPR"></div>
            <p className="mt-3 text-xs text-paper/40">
    
            </p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="border-b border-line py-16 md:py-20">
        <div className="container grid gap-10 md:grid-cols-[0.55fr_0.45fr] md:items-center">
          <div>
            <p className="text-sm font-medium text-blue">Community</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">
              DPN Community
            </h2>
            <p className="mt-4 max-w-md text-ink/70">
              A space for people building their digital skills alongside
              ADE — students, beginners and young creators asking questions,
              sharing progress and holding each other accountable.
            </p>
            <div className="mt-6">
              <Button href="/community" variant="secondary">
                Learn how it works
              </Button>
            </div>
          </div>
          <Panel className="bg-mist">
            <ul className="space-y-4 text-sm text-ink/70">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                Weekly discussion on what people are building or stuck on
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                Early access to new guides and resources from DPN
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                Direct questions to ADE on AI, content and business
              </li>
            </ul>
          </Panel>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20">
        <div className="container flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-mist p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Start where you are.
            </h2>
            <p className="mt-2 max-w-md text-ink/70">
              Explore what DPN has built so far, or say hello directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/resources">Browse resources</Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
