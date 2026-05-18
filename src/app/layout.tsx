import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Rohan Hake | Full Stack & AI Engineer",
  description: "Luxury portfolio of Rohan Hake, showcasing expertise in MERN stack, Generative AI, and Data Analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans selection:bg-accent-primary selection:text-bg-void`}>
        {children}
      </body>
    </html>
  );
}
