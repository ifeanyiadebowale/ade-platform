import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ADE | Digital Pulse Networks",
  description:
    "ADE is building Digital Pulse Networks in public — practical AI, digital skills and business lessons for young people starting from scratch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col font-sans"><Script
  src="https://assets.mailerlite.com/js/universal.js"
  strategy="afterInteractive"
/><Script id="mailerlite-account" strategy="afterInteractive">
  {`ml('account', '2636187');`}
</Script>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
import Script from "next/script"

