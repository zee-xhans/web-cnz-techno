import {
  NavItem,
  StatItem,
  ServiceItem,
  ProjectItem,
  ProcessStep,
  ReviewItem,
  FAQItem,
  PricingPlan,
  BlogPost,
} from "@/types";

export const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

export const brandPartners = [
  { name: "TechFlow", logo: "⚡ TechFlow" },
  { name: "NovaPay", logo: "✦ NovaPay" },
  { name: "KlinikCare", logo: "◈ KlinikCare" },
  { name: "PrimeCorp", logo: "❖ PrimeCorp" },
  { name: "ScaleX", logo: "▲ ScaleX" },
  { name: "OmniCloud", logo: "☁ OmniCloud" },
  { name: "HyperSaaS", logo: "◉ HyperSaaS" },
];

export const heroStats: StatItem[] = [
  {
    value: "98%",
    label: "Tingkat Retensi Klien",
    description: "Kemitraan jangka panjang dengan hasil konsisten",
  },
  {
    value: "150+",
    label: "Produk Sukses Rilis",
    description: "Web app, mobile apps & portal enterprise",
  },
  {
    value: "4.9/5",
    label: "Kepuasan Pelanggan",
    description: "Ulasan terverifikasi dari founder & perusahaan",
  },
  {
    value: "10x",
    label: "Akselerasi Rilis",
    description: "Siklus sprint gesit dengan teknologi modern",
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "ui-ux",
    slug: "ui-ux",
    title: "Desain Antarmuka Penjualan & Pengalaman Pengguna (High-Conversion UX)",
    subtitle: "Ubah Pengunjung Ragu Menjadi Pembeli Setia dengan Alur Pembelian Bebas Hambatan",
    shortDesc: "Desain visual premium kelas dunia yang menghilangkan keraguan pembeli, mempermudah proses transaksi, dan melipatgandakan nilai rata-rata pesanan (AOV).",
    description:
      "Desain visual premium kelas dunia yang menghilangkan keraguan pembeli, mempermudah proses transaksi, dan melipatgandakan nilai rata-rata pesanan.",
    longDescription:
      "Tampilan website atau aplikasi yang membingungkan membuat lebih dari 70% calon pembeli kabur ke kompetitor Anda. Kami merekayasa ulang seluruh alur interaksi digital Anda menggunakan psikologi keputusan pembeli—membuat calon klien B2B langsung percaya pada kredibilitas brand Anda dan pembeli B2C dapat melakukan transaksi instan dalam hitungan detik tanpa hambatan.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsVptZqy4BkhJpqYYS6vpIOZkgQ6ciq03-kuH_6x-W8jtQ6YB4T-omcoeLkHGBwJrId19ukGXNFvmcXI-qNrfkKmw01Rf5nheo2Mhz31iZBV6ZHMSHFMHLg5cgF-dHMKfQwxaV3uehywZoJhlWYmqkxmFUseDbknkeuEmGf0tsF8gUH1cwlow2LBV3jyKJf9sU2Z00atITP5o-IlNPXE7VLY-VQoWkh6ifCtbHRPyAm6XjBfROXQLFnQBPa",
    tags: ["Tingkatkan Konversi Penjualan", "Otoritas Brand B2B", "Checkout Instan B2C", "Retensi Pelanggan"],
    features: ["Alur Pembelian Bebas Hambatan (Zero-Friction Checkout)", "Tampilan Mewah Meningkatkan Nilai Jual Produk", "Struktur Navigasi Psikologi Keputusan Pembeli", "Desain Responsif Sempurna di Semua Ukuran Layar"],
    deliverables: [
      "Arsitektur Navigasi Penjualan & Cetak Biru Alur Konversi",
      "Master Prototipe Interaktif Siap Uji Pasar",
      "Desain Halaman Penawaran (High-Converting Sales Pages)",
      "Pustaka Elemen Visual & Aset Brand Otoritas Tinggi",
      "Dokumentasi Panduan Standar Visual & Panduan Implementasi",
    ],
    benefits: [
      "Menaikkan Conversion Rate hingga 300% pada Halaman Penjualan",
      "Menurunkan Cart Abandonment Rate (Keranjang Ditinggalkan) secara Drastis",
      "Membangun Otoritas Brand Premium yang Memungkinkan Anda Menjual Lebih Mahal",
      "Membuat Pelanggan Nyaman Bertransaksi Berulang Kali Tanpa Perlu Bantuan CS",
    ],
    technologies: [
      "Audit Psikologi Perilaku Konsumen",
      "Heatmap Analisis Klik & Scroll Pembeli",
      "Optimasi Alur Checkout 1-Halaman",
      "Desain Micro-Interaksi Pemicu Aksi Beli",
      "Prototyping Validasi Minat Pasar",
      "Standarisasi Identitas Brand Otoritas Tinggi",
    ],
    process: [
      { title: "1. Audit Titik Kebocoran Penjualan", desc: "Mendiagnosis mengapa calon pelanggan keluar tanpa membeli dan membedah kelemahan kompetitor." },
      { title: "2. Pemetaan Jalur Cepat Transaksi", desc: "Menghapus langkah-langkah rumit yang memperlambat keputusan beli pelanggan." },
      { title: "3. Visualisasi Kemewahan Brand", desc: "Menciptakan kesan eksklusif dan kredibilitas tinggi agar Anda bisa memasang harga premium." },
      { title: "4. Pengujian Daya Konversi", desc: "Memastikan setiap tombol, formulir, dan penawaran menghasilkan transaksi nyata." },
    ],
    startingPrice: "Rp 12.000.000",
    estimatedTimeline: "3 - 5 Minggu",
    modules: [
      { title: "Mesin Penawaran & Halaman Pendaratan Berdaya Pikat Tinggi", desc: "Halaman penawaran produk yang dirancang khusus untuk memicu rasa urgensi dan kepercayaan instan pembeli." },
      { title: "Arsitektur Keranjang & Alur Pembayaran Cepat", desc: "Menghilangkan friksi saat checkout agar pembeli tidak membatalkan niat belinya di detik terakhir." },
      { title: "Dashboard Pelanggan & Portal Klien B2B Eksklusif", desc: "Portal interaktif yang mempermudah klien bisnis Anda memantau proyek, tagihan, dan repeat order." },
      { title: "Adaptasi Responsif Smartphone & Tablet Pembeli", desc: "Tampilan yang sangat nyaman dijelajahi dengan satu jempol di semua tipe layar smartphone." },
    ],
    faqs: [
      { id: "faq-ui-1", question: "Bagaimana desain ini dapat langsung menaikkan omset bisnis saya?", answer: "Desain yang kami buat bukan sekadar estetika, melainkan instrumen penjualan. Kami memposisikan penawaran Anda di titik fokus mata pembeli, menyederhanakan formulir pemesanan, dan memperkuat elemen trust (ulasan, garansi, sertifikasi) sehingga calon pembeli tidak ragu mentransfer uang." },
      { id: "faq-ui-2", question: "Apakah kami mendapatkan semua aset dan hak milik penuh?", answer: "Tentu saja! Anda akan menerima 100% hak cipta dan kepemilikan aset digital secara utuh tanpa royalti atau biaya tersembunyi." },
      { id: "faq-ui-3", question: "Apakah cocok untuk bisnis model B2B maupun B2C?", answer: "Sangat cocok. Untuk B2B kami fokus membangun kesan perusahaan terpercaya dan mempercepat pengisian form lead. Untuk B2C kami fokus pada kecepatan pembelian instan dan peningkatan keranjang belanja." },
    ],
    comparison: [
      { feature: "Orientasi Hasil", cnz: "Murni Fokus Peningkatan Omset & Konversi Penjualan", others: "Hanya menggambar visual tanpa paham psikologi pembeli" },
      { feature: "Alur Pembelian (Checkout)", cnz: "Cepat & Bebas Hambatan (Maksimal 3 Langkah)", others: "Formulir panjang berbelit-belit yang membuat pembeli kabur" },
      { feature: "Diferensiasi Brand", cnz: "Tampilan Eksklusif Berkelas Otoritas Tinggi", others: "Template pasaran yang dipakai ribuan kompetitor lain" },
    ],
  },
  {
    id: "web-dev",
    slug: "web-dev",
    title: "Platform Website & Sistem Otomasi Bisnis (Web & B2B/B2C Engine)",
    subtitle: "Mesin Penjualan & Operasional Otomatis 24 Jam Non-Stop Tanpa Khawatir Server Down",
    shortDesc: "Website dan platform bisnis berkecepatan kilat (< 1 detik) yang siap menerima puluhan ribu pesanan serentak, terhubung otomatis ke kasir, pembayaran, dan WhatsApp.",
    description:
      "Website dan platform bisnis berkecepatan kilat (< 1 detik) yang siap menerima puluhan ribu pesanan serentak, terhubung otomatis ke kasir, pembayaran, dan WhatsApp.",
    longDescription:
      "Setiap detik website Anda lambat, Anda kehilangan omset jutaan rupiah karena calon pembeli berpindah ke tempat lain. Kami membangun platform website penjualan dan sistem operasional bisnis terpadu yang memproses transaksi secara otomatis 24 jam sehari, mengirim notifikasi instan ke WhatsApp pelanggan, serta sanggup menampung lonjakan trafik promo besar tanpa pernah down sedetik pun.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLu_EzUIU6eOBqfcVyBqNqWZGV2XYYOOJldc_IJVlKnSeGGocvhznHCQcUDBmxT_EF1vfeTSWSO0Ia14uFfdmuqhgXznNuBZj8N6hJdhc6C_9C5gOhLCRw5V7DCh4GnhvLotB_vsMn1azMkFgLssJcRBhz-vl-JGCQeehZo8x5OvM6OfkjmpPsSObys6VgSWUQDkCFCwPORAdeyrbub4o-OGptp83nNvZmr8i_NaKZSiVWgig1VnFGFuxSL8",
    tags: ["Mesin Penjualan 24/7", "Otomasi Transaksi & Kasir", "Kecepatan Akses Kilat", "Infrastruktur Anti-Down"],
    features: ["Otomasi Pembayaran Instan (QRIS, VA, Kartu Kredit, E-Wallet)", "Kecepatan Akses Kilat Mengubah Pengunjung Jadi Pembeli", "Sistem Manajemen Pesanan & Inventori Terpusat", "Keamanan Enkripsi Tingkat Bank Terlindungi dari Pembobolan"],
    deliverables: [
      "Platform Web Bisnis Siap Pakai & Kepemilikan Sistem 100%",
      "Integrasi Otomatis Gerbang Pembayaran Nasional & Internasional",
      "Sistem Notifikasi WhatsApp & Email Transaksi Real-Time",
      "Dashboard Admin Kendali Omset, Produk, & Database Pelanggan",
      "Infrastruktur Cloud Berkapasitas Tinggi Bebas Lemot",
    ],
    benefits: [
      "Operasional Bisnis Berjalan Otomatis Tanpa Perlu Ditunggui Manual",
      "Mencegah Potensi Kehilangan Omset akibat Website Lambat atau Error",
      "Mampu Menangani Puluhan Ribu Transaksi Serentak saat Periode Promo",
      "Database Pelanggan Tersimpan Rapi Milik Perusahaan Anda Sendiri",
    ],
    technologies: [
      "Infrastruktur Cloud Berkecepatan Tinggi Global",
      "Integrasi Gerbang Pembayaran Instan Serba Otomatis",
      "Sistem Kasir & Invoice Digital Otomatis",
      "Robot Otomasi Notifikasi WhatsApp & Email",
      "Enkripsi Keamanan Transaksi Tingkat Bank",
      "Dashboard Analitik Omset & Profit Real-Time",
    ],
    process: [
      { title: "1. Pemetaan Skema Alur Bisnis", desc: "Menyesuaikan sistem website dengan alur penjualan dan operasional unik perusahaan Anda." },
      { title: "2. Pembangunan Mesin Penjualan", desc: "Membangun tampilan interaktif yang super cepat dan mudah dioperasikan oleh siapapun." },
      { title: "3. Integrasi Kasir, Pembayaran & Notifikasi", desc: "Menyambungkan pembayaran QRIS, Virtual Account, dan robot WhatsApp otomatis." },
      { title: "4. Uji Ketahanan Beban & Peluncuran", desc: "Simulasi lonjakan ribuan pembeli serentak untuk menjamin website tidak akan tumbang." },
    ],
    startingPrice: "Rp 18.000.000",
    estimatedTimeline: "4 - 8 Minggu",
    modules: [
      { title: "Toko Online & Portal Transaksi B2B/B2C Multi-User", desc: "Pusat belanja digital dengan katalog interaktif dan sistem filter produk instan tanpa reload." },
      { title: "Otomasi Verifikasi Pembayaran & Faktur Instan", desc: "Uang pembayaran langsung terverifikasi otomatis dalam detik dan faktur resmi terkirim ke email/WA pembeli." },
      { title: "Manajemen Stok, Pelanggan, & Laporan Penjualan", desc: "Dashboard kendali lengkap untuk memantau omset harian, sisa inventori, dan riwayat pesanan." },
      { title: "Integrasi Ekspedisi Logistik & Pelacakan Resi", desc: "Hitung ongkos kirim otomatis ke seluruh Indonesia dan kirim nomor resi pelacakan secara mandiri." },
    ],
    faqs: [
      { id: "faq-web-1", question: "Apakah website ini bisa langsung menerima pembayaran otomatis?", answer: "Ya! Kami mengintegrasikan sistem gerbang pembayaran otomatis terlengkap (QRIS, BCA/Mandiri/BRI Virtual Account, GoPay, OVO, ShopeePay, dan Kartu Kredit) sehingga pesanan terverifikasi seketika tanpa perlu cek mutasi manual." },
      { id: "faq-web-2", question: "Bagaimana jika bisnis kami mengalami lonjakan pesanan yang sangat besar?", answer: "Infrastruktur cloud yang kami bangun menggunakan arsitektur auto-scaling yang otomatis menyesuaikan kapasitas server secara instan, sehingga website tetap stabil dan cepat walau diserbu puluhan ribu pengunjung bersamaan." },
      { id: "faq-web-3", question: "Apakah ada garansi jika terjadi kendala teknis setelah peluncuran?", answer: "Pasti. Kami memberikan garansi pemeliharaan dan pengawalan sistem prioritas selama 3 bulan penuh tanpa biaya tambahan." },
    ],
    comparison: [
      { feature: "Kecepatan Muat Halaman", cnz: "Kurang dari 1 Detik (Mencegah Pembeli Kabur)", others: "3 - 7 Detik (Lambat dan membosankan pembeli)" },
      { feature: "Kekuatan Server Saat Promo", cnz: "Stabil & Anti-Down Menampung Puluhan Ribu Pembeli", others: "Sering tumbang (down) saat sedang banjir order" },
      { feature: "Kepemilikan Data & Sistem", cnz: "100% Menjadi Aset Milik Perusahaan Anda", others: "Tergantung platform sewa yang bisa ditutup sepihak" },
    ],
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Aplikasi Mobile Penjualan & Loyalitas Pelanggan (iOS & Android)",
    subtitle: "Kuasai Layar Utama Pelanggan Anda & Ciptakan Mesin Repeat Order Tanpa Henti",
    shortDesc: "Aplikasi smartphone resmi di App Store & Play Store untuk mengunci kesetiaan pelanggan, mengirim promo gratis via notifikasi push, dan mempermudah transaksi dalam 1 sentuhan.",
    description:
      "Aplikasi smartphone resmi di App Store & Play Store untuk mengunci kesetiaan pelanggan, mengirim promo gratis via notifikasi push, dan mempermudah transaksi dalam 1 sentuhan.",
    longDescription:
      "Pelanggan Anda memeriksa smartphone mereka lebih dari 80 kali sehari. Jika bisnis Anda tidak ada di layar utama smartphone mereka, Anda melewatkan potensi omset pembelian berulang terbesar. Kami menghadirkan aplikasi mobile profesional yang dilengkapi sistem poin loyalitas, pembayaran satu sentuhan, dan fitur siaran promo gratis tanpa perlu keluar biaya iklan berbayar.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLtf87w8NCRW6V26kci5CRroqAa7myXMJ2GJrLjU0OiyMuB8p3IVkIHFnHZiJYwG9NNlqGEaOPXc29whsunTY3303ETLfmzMfCd7CEa_7UvHMmeEc8EKba3NEYmDtH2UflwHLknx1O_a5oHF9wiFVWm2vlglfTiNAytuWkfxfck9hWQxxeaUqfMJFxxbAdkRUwZ9QzHj0d2Ys5kjozdWQ6c4KXUbs0fH6ksXIbFDElgUE5Bvxn1USGuxa0dn",
    tags: ["Repeat Order Otomatis", "Broadcast Promo Gratis", "App Store & Play Store", "Kunci Kesetiaan Pelanggan"],
    features: ["Notifikasi Promo Langsung ke Layar Kunci Pelanggan (0 Biaya Iklan)", "Sistem Poin Hadiah & Membership Pelanggan VIP", "Pembayaran Instan Sekali Klik (Biometrik Face/Fingerprint)", "Akses Cepat & Tetap Berjalan Lancar Meski Sinyal Lemah"],
    deliverables: [
      "Aplikasi Resmi Siap Diunduh di Google Play Store & Apple App Store",
      "Panel Kontrol Kirim Notifikasi Promo Massal Kapan Saja",
      "Sistem Member, Kupon Diskon, & Poin Loyalitas Terintegrasi",
      "Modul Pembayaran Digital Terlengkap (QRIS, E-Wallet, VA)",
      "Pendampingan Penuh hingga Aplikasi Resmi Terbit & Aktif",
    ],
    benefits: [
      "Biaya Pemasaran Turun Signifikan Berkat Notifikasi Promo Gratis Tanpa Iklan",
      "Meningkatkan Angka Pembelian Berulang (Repeat Order) hingga 4x Lipat",
      "Menaikkan Nilai Valuasi & Kredibilitas Perusahaan di Mata Investor dan Mitra",
      "Memberikan Pengalaman Belanja Tercepat & Paling Praktis bagi Konsumen",
    ],
    technologies: [
      "Sistem Broadcast Notifikasi Promo Massal Seketika",
      "Mesin Poin Loyalitas & Manajemen Member VIP",
      "Teknologi Pembayaran Cepat Sekali Sentuh",
      "Penyimpanan Data Cerdas Berkecepatan Tinggi",
      "Pendampingan Kurasi & Lolos Review Apple & Google",
      "Pelacak Perilaku Belanja & Rekomendasi Produk",
    ],
    process: [
      { title: "1. Strategi Retensi & Alur Belanja Mobile", desc: "Merancang skema reward dan kemudahan navigasi belanja yang bikin pelanggan ketagihan." },
      { title: "2. Pembangunan Aplikasi iOS & Android", desc: "Membangun aplikasi dengan animasi responsif yang nyaman dan sangat ringan di semua tipe HP." },
      { title: "3. Integrasi Notifikasi & Gerbang Pembayaran", desc: "Memasang sistem push notification promo dan pembayaran biometrik sekali sentuh." },
      { title: "4. Penerbitan Resmi di App Store & Play Store", desc: "Pengawalan penuh proses pendaftaran dan verifikasi hingga aplikasi resmi terbit untuk publik." },
    ],
    startingPrice: "Rp 25.000.000",
    estimatedTimeline: "6 - 12 Minggu",
    modules: [
      { title: "Etalase Produk Interaktif & Fitur Pencarian Cepat", desc: "Katalog belanja berkecepatan tinggi dengan filter kategori cerdas dan rekomendasi produk terkait." },
      { title: "Program Member VIP, Kupon Diskon, & Hadiah Poin", desc: "Skema loyalitas bertingkat (Silver, Gold, Platinum) yang memotivasi pelanggan untuk terus belanja." },
      { title: "Checkout Super Cepat dengan Pembayaran Terpadu", desc: "Transaksi tanpa ribet dengan Face ID / Sidik Jari dan e-wallet lokal terpopuler." },
      { title: "Pusat Notifikasi Promo & Pembaruan Status Pesanan", desc: "Kirim pesan penawaran terbatas langsung ke layar kunci ribuan pelanggan Anda secara serentak." },
    ],
    faqs: [
      { id: "faq-mob-1", question: "Apakah tim CnZ mengurus pendaftaran hingga aplikasi lolos di Google Play Store dan Apple App Store?", answer: "Ya, 100% kami tangani. Mulai dari persiapan materi aset, kebijakan privasi, integrasi teknis, hingga pendampingan proses peninjauan sampai aplikasi Anda resmi tayang dan bisa diunduh oleh masyarakat umum." },
      { id: "faq-mob-2", question: "Bagaimana cara aplikasi mobile ini menghemat anggaran iklan saya?", answer: "Dengan memiliki aplikasi di smartphone pelanggan, Anda dapat mengirimkan promo diskon, peluncuran produk baru, atau pengingat transaksi langsung ke layar depan mereka melalui notifikasi push secara gratis kapan saja tanpa perlu membayar biaya iklan ke pihak ketiga." },
    ],
    comparison: [
      { feature: "Jangkauan Platform", cnz: "Tersedia Langsung di iOS (iPhone) & Android Sekaligus", others: "Hanya satu platform atau memungut biaya ganda" },
      { feature: "Biaya Promosi ke Pelanggan", cnz: "Gratis Tanpa Batas via Notifikasi Push Langsung", others: "Harus terus keluar biaya iklan berbayar yang mahal" },
      { feature: "Dukungan Sampai Terbit", cnz: "Garansi Pendampingan Penuh hingga Terbit di Store", others: "Lepas tangan saat aplikasi ditolak oleh Apple/Google" },
    ],
  },
  {
    id: "seo-optimization",
    slug: "seo-optimization",
    title: "Dominasi Mesin Pencari & Akuisisi Pembeli Organik (SEO & Growth Engine)",
    subtitle: "Banjiri Bisnis Anda dengan Pembeli Siap Transaksi dari Google Tanpa Bakar Uang Iklan",
    shortDesc: "Strategi dominasi kata kunci nomor 1 di Google untuk mendatangkan prospek berkualitas tinggi yang sedang aktif mencari produk atau jasa Anda setiap hari.",
    description:
      "Strategi dominasi kata kunci nomor 1 di Google untuk mendatangkan prospek berkualitas tinggi yang sedang aktif mencari produk atau jasa Anda setiap hari.",
    longDescription:
      "Iklan berbayar semakin mahal dan langsung berhenti mendatangkan penjualan begitu saldo iklan Anda habis. Kami menempatkan bisnis Anda di ranking teratas Google untuk kata-kata kunci bernilai transaksi tinggi. Hasilnya: aliran calon pembeli berduit yang siap bertransaksi datang secara konsisten ke website Anda setiap hari—24 jam sehari, 7 hari seminggu, tanpa biaya per klik.",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsqSXPMD5Y707LwQmNTVkEBCUonZeSW5ybgAQyH9VbCKxlswshaOcZOK0F0iMljt8tJD7xav4TSsK3gezVsqyY8czy4Hx2yFSRDq8Rqjl2q4ImDb1ainyBhz2gIfkBsvkqHuTTFalW65KQOHxX6WkMErK0k8P86tlhDilvKVH28rhjaGOGCytGWIecNjzmpCH45DMUC0cUMGBZ9MPo44Tv2SRVjOMfClkIZXQuZe_oQeJQinIdnk8aMJLGX",
    tags: ["Akuisisi Pembeli Tanpa Iklan", "Ranking #1 Google", "Aliran Calon Klien B2B", "ROI Jangka Panjang"],
    features: ["Dominasi Kata Kunci dengan Niat Beli Tertinggi (High-Intent Keywords)", "Struktur Website Disukai & Diprioritaskan Mesin Pencari Google", "Halaman Landing Teroptimasi Mengubah Pembaca Menjadi Kontak WhatsApp", "Laporan Perkembangan Trafik & Prospek Masuk Secara Transparan"],
    deliverables: [
      "Strategi Riset Kata Kunci Profit & Pemetaan Kompetitor Utama",
      "Optimasi Menyeluruh Struktur Penjualan & Daya Muat Halaman",
      "Pemasangan Tanda Kredibilitas Khusus Google (Bintang Review & FAQ)",
      "Penulisan Konten Edukasi Penjualan Otoritas Tinggi",
      "Dashboard Pantau Peringkat Google & Pertumbuhan Calon Pembeli",
    ],
    benefits: [
      "Memangkas Biaya Iklan Berbayar hingga Ratusan Juta Rupiah per Tahun",
      "Mendatangkan Pembeli yang Sudah Memiliki Niat Kuat untuk Membeli",
      "Membangun Aset Digital Berharga yang Terus Menghasilkan Omset Bertahun-tahun",
      "Mengungguli Kompetitor Anda yang Masih Bergantung pada Iklan Mahal",
    ],
    technologies: [
      "Audit Penetrasi Pasar & Peluang Kata Kunci Profit",
      "Sistem Akselerasi Indeks Otomatis ke Google",
      "Penanda Khusus Rich Snippet (Bintang Rating & FAQ)",
      "Optimasi Kecepatan Muat Sesuai Standar Google",
      "Pelacak Peringkat & Pertumbuhan Prospek Masuk",
      "Penyempurnaan Struktur Halaman untuk Konversi Maksimal",
    ],
    process: [
      { title: "1. Riset Kata Kunci Bernilai Profit", desc: "Mencari kata kunci yang sering diketik oleh orang yang sudah siap membeli produk/jasa Anda." },
      { title: "2. Peningkatan Standar Rekomendasi Google", desc: "Memperbaiki kecepatan dan struktur teknis website agar Google memprioritaskan ranking Anda." },
      { title: "3. Penerbitan Halaman Penawaran Otoritatif", desc: "Menyusun konten yang meyakinkan pembaca untuk segera menghubungi sales/WhatsApp Anda." },
      { title: "4. Evaluasi & Pertumbuhan Prospek Masuk", desc: "Pemantauan rutin posisi peringkat nomor 1 dan volume lead/transaksi yang dihasilkan." },
    ],
    startingPrice: "Rp 8.000.000 / bln",
    estimatedTimeline: "Retainer Bulanan / 4 Minggu Audit",
    modules: [
      { title: "Pemetaan Kata Kunci Pembeli B2B & Konsumen Siap Bayar", desc: "Menargetkan pencarian spesifik yang memiliki rasio transaksi tertinggi di industri Anda." },
      { title: "Peningkatan Kecepatan & Kelayakan Ranking di Google", desc: "Membuat website Anda memuat secara instan agar Google menempatkannya di halaman pertama." },
      { title: "Pembuatan Halaman Solusi Otoritas Tinggi yang Menghasilkan Lead", desc: "Menyajikan jawaban tuntas yang mengarahkan pengunjung langsung ke tombol kontak penjualan." },
      { title: "Pemantauan Posisi Nomor 1 & Analisis Konversi Penjualan", desc: "Laporan berkala mengenai kenaikan posisi kata kunci dan jumlah pembeli yang masuk." },
    ],
    faqs: [
      { id: "faq-seo-1", question: "Kapan bisnis saya mulai merasakan kenaikan calon pembeli dari Google?", answer: "Optimasi teknis dan kecepatan website akan terdeteksi oleh Google dalam 1-2 minggu pertama. Kenaikan ranking pada kata kunci dengan niat beli tinggi dan aliran calon pembeli yang stabil umumnya mulai melesat dalam 2 hingga 3 bulan." },
      { id: "faq-seo-2", question: "Mengapa SEO lebih menguntungkan dibanding terus-menerus pasang iklan berbayar?", answer: "Iklan berbayar seperti menyewa rumah—ketika Anda berhenti bayar, pengunjung langsung nol. SEO membangun aset permanen—ketika website Anda berada di ranking 1, Anda mendapatkan calon pembeli berkualitas secara gratis tanpa biaya per klik selama bertahun-tahun." },
    ],
    comparison: [
      { feature: "Sumber Pembeli", cnz: "Aliran Calon Pembeli Organik Gratis Jangka Panjang", others: "Ketergantungan bakar uang iklan yang makin lama makin mahal" },
      { feature: "Kualitas Prospek", cnz: "Murni Orang yang Sedang Aktif Mencari Solusi Anda", others: "Pengguna media sosial yang sekadar lewat tanpa niat beli" },
      { feature: "Efisiensi Biaya", cnz: "Aset Digital Bernilai Tinggi & Menghemat Anggaran Promosi", others: "Biaya membengkak setiap bulan tanpa meninggalkan aset nyata" },
    ],
  },
];

