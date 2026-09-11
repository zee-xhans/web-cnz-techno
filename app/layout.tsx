import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import ScrollObserver from "@/components/common/ScrollObserver";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CnZ Techno | Bangun Produk Digital Skalabel & Modern",
  description:
    "Kami membantu bisnis merancang dan membangun produk digital, web aplikasi, dan aplikasi mobile yang scalable dengan UI/UX kelas dunia.",
  keywords: [
    "CnZ",
    "CnZ Techno",
    "CnZ Digital",
    "Produk Digital",
    "Desain UI/UX",
    "Pengembangan Web",
    "Aplikasi Mobile",
    "SEO Teknis",
  ],
  authors: [{ name: "CnZ Techno" }],
  openGraph: {
    title: "CnZ Techno | Bangun Produk Digital Skalabel & Modern",
    description:
      "Presisi engineering dengan jiwa kreatif. Solusi web dan produk digital siap berkembang.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`dark ${montserrat.variable} ${poppins.variable}`}
    >
      <body className="bg-[#101415] text-[#e0e3e5] font-poppins antialiased overflow-x-hidden selection:bg-[#c8f300] selection:text-[#171e00]">
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
