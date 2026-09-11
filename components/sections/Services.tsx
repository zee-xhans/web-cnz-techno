import React from "react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { servicesData } from "@/data/content";
import { ChevronRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden bg-[#101415]">
      {/* Ambient Glow */}
      <div className="glow-bg top-0 left-0 opacity-40"></div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal-on-scroll max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white font-montserrat">
            Kapabilitas <span className="text-[#c8f300] italic font-semibold">Utama Kami</span>
          </h2>
          <p className="text-lg md:text-xl text-[#c5c9ac] leading-relaxed font-poppins">
            Layanan spesialis yang dirancang untuk membantu perusahaan berkembang pesat memperkuat
            infrastruktur teknis dan sistem desain mereka.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <GlassCard
              key={service.id}
              className="group p-3 hover:border-[#c8f300]/50 transition-all duration-500 reveal-on-scroll hover:shadow-[0_10px_40px_rgba(200,243,0,0.15)] flex flex-col justify-between"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div>
                <div className="h-64 sm:h-72 rounded-xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={service.image}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#c8f300] transition-colors tracking-tight font-montserrat">
                    {service.title}
                  </h3>
                  <p className="text-[#c5c9ac] text-base mb-6 leading-relaxed font-poppins">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#c8f300] font-bold hover:underline text-base group/link font-montserrat"
                >
                  Pelajari Layanan
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