export const portfolioCategories = [
  { id: "all", label: "Semua Project" },
  { id: "web", label: "Pengembangan Web" },
  { id: "mobile", label: "Aplikasi Mobile" },
  { id: "uiux", label: "UI/UX & Branding" },
  { id: "enterprise", label: "Enterprise & SaaS" },
];

export const portfolioData: ProjectItem[] = [
  {
    id: "bersamad",
    slug: "bersamad",
    title: "BersamaD — Platform Donasi & Komunitas Digital",
    client: "Yayasan Bersama Digital Indonesia",
    category: "web",
    categoryLabel: "Platform Web & Desain UI/UX",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLuKHGUFyuNAYzXwoOL9a4HYDqkE8R7Jvo3ck3jYbdwCC76JwA7mzHBEb8FSWTC1zauK_SadIJ-_OfXDTH_2cmjtCcNvuc0xm20V-jBtGxyD8oFQ8B1WuMgO62mz2PIF_FDBy_4vO1BOhbSSNvvyyRu2gADRUSxpkJuse7edmyH2RbEVP5HlK-78rrUS7m-jbF4v6sSAh-1Q7687jEIVgBo2fcRulvMFickeEBUbUQN3PkKqYcwrkmEwdI0",
    results: "+240% Pertumbuhan Pengguna",
    timeline: "8 Minggu",
    year: "2024",
    overview:
      "BersamaD adalah platform crowdfunding sosial yang menghubungkan ribuan donatur dengan program kemanusiaan terverifikasi di seluruh Indonesia. Dibutuhkan antarmuka yang transparan, mudah diakses di smartphone dengan sinyal lambat, serta sistem transaksi aman dan instan.",
    challenge:
      "Platform lama mengalami tingkat drop-off donatur hingga 45% pada tahap checkout donasi akibat navigasi rumit dan waktu loading yang lambat di jaringan seluler 3G/4G.",
    solution:
      "CnZ merancang ulang antarmuka dari awal dengan pendekatan Mobile-First dan merestrukturisasi frontend menggunakan Next.js App Router. Kami menyederhanakan alur donasi menjadi hanya 2 langkah cepat dan mengintegrasikan multi-payment gateway lokal secara seamless.",
    impactMetrics: [
      { label: "Pertumbuhan User", value: "+240%", desc: "Peningkatan donatur aktif bulanan dalam 3 bulan" },
      { label: "Donasi Terkumpul", value: "Rp 4.2 Miliar", desc: "Total volume penyaluran dana sosial terverifikasi" },
      { label: "Kecepatan Muat", value: "0.8 Detik", desc: "Skor performa Google PageSpeed meningkat ke 99/100" },
    ],
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Midtrans Payment", "Vercel"],
    testimonial: {
      quote: "Pengembangan platform BersamaD oleh CnZ sangat mengubah jalannya operasional kami. Alur donasi menjadi luar biasa cepat dan tingkat kepercayaan donatur naik drastis.",
      author: "Hendra Wijaya",
      role: "Direktur Eksekutif BersamaD",
    },
  },
  {
    id: "beauty-clinic",
    slug: "beauty-clinic",
    title: "Aura Clinic — Portal Booking & Kecantikan Premium",
    client: "Aura Aesthetic Group",
    category: "uiux",
    categoryLabel: "Identitas Brand & UI/UX",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLuS1ofqByImJboEsf1To7iCwChlOcJSUQayYYtx0ro0EpqzyWNPrPg4H7Q5UXmffjiGzbUF53UcL8wgdPboE3sH1rZbAitT6MLBf246JZquOKoGnhimhbFhg_VBfTHOWSHcFh72hc55zqUhaybmsjmangTp9eITX2Aw2Sw_iskQU7wJwveC6fgL6Bv_3UmnqTepjFY5l7dgfn2GiL5K7JpQbgALv17PjJhPLo8trkpE-8XAlLTdo2yBcYiG",
    results: "98% Konversi Booking",
    timeline: "6 Minggu",
    year: "2024",
    overview:
      "Aura Clinic membutuhkan rebranding digital menyeluruh dan sistem reservasi dokter spesialis kulit yang elegan untuk 5 cabang klinik mereka di kota-kota besar.",
    challenge:
      "Pasien sering membatalkan janji temu karena antrean manual via WhatsApp yang lambat dibalas, serta jadwal konsultasi dokter yang sering bentrok.",
    solution:
      "Kami menciptakan sistem reservasi dokter real-time dengan sinkronisasi kalender otomatis, kalkulator estimasi biaya perawatan interaktif, serta panduan perawatan pasca-tindakan.",
    impactMetrics: [
      { label: "Konversi Reservasi", value: "98%", desc: "Tingkat keberhasilan pemesanan jadwal via online" },
      { label: "Waktu Tunggu", value: "-65%", desc: "Pengurangan waktu administrasi saat pasien tiba di klinik" },
      { label: "Pertumbuhan Omset", value: "+180%", desc: "Peningkatan paket treatment kecantikan yang terjual" },
    ],
    tech: ["Figma Design System", "Next.js", "Tailwind CSS", "Calendar Sync API", "Supabase"],
    testimonial: {
      quote: "Desain dari CnZ memberikan kesan mewah dan kredibel pada klinik kami. Pasien sangat menyukai kemudahan memilih dokter dan jadwal secara mandiri.",
      author: "dr. Amanda Clarissa",
      role: "Managing Director Aura Clinic",
    },
  },
  {
    id: "prime-well",
    slug: "prime-well",
    title: "PT Prime Well — Portal Rantai Pasok B2B Enterprise",
    client: "PT Prime Well Logistics International",
    category: "enterprise",
    categoryLabel: "Arsitektur Frontend & Portal Perusahaan",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLtKLh_fwwgeP5Wk_cTDb3-ECsN0AlGOxmQZgtMRK2u5MKzFas4dUQoOKK6x0XeqAOOz_5My2YMGnrQupTbEsI6ono9GF_OIjrhv9xSOeuspAvX_Q-Xl8IyvftdHWpGWh4n8PGWBJzT5mnkTXgJqFXD3X1TE_bwpmKdYhTs7LGos5C0QXj-MvPAJgF0_jDL4b-2hQoT6R3WKdFS7xhmpE2BYF-vl9WiWSC-Dx1dZQv7289WP0DU3LMfYecwi",
    results: "10.000+ Transaksi Harian",
    timeline: "12 Minggu",
    year: "2024",
    overview:
      "Sistem portal logistik dan rantai pasok terintegrasi untuk melacak pergerakan kontainer kargo, manifest bea cukai, dan penagihan invoice otomatis ribuan mitra distributor se-Asia Tenggara.",
    challenge:
      "Sistem legacy berbasis monolitik lama sering down saat jam sibuk dan tidak responsif saat diakses dari tablet gudang pelabuhan.",
    solution:
      "CnZ memisahkan frontend menjadi Single Page Application Next.js dengan arsitektur GraphQL federated dan caching Redis di edge network.",
    impactMetrics: [
      { label: "Transaksi Harian", value: "10.000+", desc: "Manifest pengiriman yang diproses secara real-time" },
      { label: "Respon Sistem", value: "120ms", desc: "Waktu respon query data inventori gudang" },
      { label: "Efisiensi Biaya", value: "35%", desc: "Penghematan resource server dan biaya komputasi" },
    ],
    tech: ["React 19", "TypeScript", "GraphQL", "Tailwind CSS", "Redis", "Docker"],
    testimonial: {
      quote: "Sistem baru yang dibangun CnZ bekerja sangat stabil di bawah beban transaksi berat. Tim kami dapat memantau armada logistik dengan presisi tinggi.",
      author: "Budi Santoso",
      role: "Head of Digital Transformation PT Prime Well",
    },
  },
  {
    id: "fintech-wallet",
    slug: "fintech-wallet",
    title: "NovaPay — Dompet Digital Lintas Negara",
    client: "NovaPay Financial Technologies",
    category: "mobile",
    categoryLabel: "Aplikasi Mobile Fintech",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXDNl8_avX0qI33GgQiHZOtANH52TMye1pYKbs3JmF9To1FUeGRissSmEQNo7Xo7fBK3CiAixugmh2guyf3I0dFcNStbzLeMCY5BDHLRP0U-GAhL-T2g6wiHHiJqQ-JAjy2z5FSxPeoxWVWVA8oKzsK3_GJxPS4QPKLveDMX2O0utxZRhmevSriUQ7sUft-jfbD9DKJxc31JVe86BRW2YPKuK-1LBPX8RUn8xEMHhLB6qOGzv8EMivb63tTxQfDcUpRu_mbCjauutc",
    results: "Rating 4.9/5 di App Store",
    timeline: "10 Minggu",
    year: "2024",
    overview:
      "Aplikasi dompet digital multi-mata uang untuk transfer instan, pembayaran QRIS, dan konversi valuta asing dengan biaya terendah di pasar.",
    challenge:
      "Menjamin transaksi finansial berlangsung dalam hitungan milidetik dengan enkripsi tingkat militer dan autentikasi biometrik yang sangat ketat.",
    solution:
      "Membangun aplikasi mobile menggunakan Flutter dengan modul keamanan native (Secure Enclave / KeyStore), enkripsi end-to-end, dan visual feedback yang memuaskan.",
    impactMetrics: [
      { label: "Pengguna Aktif", value: "250.000+", desc: "Total unduhan dan pengguna aktif terdaftar" },
      { label: "Rating Toko", value: "4.9 / 5.0", desc: "Diulas oleh lebih dari 15.000 pengguna toko aplikasi" },
      { label: "Waktu Transfer", value: "< 2 Detik", desc: "Rata-rata waktu eksekusi transfer dana lintas bank" },
    ],
    tech: ["Flutter", "Dart", "Web3.js", "Node.js", "Biometrik", "Kafka"],
    testimonial: {
      quote: "CnZ berhasil menghadirkan UX finansial yang terasa aman, modern, dan sangat menyenangkan untuk dipakai sehari-hari.",
      author: "Reza Farhan",
      role: "VP of Product NovaPay",
    },
  },
  {
    id: "analytics-saas",
    slug: "analytics-saas",
    title: "InsightX — Dashboard Analisis & Monitoring Real-Time",
    client: "InsightX Corp",
    category: "web",
    categoryLabel: "SaaS Dashboard & Visualisasi Data",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCh57SG-coLAoUV_ob5vBxwBbTC1174AK3Neual0SZ1QVcUMWiK-DNZisddEEgeydCGks2NFH1Rn7LTfGE1HpoLL-CxytqOyhpIGc8Sk4oQaCP1zNf-CDA2l4iQWh0XhwAv7xd-_jLb24Lmzdx9SsS7pklTG2xuN9uJKHfVLdRjUs-eh8w33KI_aqBmsvWzrhnRdeuij0PFwsgl61MypwnzD3wnTQU3pI8AuUCYFhq5IekCPY4etfZfAQKItbUqEY6ZYwJBATDNjTTb",
    results: "Latensi Berkurang 3x Lebih Cepat",
    timeline: "8 Minggu",
    year: "2024",
    overview:
      "Platform SaaS pemantauan performa server, metrik API, dan error logging untuk tim developer skala global dengan visualisasi grafik interaktif.",
    challenge:
      "Menampilkan aliran data ratusan ribu events per detik tanpa membuat browser pengguna membeku atau mengalami memory leak.",
    solution:
      "Implementasi WebSockets stream dengan visualisasi Canvas/WebGL terakselerasi hardware dan dark mode glassmorphic UI.",
    impactMetrics: [
      { label: "Kecepatan Render", value: "60 FPS", desc: "Grafik data viz tetap halus pada dataset besar" },
      { label: "Data Retention", value: "99.99%", desc: "Tanpa data loss pada lonjakan beban data streaming" },
      { label: "Adopsi Pengguna", value: "+310%", desc: "Peningkatan tim engineering yang berlangganan" },
    ],
    tech: ["Next.js App Router", "Tailwind CSS", "Chart.js", "WebSockets", "ClickHouse"],
    testimonial: {
      quote: "Dashboard analitik yang dibuat CnZ tidak hanya cepat, tapi juga memiliki estetika visual terbaik yang pernah kami gunakan.",
      author: "David Chen",
      role: "CTO InsightX",
    },
  },
  {
    id: "creative-studio",
    slug: "creative-studio",
    title: "Verve Media — Portofolio & Editorial Digital",
    client: "Verve Global Creative",
    category: "uiux",
    categoryLabel: "Identitas Visual & Pengalaman Interaktif",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHCRhcsDmYdoWldS5-AoITMPvkIpAnl2ijzYJOqLQ-Qsz1EXzHn8mcyerBGj-A-isv_9XpXJodpN3LtRASrC5ZhMTUmvEdcJ7l7V4onTOIVFAJccqS9vCelhSmros6675W36vpP9OKjMnVqrA4ZP0FcgA0ja16FJB8ZLgLOSqXrsDh7emWraBUxDn15roLi4HUhOM7SsyF_PyC6usnsT3q8CBw3Ldzaf65nSyaD4OV05UEuNBAlhRJacTl-M3Klr_jbbzi_Ze-tE7d",
    results: "Pemenang Penghargaan Desain",
    timeline: "5 Minggu",
    year: "2024",
    overview:
      "Website editorial interaktif untuk agensi kreatif global dengan bento grid layout asimetris, efek scroll paralaks halus, dan tipografi editorial mewah.",
    challenge:
      "Menciptakan pengalaman web imersif yang unik tanpa mengorbankan aksesibilitas dan performa loading di perangkat mobile.",
    solution:
      "Penerapan animasi GSAP teroptimasi, glassmorphism dengan fallback CSS murni, dan layout grid adaptif.",
    impactMetrics: [
      { label: "Time on Site", value: "4m 20s", desc: "Rata-rata durasi pengunjung menjelajahi portofolio" },
      { label: "Penghargaan", value: "Site of the Day", desc: "Diakui oleh kurator desain web internasional" },
      { label: "Inbound Leads", value: "4x Lipat", desc: "Kenaikan permintaan project dari klien luar negeri" },
    ],
    tech: ["Next.js", "GSAP ScrollTrigger", "Tailwind CSS", "Figma"],
    testimonial: {
      quote: "Kolaborasi bersama CnZ menghasilkan karya digital yang melampaui ekspektasi kami. Kualitas detail visualnya luar biasa.",
      author: "Sophie Laurent",
      role: "Creative Director Verve Media",
    },
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Riset & Strategi",
    subtitle: "Analisis Bisnis & Audiens",
    description:
      "Kami menyelami tujuan bisnis Anda, target pasar, kompetitor, serta merumuskan arsitektur produk yang paling efektif.",
    isAccent: true,
  },
  {
    step: 2,
    title: "UI/UX & Arsitektur",
    subtitle: "Desain Sistem & Blueprint",
    description:
      "Penyusunan wireframe, prototype interaktif Figma, serta perancangan skema database dan tech stack berkinerja tinggi.",
  },
  {
    step: 3,
    title: "Pengembangan Agile",
    subtitle: "Iterasi Cepat & Clean Code",
    description:
      "Sesi sprint terstruktur, implementasi clean code TypeScript, integrasi API pihak ketiga, dan pengujian berkala di staging server.",
  },
  {
    step: 4,
    title: "Rilis & Skalabilitas",
    subtitle: "Deployment & Dukungan Teknis",
    description:
      "Peluncuran tanpa downtime di infrastruktur cloud, audit SEO teknis, pelatihan tim, serta pemeliharaan berkelanjutan.",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "MVP Launchpad",
    badge: "Cocok untuk Startup",
    description: "Solusi kilat untuk memvalidasi ide produk digital dengan landing page & web app MVP siap pakai.",
    monthlyPrice: "Rp 12.500.000",
    annualPrice: "Rp 9.900.000",
    popular: false,
    ctaText: "Mulai Paket MVP",
    features: [
      "Desain UI/UX Kustom (Figma)",
      "Arsitektur Web Modern Next.js",
      "Responsif Penuh di Mobile & Desktop",
      "Integrasi Formulir & WhatsApp Lead",
      "Optimasi SEO & Skor Kecepatan 95+",
      "Setup Domain & Cloud Hosting",
      "Garansi & Pemeliharaan 1 Bulan",
    ],
  },
  {
    id: "growth",
    name: "Product Scale Pro",
    badge: "Paling Populer ★",
    description: "Paket komprehensif untuk bisnis yang memerlukan sistem web kustom dengan fitur dinamis dan database.",
    monthlyPrice: "Rp 28.000.000",
    annualPrice: "Rp 23.500.000",
    popular: true,
    ctaText: "Pilih Scale Pro",
    features: [
      "Semua fitur di MVP Launchpad",
      "Web Aplikasi Kustom / Dashboard Penuh",
      "Autentikasi Pengguna & Hak Akses",
      "Integrasi Payment Gateway (Midtrans/Xendit)",
      "Database Cloud (PostgreSQL / Supabase)",
      "Integrasi REST & GraphQL API",
      "Pelacakan Analisis & Tracking Otomatis",
      "Dukungan Prioritas 3 Bulan",
    ],
  },
  {
    id: "enterprise",
    name: "Custom Enterprise",
    badge: "Tim Khusus Dedicated",
    description: "Solusi enterprise berkecepatan tinggi dengan tim engineering berdedikasi dan perjanjian SLA resmi.",
    monthlyPrice: "Sesuai Kebutuhan",
    annualPrice: "Sesuai Kebutuhan",
    popular: false,
    ctaText: "Konsultasi Khusus",
    features: [
      "Semua fitur di Product Scale Pro",
      "Backend Microservices & High Concurrency",
      "Aplikasi Mobile Native iOS & Android",
      "Audit Keamanan & Uji Penetrasi",
      "Dedicated Full-Stack Developer & PM",
      "SLA Kustom & Monitoring 24/7",
      "Pelatihan Onboarding & Dokumentasi Lengkap",
    ],
  },
];

