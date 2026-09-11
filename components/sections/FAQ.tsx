import React from "react";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { faqData } from "@/data/content";

export function FAQ() {
  return (
    <section id="faq" className="py-28 bg-[#0b0f10] border-y border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white font-montserrat">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-[#c5c9ac] text-lg md:text-xl font-poppins">
            Segala hal yang perlu Anda ketahui tentang berkolaborasi dengan CnZ Techno.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AccordionItem
                question={item.question}
                answer={item.answer}
                defaultOpen={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
