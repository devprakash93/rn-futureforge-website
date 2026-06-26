import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ChevronDown, Mail, Phone, Download, CheckCircle } from 'lucide-react';

import careerData from '../data/career.json';
import type { CareerOpening } from '../types';

import { SEOHead } from '../components/common/SEOHead';
import SectionTitle from '../components/common/SectionTitle';
import CTABanner from '../components/common/CTABanner';

const openings = careerData as CareerOpening[];

const benefits = [
  'Competitive salary and performance bonuses',
  'Professional development and training programs',
  'Exposure to large-scale landmark projects',
  'Health insurance for employee and family',
  'Friendly, collaborative work culture',
  'Clear career growth path and promotions',
  'Paid leaves and festival holidays',
  'Site allowances and travel reimbursements',
];

function JobCard({ job, index }: { job: CareerOpening; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="p-7">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2.5 py-1 bg-[#F97316]/10 text-[#F97316] text-xs font-bold rounded-lg">{job.type}</span>
              <span className="px-2.5 py-1 bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs font-semibold rounded-lg">{job.department}</span>
            </div>
            <h3 className="font-black text-[#0B1F3A] text-xl mb-2">{job.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#F97316]" />{job.location}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} className="text-[#F97316]" />{job.experience}</span>
              <span className="flex items-center gap-1.5"><Briefcase size={13} className="text-[#F97316]" />{job.qualification}</span>
            </div>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#F5F7FA] hover:bg-[#F97316]/10 rounded-xl text-sm font-semibold text-[#0B1F3A] hover:text-[#F97316] transition-all whitespace-nowrap"
          >
            {expanded ? 'Show Less' : 'View Details'}
            <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mt-4">{job.description}</p>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <h4 className="font-bold text-[#0B1F3A] mb-3 text-sm uppercase tracking-wide">Key Responsibilities</h4>
              <ul className="space-y-2">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <CheckCircle size={13} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#0B1F3A] mb-3 text-sm uppercase tracking-wide">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <CheckCircle size={13} className="text-[#0B1F3A] flex-shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
      <div className="bg-[#F5F7FA] px-7 py-4 flex flex-col sm:flex-row gap-3 sm:items-center justify-between border-t border-gray-100">
        <span className="text-xs text-gray-400">Send your CV to <strong className="text-[#0B1F3A]">careers@rnfutureforge.com</strong></span>
        <a
          href={`mailto:careers@rnfutureforge.com?subject=Application for ${encodeURIComponent(job.title)}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F97316] text-white text-sm font-bold rounded-xl hover:bg-[#EA6C0A] transition-colors whitespace-nowrap"
        >
          Apply Now <Mail size={14} />
        </a>
      </div>
    </motion.div>
  );
}

export default function CareersPage() {
  return (
    <>
      <SEOHead
        title="Careers"
        description="Join RN FUTUREFORGE Engineering — build your career in MEP engineering with one of Odisha's leading engineering firms. View current openings."
        canonical="/careers"
        keywords="Engineering Jobs Bhubaneswar, MEP Engineer Jobs Odisha, Plumbing Engineer Career"
      />

      {/* Hero */}
      <div className="bg-[#0B1F3A] pt-32 pb-20">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">Join Our Team</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Build Your Career<br />With Us</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Join Odisha's leading MEP engineering firm and work on landmark projects that shape the built environment.
            </p>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Careers</span>
          </div>
        </div>
      </div>

      {/* WHY WORK WITH US */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <SectionTitle eyebrow="Why Join Us" title="Why Engineers Choose RN FUTUREFORGE" centered={false} />
              <p className="text-gray-500 text-base leading-relaxed mb-6">
                At RN FUTUREFORGE, we believe our people are our greatest asset. We invest in our team's growth, expose them to challenging projects, and foster a culture of excellence, respect, and innovation.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Whether you are a fresh graduate looking to start your MEP engineering career or an experienced professional seeking your next challenge, we have exciting opportunities for you.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-[#F5F7FA] rounded-2xl p-8">
                <h3 className="font-bold text-[#0B1F3A] text-lg mb-6">Employee Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <SectionTitle eyebrow="Opportunities" title={`Current Openings`} subtitle="Explore our open positions and find the right fit for your skills and career goals." />
          <div className="space-y-5">
            {openings.length > 0 ? (
              openings.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-black text-[#0B1F3A] mb-2">New Opportunities Coming Soon</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We currently have no open positions, but we are always on the lookout for talented engineers. Check back later or drop your CV below!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* HR CONTACT & APPLICATION FORM */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionTitle eyebrow="Apply Now" title="How to Apply" />
            <div className="bg-[#0B1F3A] rounded-3xl p-8 md:p-12 text-white">
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Send your updated CV and a brief cover letter to our HR team. Please mention the position you are applying for in the subject line. Our team will review your application and reach out within 5 working days.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F97316]/20 flex items-center justify-center">
                    <Mail size={20} className="text-[#F97316]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-1">HR Email</div>
                    <a href="mailto:careers@rnfutureforge.com" className="text-white font-semibold text-sm hover:text-[#F97316] transition-colors">
                      careers@rnfutureforge.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F97316]/20 flex items-center justify-center">
                    <Phone size={20} className="text-[#F97316]" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-1">HR Phone</div>
                    <a href="tel:+919437000001" className="text-white font-semibold text-sm hover:text-[#F97316] transition-colors">
                      +91-94370 00001
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#EA6C0A] transition-colors"
              >
                <Download size={16} /> Download Application Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't See Your Role Listed?"
        subtitle="Send us your CV anyway. We are always looking for talented engineers to join our growing team."
        primaryLabel="Send Your CV"
        primaryLink="mailto:careers@rnfutureforge.com"
        variant="orange"
      />
    </>
  );
}
