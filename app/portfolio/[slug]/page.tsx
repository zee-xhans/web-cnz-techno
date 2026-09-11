"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { portfolioData } from "@/data/content";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Calendar,
  Clock,
  Building2,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  ExternalLink,
  Code2,
  Activity,
  Check,
  Share2,
} from "lucide-react";

export default function PortfolioDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "comparison" | "tech" | "process">("overview");
  const [copied, setCopied] = useState(false);

  const project = portfolioData.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  const otherProjects = portfolioData.filter((p) => p.slug !== slug);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#c8f300] selection:text-[#171e00]">
      <Navbar onOpenConsultation={() => setModalOpen(true)} />

      <main className="flex-grow pt-28 pb-24 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="glow-bg top-[8%] left-[50%] -translate-x-1/2 opacity-35"></div>
        <div className="glow-bg-secondary top-[60%] right-[10%] opacity-20"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
          {/* Back link & Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#8e9193] font-poppins">
              <Link href="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <Link href="/portfolio" className="hover:text-white transition-colors">
                Portofolio
              </Link>
              <span>/</span>
              <span className="text-[#c8f300] font-medium truncate max-w-[200px] sm:max-w-none">
                {project.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#c8f300]/40 text-xs font-montserrat text-[#c5c9ac] hover:text-white transition-all cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-[#c8f300]" />
                {copied ? "Link Disalin!" : "Bagikan Kasus"}
              </button>
            </div>
          </div>

          {/* Case Study Header */}
          <div className="max-w-4xl mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <SectionBadge pulse>{project.categoryLabel}</SectionBadge>
              {project.results && (
                <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c8f300]/15 border border-[#c8f300]/30 text-xs font-bold text-[#c8f300] font-montserrat">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{project.results}</span>
                </div>
              )}
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight font-montserrat leading-[1.15]">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-[#c5c9ac] leading-relaxed font-poppins">
              {project.overview}
            </p>
          </div>

          {/* Project Meta Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#14181b]/90 border border-white/10 mb-12 backdrop-blur-xl">
            <div>
              <span className="text-xs text-[#8e9193] font-poppins block mb-1">Klien Bisnis</span>
              <p className="text-sm sm:text-base font-bold text-white font-montserrat flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#c8f300] shrink-0" /> <span className="truncate">{project.client}</span>
              </p>
            </div>
            <div>
              <span className="text-xs text-[#8e9193] font-poppins block mb-1">Durasi Eksekusi</span>
              <p className="text-sm sm:text-base font-bold text-white font-montserrat flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c8f300] shrink-0" /> {project.timeline}
              </p>
            </div>
            <div>
              <span className="text-xs text-[#8e9193] font-poppins block mb-1">Tahun Peluncuran</span>
              <p className="text-sm sm:text-base font-bold text-white font-montserrat flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#c8f300] shrink-0" /> {project.year}
              </p>
            </div>
            <div>
              <span className="text-xs text-[#8e9193] font-poppins block mb-1">Status Proyek</span>
              <p className="text-sm sm:text-base font-bold text-[#c8f300] font-montserrat flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> 100% Live & Skalabel
              </p>
            </div>
          </div>

          {/* Showcase Visual Hero Image */}
          <div className="rounded-3xl overflow-hidden aspect-[16/9] max-h-[620px] border border-white/15 shadow-2xl mb-16 relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#101415]/90 backdrop-blur-md border border-white/15">
              <div className="flex items-center gap-2 text-white text-xs sm:text-sm font-montserrat font-bold">
                <ShieldCheck className="w-4 h-4 text-[#c8f300]" />
                Arsitektur Produksi & Desain oleh Tim CnZ Techno
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#8e9193] font-poppins">Hasil Terverifikasi:</span>
                <span className="text-xs sm:text-sm font-bold text-[#c8f300] font-montserrat">{project.results}</span>
              </div>
            </div>
          </div>

          {/* Key Impact Metrics Grid */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionBadge>Bukti Kinerja Nyata</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-montserrat">
                Dampak Bisnis & Hasil Terukur
              </h2>
              <p className="text-[#c5c9ac] text-sm sm:text-base mt-2 font-poppins">
                Metrik nyata setelah sistem diterapkan dan digunakan langsung oleh ribuan pengguna aktif.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.impactMetrics.map((metric) => (
                <GlassCard key={metric.label} className="p-8 text-center border-white/10 hover:border-[#c8f300]/40 transition-all group">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#c8f300] mb-2 font-montserrat group-hover:scale-105 transition-transform">
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-montserrat">{metric.label}</h3>
                  <p className="text-[#c5c9ac] text-sm font-poppins leading-relaxed">{metric.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Interactive Navigation Deep Dive Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 p-2 rounded-2xl bg-[#14181b]/90 border border-white/10 max-w-2xl mx-auto">
            {[
              { id: "overview", label: "Tantangan & Solusi" },
              { id: "tech", label: "Arsitektur & Tech Stack" },
              { id: "process", label: "4 Tahap Transformasi" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[140px] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold font-montserrat transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#c8f300] text-[#171e00] shadow-[0_0_15px_rgba(200,243,0,0.3)]"
                    : "text-[#c5c9ac] hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: Challenge & Solution (Before vs After Breakdown) */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 animate-fadeIn">
              {/* Challenge Card */}
              <GlassCard className="p-8 sm:p-10 border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-rose-500/20 text-rose-400">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-montserrat">
                        Tantangan & Masalah Bisnis Awal
                      </h3>
                      <span className="text-xs text-[#8e9193] font-poppins">Kondisi sebelum ditangani CnZ</span>
                    </div>
                  </div>
                  <p className="text-[#c5c9ac] text-base sm:text-lg leading-relaxed font-poppins">
                    {project.challenge}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs text-rose-400/80 flex items-center gap-2 font-poppins">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  <span>Menyebabkan penurunan konversi dan pemborosan waktu operasional.</span>
                </div>
              </GlassCard>

              {/* Solution Card */}
              <GlassCard className="p-8 sm:p-10 border-[#c8f300]/30 flex flex-col justify-between shadow-[0_0_30px_rgba(200,243,0,0.08)]">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-[#c8f300]/20 text-[#c8f300]">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-montserrat">
                        Solusi & Rekayasa Strategis CnZ
                      </h3>
                      <span className="text-xs text-[#c8f300] font-poppins">Terobosan arsitektur & desain modern</span>
                    </div>
                  </div>
                  <p className="text-[#c5c9ac] text-base sm:text-lg leading-relaxed font-poppins">
                    {project.solution}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#c8f300] flex items-center gap-2 font-poppins font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#c8f300]" />
                  <span>Meningkatkan efisiensi sistem dan melipatgandakan kepuasan pengguna.</span>
                </div>
              </GlassCard>
            </div>
          )}

          {/* TAB 2: Tech Stack & Architecture */}
          {activeTab === "tech" && (
            <div className="mb-20 animate-fadeIn">
              <GlassCard className="p-8 sm:p-12 border-white/10">
                <div className="max-w-2xl mx-auto text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-montserrat">
                    Teknologi & Infrastruktur yang Digunakan
                  </h3>
                  <p className="text-[#c5c9ac] text-sm sm:text-base font-poppins">
                    Komposisi stack modern yang dirancang untuk kecepatan eksekusi tinggi, kestabilan tanpa hambatan, dan skalabilitas jangka panjang.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {project.tech.map((t, idx) => (
                    <div
                      key={t}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center hover:border-[#c8f300]/40 hover:bg-[#c8f300]/5 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#c8f300]/10 text-[#c8f300] flex items-center justify-center mx-auto mb-3">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-bold text-white font-montserrat">{t}</div>
                      <div className="text-[10px] text-[#8e9193] font-poppins mt-1">Komponen Kunci</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          )}

          {/* TAB 3: 4-Stage Process Flow */}
          {activeTab === "process" && (
            <div className="mb-20 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Audit & Diagnosa Masalah",
                    desc: "Menganalisis titik bottleneck transaksi dan perilaku pengguna pada sistem lama.",
                  },
                  {
                    step: "02",
                    title: "Desain Alur Tanpa Hambatan",
                    desc: "Merancang antarmuka visual premium dan prototipe interaktif untuk validasi cepat.",
                  },
                  {
                    step: "03",
                    title: "Pembangunan Sistem Skalabel",
                    desc: "Membangun arsitektur berkecepatan tinggi dengan integrasi pembayaran & keamanan data.",
                  },
                  {
                    step: "04",
                    title: "Peluncuran & Pengujian Beban",
                    desc: "Stress testing kapasitas ribuan transaksi serentak dan pengawalan go-live resmi.",
                  },
                ].map((item) => (
                  <GlassCard key={item.step} className="p-6 border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-[#c8f300] text-[#171e00] font-extrabold flex items-center justify-center mb-4 font-montserrat">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-montserrat">{item.title}</h3>
                    <p className="text-sm text-[#c5c9ac] font-poppins leading-relaxed">{item.desc}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial Quote */}
          {project.testimonial && (
            <div className="mb-20 max-w-4xl mx-auto">
              <GlassCard className="p-8 sm:p-12 relative border-[#c8f300]/30 shadow-[0_0_40px_rgba(200,243,0,0.1)] text-center">
                <Quote className="w-12 h-12 text-[#c8f300] opacity-60 mx-auto mb-6" />
                <p className="text-xl sm:text-2xl italic text-white mb-6 leading-relaxed font-poppins font-normal">
                  "{project.testimonial.quote}"
                </p>
                <p className="font-bold text-lg text-white font-montserrat">{project.testimonial.author}</p>
                <p className="text-xs text-[#c8f300] uppercase tracking-widest mt-1 font-poppins font-bold">
                  {project.testimonial.role} — {project.client}
                </p>
              </GlassCard>
            </div>
          )}

          {/* CTA Banner */}
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1d2022] via-[#14181b] to-[#0d1011] border border-white/15 text-center text-white relative overflow-hidden shadow-2xl mb-24">
            <div className="glow-bg top-0 left-1/2 -translate-x-1/2 opacity-25"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="px-3.5 py-1 rounded-full bg-[#c8f300]/15 text-[#c8f300] text-xs font-bold uppercase tracking-wider font-montserrat inline-block mb-4">
                Mulai Kolaborasi
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 font-montserrat">
                Tertarik Membangun Solusi Sukses Serupa?
              </h3>
              <p className="text-[#c5c9ac] text-base sm:text-lg mb-8 font-poppins leading-relaxed">
                Diskusikan tantangan produk dan sasaran omset bisnis Anda bersama tim konsultan CnZ Techno tanpa biaya.
              </p>
              <Button
                onClick={() => setModalOpen(true)}
                variant="primary"
                size="lg"
                className="font-montserrat shadow-[0_0_35px_rgba(200,243,0,0.4)]"
              >
                Mulai Diskusi Proyek Anda
              </Button>
            </div>
          </div>

          {/* Other Case Studies */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-montserrat">
                Studi Kasus Lainnya
              </h3>
              <Link
                href="/portfolio"
                className="text-xs sm:text-sm font-bold text-[#c8f300] hover:underline flex items-center gap-1 font-montserrat"
              >
                Lihat Semua Portofolio <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.slice(0, 3).map((item) => (
                <GlassCard key={item.id} className="p-6 border-white/10 hover:border-[#c8f300]/30 transition-all group flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#c8f300] mb-2 block font-montserrat">
                      {item.categoryLabel}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#c8f300] transition-colors font-montserrat">
                      {item.title}
                    </h4>
                    <p className="text-[#c5c9ac] text-sm mb-4 line-clamp-2 font-poppins">{item.overview}</p>
                  </div>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c8f300] hover:underline font-montserrat pt-3 border-t border-white/5"
                  >
                    Baca Studi Kasus <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
}

