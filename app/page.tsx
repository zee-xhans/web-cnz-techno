"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { AboutStats } from "@/components/sections/AboutStats";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { BentoProducts } from "@/components/sections/BentoProducts";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen relative selection:bg-[#c8f300] selection:text-[#171e00]">
      {/* Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero onOpenConsultation={handleOpenConsultation} />
        <BrandMarquee />
        <AboutStats />
        <Services />
        <Portfolio />
        <BentoProducts onOpenConsultation={handleOpenConsultation} />
        <Pricing onSelectPlan={() => handleOpenConsultation()} />
        <Testimonials />
        <FAQ />
        <CTA onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Elements */}
      <ProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <FloatingWhatsApp />
    </div>
  );
}
