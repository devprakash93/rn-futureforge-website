import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

import clientsData from '../data/clients.json';
import testimonialsData from '../data/testimonials.json';
import type { Client, Testimonial } from '../types';

import { SEOHead } from '../components/common/SEOHead';
import SectionTitle from '../components/common/SectionTitle';
import TestimonialSlider from '../components/common/TestimonialSlider';
import CTABanner from '../components/common/CTABanner';

const clients = clientsData as Client[];
const testimonials = testimonialsData as Testimonial[];

const categories = Array.from(new Set(clients.map(c => c.category)));

export default function ClientsPage() {
  return (
    <>
      <SEOHead
        title="Our Clients"
        description="Trusted by government bodies, corporates, and institutional clients across India. See who partners with RN FUTUREFORGE Engineering."
        canonical="/clients"
        keywords="RN FUTUREFORGE Clients, MEP Engineering Clients Odisha"
      />

      {/* Hero */}
      <div className="bg-[#0B1F3A] pt-32 pb-20">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">Trusted By</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Our Clients</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From government authorities to Fortune 500 companies — organizations that trust our engineering expertise.
            </p>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Clients</span>
          </div>
        </div>
      </div>

      {/* Clients by Category */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {categories.map((category, catIndex) => (
            <div key={category} className="mb-14 last:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-px flex-1 bg-gray-200" />
                <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">{category} Clients</h2>
                <div className="h-px flex-1 bg-gray-200" />
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {clients
                  .filter(c => c.category === category)
                  .map((client, index) => (
                    <motion.div
                      key={client.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="flex flex-col items-center gap-3 p-5 bg-[#F5F7FA] rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg hover:border-[#F97316]/20 hover:-translate-y-1 transition-all group cursor-default"
                    >
                      <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#F97316]/5 transition-colors">
                        <Building2 size={28} className="text-gray-300 group-hover:text-[#F97316] transition-colors" />
                      </div>
                      <span className="text-xs text-center text-gray-500 font-medium leading-tight group-hover:text-[#0B1F3A] transition-colors">
                        {client.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-14 bg-[#F97316]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '80+', label: 'Happy Clients' },
              { value: '100%', label: 'Repeat Business Rate' },
              { value: '5★', label: 'Average Rating' },
              { value: '8', label: 'States Served' },
            ].map(item => (
              <div key={item.label}>
                <div className="text-4xl font-black mb-2">{item.value}</div>
                <div className="text-white/80 text-sm font-medium uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle eyebrow="Client Feedback" title="What Our Clients Say" subtitle="First-hand accounts from the organizations that trusted us with their projects." />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      <CTABanner
        title="Join Our Growing Client Family"
        subtitle="Let RN FUTUREFORGE bring the same quality and reliability to your next project."
        primaryLabel="Get in Touch"
        primaryLink="/contact"
        variant="navy"
      />
    </>
  );
}
