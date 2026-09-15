"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Layers, TrendingUp } from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative min-h-[94vh] flex flex-col items-center justify-center pt-20 pb-24 overflow-hidden">
      {/* Dynamic Ambient Glow Blobs */}
      <div className="glow-bg top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="glow-bg-secondary top-[65%] right-[5%] opacity-30"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 md:px-16 max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center">
          <SectionBadge pulse>
            Studio Rekayasa Produk Digital &amp; Skalabilitas Bisnis
          </SectionBadge>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[76px] font-black leading-[1.08] mb-8 tracking-tight text-white font-montserrat">
          Presisi Rekayasa Software, <br />
          <span className="italic font-semibold text-gradient-lime">Pengalaman Digital</span> yang Menghasilkan
        </h1>

        <p className="text-lg md:text-xl text-[#c5c9ac] max-w-3xl mx-auto mb-10 leading-relaxed font-poppins">
          Kami merancang dan membangun platform digital berkinerja tinggi—mulai dari sistem otomatisasi &amp; portal operasional yang tangguh hingga website dan aplikasi mobile berkecepatan kilat yang melipatgandakan konversi penjualan Anda.
        </p>

        {/* Quick Value Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm font-poppins text-[#e0e3e5]">
          <div className="flex items-center gap-2 bg-[#1d2022]/70 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <Layers className="w-4 h-4 text-[#c8f300]" />
            <span>Infrastruktur Cloud Anti-Down</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1d2022]/70 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <TrendingUp className="w-4 h-4 text-[#c8f300]" />
            <span>Alur Transaksi Cepat &amp; Zero-Friction</span>
          </div>
          <div className="flex items-center gap-2 bg-[#1d2022]/70 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-[#c8f300]" />
            <span>100% Hak Milik Source Code Penuh</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button
            onClick={onOpenConsultation}
            variant="primary"
            size="lg"
            className="flex items-center gap-2.5 shadow-[0_0_40px_rgba(200,243,0,0.35)] font-montserrat hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-5 h-5 text-[#171e00]" />
            Mulai Konsultasi Proyek Gratis
          </Button>

          <Link href="#portfolio">
            <Button
              variant="glass"
              size="lg"
              className="group flex items-center gap-3 w-full sm:w-auto font-montserrat"
            >
              Jelajahi Portofolio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Floating Mockup Graphics with Interactive Floating Metric Badges */}
      <div className="relative w-full max-w-[1550px] mx-auto mt-16 px-6 md:px-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center relative">
          {/* Left card */}
          <div className="relative group">
            <GlassCard className="p-2 overflow-hidden transform md:-rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-700 shadow-2xl border-white/10 group-hover:border-[#c8f300]/40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh57SG-coLAoUV_ob5vBxwBbTC1174AK3Neual0SZ1QVcUMWiK-DNZisddEEgeydCGks2NFH1Rn7LTfGE1HpoLL-CxytqOyhpIGc8Sk4oQaCP1zNf-CDA2l4iQWh0XhwAv7xd-_jLb24Lmzdx9SsS7pklTG2xuN9uJKHfVLdRjUs-eh8w33KI_aqBmsvWzrhnRdeuij0PFwsgl61MypwnzD3wnTQU3pI8AuUCYFhq5IekCPY4etfZfAQKItbUqEY6ZYwJBATDNjTTb"
                alt="Dashboard Analytics UI"
                className="w-full h-auto aspect-[4/3] object-cover rounded-xl"
                loading="eager"
              />
            </GlassCard>

            {/* Floating Badge (Left Metric) */}
            <div className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-4 bg-[#14181b]/95 border border-[#c8f300]/30 p-3 sm:p-4 rounded-2xl shadow-2xl backdrop-blur-xl animate-float hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#c8f300]/10 flex items-center justify-center text-[#c8f300] font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#8e9193] font-bold font-montserrat">
                  Keandalan Sistem
                </p>
                <p className="text-xs sm:text-sm font-extrabold text-white font-montserrat">
                  99.9% Uptime SLA &amp; Anti-Down
                </p>
              </div>
            </div>
          </div>

          {/* Center Card (Elevated & Scaled) */}
          <div className="relative group z-20">
            <GlassCard className="p-2 overflow-hidden transform md:scale-110 shadow-[0_20px_60px_-15px_rgba(200,243,0,0.3)] hover:scale-115 transition-all duration-700 border-[#c8f300]/50 ring-1 ring-[#c8f300]/30">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXDNl8_avX0qI33GgQiHZOtANH52TMye1pYKbs3JmF9To1FUeGRissSmEQNo7Xo7fBK3CiAixugmh2guyf3I0dFcNStbzLeMCY5BDHLRP0U-GAhL-T2g6wiHHiJqQ-JAjy2z5FSxPeoxWVWVA8oKzsK3_GJxPS4QPKLveDMX2O0utxZRhmevSriUQ7sUft-jfbD9DKJxc31JVe86BRW2YPKuK-1LBPX8RUn8xEMHhLB6qOGzv8EMivb63tTxQfDcUpRu_mbCjauutc"
                alt="Mobile App UI"
                className="w-full h-auto aspect-[3/4] object-cover rounded-xl"
                loading="eager"
              />
            </GlassCard>

            {/* Floating Live Badge Top Center */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#c8f300] text-[#171e00] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-[0_0_20px_rgba(200,243,0,0.5)] font-montserrat flex items-center gap-1.5 whitespace-nowrap">
              <Zap className="w-3.5 h-3.5 fill-[#171e00]" />
              Kecepatan Muat &lt; 0.8s
            </div>
          </div>

          {/* Right Card */}
          <div className="relative group">
            <GlassCard className="p-2 overflow-hidden transform md:rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-700 shadow-2xl border-white/10 group-hover:border-[#c8f300]/40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHCRhcsDmYdoWldS5-AoITMPvkIpAnl2ijzYJOqLQ-Qsz1EXzHn8mcyerBGj-A-isv_9XpXJodpN3LtRASrC5ZhMTUmvEdcJ7l7V4onTOIVFAJccqS9vCelhSmros6675W36vpP9OKjMnVqrA4ZP0FcgA0ja16FJB8ZLgLOSqXrsDh7emWraBUxDn15roLi4HUhOM7SsyF_PyC6usnsT3q8CBw3Ldzaf65nSyaD4OV05UEuNBAlhRJacTl-M3Klr_jbbzi_Ze-tE7d"
                alt="Creative Platform UI"
                className="w-full h-auto aspect-[4/3] object-cover rounded-xl"
                loading="eager"
              />
            </GlassCard>

            {/* Floating Badge (Right Metric) */}
            <div className="absolute -bottom-4 -right-3 sm:-bottom-6 sm:-right-4 bg-[#14181b]/95 border border-[#c8f300]/30 p-3 sm:p-4 rounded-2xl shadow-2xl backdrop-blur-xl animate-float-delayed hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#c8f300]/15 flex items-center justify-center text-[#c8f300] font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#8e9193] font-bold font-montserrat">
                  Pertumbuhan Bisnis
                </p>
                <p className="text-xs sm:text-sm font-extrabold text-white font-montserrat">
                  +300% Lonjakan Konversi Transaksi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


