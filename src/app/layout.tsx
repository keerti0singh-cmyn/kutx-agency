import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KUTX AGENCY - AI-powered Web & Automation Solutions",
  description: "We build high-performance websites and intelligent AI agents that automate business workflows.",
  keywords: "web development, AI automation, chatbots, business solutions, digital agency",
  authors: [{ name: "KUTX AGENCY" }],
  openGraph: {
    title: "KUTX AGENCY - AI-powered Web & Automation Solutions",
    description: "We build high-performance websites and intelligent AI agents that automate business workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const isAdminRoute = pathname.startsWith('/admin')

  return (
    <html lang="en">
      <body className="antialiased">
        {!isAdminRoute && <Header />}
        <main>{children}</main>
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
