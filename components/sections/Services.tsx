"use client";

import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { servicesData } from "@/data/content";
import { ChevronRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden bg-[#101415]">
      {/* Ambient Glow */}
      <div className="glow-bg top-0 left-0 opacity-30"></div>
      <div className="glow-bg-secondary bottom-0 right-0 opacity-25"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal-on-scroll max-w-3xl mx-auto">
          <div className="mb-4">
            <SectionBadge pulse>Kapabilitas Rekayasa & Desain</SectionBadge>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white font-montserrat tracking-tight">
            Layanan Spesialis <span className="text-[#c8f300] italic font-semibold">Skala Penuh</span>
          </h2>
          <p className="text-lg md:text-xl text-[#c5c9ac] leading-relaxed font-poppins">
            Solusi komprehensif yang dirancang untuk memperkuat infrastruktur teknologi bisnis Anda sekaligus menghadirkan pengalaman pengguna akhir yang mulus dan berdaya konversi tinggi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <GlassCard
              key={service.id}
              className="group p-3 hover:border-[#c8f300]/50 transition-all duration-500 reveal-on-scroll hover:shadow-[0_15px_45px_rgba(200,243,0,0.18)] hover:-translate-y-2 flex flex-col justify-between card-spotlight"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div>
                <div className="h-60 sm:h-64 rounded-xl overflow-hidden mb-5 relative">
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={service.image}
                  />
                </div>

                <div className="p-4 pt-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2.5 text-white group-hover:text-[#c8f300] transition-colors tracking-tight font-montserrat">
                    {service.title}
                  </h3>
                  <p className="text-[#c5c9ac] text-sm mb-6 leading-relaxed font-poppins line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 mt-auto border-t border-white/5">
                <div className="flex items-center justify-between pt-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[#c8f300] font-bold hover:underline text-sm sm:text-base group/link font-montserrat"
                  >
                    Pelajari Solusi
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-[#8e9193] font-poppins">
                    {service.startingPrice.split("/")[0]}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}


