"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { pricingPlans } from "@/data/content";
import { Check, Sparkles, Zap, ShieldCheck } from "lucide-react";

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="py-28 bg-[#101415] relative overflow-hidden">
      {/* Ambient Radial Glow */}
      <div className="glow-bg top-[20%] right-[10%] opacity-30"></div>
      <div className="glow-bg bottom-[10%] left-[5%] opacity-20"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll max-w-3xl mx-auto">
          <div className="mb-4">
            <SectionBadge>Investasi Transparan</SectionBadge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight font-montserrat">
            Paket & <span className="text-[#c8f300] italic font-semibold">Investasi</span> Skalabel
          </h2>
          <p className="text-lg md:text-xl text-[#c5c9ac] leading-relaxed mb-6 font-poppins">
            Pilihan paket transparan berbasis hasil nyata untuk mempercepat peluncuran dan pertumbuhan bisnis online Anda.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1d2022] border border-white/10 text-xs text-[#c8f300] font-montserrat font-semibold shadow-inner">
            <ShieldCheck className="w-4 h-4 text-[#c8f300]" />
            Garansi 100% Hak Milik Penuh & Eksekusi Cepat
          </div>
        </div>

        {/* Pricing Cards Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <GlassCard
              key={plan.id}
              className={`p-6 sm:p-8 flex flex-col justify-between relative reveal-on-scroll transition-all duration-500 rounded-3xl ${
                plan.popular
                  ? "border-[#c8f300] shadow-[0_15px_50px_rgba(200,243,0,0.18)] xl:-translate-y-4 bg-gradient-to-b from-[#c8f300]/[0.08] via-white/[0.04] to-transparent ring-1 ring-[#c8f300]/40"
                  : "border-white/10 hover:border-white/25 hover:-translate-y-1"
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c8f300] text-[#171e00] text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 font-montserrat whitespace-nowrap z-20">
                  <Sparkles className="w-3.5 h-3.5 fill-[#171e00]" />
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Tier and Gap Note Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  {plan.tierNumber && (
                    <span className="text-[11px] uppercase tracking-widest text-[#c8f300] font-black font-montserrat px-2.5 py-0.5 rounded-md bg-[#c8f300]/10 border border-[#c8f300]/20">
                      {plan.tierNumber}
                    </span>
                  )}
                  {plan.priceNote && (
                    <span className="text-[11px] text-[#c5c9ac] font-medium bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10 font-poppins">
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black text-white mb-2 font-montserrat tracking-tight">
                  {plan.name}
                </h3>
                
                <p className="text-[#c5c9ac] text-xs sm:text-sm mb-6 min-h-[52px] font-poppins leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-montserrat">
                    {plan.monthlyPrice}
                  </div>
                  <span className="text-xs text-[#c5c9ac]/80 mt-1.5 block font-poppins flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#c8f300]" />
                    {plan.id === "enterprise"
                      ? "Arsitektur & software kustom"
                      : "Investasi all-in tanpa biaya tersembunyi"}
                  </span>
                </div>

                {/* Features & Impact List */}
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-wider text-[#8e9193] font-bold mb-3.5 font-montserrat">
                    Fitur & Dampak:
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, fIdx) => {
                      const isObj = typeof feature === "object" && feature !== null;
                      const title = isObj ? feature.title : feature.split(":")[0];
                      const impact = isObj
                        ? feature.impact
                        : feature.includes(":")
                        ? feature.split(":").slice(1).join(":").trim()
                        : null;

                      return (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-[#e0e3e5] font-poppins">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              plan.popular
                                ? "bg-[#c8f300] text-[#171e00]"
                                : "bg-[#c8f300]/15 text-[#c8f300]"
                            }`}
                          >
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <div className="leading-snug">
                            <span className="font-semibold text-white block">{title}</span>
                            {impact && (
                              <p className="text-xs text-[#c5c9ac]/80 mt-1 leading-relaxed font-normal">
                                {impact}
                              </p>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div>
                <Button
                  onClick={() => onSelectPlan?.(plan.name)}
                  variant={plan.popular ? "primary" : "glass"}
                  size="md"
                  className={`w-full text-sm sm:text-base font-montserrat font-bold ${
                    plan.popular ? "shadow-[0_0_25px_rgba(200,243,0,0.35)]" : ""
                  }`}
                >
                  {plan.ctaText}
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Client Trust Proof Bar with Stacked Avatars */}
        <div className="mt-16 p-6 rounded-2xl bg-[#14181b]/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto backdrop-blur-md reveal-on-scroll">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3 overflow-hidden">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#101415] object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Client 1"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#101415] object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                alt="Client 2"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#101415] object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Client 3"
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#101415] object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                alt="Client 4"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-white font-montserrat">
                Dipercaya 150+ UMKM, Founder & Enterprise
              </div>
              <div className="text-xs text-[#8e9193] font-poppins">
                Garansi 100% Hak Milik Penuh & Tanpa Biaya Tersembunyi
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#c8f300] font-montserrat px-3.5 py-1.5 rounded-full bg-[#c8f300]/10 border border-[#c8f300]/20 shrink-0">
            <Sparkles className="w-3.5 h-3.5" /> Setup Kilat & Dukungan Prioritas
          </div>
        </div>
      </div>
    </section>
  );
}

