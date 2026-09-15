import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import ScrollObserver from "@/components/common/ScrollObserver";
import { JsonLd } from "@/components/seo/JsonLd";

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

export const viewport: Viewport = {
  themeColor: "#101415",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cnztechno.com"),
  title: {
    default: "CnZ Techno | Software House & Studio Produk Digital Jakarta & Tangerang",
    template: "%s | CnZ Techno — Software House Jakarta & Tangerang",
  },
  description:
    "Software house dan studio rekayasa produk digital terpercaya di Jakarta & Tangerang (BSD City). Spesialis pembuatan website performa tinggi, aplikasi mobile iOS/Android, sistem enterprise B2B, dan desain UI/UX dengan konversi tinggi.",
  keywords: [
    "Software House Jakarta",
    "Software House Tangerang",
    "Software House BSD",
    "Software House Tangerang Selatan",
    "Jasa Pembuatan Website Jakarta",
    "Jasa Pembuatan Website Tangerang",
    "Jasa Pembuatan Aplikasi Mobile Jakarta",
    "Jasa Aplikasi Mobile Tangerang",
    "UI UX Agency Jakarta",
    "Konsultan IT Jakarta",
    "Konsultan IT Tangerang",
    "Software House B2B B2C Indonesia",
    "Next.js Developer Jakarta",
    "Flutter Developer Jakarta Tangerang",
    "Pembuatan Website Toko Online Jakarta",
    "CnZ Techno",
    "CnZ Digital",
  ],
  authors: [{ name: "CnZ Techno", url: "https://cnztechno.com" }],
  creator: "CnZ Techno",
  publisher: "CnZ Techno",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-square.png",
    shortcut: "/logo-square.png",
    apple: "/logo-square.png",
  },
  openGraph: {
    title: "CnZ Techno | Software House & Studio Produk Digital Jakarta & Tangerang",
    description:
      "Presisi engineering software dan keindahan desain yang menghasilkan. Pembuatan website cepat, aplikasi mobile, dan sistem enterprise di Jakarta & Tangerang.",
    url: "https://cnztechno.com",
    siteName: "CnZ Techno",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "CnZ Techno Software House Jakarta Tangerang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CnZ Techno | Software House & Produk Digital Jakarta & Tangerang",
    description:
      "Solusi rekayasa website, aplikasi mobile iOS & Android, dan sistem enterprise siap skala untuk bisnis di Jakarta dan Tangerang.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "ID-JK, ID-BT",
    "geo.placename": "Jakarta, Tangerang, Tangerang Selatan, BSD City",
    "geo.position": "-6.2088;106.8456",
    ICBM: "-6.2088, 106.8456",
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
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#101415] text-[#e0e3e5] font-poppins antialiased overflow-x-hidden selection:bg-[#c8f300] selection:text-[#171e00]">
        <ScrollObserver />
        {children}
      </body>
    </html>
  );
}
