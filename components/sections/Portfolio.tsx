"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { portfolioData, portfolioCategories } from "@/data/content";
import { ArrowUpRight, TrendingUp, Building2, CheckCircle2, ArrowRight } from "lucide-react";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 bg-[#0b0f10] border-y border-white/5 relative">
      <div className="glow-bg-secondary top-0 right-0 opacity-25"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8 reveal-on-scroll">
          <div className="max-w-3xl">
            <div className="mb-4">
              <SectionBadge pulse>Bukti Nyata Hasil Bisnis & Portofolio</SectionBadge>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white font-montserrat">
              Karya & Transformasi Digital <br />
              <span className="italic font-semibold text-gradient-lime">yang Menghasilkan Omset</span>
            </h2>
          </div>
          <Link href="/portfolio">
            <Button variant="glass" size="md" className="font-montserrat gap-2">
              Lihat Semua Portofolio <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-14 reveal-on-scroll">
          {portfolioCategories.map((cat) => {
            const count =
              cat.id === "all"
                ? portfolioData.length
                : portfolioData.filter((p) => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer font-montserrat flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-[#c8f300] text-[#171e00] shadow-[0_0_20px_rgba(200,243,0,0.3)] font-bold scale-105"
                    : "bg-white/5 text-[#c5c9ac] border border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                    activeCategory === cat.id
                      ? "bg-[#171e00]/20 text-[#171e00]"
                      : "bg-white/10 text-[#8e9193]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group cursor-pointer reveal-on-scroll flex flex-col justify-between"
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <GlassCard className="p-4 border-white/10 group-hover:border-[#c8f300]/40 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between">
                <div>
                  {/* Image Box */}
                  <div className="rounded-xl overflow-hidden aspect-[16/10] bg-[#1d2022] relative mb-5 border border-white/5">
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      src={project.image}
                    />

                    {/* Top Category Badge */}
                    <div className="absolute top-2.5 left-2.5 z-20 bg-[#101415]/90 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-md text-[11px] font-semibold text-white font-montserrat">
                      {project.categoryLabel}
                    </div>

                    {/* Results Badge */}
                    {project.results && (
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 bg-[#101415]/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-xs font-bold text-[#c8f300] flex items-center justify-between shadow-lg font-montserrat">
                        <span className="flex items-center gap-1.5 truncate">
                          <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{project.results}</span>
                        </span>
                        <span className="text-[10px] text-[#8e9193] font-poppins shrink-0 ml-2">{project.timeline}</span>
                      </div>
                    )}
                  </div>

                  {/* Client & Metadata Info */}
                  <div className="flex items-center justify-between text-xs text-[#8e9193] mb-2 font-poppins">
                    <span className="flex items-center gap-1 text-[#c5c9ac] truncate">
                      <Building2 className="w-3.5 h-3.5 text-[#c8f300] shrink-0" /> <span className="truncate">{project.client}</span>
                    </span>
                    <span className="shrink-0 ml-2">Tahun {project.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-[#c8f300] transition-colors font-montserrat leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-[#c5c9ac] text-xs sm:text-sm line-clamp-2 font-poppins mb-4">{project.overview}</p>

                  {/* Key Impact Highlight Snippet */}
                  {project.impactMetrics && project.impactMetrics.length > 0 && (
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 mb-4 text-xs font-poppins text-[#e0e3e5]">
                      <CheckCircle2 className="w-4 h-4 text-[#c8f300] shrink-0" />
                      <span className="truncate">
                        <strong className="text-white">{project.impactMetrics[0].value}</strong> {project.impactMetrics[0].label}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                  <span className="text-xs font-bold text-[#c8f300] font-montserrat flex items-center gap-1">
                    Pelajari Studi Kasus <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <div className="p-2 rounded-full border border-white/10 bg-white/5 text-[#c8f300] group-hover:bg-[#c8f300] group-hover:text-[#171e00] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
