"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { pricingPlans } from "@/data/content";
import { Check, Sparkles } from "lucide-react";

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-28 bg-[#101415] relative overflow-hidden">
      {/* Ambient Radial Glow */}
      <div className="glow-bg top-[20%] right-[10%] opacity-30"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll max-w-3xl mx-auto">
          <div className="mb-4">
            <SectionBadge>Investasi Transparan</SectionBadge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tight font-montserrat">
            Paket & <span className="text-[#c8f300] italic font-semibold">Investasi</span> Skalabel
          </h2>
          <p className="text-lg md:text-xl text-[#c5c9ac] leading-relaxed mb-8 font-poppins">
            Investasi fleksibel dan transparan tanpa biaya tersembunyi untuk meluncurkan produk digital Anda.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#1d2022] p-1.5 rounded-full border border-white/10 shadow-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all cursor-pointer font-montserrat ${
                !isAnnual
                  ? "bg-[#c8f300] text-[#171e00] shadow-md"
                  : "text-[#c5c9ac] hover:text-white"
              }`}
            >
              Per Project
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 cursor-pointer font-montserrat ${
                isAnnual
                  ? "bg-[#c8f300] text-[#171e00] shadow-md"
                  : "text-[#c5c9ac] hover:text-white"
              }`}
            >
              Sprint Bulanan
              <span className="bg-[#5d03ca] text-white text-[10px] uppercase px-2 py-0.5 rounded-full font-montserrat">
                Hemat 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <GlassCard
              key={plan.id}
              className={`p-8 md:p-10 flex flex-col justify-between relative reveal-on-scroll transition-all duration-500 ${
                plan.popular
                  ? "border-[#c8f300] shadow-[0_15px_50px_rgba(200,243,0,0.18)] lg:-translate-y-3 bg-gradient-to-b from-white/[0.07] to-transparent"
                  : "border-white/10 hover:border-white/25"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c8f300] text-[#171e00] text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 font-montserrat">
                  <Sparkles className="w-3.5 h-3.5" />
                  {plan.badge}
                </div>
              )}

              <div>
                {!plan.popular && plan.badge && (
                  <span className="text-xs uppercase tracking-wider text-[#c8f300] font-bold block mb-2 font-montserrat">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 font-montserrat">
                  {plan.name}
                </h3>
                <p className="text-[#c5c9ac] text-sm mb-6 min-h-[40px] font-poppins">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-8 pb-6 border-b border-white/10">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-montserrat">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </div>
                  <span className="text-xs text-[#c5c9ac]/80 mt-1 block font-poppins">
                    {plan.id === "enterprise"
                      ? "Disesuaikan kebutuhan sistem"
                      : isAnnual
                      ? "Per bulan (Komitmen 3 bulan)"
                      : "Biaya all-in per project"}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[#e0e3e5] font-poppins">
                      <div className="w-5 h-5 rounded-full bg-[#c8f300]/15 text-[#c8f300] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Button
                  onClick={() => onSelectPlan?.(plan.name)}
                  variant={plan.popular ? "primary" : "glass"}
                  size="md"
                  className="w-full text-base font-montserrat"
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
                Dipercaya 150+ Founder & Enterprise
              </div>
              <div className="text-xs text-[#8e9193] font-poppins">
                Garansi 100% Hak Milik Penuh & Tanpa Biaya Tersembunyi
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#c8f300] font-montserrat px-3.5 py-1.5 rounded-full bg-[#c8f300]/10 border border-[#c8f300]/20 shrink-0">
            <Sparkles className="w-3.5 h-3.5" /> Garansi 3 Bulan Pasca-Rilis
          </div>
        </div>
      </div>
    </section>
  );
}