export const testimonialsList: ReviewItem[] = [
  {
    id: "rev-1",
    quote:
      "Yang saya suka dari CnZ, setiap project selalu dipikirkan jangka panjangnya. Sistemnya sangat scalable dan tidak hanya bagus di awal saja. Kami mengalami lonjakan transaksi hingga 300% tanpa kendala server sama sekali.",
    author: "Kevin Setiawan",
    role: "Founder & CEO",
    company: "TechFlow Indonesia",
    avatar: "KS",
    avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    projectType: "Aplikasi Web Full-Stack",
  },
  {
    id: "rev-2",
    quote:
      "Eksekusi desain UI/UX dari CnZ luar biasa estetik dan modern. Konversi booking klinik kami melonjak drastis sejak website baru diluncurkan. Timnya sangat profesional dan solutif.",
    author: "dr. Amanda Clarissa",
    role: "Managing Director",
    company: "Aura Beauty Care",
    avatar: "AC",
    avatarImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    projectType: "Branding & Portal Booking",
  },
  {
    id: "rev-3",
    quote:
      "CnZ sukses mentransformasi portal rantai pasok B2B kami dari sistem lama ke arsitektur modern Next.js. Waktu respon sistem berkurang 70% dan kepuasan mitra kami meningkat tajam.",
    author: "Budi Santoso",
    role: "Head of Digital Transformation",
    company: "PT Prime Well Logistics",
    avatar: "BS",
    avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    projectType: "Portal Rantai Pasok Enterprise",
  },
];

