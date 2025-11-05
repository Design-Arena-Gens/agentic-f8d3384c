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
  title: "Facebook পোস্ট | Hideout মাঙ্গা বাংলায়",
  description:
    "Hideout মাঙ্গা বাংলা অনুবাদের জন্য প্রস্তুত Facebook পোস্ট—Bong Manga 24 পাঠকদের জন্য সাজানো।",
  openGraph: {
    title: "Hideout মাঙ্গা বাংলায় | Facebook পোস্ট টেমপ্লেট",
    description:
      "Hideout মাঙ্গার শ্বাসরুদ্ধকর বাংলা অনুবাদের খবর ছড়াতে প্রস্তুত পোস্ট কপি ও ডিজাইন প্রিভিউ।",
    url: "https://agentic-f8d3384c.vercel.app",
    siteName: "Bong Manga 24",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hideout মাঙ্গা বাংলায় | Facebook পোস্ট টেমপ্লেট",
    description:
      "Hideout মাঙ্গা এখন Bong Manga 24-এ—ব্যবহারযোগ্য বাংলা Facebook পোস্ট টেমপ্লেট।",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
