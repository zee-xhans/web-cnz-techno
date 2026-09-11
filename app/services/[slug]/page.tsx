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
import { servicesData, portfolioData } from "@/data/content";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Clock,
  Tag,
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  XCircle,
  TrendingUp,
  ExternalLink,
  Code,
  Smartphone,
  Palette,
  Search,
} from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return notFound();
  }

  const otherServices = servicesData.filter((s) => s.slug !== slug);

  // Cari portofolio terkait
  const relatedProjects = portfolioData.filter((p) => {
    if (slug === "ui-ux") return p.category === "uiux" || p.tech.includes("Figma");
    if (slug === "web-dev") return p.category === "web" || p.tech.includes("Next.js");
    if (slug === "mobile-apps") return p.category === "mobile" || p.tech.includes("Flutter") || p.tech.includes("React Native");
    if (slug === "seo-optimization") return p.tech.includes("SEO") || p.tech.includes("Analytics");
    return true;
  }).slice(0, 2);

  const getServiceHeaderIcon = (serviceSlug: string) => {
    switch (serviceSlug) {
      case "ui-ux":
        return <Palette className="w-6 h-6 text-[#c8f300]" />;
      case "web-dev":
        return <Code className="w-6 h-6 text-[#c8f300]" />;
      case "mobile-apps":
        return <Smartphone className="w-6 h-6 text-[#c8f300]" />;
      case "seo-optimization":
        return <Search className="w-6 h-6 text-[#c8f300]" />;
      default:
        return <Layers className="w-6 h-6 text-[#c8f300]" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#c8f300] selection:text-[#171e00]">
      <Navbar onOpenConsultation={() => setModalOpen(true)} />

      <main className="flex-grow pt-28 pb-24 relative overflow-hidden">
        {/* Glow Background Elements */}
        <div className="glow-bg top-[8%] left-[45%] -translate-x-1/2 opacity-30"></div>
        <div className="glow-bg top-[55%] right-[5%] opacity-20 bg-[#5d03ca]"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#8e9193] mb-8 font-poppins">
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <span className="text-[#8e9193]">Layanan</span>
            <span>/</span>
            <span className="text-[#c8f300] font-medium">{service.title}</span>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <SectionBadge pulse>Spesialisasi Unggulan</SectionBadge>
                {service.estimatedTimeline && (
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#c5c9ac] font-poppins">
                    <Clock className="w-3.5 h-3.5 text-[#c8f300]" />
                    <span>Est. {service.estimatedTimeline}</span>
                  </div>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight leading-[1.1] font-montserrat">
                {service.title}
              </h1>

              {service.subtitle && (
                <p className="text-xl md:text-2xl font-bold text-[#c8f300] mb-6 font-montserrat">
                  {service.subtitle}
                </p>
              )}

              <p className="text-base md:text-lg text-[#c5c9ac] leading-relaxed mb-8 font-poppins">
                {service.longDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-[#e0e3e5] font-montserrat"
                  >
                    <Tag className="w-3 h-3 text-[#c8f300]" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA & Price Info */}
              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/10">
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                  size="lg"
                  className="font-montserrat shadow-[0_0_35px_rgba(200,243,0,0.35)] flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-[#171e00]" />
                  Mulai Konsultasi Gratis
                </Button>
                <div className="px-5 py-3 rounded-2xl bg-[#1d2022]/80 border border-white/10 text-sm text-[#e0e3e5] font-poppins">
                  Investasi mulai dari <span className="font-bold text-[#c8f300] font-montserrat">{service.startingPrice}</span>
                </div>
              </div>
            </div>

            {/* Visual Hero Mockup */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#101415] via-transparent to-transparent"></div>

                {/* Floating Metric Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#14181b]/90 backdrop-blur-xl border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#c8f300]/20 text-[#c8f300]">
                      {getServiceHeaderIcon(service.slug)}
                    </div>
                    <div>
                      <div className="text-xs text-[#8e9193] font-poppins">Standar Kualitas</div>
                      <div className="text-sm font-bold text-white font-montserrat">100% Production-Ready</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[#8e9193] font-poppins">SLA Pengerjaan</div>
                    <div className="text-sm font-bold text-[#c8f300] font-montserrat">On-Time Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Lingkup Pekerjaan & Modul Sistem (Modules Grid) */}
          {service.modules && service.modules.length > 0 && (
            <div className="mb-24">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <SectionBadge>Lingkup Pekerjaan</SectionBadge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 font-montserrat">
                  Modul & Arsitektur yang Dikerjakan
                </h2>
                <p className="text-[#c5c9ac] text-base sm:text-lg font-poppins">
                  Setiap detail dirancang secara sistematis untuk memastikan ketahanan sistem dan skalabilitas jangka panjang.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.modules.map((mod, idx) => (
                  <GlassCard
                    key={mod.title}
                    className="p-8 border-white/10 hover:border-[#c8f300]/40 transition-all duration-300 relative group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#c8f300] px-3 py-1 rounded-full bg-[#c8f300]/10 border border-[#c8f300]/20 font-montserrat">
                        MODUL {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#c8f300]/20 group-hover:text-[#c8f300] flex items-center justify-center text-[#8e9193] transition-colors">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2.5 font-montserrat group-hover:text-[#c8f300] transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-[#c5c9ac] text-sm leading-relaxed font-poppins">
                      {mod.desc}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Deliverables & Keunggulan Bisnis (Split Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {/* Deliverables Card */}
            <GlassCard className="p-8 sm:p-10 border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#c8f300]/15 text-[#c8f300]">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-montserrat">
                      Hasil Nyata (Deliverables)
                    </h2>
                    <p className="text-xs text-[#8e9193] font-poppins">Aset resmi yang menjadi hak milik 100% Anda</p>
                  </div>
                </div>
                <ul className="space-y-4 font-poppins">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3.5 text-[#e0e3e5] text-base">
                      <div className="w-6 h-6 rounded-full bg-[#c8f300]/20 text-[#c8f300] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#8e9193] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#c8f300]" />
                <span>Termasuk dokumentasi panduan lengkap & sesi serah terima resmi.</span>
              </div>
            </GlassCard>

            {/* Benefits Card */}
            <GlassCard className="p-8 sm:p-10 border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#5d03ca]/30 text-[#d3bbff]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-montserrat">
                      Dampak & Nilai Bisnis
                    </h2>
                    <p className="text-xs text-[#8e9193] font-poppins">Tolok ukur keberhasilan investasi digital Anda</p>
                  </div>
                </div>
                <ul className="space-y-4 font-poppins">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3.5 text-[#e0e3e5] text-base">
                      <div className="w-6 h-6 rounded-full bg-[#5d03ca]/40 text-[#d3bbff] flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-3.5 h-3.5 fill-[#d3bbff]" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#8e9193] flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#d3bbff]" />
                <span>Terbukti mendorong pertumbuhan traffic, user retention, dan ROI klien.</span>
              </div>
            </GlassCard>
          </div>

          {/* Section 3: Comparison Table (CnZ vs Agensi Biasa) */}
          {service.comparison && service.comparison.length > 0 && (
            <div className="mb-24">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <SectionBadge>Standar Kualitas</SectionBadge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 font-montserrat">
                  Mengapa Memilih CnZ Techno?
                </h2>
                <p className="text-[#c5c9ac] text-base sm:text-lg font-poppins">
                  Perbandingan nyata bagaimana standar rekayasa kami mengungguli penyedia jasa konvensional.
                </p>
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-[650px] bg-[#14181b]/80 border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 bg-white/5 px-6 py-4 border-b border-white/10 text-sm font-bold font-montserrat text-white">
                    <div className="col-span-4 text-[#8e9193]">ASPEK & FITUR</div>
                    <div className="col-span-4 text-[#c8f300] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#c8f300]" />
                      STANDAR CNZ
                    </div>
                    <div className="col-span-4 text-[#8e9193]">AGENSI KONVENSIONAL</div>
                  </div>

                  {/* Table Rows */}
                  <div className="divide-y divide-white/5 font-poppins text-sm">
                    {service.comparison.map((row, i) => (
                      <div
                        key={row.feature}
                        className={`grid grid-cols-12 px-6 py-5 items-center ${
                          i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                        }`}
                      >
                        <div className="col-span-4 font-semibold text-white font-montserrat">
                          {row.feature}
                        </div>
                        <div className="col-span-4 text-[#c8f300] flex items-start gap-2 pr-4 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#c8f300] shrink-0 mt-0.5" />
                          <span>{row.cnz}</span>
                        </div>
                        <div className="col-span-4 text-[#8e9193] flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                          <span>{row.others}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 4: Alur Metodologi 4 Tahap */}
          <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionBadge>Alur Kerja Agile</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 font-montserrat">
                Tahapan Metodologi Pengerjaan
              </h2>
              <p className="text-[#c5c9ac] text-base sm:text-lg font-poppins">
                Pendekatan terstruktur dalam sprint mingguan untuk menjaga transparansi dan ketepatan timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, idx) => (
                <GlassCard
                  key={step.title}
                  className="p-6 border-white/10 hover:border-[#c8f300]/40 transition-all duration-300 relative group"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#c8f300] text-[#171e00] font-extrabold text-lg flex items-center justify-center font-montserrat shadow-lg shadow-[#c8f300]/20">
                      0{idx + 1}
                    </div>
                    <span className="text-xs text-[#8e9193] uppercase font-mono tracking-widest">
                      FASE {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 font-montserrat group-hover:text-[#c8f300] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#c5c9ac] text-sm leading-relaxed font-poppins">
                    {step.desc}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Section 5: Business Growth Instruments Showcase */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#14181b]/90 border border-white/10 mb-24">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-montserrat">
                Instrumen & Mesin Pertumbuhan Penjualan
              </h3>
              <p className="text-[#8e9193] text-sm font-poppins">
                Setiap instrumen dirancang terintegrasi untuk mempercepat konversi transaksi, menjaga keamanan dana, dan mempermudah ekspansi bisnis Anda.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#c8f300]/40 hover:bg-[#c8f300]/5 text-sm font-semibold text-white transition-all font-montserrat"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section 6: FAQ Spesifik Layanan (Interactive Accordion) */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="mb-24 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <SectionBadge>Tanya Jawab Bisnis</SectionBadge>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 font-montserrat">
                  Hal yang Sering Ditanyakan Pebisnis
                </h2>
                <p className="text-[#c5c9ac] text-base font-poppins">
                  Jawaban transparan mengenai jaminan kepemilikan, proyeksi keuntungan, dan proses kerjasama.
                </p>
              </div>

              <div className="space-y-4">
                {service.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={faq.id}
                      className="rounded-2xl border border-white/10 bg-[#14181b]/70 overflow-hidden transition-all duration-300 hover:border-white/20"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <HelpCircle className="w-5 h-5 text-[#c8f300] shrink-0" />
                          <span className="text-base sm:text-lg font-bold text-white font-montserrat">
                            {faq.question}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#c8f300]">
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 border-t border-white/5 text-[#c5c9ac] text-sm sm:text-base leading-relaxed font-poppins animate-in fade-in-0 duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section 7: Portofolio / Studi Kasus Terkait */}
          {relatedProjects.length > 0 && (
            <div className="mb-24">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <SectionBadge>Hasil Kerja Nyata</SectionBadge>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-montserrat">
                    Studi Kasus Terkait
                  </h2>
                </div>
                <Link
                  href="/portfolio"
                  className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#c8f300] hover:underline font-montserrat"
                >
                  Lihat Semua Portofolio <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProjects.map((project) => (
                  <GlassCard
                    key={project.id}
                    className="p-6 border-white/10 hover:border-[#c8f300]/40 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-5 relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#101415]/80 backdrop-blur-md border border-white/10 text-xs font-bold text-white font-montserrat">
                          {project.categoryLabel || project.category}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 font-montserrat group-hover:text-[#c8f300] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#c5c9ac] text-sm line-clamp-2 mb-4 font-poppins">
                        {project.overview}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-[#8e9193] font-poppins">
                        <span>Dampak:</span>
                        <span className="text-[#c8f300] font-bold">
                          {project.impactMetrics?.[0]?.value || project.results || "Optimasi Tinggi"}
                        </span>
                      </div>
                      <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-[#c8f300] transition-colors font-montserrat"
                      >
                        Detail Studi Kasus <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {/* Section 8: High-Impact Consultation CTA Banner */}
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1d2022] via-[#14181b] to-[#0d1011] border border-white/15 relative overflow-hidden mb-24 shadow-2xl text-center">
            <div className="glow-bg top-0 left-1/2 -translate-x-1/2 opacity-25"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="px-4 py-1.5 rounded-full bg-[#c8f300]/15 text-[#c8f300] text-xs font-bold uppercase tracking-wider font-montserrat inline-block mb-4">
                Mulai Kolaborasi
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 font-montserrat leading-tight">
                Siap Mewujudkan Proyek {service.title}?
              </h2>
              <p className="text-[#c5c9ac] text-base sm:text-lg leading-relaxed mb-8 font-poppins">
                Diskusikan kebutuhan spesifik, rancangan anggaran, dan timeline peluncuran Anda bersama Senior Architect kami tanpa biaya.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                  size="lg"
                  className="font-montserrat shadow-[0_0_35px_rgba(200,243,0,0.4)]"
                >
                  Konsultasikan Proyek Sekarang
                </Button>
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="outline"
                  size="lg"
                  className="font-montserrat"
                >
                  Jadwalkan Sesi Strategi
                </Button>
              </div>
            </div>
          </div>

          {/* Section 9: Other Services Quick Nav */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-montserrat">
                Eksplor Spesialisasi Bisnis Lainnya
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.slice(0, 3).map((item) => (
                <GlassCard
                  key={item.id}
                  className="p-6 border-white/10 hover:border-[#c8f300]/30 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-[#c8f300]/10 transition-colors">
                        {getServiceHeaderIcon(item.slug)}
                      </div>
                      <span className="text-xs text-[#8e9193] font-poppins">{item.startingPrice}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#c8f300] transition-colors font-montserrat">
                      {item.title}
                    </h4>
                    <p className="text-[#c5c9ac] text-sm mb-4 line-clamp-2 font-poppins">
                      {item.subtitle || item.shortDesc}
                    </p>
                  </div>
                  <Link
                    href={`/services/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c8f300] hover:underline font-montserrat pt-3 border-t border-white/5"
                  >
                    Buka Halaman Layanan <ArrowRight className="w-3.5 h-3.5" />
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
