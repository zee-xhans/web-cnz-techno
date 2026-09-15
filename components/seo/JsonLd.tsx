import React from "react";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://cnztechno.com/#organization",
        name: "CnZ Techno",
        alternateName: ["CnZ Digital", "CnZ Software House"],
        url: "https://cnztechno.com",
        logo: "https://cnztechno.com/logo.png",
        image: "https://cnztechno.com/logo.png",
        description:
          "Software house dan studio rekayasa produk digital terkemuka di Jakarta dan Tangerang. Spesialis pembuatan website performa tinggi, aplikasi mobile iOS & Android, sistem portal enterprise B2B, dan desain UI/UX berdaya konversi tinggi.",
        priceRange: "Rp 540.000 - Rp 25.000.000+",
        telephone: "+6281234567890",
        email: "hello@cnztechno.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jakarta",
          addressRegion: "DKI Jakarta",
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -6.2088,
          longitude: 106.8456,
        },
        areaServed: [
          {
            "@type": "City",
            name: "Jakarta",
            sameAs: "https://id.wikipedia.org/wiki/Daerah_Khusus_Ibukota_Jakarta",
          },
          {
            "@type": "City",
            name: "Jakarta Selatan",
          },
          {
            "@type": "City",
            name: "Jakarta Pusat",
          },
          {
            "@type": "City",
            name: "Jakarta Barat",
          },
          {
            "@type": "City",
            name: "Jakarta Utara",
          },
          {
            "@type": "City",
            name: "Jakarta Timur",
          },
          {
            "@type": "City",
            name: "Tangerang",
            sameAs: "https://id.wikipedia.org/wiki/Kota_Tangerang",
          },
          {
            "@type": "City",
            name: "Tangerang Selatan",
            sameAs: "https://id.wikipedia.org/wiki/Kota_Tangerang_Selatan",
          },
          {
            "@type": "AdministrativeArea",
            name: "BSD City",
          },
          {
            "@type": "AdministrativeArea",
            name: "Gading Serpong",
          },
          {
            "@type": "AdministrativeArea",
            name: "Alam Sutera",
          },
          {
            "@type": "AdministrativeArea",
            name: "Bintaro",
          },
          {
            "@type": "AdministrativeArea",
            name: "Jabodetabek",
          },
          {
            "@type": "Country",
            name: "Indonesia",
          },
        ],
        knowsAbout: [
          "Software Engineering",
          "Web Development Next.js React",
          "Mobile App Development Flutter iOS Android",
          "UI/UX Design and Conversion Rate Optimization",
          "Technical SEO and Google Core Web Vitals",
          "Enterprise B2B Portals and Automation",
          "E-Commerce Payment Gateway Integration",
          "Cloud Architecture and Serverless Scaling",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Rekayasa Software & Produk Digital CnZ Techno",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Desain UI/UX & Optimasi Konversi Penjualan",
                description:
                  "Desain antarmuka eksklusif kelas dunia yang mempermudah proses transaksi dan melipatgandakan nilai konversi penjualan.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Pembuatan Website & Platform Web Otomasi",
                description:
                  "Platform web berkecepatan kilat (< 1 detik) siap menampung lonjakan pesanan dengan integrasi pembayaran dan WhatsApp otomatis.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa Pembuatan Aplikasi Mobile (iOS & Android)",
                description:
                  "Aplikasi mobile resmi di App Store & Play Store untuk mengunci loyalitas pelanggan, push notification promo gratis, dan pembayaran biometrik.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Jasa SEO Teknis & Pertumbuhan Organik Google",
                description:
                  "Strategi ranking #1 Google untuk mendatangkan prospek berkualitas tinggi tanpa biaya iklan berbayar di Jakarta & Tangerang.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://cnztechno.com/#website",
        url: "https://cnztechno.com",
        name: "CnZ Techno",
        description: "Studio Rekayasa Produk Digital & Solusi Skalabel Jakarta - Tangerang",
        publisher: {
          "@id": "https://cnztechno.com/#organization",
        },
        inLanguage: "id-ID",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
