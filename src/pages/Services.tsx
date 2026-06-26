import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, FlaskConical, Flame } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import SectionTitle from '../components/common/SectionTitle';
import CTABanner from '../components/common/CTABanner';
import servicesData from '../data/services.json';
import type { Service } from '../types';

const services = servicesData as Service[];

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets size={40} />,
  FlaskConical: <FlaskConical size={40} />,
  Flame: <Flame size={40} />,
};

const bgColors = ['bg-[#0B1F3A]', 'bg-[#1A4A7A]', 'bg-[#C0392B]'];

export default function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Engineering Services"
        description="RN FUTUREFORGE offers Plumbing Systems, Sanitation & Drainage, and Fire Fighting Systems for all building types in Bhubaneswar, Odisha."
        canonical="/services"
        keywords="Plumbing Services Bhubaneswar, Sanitation Drainage Odisha, Fire Fighting Systems Odisha"
      />

      {/* Hero */}
      <div className="bg-[#0B1F3A] pt-32 pb-20">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">What We Do</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Our Engineering Services</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Comprehensive MEP solutions — from plumbing and sanitation to fire protection — engineered for reliability and code compliance.
            </p>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Services</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Visual Side */}
                <div className={`${bgColors[index]} rounded-3xl p-12 flex flex-col items-center justify-center text-white aspect-video ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="text-white/20 mb-4">{iconMap[service.icon] || <Droplets size={40} />}</div>
                  <h3 className="text-3xl font-black text-white mb-3 text-center">{service.title}</h3>
                  <p className="text-white/60 text-center text-sm">{service.tagline}</p>
                  <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-sm">
                    {service.subServices.map((sub) => (
                      <div key={sub.id} className="bg-white/10 rounded-xl p-3 text-center">
                        <div className="text-white/80 text-xs font-medium">{sub.title}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Side */}
                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="mb-2">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316]">
                      0{index + 1} — Service
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-[#0B1F3A] mb-4 leading-tight">{service.title}</h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.benefits.slice(0, 4).map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#F97316]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                        </span>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#EA6C0A] transition-all hover:-translate-y-0.5"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Custom MEP Engineering Solution?"
        subtitle="Discuss your project requirements with our expert engineers — no obligation, no pressure."
        primaryLabel="Talk to an Engineer"
        primaryLink="/contact"
        variant="orange"
      />
    </>
  );
}
