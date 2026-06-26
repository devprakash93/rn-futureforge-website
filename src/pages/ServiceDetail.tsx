import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Droplets, FlaskConical, Flame } from 'lucide-react';

import servicesData from '../data/services.json';
import type { Service } from '../types';

import { SEOHead } from '../components/common/SEOHead';
import SectionTitle from '../components/common/SectionTitle';
import FAQAccordion from '../components/common/FAQAccordion';
import CTABanner from '../components/common/CTABanner';

const services = servicesData as Service[];

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets size={48} />,
  FlaskConical: <FlaskConical size={48} />,
  Flame: <Flame size={48} />,
};

const bgMap: Record<string, string> = {
  'plumbing-systems': 'from-[#0B1F3A] to-[#1A3A5C]',
  'sanitation-drainage': 'from-[#1A4A7A] to-[#0B1F3A]',
  'fire-fighting-systems': 'from-[#7B1F1F] to-[#C0392B]',
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const gradClass = bgMap[service.slug] || 'from-[#0B1F3A] to-[#1A3A5C]';

  // ── Structured Data ──────────────────────────────────────────────
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.rnfutureforge.com/services/${service.slug}#service`,
    name: service.title,
    description: service.description,
    url: `https://www.rnfutureforge.com/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.rnfutureforge.com/#localbusiness',
      name: 'RN FUTUREFORGE Engineering Pvt. Ltd.',
    },
    areaServed: { '@type': 'State', name: 'Odisha' },
    serviceType: service.title,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Services`,
      itemListElement: service.subServices.map(s => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.description },
      })),
    },
  };

  const faqSchema = service.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null;

  return (
    <>
      <SEOHead
        title={service.title}
        description={service.description}
        canonical={`/services/${service.slug}`}
        keywords={`${service.title} Bhubaneswar, ${service.title} Odisha, MEP Engineering Odisha, ${service.shortTitle} Contractor Odisha`}
        structuredData={faqSchema ? [serviceSchema, faqSchema] : [serviceSchema]}
        breadcrumbs={[
          { name: 'Services', url: '/services' },
          { name: service.title, url: `/services/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <div className={`relative bg-gradient-to-br ${gradClass} pt-32 pb-24 overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex justify-start gap-2 mb-6 text-sm text-white/40">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white/70">{service.title}</span>
            </div>
            <div className="text-white/30 mb-6">{iconMap[service.icon]}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight max-w-3xl">
              {service.title}
            </h1>
            <p className="text-[#F97316] font-semibold text-xl mb-6">{service.tagline}</p>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-8">{service.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#EA6C0A] transition-colors">
                Request Quote <ArrowRight size={16} />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/20 text-white font-bold rounded-xl hover:border-white/40 transition-colors">
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle eyebrow="Overview" title="Service Overview" />
            <p className="text-gray-500 text-base leading-relaxed">{service.overview}</p>
          </div>
        </div>
      </section>

      {/* SUB-SERVICES */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <SectionTitle eyebrow="Scope of Work" title="What We Deliver" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.subServices.map((sub, index) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center text-[#F97316] mb-5">
                  <CheckCircle size={24} />
                </div>
                <h3 className="font-bold text-[#0B1F3A] text-xl mb-3">{sub.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{sub.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS + PROCESS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <SectionTitle eyebrow="Advantages" title="Key Benefits" centered={false} />
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#F97316]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-[#F97316]" />
                    </span>
                    <span className="text-gray-600 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <SectionTitle eyebrow="Our Approach" title="Our Process" centered={false} />
              <div className="space-y-5">
                {service.process.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white text-sm font-black flex-shrink-0 mt-0.5">
                      {step.step}
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-base mb-1">{step.title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY STANDARDS (Fire Fighting only) */}
      {service.safetyStandards && (
        <section className="py-14 bg-[#0B1F3A]">
          <div className="container-custom">
            <SectionTitle eyebrow="Compliance" title="Safety Standards We Follow" light />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {service.safetyStandards.map((std, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white/70 flex items-start gap-2"
                >
                  <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                  {std}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQS */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <SectionTitle eyebrow="FAQs" title="Frequently Asked Questions" subtitle="Common questions about our engineering services and processes." />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready to Start Your ${service.shortTitle} Project?`}
        subtitle="Contact our engineering team for a free site assessment and detailed quotation."
        primaryLabel="Get Free Quote"
        primaryLink="/contact"
        secondaryLabel="View All Services"
        secondaryLink="/services"
        variant="orange"
      />
    </>
  );
}
