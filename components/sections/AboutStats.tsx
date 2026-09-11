"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { CountUp } from "@/components/ui/CountUp";
import { Zap } from "lucide-react";

export function AboutStats() {
  const statsList = [
    {
      end: 98,
      decimals: 0,
      suffix: "%",
      label: "Tingkat Retensi Klien",
      description: "Kemitraan jangka panjang dengan hasil konsisten",
    },
    {
      end: 150,
      decimals: 0,
      suffix: "+",
      label: "Produk Sukses Rilis",
      description: "Web app, mobile apps & portal enterprise",
    },
    {
      end: 4.9,
      decimals: 1,
      suffix: "/5",
      label: "Kepuasan Pelanggan",
      description: "Ulasan terverifikasi dari founder & perusahaan",
    },
    {
      end: 10,
      decimals: 0,
      suffix: "x",
      label: "Akselerasi Rilis",
      description: "Siklus sprint gesit dengan teknologi modern",
    },
  ];

  return (
    <section id="about" className="py-28 bg-[#0b0f10] relative overflow-hidden">
      {/* Secondary Glow */}
      <div className="glow-bg-secondary top-1/2 -right-1/4"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left Column Text */}
        <div className="reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight text-white font-montserrat">
            Presisi <span className="text-[#c8f300] italic font-semibold">Engineering</span> dengan
            Jiwa Kreatif
          </h2>

          <p className="text-lg md:text-xl text-[#c5c9ac] mb-12 leading-relaxed font-poppins">
            CnZ Techno adalah studio kreatif dan konsultan teknologi yang membantu bisnis
            merancang, mengembangkan, dan memperluas skala produk digital modern. Kami tidak sekadar
            mengikuti tren; kami menetapkan standar pengalaman digital visioner.
          </p>

          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {statsList.map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-5xl md:text-6xl text-[#c8f300] font-extrabold mb-2 tracking-tighter font-montserrat">
                  <CountUp
                    end={stat.end}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    duration={2200}
                  />
                </div>
                <div className="text-xs md:text-sm text-[#c5c9ac] uppercase tracking-widest font-bold font-montserrat group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Visual Dashboard */}
        <div className="relative reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
          <GlassCard className="p-3 border-[#c8f300]/30 overflow-hidden shadow-[0_0_40px_rgba(200,243,0,0.1)]">
            <img
              alt="Analytics Dashboard"
              className="w-full rounded-xl object-cover h-[400px] md:h-[500px]"
              src="https://lh3.googleusercontent.com/aida/AP1WRLtTi-VZ7-syLhCR1dfJmz2RTi7-MBptK5bNYKvAMOT_ImBHfc0KtiPSvQUeAnmIIFdmQUdLu4a-6Tn5CS8yaWZSD6Gi5nAJcOJ_Qq_ePoNrUvGvLX17gqCus7-Jg5z6zlewfFskoezLZbN6rFC7i-8GIzG78lkkQHpMunaQ3RNfKZxN7zEfvtk8CqJDjEO09ffYfRnpNZNhUv83D-vU5x3DlOuWdhsboRLTFCRb4mllM2oTwrACWeKbTDlH"
            />
          </GlassCard>

          {/* Floating Badge */}
          <div className="absolute -bottom-8 -left-6 md:-bottom-10 md:-left-10 glass-card p-6 md:p-8 rounded-2xl border-white/20 hidden sm:block max-w-[280px] backdrop-blur-3xl shadow-2xl">
            <Zap className="w-10 h-10 text-[#c8f300] mb-4" />
            <p className="text-white text-base md:text-lg font-bold leading-tight font-montserrat">
              Akselerasi pengembangan MVP Anda dengan presisi tinggi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
