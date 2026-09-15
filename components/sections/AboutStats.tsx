"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { CountUp } from "@/components/ui/CountUp";
import { ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";

export function AboutStats() {
  const statsList = [
    {
      end: 99.9,
      decimals: 1,
      suffix: "%",
      label: "Keandalan Sistem & Uptime",
      description: "Infrastruktur cloud tangguh tanpa risiko downtime",
    },
    {
      end: 320,
      decimals: 0,
      suffix: "%",
      label: "Peningkatan Konversi Rata-rata",
      description: "Optimasi alur transaksi dan retensi pengguna",
    },
    {
      end: 150,
      decimals: 0,
      suffix: "+",
      label: "Produk Sukses Diluncurkan",
      description: "Portal enterprise, e-commerce, & aplikasi mobile",
    },
    {
      end: 0.8,
      decimals: 1,
      suffix: "s",
      label: "Kecepatan Muat Ekstrem",
      description: "Lolos uji Google Core Web Vitals hijau sempurna",
    },
  ];

  return (
    <section id="about" className="py-28 bg-[#0b0f10] relative overflow-hidden">
      {/* Secondary Ambient Glow */}
      <div className="glow-bg-secondary top-1/2 -right-1/4 opacity-30"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left Column Text */}
        <div className="reveal-on-scroll">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c8f300] bg-[#1d2022] px-3.5 py-1.5 rounded-full border border-white/10 mb-6 font-montserrat">
            <Cpu className="w-4 h-4" /> Filosofi Rekayasa Produk
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-white font-montserrat">
            Presisi <span className="text-[#c8f300] italic font-semibold">Engineering</span> dengan{" "}
            <span className="text-gradient-purple italic font-semibold">Jiwa Kreatif</span>
          </h2>

          <p className="text-lg md:text-xl text-[#c5c9ac] mb-10 leading-relaxed font-poppins">
            CnZ Techno adalah studio rekayasa produk digital dan konsultan teknologi. Kami membantu bisnis merancang, membangun, dan memperluas skala produk modern—mulai dari sistem enterprise yang kompleks dan otomatis hingga platform konsumen yang memikat dengan alur transaksi instan.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-4 border-t border-white/10">
            {statsList.map((stat) => (
              <div key={stat.label} className="group p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#c8f300]/30 transition-all">
                <div className="text-4xl md:text-5xl text-[#c8f300] font-black mb-1.5 tracking-tighter font-montserrat">
                  <CountUp
                    end={stat.end}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    duration={2200}
                  />
                </div>
                <div className="text-xs text-white uppercase tracking-wider font-bold font-montserrat mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-[#8e9193] font-poppins">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Visual Dashboard */}
        <div className="relative reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
          <GlassCard className="p-3 border-[#c8f300]/30 overflow-hidden shadow-[0_0_50px_rgba(200,243,0,0.12)] group">
            <img
              alt="Analytics Dashboard Performance"
              className="w-full rounded-xl object-cover h-[400px] md:h-[500px] group-hover:scale-102 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtTi-VZ7-syLhCR1dfJmz2RTi7-MBptK5bNYKvAMOT_ImBHfc0KtiPSvQUeAnmIIFdmQUdLu4a-6Tn5CS8yaWZSD6Gi5nAJcOJ_Qq_ePoNrUvGvLX17gqCus7-Jg5z6zlewfFskoezLZbN6rFC7i-8GIzG78lkkQHpMunaQ3RNfKZxN7zEfvtk8CqJDjEO09ffYfRnpNZNhUv83D-vU5x3DlOuWdhsboRLTFCRb4mllM2oTwrACWeKbTDlH"
            />
          </GlassCard>

          {/* Floating Badge Bottom Left */}
          <div className="absolute -bottom-8 -left-6 md:-bottom-8 md:-left-8 glass-card p-6 md:p-7 rounded-2xl border-[#c8f300]/30 hidden sm:block max-w-[300px] backdrop-blur-3xl shadow-2xl animate-float">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-xl bg-[#c8f300] text-[#171e00]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#c8f300] uppercase tracking-wider font-montserrat">
                Keandalan & Kecepatan
              </span>
            </div>
            <p className="text-white text-sm md:text-base font-bold leading-snug font-montserrat">
              Akselerasi MVP & sistem enterprise tanpa kompromi kualitas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


