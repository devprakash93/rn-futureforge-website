import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Shield, Lightbulb, Handshake, Award,
  Clock, DollarSign, GraduationCap, Trophy, FileCheck,
  Building2, Home, Factory, School, Hotel, Landmark,
  Droplets, FlaskConical, Flame, ChevronDown
} from 'lucide-react';

import companyData from '../data/company.json';
import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';
import clientsData from '../data/clients.json';
import testimonialsData from '../data/testimonials.json';

import { SEOHead } from '../components/common/SEOHead';
import SectionTitle from '../components/common/SectionTitle';
import StatCounter from '../components/common/StatCounter';
import CTABanner from '../components/common/CTABanner';
import TestimonialSlider from '../components/common/TestimonialSlider';
import ClientSlider from '../components/common/ClientSlider';
import ServiceCard from '../components/common/ServiceCard';
import ProjectCard from '../components/common/ProjectCard';

import type { CompanyData, Service, Project, Client, Testimonial } from '../types';

const company = companyData as CompanyData;
const services = servicesData as Service[];
const projects = projectsData as Project[];
const clients = clientsData as Client[];
const testimonials = testimonialsData as Testimonial[];

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={24} />, Lightbulb: <Lightbulb size={24} />, AlertTriangle: <Shield size={24} />,
  Handshake: <Handshake size={24} />, Leaf: <CheckCircle size={24} />, Award: <Award size={24} />,
  Trophy: <Trophy size={24} />, GraduationCap: <GraduationCap size={24} />, CheckCircle: <CheckCircle size={24} />,
  FileCheck: <FileCheck size={24} />, Clock: <Clock size={24} />, DollarSign: <DollarSign size={24} />,
  Building2: <Building2 size={28} />, Home: <Home size={28} />, Factory: <Factory size={28} />,
  School: <School size={28} />, Construction: <Building2 size={28} />, Hotel: <Hotel size={28} />,
  Landmark: <Landmark size={28} />,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RN FUTUREFORGE Engineering Pvt. Ltd.",
  "description": "Premier MEP Engineering company in Bhubaneswar, Odisha. Plumbing, Sanitation & Fire Fighting systems.",
  "url": "https://www.rnfutureforge.com",
  "telephone": "+91-9437000000",
  "email": "info@rnfutureforge.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 42, Jaydev Vihar Square",
    "addressLocality": "Bhubaneswar",
    "addressRegion": "Odisha",
    "postalCode": "751013",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "20.2961", "longitude": "85.8315" },
  "openingHours": "Mo-Sa 09:00-18:30",
  "sameAs": [company.social.linkedin, company.social.facebook, company.social.instagram]
};

const serviceIconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets size={40} />,
  FlaskConical: <FlaskConical size={40} />,
  Flame: <Flame size={40} />,
};

