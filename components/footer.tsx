import Link from "next/link";

const columns = [
  {
    title: "Platform",
    links: [
      { href: "/about", label: "About ADE" },
      { href: "/learn", label: "Learn" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/ade-weekly", label: "ADE Weekly" },
      { href: "/community", label: "DPN Community" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

const socials = [
  { href: "https://tiktok.com/@ifeanyiadebowale", label: "TikTok" },
  { href: "https://youtube.com/@ifeanyiadebowale", label: "YouTube" },
  { href: "https://linkedin.com/in/ifeanyiadebowale", label: "LinkedIn" },
  { href: "https://x.com/ifeanyadebowale", label: "X" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold">ADE</p>
          <p className="mt-3 max-w-xs text-sm text-paper/60">
            Building Digital Pulse Networks in public — practical AI, digital
            skills and business lessons for people starting from scratch.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-medium text-paper/50">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/80 hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-medium text-paper/50">Follow</p>
          <ul className="mt-4 space-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-paper/80 hover:text-paper"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Digital Pulse Networks. Built by ADE.</p>
          <p>Lagos, Nigeria — building for a global audience.</p>
        </div>
      </div>
    </footer>
  );
}
