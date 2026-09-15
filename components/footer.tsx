import Link from "next/link";
import { siteLinks } from "@/lib/site-links";

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

const externalLinks = [
  { href: siteLinks.selar, label: "Selar Store" },
  { href: siteLinks.blog, label: "DPN Blog" },
  { href: siteLinks.tiktok, label: "TikTok" },
  { href: siteLinks.youtube, label: "YouTube" },
  { href: siteLinks.linkedin, label: "LinkedIn" },
  { href: siteLinks.x, label: "X" },
  { href: siteLinks.substack, label: "Substack" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white text-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold">ADE</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-black/60">
            Building Digital Pulse Networks in public — practical AI, digital
            skills and business lessons for people starting from scratch.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-medium text-black/50">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/80 hover:text-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-medium text-black/50">My links</p>
          <ul className="mt-4 space-y-3">
            {externalLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-black/80 hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-black/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Digital Pulse Networks. Built by ADE.
          </p>
          <p>Lagos, Nigeria — building for a global audience.</p>
        </div>
      </div>
    </footer>
  );
}