export const reviewData = testimonialsList[0];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apa keunggulan CnZ Techno dibanding software house konvensional?",
    answer:
      "Kami menggabungkan estetika desain kelas dunia (modern minimalism & mikro-interaksi) dengan standar engineering tinggi (clean architecture Next.js, performa super cepat, dan keamanan solid). Kami membangun produk yang skalabel jangka panjang, bukan sekadar website biasa.",
  },
  {
    id: "faq-2",
    question: "Berapa lama estimasi waktu pengerjaan project?",
    answer:
      "Untuk landing page atau MVP umumnya memakan waktu 2–4 minggu. Sedangkan untuk web aplikasi kustom atau sistem SaaS skala penuh berkisar antara 6–12 minggu dengan siklus sprint mingguan dan sesi demo berkala.",
  },
  {
    id: "faq-3",
    question: "Apakah CnZ melayani model kerjasama tim dedicated atau retainer?",
    answer:
      "Tentu saja! Kami menyediakan skema Dedicated Sprint & Retainer bulanan bagi perusahaan yang membutuhkan tim produk eksternal berkelanjutan tanpa repot merekrut tim in-house.",
  },
  {
    id: "faq-4",
    question: "Bagaimana dengan hak cipta dan kepemilikan source code?",
    answer:
      "100% source code, aset desain Figma, dan basis data sepenuhnya menjadi hak milik Anda (Full IP Ownership) setelah proses serah terima project selesai.",
  },
  {
    id: "faq-5",
    question: "Teknologi apa saja yang menjadi keahlian utama CnZ Techno?",
    answer:
      "Kami berfokus pada teknologi mutakhir: Next.js (App Router), React, TypeScript, Tailwind CSS, Node.js, Python, PostgreSQL/Supabase, Redis, Flutter/React Native, serta infrastruktur cloud Vercel, AWS, dan Google Cloud.",
  },
];

