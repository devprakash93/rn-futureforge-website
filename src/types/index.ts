// Company types
export interface CompanyValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Director {
  name: string;
  designation: string;
  message: string;
  image: string;
  experience: string;
}

export interface Certification {
  id: number;
  title: string;
  description: string;
  body: string;
}

export interface Industry {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface WhyChooseUs {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface CompanyData {
  name: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  description: string;
  founded: string;
  city: string;
  state: string;
  country: string;
  address: string;
  phone: string;
  phone2: string;
  email: string;
  email2: string;
  whatsapp: string;
  website: string;
  workingHours: { weekdays: string; sunday: string };
  social: { linkedin: string; facebook: string; instagram: string; youtube: string };
  vision: string;
  mission: string;
  values: CompanyValue[];
  stats: Stat[];
  timeline: TimelineItem[];
  director: Director;
  certifications: Certification[];
  industries: Industry[];
  whyChooseUs: WhyChooseUs[];
  process: ProcessStep[];
  mapEmbedUrl: string;
}

// Service types
export interface ServiceSubItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceFAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  heroImage: string;
  overview: string;
  subServices: ServiceSubItem[];
  benefits: string[];
  process: ProcessStep[];
  faqs: ServiceFAQ[];
  safetyStandards?: string[];
}

// Project types
export interface Project {
  id: number;
  slug: string;
  title: string;
  client: string;
  category: string;
  location: string;
  description: string;
  completionDate: string;
  value: string;
  area: string;
  featured: boolean;
  image: string;
  gallery: string[];
  tags: string[];
}

// Client types
export interface Client {
  id: number;
  name: string;
  category: string;
  logo: string;
  website: string;
}

// Testimonial types
export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  company: string;
  rating: number;
  review: string;
  image: string;
}

// Blog types
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
  tags: string[];
  content: string;
}

// Career types
export interface CareerOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  qualification: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}
