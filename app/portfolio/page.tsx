"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { CountUp } from "@/components/ui/CountUp";
import { portfolioData, portfolioCategories } from "@/data/content";
import {
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Building2,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Search,
  LayoutGrid,
  List,
  RotateCcw,
  Calendar,
  Layers,
  Award,
} from "lucide-react";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Extract all unique tech tags across projects for quick filter
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    portfolioData.forEach((p) => {
      p.tech.forEach((t) => tagsSet.add(t));
    });
    return Array.from(tagsSet).slice(0, 8); // Top 8 tags
  }, []);

  const filteredProjects = useMemo(() => {
    return portfolioData.filter((project) => {
      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesTag =
        !selectedTag || project.tech.includes(selectedTag);

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  const featuredProject = portfolioData[0]; // BersamaD sebagai spotlight

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setSelectedTag(null);
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#c8f300] selection:text-[#171e00]">
      <Navbar onOpenConsultation={() => setModalOpen(true)} />

      <main className="flex-grow pt-28 pb-24 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="glow-bg-secondary top-[10%] right-[5%] opacity-20"></div>
        <div className="glow-bg top-[45%] left-[5%] opacity-20"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-14 reveal-on-scroll">
            <div className="mb-5 flex justify-center">
              <SectionBadge pulse>Bukti Nyata Hasil Bisnis & Portofolio</SectionBadge>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight font-montserrat leading-[1.1]">
              Kisah Sukses Klien Kami yang <br />
              <span className="italic font-semibold text-gradient-lime">Menghasilkan Pertumbuhan Nyata</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#c5c9ac] leading-relaxed font-poppins max-w-2xl mx-auto">
              Lihat bagaimana platform digital, otomasi sistem, dan arsitektur produk kami membantu bisnis meningkatkan omset, memangkas biaya operasional, dan menguasai pasar.
            </p>

            {/* Quick Stats Counter Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 mt-10 max-w-3xl mx-auto">
              {[
                { end: 150, suffix: "+", label: "Produk Rilis Sukses", desc: "Web, App & SaaS" },
                { prefix: "Rp ", end: 100, suffix: "M+", label: "Total Transaksi Klien", desc: "Terproses Aman" },
                { end: 98, suffix: "%", label: "Retensi Kemitraan", desc: "Klien Puas & Loyal" },
                { end: 4.9, decimals: 1, suffix: "/5", label: "Skor Kepuasan", desc: "Ulasan Terverifikasi" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl bg-[#14181b]/80 border border-white/10 backdrop-blur-md text-center hover:border-[#c8f300]/30 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#c8f300] font-montserrat mb-1">
                    <CountUp
                      end={stat.end}
                      decimals={stat.decimals || 0}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                      duration={2000}
                    />
                  </div>
                  <div className="text-xs font-bold text-white font-montserrat">{stat.label}</div>
                  <div className="text-[11px] text-[#8e9193] font-poppins mt-0.5">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Spotlight Case Study */}
          {featuredProject && activeCategory === "all" && !searchQuery && !selectedTag && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#c8f300] uppercase tracking-wider font-montserrat flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#c8f300]/10 border border-[#c8f300]/25 shadow-[0_0_15px_rgba(200,243,0,0.15)]">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" /> Studi Kasus Unggulan Teratas
                </span>
                <span className="text-xs text-[#8e9193] font-poppins hidden sm:inline-block">
                  Diperbarui September 2024
                </span>
              </div>

              <GlassCard className="p-6 sm:p-10 lg:p-12 border-[#c8f300]/30 hover:border-[#c8f300]/60 transition-all duration-500 overflow-hidden relative group shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs font-semibold text-[#8e9193] font-poppins">
                        <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#c8f300] font-montserrat font-bold">
                          {featuredProject.categoryLabel}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 text-white">
                          <Building2 className="w-3.5 h-3.5 text-[#c8f300]" /> {featuredProject.client}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#8e9193]">
                          <Calendar className="w-3.5 h-3.5 text-[#c8f300]" /> {featuredProject.year}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight font-montserrat group-hover:text-[#c8f300] transition-colors leading-snug">
                        {featuredProject.title}
                      </h2>
                      <p className="text-[#c5c9ac] text-sm sm:text-base mb-6 leading-relaxed font-poppins">
                        {featuredProject.overview}
                      </p>

                      {/* Impact Metrics Grid */}
                      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 p-4 rounded-2xl bg-[#101415]/90 border border-white/10">
                        {featuredProject.impactMetrics.map((m) => (
                          <div key={m.label} className="text-center sm:text-left">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#c8f300] font-montserrat">
                              {m.value}
                            </div>
                            <div className="text-xs font-bold text-white font-montserrat mt-0.5">{m.label}</div>
                            <div className="text-[10px] text-[#8e9193] font-poppins truncate mt-0.5 hidden sm:block">
                              {m.desc}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Mini Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        <span className="text-xs text-[#8e9193] font-poppins mr-1 flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5 text-[#c8f300]" /> Stack:
                        </span>
                        {featuredProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-semibold text-[#c5c9ac] font-montserrat"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <Link href={`/portfolio/${featuredProject.slug}`}>
                        <Button variant="primary" size="md" className="font-montserrat gap-2 shadow-[0_0_20px_rgba(200,243,0,0.3)]">
                          Baca Studi Kasus Lengkap <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                      <span className="text-xs text-[#8e9193] font-poppins flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#c8f300]" />
                        Durasi Eksekusi: <strong className="text-white">{featuredProject.timeline}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/15 shadow-2xl relative group-hover:border-[#c8f300]/50 transition-colors">
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 bg-[#101415]/95 backdrop-blur-md p-3.5 rounded-xl border border-white/15 flex items-center justify-between">
                        <div className="text-xs text-[#8e9193] font-poppins">Hasil Utama:</div>
                        <div className="text-xs sm:text-sm font-bold text-[#c8f300] font-montserrat flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4" /> {featuredProject.results}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          )}

          {/* Search, Tag Filter & View Mode Switcher Controls */}
          <div className="mb-8 p-6 rounded-3xl bg-[#14181b]/90 border border-white/10 backdrop-blur-xl">
            {/* Top row: Categories & Search */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-5">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full lg:w-auto">
                {portfolioCategories.map((cat) => {
                  const count =
                    cat.id === "all"
                      ? portfolioData.length
                      : portfolioData.filter((p) => p.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                      }}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer font-montserrat flex items-center gap-2 ${
                        activeCategory === cat.id
                          ? "bg-[#c8f300] text-[#171e00] shadow-[0_0_15px_rgba(200,243,0,0.3)] font-bold scale-105"
                          : "bg-white/5 text-[#c5c9ac] border border-white/10 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
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

              {/* Search Box & View Mode Toggle */}
              <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
                <div className="relative flex-1 lg:w-72">
                  <Search className="w-4 h-4 text-[#8e9193] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari proyek, klien, tech..."
                    className="w-full bg-[#101415] border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#c8f300] font-poppins transition-colors placeholder:text-[#8e9193]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8e9193] hover:text-white"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Grid / List Switcher */}
                <div className="flex items-center gap-1 p-1 bg-[#101415] border border-white/10 rounded-xl shrink-0">
                  <button
                    onClick={() => setViewMode("grid")}
                    title="Tampilan Grid"
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      viewMode === "grid"
                        ? "bg-[#c8f300] text-[#171e00]"
                        : "text-[#8e9193] hover:text-white"
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    title="Tampilan List"
                    className={`p-2 rounded-lg transition-colors cursor-pointer ${
                      viewMode === "list"
                        ? "bg-[#c8f300] text-[#171e00]"
                        : "text-[#8e9193] hover:text-white"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row: Quick Tech Tags & Results Count */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs font-poppins">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#8e9193] font-medium mr-1">Filter Teknologi Cepat:</span>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-montserrat transition-all cursor-pointer ${
                      selectedTag === tag
                        ? "bg-[#c8f300]/20 border border-[#c8f300] text-[#c8f300] font-bold"
                        : "bg-white/5 border border-white/10 text-[#c5c9ac] hover:text-white hover:border-white/20"
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 text-[#8e9193]">
                <span>
                  Menampilkan <strong className="text-white">{filteredProjects.length}</strong> dari{" "}
                  <strong className="text-white">{portfolioData.length}</strong> studi kasus
                </span>
                {(activeCategory !== "all" || searchQuery !== "" || selectedTag !== null) && (
                  <button
                    onClick={handleResetFilters}
                    className="flex items-center gap-1 text-[#c8f300] hover:underline font-semibold cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset Filter
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* No results fallback */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-[#14181b]/50 rounded-3xl border border-white/10 mb-20">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 text-[#8e9193]">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                Tidak Ada Portofolio yang Cocok
              </h3>
              <p className="text-[#8e9193] text-sm max-w-md mx-auto mb-6 font-poppins">
                Coba ubah kata kunci pencarian Anda atau reset filter untuk melihat semua studi kasus kami.
              </p>
              <Button onClick={handleResetFilters} variant="outline" size="sm" className="font-montserrat">
                <RotateCcw className="w-4 h-4 mr-1.5" /> Lihat Semua Portofolio
              </Button>
            </div>
          )}

          {/* Project List / Grid */}
          {viewMode === "grid" ? (
            /* GRID VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 items-stretch">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className="group cursor-pointer reveal-on-scroll flex flex-col justify-between"
                  style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                >
                  <GlassCard className="p-4 sm:p-5 border-white/10 group-hover:border-[#c8f300]/40 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between">
                    <div>
                      {/* Image Box */}
                      <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-[#1d2022] relative mb-5 border border-white/5 shadow-lg">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                        <img
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          src={project.image}
                        />

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3 z-20 bg-[#101415]/90 backdrop-blur-md border border-white/15 px-3 py-1 rounded-lg text-[11px] font-bold text-white font-montserrat shadow-md">
                          {project.categoryLabel}
                        </div>

                        {/* Results Badge */}
                        {project.results && (
                          <div className="absolute bottom-3 left-3 right-3 z-20 bg-[#101415]/95 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl text-xs font-bold text-[#c8f300] flex items-center justify-between shadow-xl font-montserrat">
                            <span className="flex items-center gap-1.5 truncate">
                              <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">{project.results}</span>
                            </span>
                            <span className="text-[10px] text-[#8e9193] font-poppins shrink-0 ml-2">
                              {project.timeline}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Client & Metadata Info */}
                      <div className="flex items-center justify-between text-xs text-[#8e9193] mb-2.5 font-poppins">
                        <span className="flex items-center gap-1 text-[#c5c9ac] font-medium truncate">
                          <Building2 className="w-3.5 h-3.5 text-[#c8f300] shrink-0" />{" "}
                          <span className="truncate">{project.client}</span>
                        </span>
                        <span className="shrink-0 ml-2">Tahun {project.year}</span>
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-[#c8f300] transition-colors font-montserrat leading-snug line-clamp-2">
                        {project.title}
                      </h2>
                      <p className="text-[#c5c9ac] text-xs sm:text-sm line-clamp-2 font-poppins mb-4">
                        {project.overview}
                      </p>

                      {/* Key Impact Highlight Snippet */}
                      {project.impactMetrics && project.impactMetrics.length > 0 && (
                        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 mb-4 text-xs font-poppins text-[#e0e3e5]">
                          <CheckCircle2 className="w-4 h-4 text-[#c8f300] shrink-0" />
                          <span className="truncate">
                            <strong className="text-white font-montserrat">{project.impactMetrics[0].value}</strong>{" "}
                            {project.impactMetrics[0].label}
                          </span>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-[#8e9193] font-montserrat font-medium"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-[#8e9193] font-montserrat">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                      <span className="text-xs font-bold text-[#c8f300] font-montserrat flex items-center gap-1.5">
                        Pelajari Studi Kasus <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="p-2 rounded-full border border-white/10 bg-white/5 text-[#c8f300] group-hover:bg-[#c8f300] group-hover:text-[#171e00] transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          ) : (
            /* LIST VIEW */
            <div className="space-y-6 mb-24">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className="group cursor-pointer block"
                >
                  <GlassCard className="p-6 sm:p-8 border-white/10 group-hover:border-[#c8f300]/40 transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                      <div className="md:col-span-4 rounded-2xl overflow-hidden aspect-[16/10] bg-[#1d2022] relative border border-white/5">
                        <img
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          src={project.image}
                        />
                        <div className="absolute top-2.5 left-2.5 z-10 bg-[#101415]/90 border border-white/15 px-2.5 py-1 rounded-md text-[10px] font-bold text-white font-montserrat">
                          {project.categoryLabel}
                        </div>
                      </div>

                      <div className="md:col-span-8 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs text-[#8e9193] font-poppins">
                            <span className="flex items-center gap-1 text-[#c5c9ac] font-medium">
                              <Building2 className="w-3.5 h-3.5 text-[#c8f300]" /> {project.client}
                            </span>
                            <span>
                              {project.timeline} • Tahun {project.year}
                            </span>
                          </div>

                          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-[#c8f300] transition-colors font-montserrat leading-snug">
                            {project.title}
                          </h2>
                          <p className="text-[#c5c9ac] text-sm font-poppins mb-4 line-clamp-2">
                            {project.overview}
                          </p>

                          {/* Impact Metrics Snippet */}
                          <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-white/5 border border-white/5 mb-4">
                            {project.impactMetrics.map((m) => (
                              <div key={m.label}>
                                <div className="text-base sm:text-lg font-bold text-[#c8f300] font-montserrat">
                                  {m.value}
                                </div>
                                <div className="text-[11px] text-[#8e9193] font-poppins truncate">
                                  {m.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10">
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-[#8e9193] font-montserrat"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <span className="text-xs font-bold text-[#c8f300] font-montserrat flex items-center gap-1.5 ml-auto">
                            Buka Studi Kasus <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          )}

          {/* Execution Guarantee Pillars */}
          <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-[#14181b]/80 border border-white/10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionBadge>Standar Kerja CnZ</SectionBadge>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3 font-montserrat">
                Komitmen Kami di Setiap Proyek
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#c8f300]" />,
                  title: "100% Hak Milik Penuh",
                  desc: "Seluruh sistem, desain, dan database menjadi aset milik perusahaan Anda tanpa biaya sewa tersembunyi.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-[#c8f300]" />,
                  title: "Garansi SLA Tepat Waktu",
                  desc: "Sprint mingguan terstruktur memastikan produk Anda rilis sesuai jadwal peluncuran bisnis.",
                },
                {
                  icon: <Zap className="w-6 h-6 text-[#c8f300]" />,
                  title: "Dukungan & Garansi 3 Bulan",
                  desc: "Pengawalan teknis prioritas setelah peluncuran untuk memastikan sistem beroperasi stabil dan lancar.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-[#c8f300]/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 font-montserrat">{item.title}</h4>
                  <p className="text-sm text-[#c5c9ac] font-poppins leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#c8f300] via-[#b4dc00] to-[#99bd00] text-[#171e00] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl reveal-on-scroll">
            <div className="max-w-xl">
              <span className="px-3.5 py-1 rounded-full bg-[#171e00]/15 text-[#171e00] text-xs font-bold uppercase tracking-wider font-montserrat inline-block mb-3">
                Konsultasi Bebas Biaya
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-3 font-montserrat">
                Siap Menjadi Kisah Sukses Kami Berikutnya?
              </h3>
              <p className="text-[#171e00]/80 text-base sm:text-lg font-poppins">
                Diskusikan tantangan bisnis dan target pertumbuhan produk digital Anda bersama tim konsultan CnZ hari ini.
              </p>
            </div>
            <Button
              onClick={() => setModalOpen(true)}
              variant="dark"
              size="lg"
              className="font-montserrat shrink-0 shadow-xl"
            >
              Mulai Konsultasi Project
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <ProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
}
