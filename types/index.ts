export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  navDesc?: string;
  subtitle?: string;
  shortDesc: string;
  description: string;
  longDescription: string;
  image: string;
  iconName?: string;
  tags: string[];
  features: string[];
  deliverables: string[];
  benefits: string[];
  technologies: string[];
  process: { title: string; desc: string }[];
  startingPrice: string;
  estimatedTimeline?: string;
  modules?: { title: string; desc: string }[];
  faqs?: FAQItem[];
  comparison?: { feature: string; cnz: string; others: string }[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "all" | "web" | "mobile" | "uiux" | "enterprise";
  categoryLabel: string;
  image: string;
  heroImage?: string;
  link?: string;
  liveUrl?: string;
  results?: string;
  timeline: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string; desc: string }[];
  tech: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  isAccent?: boolean;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  avatarImage?: string;
  rating: number;
  projectType: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface PricingFeature {
  title: string;
  impact: string;
}

export interface PricingPlan {
  id: string;
  tierNumber?: string;
  name: string;
  badge?: string;
  priceNote?: string;
  description: string;
  monthlyPrice: string;
  annualPrice?: string;
  price?: string;
  popular?: boolean;
  features: (string | PricingFeature)[];
  ctaText: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    avatarImage?: string;
  };
  tags: string[];
  keyTakeaways: string[];
}

export interface DualFocusItem {
  id: "b2b" | "b2c";
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  points: { title: string; desc: string }[];
  cta: string;
  metrics: { value: string; label: string }[];
}


