"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenConsultation?: () => void;
}

export function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Radial Glow Blob */}
      <div className="glow-bg top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="glow-bg-secondary top-[60%] right-[10%] opacity-20"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 md:px-16 max-w-5xl mx-auto">
        <div className="mb-8 flex justify-center">
          <SectionBadge pulse>Studio Produk Digital Generasi Baru</SectionBadge>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[76px] font-extrabold leading-[1.08] mb-8 tracking-tight text-white font-montserrat">
          Bangun Produk Digital Skalabel, <br />
          <span className="italic font-semibold text-gradient-lime">Bukan Sekadar</span> Website Biasa
        </h1>

        <p className="text-lg md:text-xl text-[#c5c9ac] max-w-3xl mx-auto mb-12 leading-relaxed font-poppins">
          Kami menjembatani kompleksitas teknik rekayasa software dengan estetika desain UI/UX berkelas dunia
          untuk melahirkan pengalaman digital yang mendorong pertumbuhan dan loyalitas pengguna.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button
            onClick={onOpenConsultation}
            variant="primary"
            size="lg"
            className="flex items-center gap-2.5 shadow-[0_0_40px_rgba(200,243,0,0.35)]"
          >
            <Sparkles className="w-5 h-5 text-[#171e00]" />
            Mulai Project
          </Button>

          <Link href="#portfolio">
            <Button variant="glass" size="lg" className="group flex items-center gap-3 w-full sm:w-auto">
              Lihat Studi Kasus
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Floating Mockup Graphics */}
      <div className="relative w-full max-w-[1550px] mx-auto mt-20 px-6 md:px-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {/* Left card */}
          <GlassCard className="p-2 overflow-hidden transform md:-rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-700 shadow-2xl border-white/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh57SG-coLAoUV_ob5vBxwBbTC1174AK3Neual0SZ1QVcUMWiK-DNZisddEEgeydCGks2NFH1Rn7LTfGE1HpoLL-CxytqOyhpIGc8Sk4oQaCP1zNf-CDA2l4iQWh0XhwAv7xd-_jLb24Lmzdx9SsS7pklTG2xuN9uJKHfVLdRjUs-eh8w33KI_aqBmsvWzrhnRdeuij0PFwsgl61MypwnzD3wnTQU3pI8AuUCYFhq5IekCPY4etfZfAQKItbUqEY6ZYwJBATDNjTTb"
              alt="Dashboard Analytics UI"
              className="w-full h-auto aspect-[4/3] object-cover rounded-xl"
              loading="eager"
            />
          </GlassCard>

          {/* Center Card (Elevated & Scaled) */}
          <GlassCard className="p-2 overflow-hidden transform md:scale-110 z-20 shadow-[0_20px_60px_-15px_rgba(200,243,0,0.25)] hover:scale-115 transition-all duration-700 border-[#c8f300]/40">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXDNl8_avX0qI33GgQiHZOtANH52TMye1pYKbs3JmF9To1FUeGRissSmEQNo7Xo7fBK3CiAixugmh2guyf3I0dFcNStbzLeMCY5BDHLRP0U-GAhL-T2g6wiHHiJqQ-JAjy2z5FSxPeoxWVWVA8oKzsK3_GJxPS4QPKLveDMX2O0utxZRhmevSriUQ7sUft-jfbD9DKJxc31JVe86BRW2YPKuK-1LBPX8RUn8xEMHhLB6qOGzv8EMivb63tTxQfDcUpRu_mbCjauutc"
              alt="Fintech Mobile App UI"
              className="w-full h-auto aspect-[3/4] object-cover rounded-xl"
              loading="eager"
            />
          </GlassCard>

          {/* Right Card */}
          <GlassCard className="p-2 overflow-hidden transform md:rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-700 shadow-2xl border-white/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHCRhcsDmYdoWldS5-AoITMPvkIpAnl2ijzYJOqLQ-Qsz1EXzHn8mcyerBGj-A-isv_9XpXJodpN3LtRASrC5ZhMTUmvEdcJ7l7V4onTOIVFAJccqS9vCelhSmros6675W36vpP9OKjMnVqrA4ZP0FcgA0ja16FJB8ZLgLOSqXrsDh7emWraBUxDn15roLi4HUhOM7SsyF_PyC6usnsT3q8CBw3Ldzaf65nSyaD4OV05UEuNBAlhRJacTl-M3Klr_jbbzi_Ze-tE7d"
              alt="Creative Platform UI"
              className="w-full h-auto aspect-[4/3] object-cover rounded-xl"
              loading="eager"
            />
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
