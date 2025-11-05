'use client';

import { useState } from "react";

const postBody = `🔒 অন্ধকারের নিবাসে ডুব দিতে প্রস্তুত?

Hideout মাঙ্গার ভয়াল রহস্য আর শ্বাসরুদ্ধকর কাহিনি এখন সম্পূর্ণ বাংলা ভাষায় পড়ুন Bong Manga 24-এ! গভীর জঙ্গলের আতঙ্ক আর মানব মনের অন্ধকার কোণগুলোর ভয়াবহতা তুলে ধরা এই গল্প এখন আপনার হাতের মুঠোয়।

• প্রতিটি অধ্যায় নিখুঁত বাংলায় অনুবাদ
• মোবাইল ও ডেস্কটপে সুবিধাজনক রিডিং অভিজ্ঞতা
• রাতের পর রাত জেগে রাখার মত থ্রিলার অনুভূতি

👉 এখনই পড়ুন: https://bongmanga24.com/hideout-bangla`;

const hashtags = `#Hideout #BanglaManga #BongManga24 #হররমাঙ্গা #বাংলাঅনুবাদ`;

const fullPost = `${postBody}\n\n${hashtags}`;

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullPost);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Failed to copy post", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 text-zinc-900">
      <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-12 px-6 py-16 lg:px-12">
        <section className="space-y-5">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Social Launch Kit</p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Facebook পোস্ট: Hideout মাঙ্গা এখন বাংলায়
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
            নিচের পোস্ট কপি করে আপনার Facebook পেজে শেয়ার করুন। বাংলা পাঠকদের জন্য Hideout মাঙ্গার নতুন রিলিজের খবর ছড়িয়ে দিন।
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-2xl shadow-zinc-900/5">
            <header className="mb-6 flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-semibold text-white">
                BM24
              </div>
              <div>
                <p className="text-base font-semibold text-zinc-900">Bong Manga 24</p>
                <p className="text-sm text-zinc-500">Sponsored · বাংলা হরর ফিচার</p>
              </div>
            </header>
            <div className="space-y-4 text-[17px] leading-7 text-zinc-800">
              {postBody.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
              <p className="flex flex-wrap gap-x-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-600">
                {hashtags.split(" ").map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </p>
            </div>
            <footer className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
              <div
                className="h-48 bg-gradient-to-br from-slate-950 via-slate-700 to-amber-600"
                aria-hidden="true"
              />
              <div className="bg-zinc-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
                  bongmanga24.com
                </p>
                <h2 className="mt-1 text-lg font-semibold text-zinc-900">
                  Hideout মাঙ্গা এখন বাংলায় পড়ুন
                </h2>
                <p className="mt-2 text-sm text-zinc-600">
                  ভয়ংকর জগতে টিকে থাকার গল্প এখন বাংলা পাঠকদের জন্য উন্মুক্ত।
                </p>
              </div>
            </footer>
          </article>

          <aside className="flex flex-col justify-between gap-6 rounded-3xl border border-dashed border-blue-200 bg-blue-50/50 p-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-900">পোস্ট কপি করুন</h2>
              <p className="text-sm leading-6 text-blue-900/80">
                এক ক্লিকে নিচের টেক্সট কপি করে আপনার Facebook পেজ বা গ্রুপে শেয়ার করুন।
              </p>
            </div>
            <div className="relative flex-1">
              <textarea
                readOnly
                value={fullPost}
                className="h-full w-full rounded-2xl border border-blue-200 bg-white/70 p-4 text-[15px] leading-7 text-zinc-800 shadow-inner focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
              >
                {copied ? "কপি সম্পন্ন" : "কপি করুন"}
              </button>
            </div>
            <div className="space-y-3 text-sm text-blue-900/70">
              <p>✅ পোস্টে অন্তর্ভুক্ত রয়েছে সম্পূর্ণ বাংলা কপি, লিংক ও হ্যাশট্যাগ।</p>
              <p>💡 চাইলে স্ক্রিনশট হিসেবে ব্যবহারের জন্য উপরের কার্ডটি ডিজাইন রেফারেন্স দিবে।</p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
