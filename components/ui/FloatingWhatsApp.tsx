"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, Send } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSendWA = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "6281234567890"; // Ganti dengan nomor WhatsApp aktif
    const text = encodeURIComponent(
      msg || "Halo CnZ Techno, saya ingin konsultasi mengenai pembuatan produk digital/website."
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Pop-up message box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-[#181c1e] border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex justify-between items-center pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#101415] border border-[#c8f300]/40 flex items-center justify-center p-1.5 shadow-md shadow-black/40 relative overflow-hidden">
                <Image
                  src="/logo-cnz.png"
                  alt="CnZ Techno Logo"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <p className="font-bold text-white text-sm">CnZ Product Consultant</p>
                <p className="text-xs text-[#c8f300] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c8f300] animate-pulse"></span>
                  Online • Siap Membantu
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="py-4">
            <div className="bg-[#272a2c] p-3 rounded-xl rounded-tl-none text-xs text-[#e0e3e5] leading-relaxed border border-white/5">
              Halo! 👋 Ingin mendiskusikan ide aplikasi, website, atau MVP Anda bersama tim CnZ?
              Kirim pesan langsung ke WhatsApp kami sekarang.
            </div>
          </div>

          <form onSubmit={handleSendWA} className="flex gap-2">
            <input
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Ketik pesan Anda..."
              className="bg-[#101415] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white w-full outline-none focus:border-[#c8f300]"
            />
            <button
              type="submit"
              className="bg-[#c8f300] text-[#171e00] p-2.5 rounded-xl hover:bg-white transition-colors flex items-center justify-center"
              aria-label="Kirim via WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#c8f300] text-[#171e00] flex items-center justify-center shadow-[0_0_30px_rgba(200,243,0,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
        aria-label="Chat WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#101415]"></span>
        <MessageCircle className="w-7 h-7 stroke-[2.2]" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-[#191c1e] text-xs font-semibold text-white border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
          Chat Konsultasi
        </span>
      </button>
    </div>
  );
}
