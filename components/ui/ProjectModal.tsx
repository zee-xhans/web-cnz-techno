"use client";

import React, { useState } from "react";
import { X, Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [services, setServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("Rp 10jt - 30jt");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  if (!isOpen) return null;

  const serviceOptions = [
    "Full-Stack Web App",
    "UI/UX Design & Prototyping",
    "Mobile App (iOS/Android)",
    "Technical SEO & Scale",
    "SaaS / MVP Development",
  ];

  const budgetOptions = [
    "< Rp 15jt",
    "Rp 15jt - 30jt",
    "Rp 30jt - 60jt",
    "Rp > 60jt (Enterprise)",
  ];

  const toggleService = (svc: string) => {
    if (services.includes(svc)) {
      setServices(services.filter((s) => s !== svc));
    } else {
      setServices([...services, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const handleResetAndClose = () => {
    setStep("form");
    setFormData({ name: "", email: "", whatsapp: "", message: "" });
    setServices([]);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#141819] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Glow ambient background inside modal */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#c8f300]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Tutup Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === "form" ? (
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#c8f300] mb-3">
              <Sparkles className="w-4 h-4" /> Start a Project
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
              Konsultasikan Project Impian Anda
            </h3>
            <p className="text-[#c5c9ac] text-sm mb-6">
              Ceritakan visi produk Anda. Tim kami akan merespon dalam waktu maksimal 24 jam dengan proposal estimasi biaya dan roadmap teknis.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Services choice */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2.5">
                  Layanan yang Anda butuhkan:
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((svc) => {
                    const isSelected = services.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        className={`text-xs sm:text-sm px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#c8f300] text-[#171e00] font-bold border-[#c8f300]"
                            : "bg-white/5 border-white/10 text-[#c5c9ac] hover:border-white/30"
                        }`}
                      >
                        {isSelected ? "✓ " : "+ "}
                        {svc}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2.5">
                  Estimasi Budget:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`text-xs py-2.5 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                        budget === b
                          ? "bg-[#c8f300]/15 text-[#c8f300] border-[#c8f300] font-bold"
                          : "bg-white/5 border-white/10 text-[#c5c9ac] hover:border-white/30"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Andi Pratama"
                    className="w-full bg-[#1d2022] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-[#c8f300] focus:border-[#c8f300] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-1.5">
                    Email Bisnis *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="andi@company.com"
                    className="w-full bg-[#1d2022] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-[#c8f300] focus:border-[#c8f300] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-1.5">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="+62 812-xxxx-xxxx"
                  className="w-full bg-[#1d2022] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-[#c8f300] focus:border-[#c8f300] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/80 font-bold mb-1.5">
                  Deskripsi Singkat Project (Opsional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ceritakan fitur utama atau timeline target Anda..."
                  className="w-full bg-[#1d2022] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:ring-2 focus:ring-[#c8f300] focus:border-[#c8f300] outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="md" className="w-full gap-2 text-base">
                  Kirim Pengajuan Project <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-10 space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#c8f300] text-[#171e00] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(200,243,0,0.4)]">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              Terima Kasih, {formData.name || "Klien Hebat"}!
            </h3>
            <p className="text-[#c5c9ac] max-w-md mx-auto text-base leading-relaxed">
              Pengajuan project Anda telah kami terima. Tim engineering & product strategist kami akan menghubungi Anda melalui WhatsApp / Email dalam waktu 1x24 jam.
            </p>
            <div className="pt-4">
              <Button onClick={handleResetAndClose} variant="primary" size="md">
                Tutup & Kembali
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
