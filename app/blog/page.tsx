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
import { blogPosts, blogCategories } from "@/data/content";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Sparkles,
  BookOpen,
  Mail,
  CheckCircle2,
  Tag,
  RotateCcw,
  TrendingUp,
} from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    blogPosts.forEach((post) => {
      post.tags.forEach((t) => tagsSet.add(t));
    });
    return Array.from(tagsSet);
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "all" || post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  const featuredPost = blogPosts[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail("");
      }, 2000);
    }
  };

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
    setSelectedTag(null);
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#c8f300] selection:text-[#171e00]">
      <Navbar onOpenConsultation={() => setModalOpen(true)} />

      <main className="flex-grow pt-28 pb-24 relative overflow-hidden">
        {/* Glow ambient */}
        <div className="glow-bg top-[12%] left-[45%] opacity-30"></div>
        <div className="glow-bg-secondary top-[60%] right-[10%] opacity-20"></div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
            <div className="mb-4 flex justify-center">
              <SectionBadge pulse>Wawasan & Artikel Teknologi</SectionBadge>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight font-montserrat leading-[1.15]">
              Insight & Panduan <br />
              <span className="italic font-semibold text-gradient-lime">Produk Digital Modern</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#c5c9ac] leading-relaxed font-poppins max-w-2xl mx-auto">
              Eksplorasi tren teknologi, arsitektur software Next.js, psikologi UI/UX, dan strategi pertumbuhan produk digital dari tim engineer CnZ.
            </p>
          </div>

          {/* Featured Article Banner (Only on 'all', no search query, no selected tag) */}
          {activeCategory === "all" && !searchQuery && !selectedTag && featuredPost && (
            <div className="mb-16 reveal-on-scroll">
              <Link href={`/blog/${featuredPost.slug}`}>
                <GlassCard className="p-6 sm:p-10 lg:p-12 border-[#c8f300]/30 hover:border-[#c8f300]/70 transition-all duration-500 group overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <div className="lg:col-span-7">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs uppercase tracking-wider font-extrabold px-3.5 py-1.5 rounded-full bg-[#c8f300] text-[#171e00] font-montserrat flex items-center gap-1.5 shadow-[0_0_15px_rgba(200,243,0,0.3)]">
                          <Sparkles className="w-3.5 h-3.5" /> Artikel Pilihan Minggu Ini
                        </span>
                        <span className="text-xs text-[#c5c9ac] font-poppins flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#c8f300]" /> {featuredPost.readTime}
                        </span>
                        <span>•</span>
                        <span className="text-xs text-[#8e9193] font-poppins">{featuredPost.date}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 group-hover:text-[#c8f300] transition-colors font-montserrat leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-[#c5c9ac] text-sm sm:text-base leading-relaxed mb-6 font-poppins line-clamp-3">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#c8f300]/50 bg-[#14181b] flex items-center justify-center text-xs font-montserrat shrink-0 shadow-md">
                            {featuredPost.author.avatarImage ? (
                              <img
                                src={featuredPost.author.avatarImage}
                                alt={featuredPost.author.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-[#c8f300] font-bold">{featuredPost.author.avatar}</span>
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white font-montserrat">{featuredPost.author.name}</p>
                            <p className="text-xs text-[#8e9193] font-poppins">{featuredPost.author.role}</p>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#c8f300] group-hover:translate-x-1.5 transition-transform font-montserrat">
                          Baca Artikel Lengkap <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[16/10] border border-white/15 shadow-2xl relative group-hover:border-[#c8f300]/50 transition-colors">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </div>
          )}

          {/* Search, Filter & Quick Tags Bar */}
          <div className="mb-12 p-6 rounded-3xl bg-[#14181b]/90 border border-white/10 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-5">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
                {blogCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer font-montserrat ${
                      activeCategory === cat.id
                        ? "bg-[#c8f300] text-[#171e00] font-bold shadow-[0_0_15px_rgba(200,243,0,0.3)] scale-105"
                        : "bg-white/5 text-[#c5c9ac] border border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-[#8e9193] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari topik, judul, tech..."
                  className="w-full bg-[#101415] border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#c8f300] font-poppins placeholder:text-[#8e9193] transition-colors"
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
            </div>

            {/* Quick Topic Hashtags */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10 text-xs font-poppins">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[#8e9193] font-medium mr-1 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#c8f300]" /> Topik Populer:
                </span>
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
                  Menampilkan <strong className="text-white">{filteredPosts.length}</strong> artikel
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
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 bg-[#14181b]/50 rounded-3xl border border-white/10 mb-20">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 text-[#8e9193]">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                Tidak Ada Artikel yang Ditemukan
              </h3>
              <p className="text-[#8e9193] text-sm max-w-md mx-auto mb-6 font-poppins">
                Coba gunakan kata kunci lain seperti "Next.js", "UI/UX", atau "MVP".
              </p>
              <Button onClick={handleResetFilters} variant="outline" size="sm" className="font-montserrat">
                <RotateCcw className="w-4 h-4 mr-1.5" /> Lihat Semua Artikel
              </Button>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 items-stretch">
            {filteredPosts.map((post, idx) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group cursor-pointer reveal-on-scroll flex flex-col justify-between"
                style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
              >
                <GlassCard className="p-5 border-white/10 group-hover:border-[#c8f300]/40 transition-all duration-500 h-full flex flex-col justify-between">
                  <div>
                    <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-5 relative border border-white/5 shadow-md">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 z-10 bg-[#101415]/90 backdrop-blur-md border border-white/15 px-3 py-1 rounded-lg text-[10px] font-bold text-white uppercase tracking-wider font-montserrat">
                        {post.category}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3 text-xs text-[#c5c9ac] font-poppins">
                      <span className="text-[#c8f300] font-bold font-montserrat flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                      <span>•</span>
                      <span className="text-[#8e9193]">{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#c8f300] transition-colors font-montserrat leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#c5c9ac] text-xs sm:text-sm line-clamp-3 leading-relaxed font-poppins mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c8f300]/40 bg-[#14181b] flex items-center justify-center text-[10px] font-montserrat shrink-0">
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
                          <p className="text-xs font-bold text-white font-montserrat truncate max-w-[120px]">
                            {post.author.name}
                          </p>
                          <p className="text-[10px] text-[#8e9193] font-poppins truncate max-w-[120px]">
                            {post.author.role.split("@")[0]}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-[#c8f300] font-montserrat flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Baca <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>

          {/* Newsletter Subscription Card (CnZ Tech Digest) */}
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#14181b] via-[#101415] to-[#0d1011] border border-white/15 relative overflow-hidden shadow-2xl mb-16">
            <div className="glow-bg top-0 right-10 opacity-20"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#c8f300]/10 border border-[#c8f300]/20 text-[#c8f300] text-xs font-bold uppercase tracking-wider font-montserrat flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" /> CnZ Tech Digest
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 font-montserrat">
                  Dapatkan Intisari Arsitektur & Teknologi Terkini Setiap Minggu
                </h3>
                <p className="text-[#c5c9ac] text-sm sm:text-base font-poppins leading-relaxed">
                  Bergabunglah dengan lebih dari 2.500+ founder, software architect, dan product leader yang menerima panduan praktis tanpa spam langsung di inbox.
                </p>
              </div>

              <div className="lg:col-span-5">
                {subscribed ? (
                  <div className="p-6 rounded-2xl bg-[#c8f300]/10 border border-[#c8f300]/30 text-center animate-fadeIn">
                    <CheckCircle2 className="w-10 h-10 text-[#c8f300] mx-auto mb-2" />
                    <h4 className="text-lg font-bold text-white font-montserrat">Terima Kasih!</h4>
                    <p className="text-xs text-[#c5c9ac] font-poppins mt-1">
                      Anda telah terdaftar di CnZ Tech Digest. Nantikan edisi perdana kami di inbox Anda.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Masukkan alamat email Anda..."
                      className="flex-1 bg-[#101415] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#c8f300] font-poppins transition-colors"
                    />
                    <Button type="submit" variant="primary" size="md" className="font-montserrat shrink-0 shadow-[0_0_20px_rgba(200,243,0,0.3)]">
                      Berlangganan
                    </Button>
                  </form>
                )}
                <p className="text-[11px] text-[#8e9193] font-poppins mt-2.5 text-center sm:text-left">
                  Kami menghormati privasi Anda. Bebas berhenti berlangganan kapan saja.
                </p>
              </div>
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