export const blogCategories = [
  { id: "all", label: "Semua Artikel" },
  { id: "tech", label: "Teknologi & Web" },
  { id: "design", label: "Desain UI/UX" },
  { id: "startup", label: "Strategi Startup" },
  { id: "seo", label: "SEO & Pertumbuhan" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "panduan-arsitektur-nextjs-16",
    title: "Panduan Membangun Arsitektur Web Skalabel dengan Next.js App Router",
    excerpt:
      "Pelajari bagaimana arsitektur Next.js Server Components, Turbopack, dan caching edge network dapat memangkas latensi web hingga 70%.",
    content: `
Membangun web aplikasi modern saat ini menuntut kecepatan eksekusi tinggi dan efisiensi resource server. Next.js dengan App Router menghadirkan paradigma baru melalui React Server Components (RSC).

### Mengapa Server Components Mengubah Segalanya?
Secara historis, Single Page Application (SPA) mengirimkan bundle JavaScript berukuran megabyte ke browser sebelum halaman dapat dirender. Dengan React Server Components, komputasi berat dan query database diselesaikan langsung di server, sehingga browser pengguna hanya menerima HTML dan CSS ringan.

### 3 Prinsip Utama Arsitektur Skalabel:
1. **Colocation Data Fetching:** Lakukan fetch data langsung di dalam Server Component terdekat tanpa prop-drilling berlebihan.
2. **Streaming & Suspense:** Pisahkan komponen ber-latency tinggi dengan tag \`<Suspense>\` agar skeleton UI muncul instan tanpa memblokir seluruh halaman.
3. **Edge Caching & Incremental Static Regeneration (ISR):** Simpan halaman yang sering diakses di cache edge global dan revalidasi di background saat ada perubahan data.

Dengan menerapkan prinsip-prinsip ini, tim CnZ berhasil menekan First Contentful Paint (FCP) ke angka di bawah 0.4 detik pada berbagai platform enterprise klien kami.
    `,
    category: "tech",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCh57SG-coLAoUV_ob5vBxwBbTC1174AK3Neual0SZ1QVcUMWiK-DNZisddEEgeydCGks2NFH1Rn7LTfGE1HpoLL-CxytqOyhpIGc8Sk4oQaCP1zNf-CDA2l4iQWh0XhwAv7xd-_jLb24Lmzdx9SsS7pklTG2xuN9uJKHfVLdRjUs-eh8w33KI_aqBmsvWzrhnRdeuij0PFwsgl61MypwnzD3wnTQU3pI8AuUCYFhq5IekCPY4etfZfAQKItbUqEY6ZYwJBATDNjTTb",
    date: "10 September 2024",
    readTime: "5 Menit Baca",
    author: {
      name: "Rian Ramadhan",
      role: "Principal Software Architect @ CnZ",
      avatar: "RR",
      avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    tags: ["Next.js", "Web Performance", "Architecture", "React 19"],
    keyTakeaways: [
      "Server Components mengurangi ukuran bundle JavaScript client hingga lebih dari 60%.",
      "Streaming Suspense menghindarkan pengguna dari layar putih saat loading data.",
      "Optimasi edge caching penting untuk menjaga skalabilitas beban trafik jutaan request.",
    ],
  },
  {
    id: "post-2",
    slug: "tips-ui-ux-konversi-tinggi",
    title: "Rahasia Desain UI/UX yang Meningkatkan Konversi hingga 240%",
    excerpt:
      "Desain yang cantik saja tidak cukup. Temukan prinsip psikologi visual dan mikro-interaksi yang mengubah pengunjung biasa menjadi pelanggan setia.",
    content: `
Banyak founder dan pebisnis terjebak pada asumsi bahwa desain produk hanya tentang estetika warna dan gambar yang estetik. Namun dalam realita produk digital, desain adalah tentang bagaimana produk tersebut memandu pengguna mencapai tujuannya dengan sesedikit mungkin hambatan (frictionless experience).

### 1. Hukum Hick (Hick's Law) & Reduksi Keputusan
Semakin banyak opsi yang Anda tawarkan dalam satu layar, semakin lama pengguna memutuskan — atau bahkan memilih keluar (*bounce*). Fokuskan setiap layar pada SATU aksi utama (*Single Primary CTA*).

### 2. Mikro-Interaksi yang Memberikan Kepastian
Saat pengguna mengklik tombol atau mengisi formulir, respons visual instan (seperti animasi hover halus, status loading yang jelas, dan ikon ceklis konfirmasi) membangun rasa aman dan kepercayaan.

### 3. Kontras Visual & Skala Hirarki Tipografi
Gunakan kombinasi tipografi yang tegas seperti Montserrat untuk headline penting dan font yang nyaman dibaca seperti Poppins untuk body copy. Kontras hierarki yang tepat membuat pengguna dapat memindai isi halaman (*scanning*) dalam hitungan 3 detik pertama.
    `,
    category: "design",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHCRhcsDmYdoWldS5-AoITMPvkIpAnl2ijzYJOqLQ-Qsz1EXzHn8mcyerBGj-A-isv_9XpXJodpN3LtRASrC5ZhMTUmvEdcJ7l7V4onTOIVFAJccqS9vCelhSmros6675W36vpP9OKjMnVqrA4ZP0FcgA0ja16FJB8ZLgLOSqXrsDh7emWraBUxDn15roLi4HUhOM7SsyF_PyC6usnsT3q8CBw3Ldzaf65nSyaD4OV05UEuNBAlhRJacTl-M3Klr_jbbzi_Ze-tE7d",
    date: "05 September 2024",
    readTime: "4 Menit Baca",
    author: {
      name: "Jessica Tania",
      role: "Lead Product Designer @ CnZ",
      avatar: "JT",
      avatarImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    },
    tags: ["UI/UX", "Conversion Rate", "Design Psychology", "Figma"],
    keyTakeaways: [
      "Patuhi Hukum Hick: minimalkan hambatan kognitif pengguna dalam mengambil keputusan.",
      "Mikro-interaksi memberikan umpan balik psikologis positif yang memperkuat kepercayaan.",
      "Hierarki kontras tipografi menentukan keberhasilan penyerapan informasi dalam 3 detik pertama.",
    ],
  },
  {
    id: "post-3",
    slug: "strategi-mvp-startup",
    title: "Strategi Meluncurkan MVP dalam 4 Minggu Tanpa Mengorbankan Kualitas",
    excerpt:
      "Panduan praktis bagi founder startup untuk memvalidasi ide bisnis di pasar dengan cepat, efisien, dan tetap memiliki fondasi kode yang kokoh.",
    content: `
Kesalahan terbesar yang sering dilakukan startup tahap awal adalah *over-engineering* — menghabiskan waktu 6 hingga 12 bulan membangun puluhan fitur rumit yang belum tentu dibutuhkan oleh pasar.

### Konsep Minimum Lovable Product (MLP)
Di era saat ini, MVP bukan lagi produk asal jadi yang penuh bug (*minimum viable*), melainkan produk dengan cakupan fitur terfokus namun dieksekusi dengan kualitas yang sangat memikat (*minimum lovable*).

### Tahapan 4 Minggu Peluncuran MVP:
- **Minggu 1 (Scope Definition):** Pangkas fitur non-esensial. Tentukan 1 fitur utama yang menyelesaikan masalah paling krusial pengguna.
- **Minggu 2 (UI/UX Prototype):** Rancang antarmuka cepat di Figma dan validasi alur checkout / onboarding ke calon pengguna.
- **Minggu 3 (Agile Dev Sprint):** Bangun aplikasi menggunakan Next.js dan backend BaaS (seperti Supabase/Firebase) untuk menghemat waktu penulisan boilerplate code.
- **Minggu 4 (Testing & Launch):** Integrasikan analitik pelacakan, payment gateway, dan rilis ke publik untuk mengumpulkan data nyata.
    `,
    category: "startup",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXDNl8_avX0qI33GgQiHZOtANH52TMye1pYKbs3JmF9To1FUeGRissSmEQNo7Xo7fBK3CiAixugmh2guyf3I0dFcNStbzLeMCY5BDHLRP0U-GAhL-T2g6wiHHiJqQ-JAjy2z5FSxPeoxWVWVA8oKzsK3_GJxPS4QPKLveDMX2O0utxZRhmevSriUQ7sUft-jfbD9DKJxc31JVe86BRW2YPKuK-1LBPX8RUn8xEMHhLB6qOGzv8EMivb63tTxQfDcUpRu_mbCjauutc",
    date: "28 Agustus 2024",
    readTime: "6 Menit Baca",
    author: {
      name: "Kevin Setiawan",
      role: "Startup Mentor & Tech Consultant",
      avatar: "KS",
      avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    tags: ["Startup", "MVP", "Product Strategy", "Scale Up"],
    keyTakeaways: [
      "Fokus pada 1 problem utama daripada mencoba memecahkan 10 masalah sekaligus.",
      "Gunakan modern stack dan BaaS untuk mempercepat waktu pengembangan hingga 3x lipat.",
      "Kumpulkan feedback data riil dari pengguna sesegera mungkin.",
    ],
  },
  {
    id: "post-4",
    slug: "optimasi-core-web-vitals",
    title: "Menguasai Core Web Vitals untuk Mendominasi Ranking Google 2025",
    excerpt:
      "Bedah tuntas metrik LCP, INP, dan CLS beserta teknik optimasi teknis untuk meraih skor PageSpeed hijau sempurna.",
    content: `
Google telah secara resmi menjadikan pengalaman halaman (*page experience*) dan Core Web Vitals sebagai faktor penentu peringkat penting dalam algoritma pencarian.

### Tiga Pilar Utama Core Web Vitals:
1. **Largest Contentful Paint (LCP):** Waktu yang dibutuhkan untuk merender elemen visual terbesar (target: < 2.5 detik).
2. **Interaction to Next Paint (INP):** Mengukur responsivitas antarmuka saat pengguna melakukan klik atau interaksi (target: < 200 milidetik).
3. **Cumulative Layout Shift (CLS):** Mengukur kestabilan visual agar elemen tidak bergeser tiba-tiba saat halaman dimuat (target: < 0.1).

### Checklist Optimasi Teknis:
- Gunakan format gambar Next-Gen (WebP / AVIF) dengan atribut ukuran lebar & tinggi eksplisit.
- Terapkan font display swap dengan preloading Google Fonts via Next.js Font.
- Hindari third-party script yang memblokir main thread browser.
    `,
    category: "seo",
    image:
      "https://lh3.googleusercontent.com/aida/AP1WRLsqSXPMD5Y707LwQmNTVkEBCUonZeSW5ybgAQyH9VbCKxlswshaOcZOK0F0iMljt8tJD7xav4TSsK3gezVsqyY8czy4Hx2yFSRDq8Rqjl2q4ImDb1ainyBhz2gIfkBsvkqHuTTFalW65KQOHxX6WkMErK0k8P86tlhDilvKVH28rhjaGOGCytGWIecNjzmpCH45DMUC0cUMGBZ9MPo44Tv2SRVjOMfClkIZXQuZe_oQeJQinIdnk8aMJLGX",
    date: "18 Agustus 2024",
    readTime: "5 Menit Baca",
    author: {
      name: "Dimas Anggara",
      role: "SEO & Growth Lead @ CnZ",
      avatar: "DA",
      avatarImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    },
    tags: ["SEO", "Core Web Vitals", "Google Ranking", "PageSpeed"],
    keyTakeaways: [
      "Skor Core Web Vitals hijau berkorelasi langsung dengan lonjakan peringkat organik.",
      "Optimasi gambar dan layout stability (CLS) adalah perbaikan tercepat dengan dampak terbesar.",
      "INP (Interaction to Next Paint) kini menjadi metrik kunci responsivitas aplikasi.",
    ],
  },
];
