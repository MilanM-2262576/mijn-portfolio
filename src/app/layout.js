import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Milan Muroni | Student Informatica & Webontwikkelaar",
  description: "Portfolio van Milan Muroni, student Informatica UHasselt. Bekijk mijn projecten in Java, C++, Rust en meer. Beschikbaar voor freelance webontwikkeling.",
  keywords: ["Milan Muroni", "portfolio", "informatica", "UHasselt", "freelance", "webontwikkeling", "Java", "Rust", "React"],
  creator: "Milan Muroni",
  openGraph: {
    title: "Milan Muroni | Student Informatica & Webontwikkelaar",
    description: "Portfolio van Milan Muroni, student Informatica UHasselt",
    url: "https://milanmuroni.be",
    siteName: "Milan Muroni Portfolio",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Milan Muroni Portfolio"
      }
    ],
    locale: "nl_BE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
