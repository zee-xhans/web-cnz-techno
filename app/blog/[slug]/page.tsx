"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { blogPosts } from "@/data/content";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
  Share2,
  Tag,
  BookmarkCheck,
  ListTree,
  Check,
  MessageCircle,
  BookOpen,
} from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug);

  // Track scroll progress for the top reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parse Headings (###) for interactive Table of Contents
  const headings = useMemo(() => {
    const matches: { id: string; text: string }[] = [];
    const lines = post.content.split("\n");
    lines.forEach((line) => {
      if (line.startsWith("### ")) {
        const text = line.replace("### ", "").trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        matches.push({ id, text });
      }
    });
    return matches;
  }, [post.content]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleShareWA = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(
        `Baca artikel menarik dari CnZ Techno: "${post.title}"\n\n`
      );
      window.open(`https://wa.me/?text=${text}${url}`, "_blank");
    }
  };

  const handleShareTwitter = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(
        `"${post.title}" via @CnZTechno\n\n`
      );
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
    }
  };

  const handleShareLinkedIn = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        "_blank"
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#c8f300] selection:text-[#171e00]">
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#c8f300] z-50 transition-all duration-150 shadow-[0_0_10px_#c8f300]"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar onOpenConsultation={() => setModalOpen(true)} />

      <main className="flex-grow pt-28 pb-24 relative overflow-hidden">
        {/* Glow ambient */}
        <div className="glow-bg top-[10%] left-[50%] -translate-x-1/2 opacity-30"></div>
        <div className="glow-bg-secondary top-[60%] right-[10%] opacity-20"></div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
          {/* Back to blog & breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#c5c9ac] hover:text-[#c8f300] transition-colors font-poppins"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Semua Artikel
            </Link>

            <div className="text-xs text-[#8e9193] font-poppins hidden sm:block">
              {Math.round(scrollProgress)}% Selesai Dibaca
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Article Content (8 Cols) */}
            <div className="lg:col-span-8">
              {/* Article Header */}
              <header className="mb-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-wider font-extrabold px-3.5 py-1 rounded-full bg-[#c8f300]/15 text-[#c8f300] border border-[#c8f300]/30 font-montserrat">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#c5c9ac] font-poppins flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c8f300]" /> {post.readTime}
                  </span>
                  <span>•</span>
                  <span className="text-xs text-[#8e9193] font-poppins flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#c8f300]" /> {post.date}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight font-montserrat leading-tight">
                  {post.title}
                </h1>

                {/* Author Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#c8f300]/50 bg-[#14181b] flex items-center justify-center text-sm font-montserrat shrink-0 shadow-md">
                      {post.author.avatarImage ? (
                        <img
                          src={post.author.avatarImage}
                          alt={post.author.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-[#c8f300] font-bold">{post.author.avatar}</span>
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm sm:text-base font-montserrat">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-[#8e9193] font-poppins">{post.author.role}</p>
                    </div>
                  </div>

                  {/* Share Suite */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleShareWA}
                      title="Bagikan ke WhatsApp"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-[#25D366]/20 hover:border-[#25D366]/40 text-[#c5c9ac] hover:text-[#25D366] transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleShareLinkedIn}
                      title="Bagikan ke LinkedIn"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-[#0077B5]/20 hover:border-[#0077B5]/40 text-[#c5c9ac] hover:text-[#0077B5] transition-all cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </button>
                    <button
                      onClick={handleShareTwitter}
                      title="Bagikan ke X / Twitter"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/30 text-[#c5c9ac] hover:text-white transition-all cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                    <button
                      onClick={handleCopyLink}
                      title="Salin Link"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-[#c8f300] hover:text-[#171e00] text-xs font-montserrat font-bold text-white transition-all cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" /> Disalin!
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3.5 h-3.5" /> Salin Link
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </header>

              {/* Hero Featured Image */}
              <div className="rounded-3xl overflow-hidden aspect-[16/9] mb-12 border border-white/15 shadow-2xl relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Key Takeaways Card */}
              <GlassCard className="p-6 sm:p-8 mb-12 border-[#c8f300]/30 bg-gradient-to-br from-[#c8f300]/5 to-transparent">
                <div className="flex items-center gap-2.5 mb-4 text-[#c8f300]">
                  <BookmarkCheck className="w-5 h-5 stroke-[2.5]" />
                  <h3 className="font-bold text-lg font-montserrat text-white">
                    Ringkasan Poin Penting (Key Takeaways)
                  </h3>
                </div>
                <ul className="space-y-3 font-poppins text-sm sm:text-base text-[#e0e3e5]">
                  {post.keyTakeaways.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="text-[#c8f300] font-bold">✦</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* Article Content Body */}
              <article className="prose prose-invert max-w-none text-[#e0e3e5] font-poppins leading-relaxed space-y-6 text-base sm:text-lg">
                {post.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("### ")) {
                    const headingText = paragraph.replace("### ", "").trim();
                    const headingId = headingText
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-");

                    return (
                      <h2
                        key={index}
                        id={headingId}
                        className="text-2xl sm:text-3xl font-extrabold text-white mt-10 mb-4 font-montserrat tracking-tight scroll-mt-24"
                      >
                        {headingText}
                      </h2>
                    );
                  }
                  if (
                    paragraph.startsWith("1. ") ||
                    paragraph.startsWith("2. ") ||
                    paragraph.startsWith("3. ") ||
                    paragraph.startsWith("- ")
                  ) {
                    const lines = paragraph.split("\n");
                    return (
                      <ul
                        key={index}
                        className="space-y-2.5 my-4 pl-4 border-l-2 border-[#c8f300]/40"
                      >
                        {lines.map((line, lIdx) => (
                          <li key={lIdx} className="text-[#c5c9ac] text-base">
                            {line.replace(/^[0-9]+\.\s+/, "").replace(/^-\s+/, "")}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-[#c5c9ac] leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </article>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-8 mt-12 border-t border-white/10">
                <Tag className="w-4 h-4 text-[#c8f300]" />
                <span className="text-xs text-[#c5c9ac] font-poppins font-medium mr-2">
                  Topik Terkait:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-white font-montserrat"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Box */}
              <GlassCard className="p-8 my-12 border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#c8f300]/50 bg-[#14181b] flex items-center justify-center text-xl font-montserrat shrink-0 shadow-xl">
                  {post.author.avatarImage ? (
                    <img
                      src={post.author.avatarImage}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-[#c8f300] font-bold">{post.author.avatar}</span>
                  )}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white font-montserrat">
                    {post.author.name}
                  </h4>
                  <p className="text-xs text-[#c8f300] font-montserrat mb-2 font-bold">
                    {post.author.role}
                  </p>
                  <p className="text-sm text-[#c5c9ac] font-poppins leading-relaxed mb-4">
                    Spesialis rekayasa produk digital dan teknologi modern di CnZ Techno, berdedikasi membangun sistem software yang tangguh dan skalabel.
                  </p>
                  <Button
                    onClick={() => setModalOpen(true)}
                    variant="outline"
                    size="sm"
                    className="font-montserrat text-xs"
                  >
                    Konsultasi dengan Penulis
                  </Button>
                </div>
              </GlassCard>
            </div>

            {/* Sidebar (4 Cols) - Table of Contents & Quick Consultation */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Table of Contents Box */}
              {headings.length > 0 && (
                <GlassCard className="p-6 border-white/10">
                  <div className="flex items-center gap-2 mb-4 text-white">
                    <ListTree className="w-4 h-4 text-[#c8f300]" />
                    <h4 className="text-sm font-bold font-montserrat uppercase tracking-wider">
                      Daftar Isi Artikel
                    </h4>
                  </div>
                  <nav className="space-y-2 text-xs font-poppins">
                    {headings.map((h, i) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        className="block text-[#c5c9ac] hover:text-[#c8f300] transition-colors py-1 pl-2 border-l border-white/10 hover:border-[#c8f300] leading-snug"
                      >
                        <span className="text-[#8e9193] font-montserrat mr-1.5">{i + 1}.</span>
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </GlassCard>
              )}

              {/* Consultation Quick Card */}
              <GlassCard className="p-6 border-[#c8f300]/25 bg-gradient-to-br from-[#1d2022] to-[#14181b] text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#c8f300]/10 text-[#c8f300] flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-montserrat">
                  Punya Pertanyaan Teknis?
                </h4>
                <p className="text-xs text-[#c5c9ac] font-poppins leading-relaxed mb-5">
                  Konsultasikan arsitektur sistem atau desain produk Anda bersama tim engineering CnZ tanpa biaya.
                </p>
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="primary"
                  size="sm"
                  className="w-full font-montserrat shadow-[0_0_20px_rgba(200,243,0,0.3)]"
                >
                  Mulai Konsultasi Gratis
                </Button>
              </GlassCard>
            </div>
          </div>

          {/* Related Articles Section */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-montserrat">
                Artikel Terkait Lainnya
              </h3>
              <Link
                href="/blog"
                className="text-xs sm:text-sm font-bold text-[#c8f300] hover:underline flex items-center gap-1 font-montserrat"
              >
                Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((item) => (
                <GlassCard
                  key={item.id}
                  className="p-5 border-white/10 hover:border-[#c8f300]/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#c8f300] mb-2 block font-montserrat">
                      {item.category.toUpperCase()} • {item.readTime}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#c8f300] transition-colors font-montserrat leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[#c5c9ac] text-xs sm:text-sm mb-4 line-clamp-2 font-poppins">
                      {item.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c8f300] hover:underline font-montserrat pt-3 border-t border-white/5"
                  >
                    Baca Artikel <ArrowRight className="w-3.5 h-3.5" />
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
