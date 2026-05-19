import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Rohan Hake | Full Stack MERN & AI Engineer",
  description: "Luxury portfolio of Rohan Hake. Specializing in high-performance MERN applications, Generative AI pipelines, and 2M+ record data analytics.",
  keywords: ["Rohan Hake", "Full Stack Developer", "AI Engineer", "Data Scientist", "MERN Stack", "Next.js Portfolio", "Generative AI", "RAG Architecture"],
  authors: [{ name: "Rohan Hake" }],
  openGraph: {
    title: "Rohan Hake | Full Stack & AI Engineer",
    description: "Interactive 3D portfolio showcasing next-gen web and AI engineering.",
    url: "https://rohanhake.dev", // User can update this
    siteName: "Synapse.OS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Hake | Full Stack & AI Engineer",
    description: "Interactive 3D portfolio showcasing next-gen web and AI engineering.",
  },
  robots: {
    index: true,
    follow: true,
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans selection:bg-accent-primary selection:text-bg-void`}>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
