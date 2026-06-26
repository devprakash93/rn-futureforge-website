import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lightbulb, Handshake, Award, CheckCircle, Leaf, Quote } from 'lucide-react';

import companyData from '../data/company.json';
import type { CompanyData } from '../types';

import { SEOHead } from '../components/common/SEOHead';
import SectionTitle from '../components/common/SectionTitle';
import Timeline from '../components/common/Timeline';
import CTABanner from '../components/common/CTABanner';

const company = companyData as CompanyData;

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={28} />,
  Lightbulb: <Lightbulb size={28} />,
  AlertTriangle: <Shield size={28} />,
  Handshake: <Handshake size={28} />,
  Leaf: <Leaf size={28} />,
  Award: <Award size={28} />,
  CheckCircle: <CheckCircle size={28} />,
};

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about RN FUTUREFORGE Engineering Pvt. Ltd. — 12+ years of MEP engineering excellence in Bhubaneswar, Odisha. Our vision, mission, values, and team."
        canonical="/about"
        keywords="About RN FUTUREFORGE, MEP Engineering Company Bhubaneswar, Odisha Engineering Firm"
      />

      {/* Page Hero */}
      <div className="relative pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/about.png)' }}
        />
        <div className="absolute inset-0 bg-[#0B1F3A]/85" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">Who We Are</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">About RN FUTUREFORGE</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              12+ years of precision MEP engineering across Eastern India — built on trust, quality, and a relentless pursuit of excellence.
            </p>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">About</span>
          </div>
        </div>
      </div>

      {/* COMPANY PROFILE */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionTitle eyebrow="Company Profile" title="Building Trust Since 2012" centered={false} />
              <p className="text-gray-500 text-base leading-relaxed mb-6">{company.description}</p>
              <p className="text-gray-500 text-base leading-relaxed">
                Headquartered in Bhubaneswar, Odisha, we have grown from a local contractor to a recognized MEP engineering brand across Eastern India. Our team of certified engineers, project managers, and skilled technicians delivers complex projects with precision and professionalism.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-5"
            >
              {/* Vision */}
              <div className="bg-[#0B1F3A] rounded-2xl p-7 text-white">
                <div className="text-[#F97316] text-sm font-bold uppercase tracking-widest mb-3">Our Vision</div>
                <p className="text-white/80 text-sm leading-relaxed">{company.vision}</p>
              </div>
              {/* Mission */}
              <div className="bg-[#F97316] rounded-2xl p-7 text-white">
                <div className="text-white/70 text-sm font-bold uppercase tracking-widest mb-3">Our Mission</div>
                <p className="text-white/90 text-sm leading-relaxed">{company.mission}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPANY VALUES */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <SectionTitle eyebrow="Core Principles" title="Our Company Values" subtitle="The principles that guide every decision, every project, and every relationship we build." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F97316]/10 group-hover:bg-[#F97316] flex items-center justify-center text-[#F97316] group-hover:text-white transition-all mb-5">
                  {iconMap[value.icon] || <Award size={28} />}
                </div>
                <h3 className="font-bold text-[#0B1F3A] text-lg mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTOR'S MESSAGE */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle eyebrow="Leadership" title="Director's Message" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-[#F5F7FA] rounded-3xl p-8 md:p-12 relative"
          >
            <Quote size={60} className="text-[#F97316]/10 absolute top-6 left-6" />
            <div className="relative z-10">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed italic mb-8">
                "{company.director.message}"
              </p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-16 h-16 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white text-2xl font-black">
                  {company.director.name.charAt(0)}
                </div>
                <div>
                  <div className="font-black text-[#0B1F3A] text-lg">{company.director.name}</div>
                  <div className="text-[#F97316] text-sm font-semibold">{company.director.designation}</div>
                  <div className="text-gray-400 text-xs mt-1">{company.director.experience}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <SectionTitle eyebrow="Our Journey" title="Company Timeline" subtitle="From a modest beginning in 2012 to becoming one of Odisha's most trusted MEP engineering firms." />
          <Timeline items={company.timeline} />
        </div>
      </section>

      {/* SAFETY & QUALITY */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {[
              {
                title: 'Engineering Excellence',
                desc: 'Every system is designed by qualified engineers using the latest AutoCAD and BIM tools, ensuring precision from drawing board to installation.',
                icon: '🏗️',
                color: 'bg-[#0B1F3A]',
              },
              {
                title: 'Safety Standards',
                desc: 'We operate under a comprehensive safety management system. All installations meet NBC 2016, IS codes, and site-specific safety protocols.',
                icon: '🛡️',
                color: 'bg-[#F97316]',
              },
              {
                title: 'Quality Assurance',
                desc: 'ISO 9001:2015 certified quality processes ensure every project passes rigorous inspection, testing, and documentation requirements.',
                icon: '✅',
                color: 'bg-[#1A3A5C]',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${item.color} rounded-2xl p-8 text-white`}
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-black text-xl mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container-custom">
          <SectionTitle eyebrow="Credentials" title="Certifications & Accreditations" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {company.certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-[#F97316]/10 flex items-center justify-center mx-auto mb-4">
                  <Award size={28} className="text-[#F97316]" />
                </div>
                <div className="font-black text-[#0B1F3A] text-lg mb-1">{cert.title}</div>
                <div className="text-gray-500 text-sm mb-2">{cert.description}</div>
                <div className="text-xs text-[#F97316] font-semibold">{cert.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Partner with Odisha's Leading MEP Engineers"
        subtitle="12+ years of proven excellence. Let us bring that expertise to your next project."
        primaryLabel="Get in Touch"
        primaryLink="/contact"
        secondaryLabel="View Our Projects"
        secondaryLink="/projects"
        variant="navy"
      />
    </>
  );
}
