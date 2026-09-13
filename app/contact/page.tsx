import { Panel } from "@/components/ui/panel";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Digital Pulse Networks",
  description: "Get in touch with ADE and Digital Pulse Networks.",
};

const socials = [
  { label: "TikTok", handle: "@ifeanyiadebowale", href: "https://tiktok.com/@ifeanyiadebowale" },
  { label: "YouTube", handle: "@ifeanyiadebowale", href: "https://youtube.com/@ifeanyiadebowale" },
  { label: "LinkedIn", handle: "ifeanyiadebowale", href: "https://linkedin.com/in/ifeanyiadebowale" },
  { label: "X", handle: "@ifeanyadebowale", href: "https://x.com/ifeanyadebowale" },
];

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-[0.55fr_0.45fr]">
        <div>
          <p className="text-sm font-medium text-blue">Contact</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Say hello.
          </h1>
          <p className="mt-4 max-w-md text-ink/70">
            Questions about DPN, the community, or a collaboration idea —
            reach out directly. I read everything that comes in.
          </p>

          <form className="mt-8 space-y-4 max-w-md">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:border-blue focus-visible:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:border-blue focus-visible:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus-visible:border-blue focus-visible:outline-none"
                placeholder="What's on your mind?"
              />
            </div>
            <Button type="submit">Send message</Button>
            <p className="text-xs text-ink/40">
              This form isn&rsquo;t wired up to send messages yet in this
              first version — use the email or socials for now.
            </p>
          </form>
        </div>

        <Panel className="h-fit bg-mist">
          <p className="text-sm font-medium text-ink/50">Direct</p>
          <a
            href="mailto:ifeanyiadebowale@gmail.com"
            className="mt-3 flex items-center gap-2 text-sm font-medium text-ink hover:text-blue"
          >
            <Mail size={16} /> ifeanyiadebowale@gmail.com
          </a>

          <p className="mt-6 text-sm font-medium text-ink/50">Follow</p>
          <ul className="mt-3 space-y-3">
            {socials.map((s) => (
              <li key={s.label} className="flex items-baseline justify-between text-sm">
                <a href={s.href} target="_blank" rel="noreferrer" className="font-medium text-ink hover:text-blue">
                  {s.label}
                </a>
                <span className="text-ink/40">{s.handle}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
