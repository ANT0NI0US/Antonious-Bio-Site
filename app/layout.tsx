import type { Metadata } from "next";
import "./globals.css";
import { Rakkas } from "next/font/google";

const griffy = Rakkas({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rakkas",
});

export const metadata: Metadata = {
  title: "Antonious Nasr | Frontend Developer",
  description:
    "I'm a React & Next.js frontend developer passionate about building performant, accessible web interfaces. Let's create something amazing.",
  authors: [{ name: "Antonious Nasr Kamel" }],
  keywords: ["Next.js", "HTML5", "CSS3", "React-Icons", "Tailwind CSS"],
  openGraph: {
    type: "website",
    url: "https://antonious-bio-site.vercel.app/",
    title: "Antonious Nasr | Frontend Developer",
    description: "Personal Bio Site",
    images: [
      {
        url: "https://res.cloudinary.com/dnekgcumk/image/upload/v1744062102/antonious_nasr_kamel_m1skdn.png?v=2",
        width: 300,
        height: 300,
        alt: "Antonious Nasr Photo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonious Nasr | Frontend Developer",
    description: "Personal Bio Site",
    images: [
      "https://res.cloudinary.com/dnekgcumk/image/upload/v1744062102/antonious_nasr_kamel_m1skdn.png?v=2",
    ],
    site: "https://antonious-bio-site.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${griffy.variable} antialiased`}>{children}</body>
    </html>
  );
}
