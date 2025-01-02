import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pinar Boztepe | Full-Stack Developer",
  description: "Full-Stack Developer specializing in modern web technologies. Explore my portfolio and projects.",
  keywords: "Full-Stack Developer, Web Development, React, Next.js, TypeScript, Pinar Boztepe",
  openGraph: {
    title: "Pinar Boztepe | Full-Stack Developer",
    description: "Full-Stack Developer specializing in modern web technologies",
    url: "https://pinarboztepe.com", // Replace with your actual domain
    siteName: "Pinar Boztepe Portfolio",
    images: [
      {
        url: "/images/pinar_profile.jpeg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Pinar Boztepe",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900">
          <ThemeProvider attribute="class" defaultTheme="system">
            <Header />
            <main className="flex-grow bg-gray-200 dark:bg-zinc-800 pt-10">
              <div className="mx-auto">{children}</div>
            </main>
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