export default function HomePage() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <>
      <SEOHead
        title="RN FUTUREFORGE Engineering Pvt. Ltd."
        description="Premier MEP Engineering company in Bhubaneswar, Odisha. Expert in Plumbing Systems, Sanitation & Drainage, and Fire Fighting Systems for commercial, residential, and industrial projects."
        canonical="/"
        keywords="Plumbing Contractor Bhubaneswar, Fire Fighting System Contractor Odisha, Sanitation Engineering Odisha, MEP Engineering Company Odisha"
        structuredData={structuredData}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#071528] via-[#0B1F3A] to-[#1A3A5C]" />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Orange Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#F97316]/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10 py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#F97316]/20 border border-[#F97316]/30 rounded-full text-[#F97316] text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              Bhubaneswar · Odisha · India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
            >
              Engineering{' '}
              <span className="text-[#F97316]">Excellence</span>,<br />
              <span className="text-white/90">Built to Last</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed"
            >
              Premier MEP engineering specialists in <strong className="text-white/90">Plumbing Systems</strong>,{' '}
              <strong className="text-white/90">Sanitation & Drainage</strong>, and{' '}
              <strong className="text-white/90">Fire Fighting Systems</strong> for commercial, residential, and industrial infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#EA6C0A] transition-all hover:shadow-[0_8px_32px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
              >
                Request Free Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:border-[#F97316] hover:text-[#F97316] transition-all"
              >
                View Projects
              </Link>
            </motion.div>

            {/* Stat Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 mt-12 pt-10 border-t border-white/10"
            >
              {company.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-black text-white">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-xs text-white/50 uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">About RN FUTUREFORGE</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0B1F3A] leading-tight mb-6">
                Odisha's Most Trusted<br />MEP Engineering Partner
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                {company.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'ISO 9001:2015 Certified', icon: '✓' },
                  { label: 'NBC 2016 Compliant', icon: '✓' },
                  { label: 'CPWD Empanelled', icon: '✓' },
                  { label: '12+ Years Experience', icon: '✓' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316] text-xs font-bold flex-shrink-0">
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B1F3A] text-white font-semibold rounded-xl hover:bg-[#1A3A5C] transition-colors"
              >
                Learn About Us <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0B1F3A] rounded-3xl p-10"
            >
              <StatCounter stats={company.stats} light />
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 gap-4">
                {company.certifications.map((cert) => (
                  <div key={cert.id} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F97316]/20 flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-[#F97316]" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{cert.title}</div>
                      <div className="text-white/50 text-xs">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Why RN FUTUREFORGE"
            title="Why Clients Choose Us"
            subtitle="We combine deep technical expertise with a genuine commitment to quality, safety, and client satisfaction."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.whyChooseUs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0B1F3A]/5 group-hover:bg-[#F97316] flex items-center justify-center text-[#0B1F3A] group-hover:text-white transition-all duration-300 mb-5">
                  {iconMap[item.icon] || <Shield size={24} />}
                </div>
                <h3 className="font-bold text-[#0B1F3A] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Our Expertise"
            title="Engineering Services"
            subtitle="Comprehensive MEP engineering solutions for every type of project — from concept to commissioning."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-3">Our Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A]">Featured Projects</h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[#F97316] font-semibold hover:gap-3 transition-all whitespace-nowrap"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="section-padding bg-[#0B1F3A]">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Sectors We Serve"
            title="Industries We Work With"
            subtitle="From towering commercial complexes to critical infrastructure — our expertise spans every sector."
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {company.industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex flex-col items-center gap-3 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-[#F97316]/20 hover:border-[#F97316]/30 transition-all cursor-default group"
              >
                <div className="text-white/40 group-hover:text-[#F97316] transition-colors">
                  {iconMap[industry.icon] || <Building2 size={28} />}
                </div>
                <span className="text-white font-bold text-sm text-center">{industry.name}</span>
                <span className="text-white/40 text-xs text-center hidden sm:block">{industry.description}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            eyebrow="How We Work"
            title="Our Engineering Process"
            subtitle="A structured, transparent process from initial site assessment to project handover — ensuring quality at every step."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-[#F5F7FA] rounded-2xl p-7 border border-gray-100 group hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 -left-2 text-7xl font-black text-[#0B1F3A]/5 select-none">
                  {String(step.step).padStart(2, '0')}
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center text-white font-black mb-5">
                  {step.step}
                </div>
                <h3 className="font-bold text-[#0B1F3A] text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Trusted By"
            title="Our Valued Clients"
            subtitle="Government bodies, corporate giants, and institutional leaders trust RN FUTUREFORGE."
          />
          <ClientSlider clients={clients} />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Client Stories"
            title="What Our Clients Say"
            subtitle="Real words from the people and organizations who have experienced the RN FUTUREFORGE difference."
          />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* REQUEST QUOTE CTA */}
      <CTABanner
        title="Ready to Engineer Your Next Project?"
        subtitle="Contact us today for a free consultation and detailed project estimate. Our team will get back within 24 hours."
        primaryLabel="Request Free Quote"
        primaryLink="/contact"
        secondaryLabel="View Our Services"
        secondaryLink="/services"
        variant="orange"
      />

      {/* CONTACT CTA */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A] mb-6">
                Let's Build Something<br />Extraordinary Together
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center text-[#F97316] text-lg">📍</span>
                  <div>
                    <div className="font-semibold text-[#0B1F3A] text-sm">Office Address</div>
                    <div className="text-gray-500 text-sm">{company.address}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center text-[#F97316] text-lg">📞</span>
                  <div>
                    <div className="font-semibold text-[#0B1F3A] text-sm">Phone</div>
                    <a href={`tel:${company.phone}`} className="text-gray-500 text-sm hover:text-[#F97316]">{company.phone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center text-[#F97316] text-lg">✉️</span>
                  <div>
                    <div className="font-semibold text-[#0B1F3A] text-sm">Email</div>
                    <a href={`mailto:${company.email}`} className="text-gray-500 text-sm hover:text-[#F97316]">{company.email}</a>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#EA6C0A] transition-colors"
              >
                Contact Us Today <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-lg h-80"
            >
              <iframe
                src={company.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RN FUTUREFORGE Office Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
