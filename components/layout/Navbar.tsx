"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, servicesData } from "@/data/content";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  Sparkles,
  ChevronDown,
  Palette,
  Code2,
  Smartphone,
  TrendingUp,
  ArrowRight,
  Layers,
} from "lucide-react";

import { Logo } from "@/components/common/Logo";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "ui-ux":
        return <Palette className="w-5 h-5 text-[#c8f300]" />;
      case "web-dev":
        return <Code2 className="w-5 h-5 text-[#c8f300]" />;
      case "mobile-apps":
        return <Smartphone className="w-5 h-5 text-[#c8f300]" />;
      case "seo-optimization":
        return <TrendingUp className="w-5 h-5 text-[#c8f300]" />;
      default:
        return <Layers className="w-5 h-5 text-[#c8f300]" />;
    }
  };

  return (
    <header
      className={`top-0 sticky z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#101415]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50 py-3.5"
          : "bg-[#101415]/60 backdrop-blur-xl border-b border-white/5 py-5"
      }`}
    >
      <nav className="flex justify-between items-center w-full px-6 md:px-16 max-w-[1440px] mx-auto">
        <Logo size="md" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium font-poppins">
          {navItems.map((item) => {
            if (item.label === "Layanan") {
              const isServiceActive = pathname.startsWith("/services");
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setServicesDropdownOpen((prev) => !prev)}
                    className={`flex items-center gap-1.5 py-2 transition-colors duration-200 cursor-pointer ${
                      isServiceActive || servicesDropdownOpen
                        ? "text-[#c8f300] font-semibold"
                        : "text-[#c5c9ac] hover:text-[#c8f300]"
                    }`}
                  >
                    <span>Layanan</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180 text-[#c8f300]" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[380px] bg-[#14181b]/98 backdrop-blur-2xl border border-white/15 rounded-2xl p-3.5 shadow-2xl shadow-black/90 animate-in fade-in-0 zoom-in-95 duration-200 z-50">
                      <div className="px-3 py-2 border-b border-white/10 mb-2 flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-[#c8f300] font-bold font-montserrat">
                          Solusi Bisnis
                        </span>
                        <span className="text-[11px] text-[#8e9193] font-poppins">Pilih Layanan</span>
                      </div>

                      <div className="space-y-1">
                        {servicesData.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-white/5 transition-all duration-200 group/item"
                          >
                            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover/item:border-[#c8f300]/40 group-hover/item:bg-[#c8f300]/10 transition-colors shrink-0 mt-0.5">
                              {getServiceIcon(svc.slug)}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover/item:text-[#c8f300] transition-colors font-montserrat flex items-center gap-1.5">
                                {svc.shortTitle || svc.title}
                              </div>
                              <div className="text-xs text-[#8e9193] line-clamp-1 mt-0.5 font-poppins">
                                {svc.navDesc || svc.subtitle || svc.shortDesc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-2.5 pt-2.5 border-t border-white/10 px-3 py-1.5 bg-[#191e22]/60 rounded-xl flex items-center justify-between text-xs text-[#c5c9ac]">
                        <span>Konsultasi strategi 1-on-1 gratis</span>
                        <span className="text-[#c8f300] font-bold">Slot Terbatas</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-[#c8f300] font-semibold"
                    : "text-[#c5c9ac] hover:text-[#c8f300]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Action Button (Desktop) */}
        <div className="hidden lg:block">
          <Button
            onClick={onOpenConsultation}
            variant="primary"
            size="sm"
            className="flex items-center gap-2 font-montserrat"
          >
            <Sparkles className="w-4 h-4 text-[#171e00]" />
            Mulai Kerjasama
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-white hover:bg-white/5 focus:outline-none"
          aria-label="Buka Navigasi"
        >
          {mobileMenuOpen ? <X className="w-7 h-7 text-[#c8f300]" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101415]/98 border-b border-white/10 px-6 py-6 flex flex-col gap-3 backdrop-blur-3xl animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          {navItems.map((item) => {
            if (item.label === "Layanan") {
              return (
                <div key={item.label} className="border-b border-white/5 pb-2">
                  <button
                    onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                    className="w-full flex items-center justify-between py-2 text-base text-[#c5c9ac] hover:text-[#c8f300] font-semibold font-poppins text-left"
                  >
                    <span>Layanan</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileServicesExpanded ? "rotate-180 text-[#c8f300]" : ""
                      }`}
                    />
                  </button>

                  {mobileServicesExpanded && (
                    <div className="pl-3 mt-1 space-y-2 border-l-2 border-[#c8f300]/30 py-1">
                      {servicesData.map((svc) => (
                        <Link
                          key={svc.slug}
                          href={`/services/${svc.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2.5 py-2 text-sm text-[#e0e3e5] hover:text-[#c8f300] font-poppins"
                        >
                          <div className="p-1.5 rounded-lg bg-white/5">{getServiceIcon(svc.slug)}</div>
                          <span className="font-medium">{svc.shortTitle || svc.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base py-2 text-[#c5c9ac] hover:text-[#c8f300] transition-colors font-poppins border-b border-white/5"
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            variant="primary"
            size="md"
            className="w-full mt-3 font-montserrat"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation?.();
            }}
          >
            Mulai Kerjasama
          </Button>
        </div>
      )}
    </header>
  );
}
