"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Globe, Mail, ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/common/Logo";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-[#101415] border-t border-white/10 pt-28 pb-12 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-16 max-w-[1440px] mx-auto relative z-10">
        {/* Brand Column */}
        <div className="col-span-1">
          <div className="mb-6">
            <Logo size="lg" />
          </div>
          <p className="text-[#c5c9ac] opacity-80 mb-8 max-w-xs leading-relaxed text-base font-poppins">
            Meningkatkan daya saing brand melalui rekayasa software berkinerja tinggi dan sistem desain modern.
          </p>
          <div className="flex gap-4">
            <a
              href="https://cnztechno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#c8f300] hover:text-[#171e00] hover:border-[#c8f300] transition-all"
              aria-label="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@cnztechno.com"
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/80 hover:bg-[#c8f300] hover:text-[#171e00] hover:border-[#c8f300] transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="col-span-1">
          <h4 className="font-bold text-lg text-white mb-6 tracking-tight font-montserrat">Layanan Spesialis</h4>
          <ul className="space-y-4 font-poppins">
            {[
              { label: "Sistem Desain UI/UX", href: "/services/ui-ux" },
              { label: "Pengembangan Web Full-Stack", href: "/services/web-dev" },
              { label: "Aplikasi Mobile (iOS & Android)", href: "/services/mobile-apps" },
              { label: "SEO Teknis & Pertumbuhan", href: "/services/seo-optimization" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[#c5c9ac] opacity-80 hover:text-[#c8f300] hover:opacity-100 transition-all text-base block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div className="col-span-1">
          <h4 className="font-bold text-lg text-white mb-6 tracking-tight font-montserrat">Perusahaan</h4>
          <ul className="space-y-4 font-poppins">
            {[
              { label: "Tentang Kami", href: "#about" },
              { label: "Studi Kasus & Portfolio", href: "#portfolio" },
              { label: "Harga & Paket", href: "#pricing" },
              { label: "Testimoni Klien", href: "#testimonials" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[#c5c9ac] opacity-80 hover:text-[#c8f300] hover:opacity-100 transition-all text-base block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="col-span-1">
          <h4 className="font-bold text-lg text-white mb-6 tracking-tight font-montserrat">Buletin Insight</h4>
          <p className="text-[#c5c9ac] opacity-80 mb-6 text-base font-poppins">
            Dapatkan wawasan terbaru seputar skalabilitas produk digital dan desain teknologi.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Alamat Email Anda"
              className="bg-[#1d2022]/60 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#c8f300] focus:border-[#c8f300] text-white text-base w-full p-3.5 backdrop-blur-sm outline-none transition-all placeholder:text-white/40 font-poppins"
            />
            <button
              type="submit"
              className="bg-[#c8f300] text-[#171e00] p-3.5 rounded-xl hover:bg-white transition-colors cursor-pointer flex items-center justify-center min-w-[50px]"
              aria-label="Langganan Buletin"
            >
              {subscribed ? <Check className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </button>
          </form>
          {subscribed && (
            <p className="text-[#c8f300] text-sm mt-2 font-poppins">Terima kasih telah berlangganan!</p>
          )}
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#c5c9ac] opacity-60 font-poppins">
        <p>© {new Date().getFullYear()} CnZ Techno. Hak cipta dilindungi undang-undang.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-[#c8f300] hover:opacity-100 transition-colors">
            Kebijakan Privasi
          </Link>
          <Link href="#" className="hover:text-[#c8f300] hover:opacity-100 transition-colors">
            Syarat & Ketentuan
          </Link>
        </div>
      </div>
    </footer>
  );
}
