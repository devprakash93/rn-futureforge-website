import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react';

import companyData from '../data/company.json';
import type { CompanyData } from '../types';
import { SEOHead } from '../components/common/SEOHead';
import SectionTitle from '../components/common/SectionTitle';

const company = companyData as CompanyData;

type FormState = 'idle' | 'submitting' | 'success';

function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState('submitting');
    setTimeout(() => setState('success'), 1500);
  };

  if (state === 'success') {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-black text-[#0B1F3A] mb-3">Message Received!</h3>
        <p className="text-gray-500 max-w-sm">Thank you. We have received your enquiry. Our team will contact you soon.</p>
        <button onClick={() => { setState('idle'); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
          className="mt-6 px-5 py-2.5 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA6C0A] transition-colors text-sm">
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Your Name *</label>
          <input required name="name" value={form.name} onChange={handleChange} placeholder="e.g. Rajesh Kumar"
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Email Address *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com"
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Subject *</label>
          <select required name="subject" value={form.subject} onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all appearance-none">
            <option value="">Select a subject</option>
            <option>Plumbing Systems Enquiry</option>
            <option>Sanitation & Drainage Enquiry</option>
            <option>Fire Fighting Systems Enquiry</option>
            <option>Project Quotation</option>
            <option>General Enquiry</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Message *</label>
        <textarea required name="message" rows={5} value={form.message} onChange={handleChange}
          placeholder="Tell us about your project — type of building, scope of work, location, timeline..."
          className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all resize-none" />
      </div>
      <button type="submit" disabled={state === 'submitting'}
        className="flex items-center gap-2 px-7 py-3.5 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#EA6C0A] transition-all disabled:opacity-60 disabled:cursor-not-allowed">
        {state === 'submitting' ? (
          <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>
    </form>
  );
}

function QuoteForm() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', projectType: '', location: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState('submitting');
    setTimeout(() => setState('success'), 1500);
  };

  if (state === 'success') {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle size={40} className="text-green-500" />
        </div>
        <h3 className="text-2xl font-black text-[#0B1F3A] mb-3">Quote Request Received!</h3>
        <p className="text-gray-500 max-w-sm">Thank you. We have received your enquiry. Our team will contact you soon with a detailed quotation.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Your Name *</label>
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Full name"
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Company / Organization</label>
          <input name="company" value={form.company} onChange={handleChange} placeholder="Your company name"
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Email Address *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com"
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Phone Number *</label>
          <input required type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Service Required *</label>
          <select required name="service" value={form.service} onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all">
            <option value="">Select service</option>
            <option>Plumbing Systems</option>
            <option>Sanitation & Drainage</option>
            <option>Fire Fighting Systems</option>
            <option>Complete MEP Package</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Project Type *</label>
          <select required name="projectType" value={form.projectType} onChange={handleChange}
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all">
            <option value="">Select project type</option>
            <option>Commercial</option>
            <option>Residential / Township</option>
            <option>Industrial</option>
            <option>Institutional</option>
            <option>Infrastructure / Government</option>
            <option>Hospitality</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Project Location *</label>
        <input required name="location" value={form.location} onChange={handleChange} placeholder="City, State"
          className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Project Details</label>
        <textarea name="message" rows={4} value={form.message} onChange={handleChange}
          placeholder="Describe your project — built-up area, number of floors, timeline, any specific requirements..."
          className="w-full px-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] transition-all resize-none" />
      </div>
      <button type="submit" disabled={state === 'submitting'}
        className="flex items-center gap-2 px-7 py-3.5 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#EA6C0A] transition-all disabled:opacity-60">
        {state === 'submitting' ? (
          <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
        ) : (
          <><Send size={16} /> Request Quote</>
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<'contact' | 'quote'>('contact');

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Contact RN FUTUREFORGE Engineering Pvt. Ltd. in Bhubaneswar, Odisha. Request a quote for plumbing, sanitation, or fire fighting systems."
        canonical="/contact"
        keywords="Contact RN FUTUREFORGE, MEP Engineering Quote Bhubaneswar, Plumbing Contractor Contact Odisha"
      />

      {/* Hero */}
      <div className="bg-[#0B1F3A] pt-32 pb-20">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Contact & Request Quote</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Ready to start your project? Our engineering team is here to help with technical consultation and free quotations.
            </p>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Contact</span>
          </div>
        </div>
      </div>

      {/* CONTACT INFO + FORM */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black text-[#0B1F3A] mb-7">Our Contact Details</h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: <MapPin size={20} className="text-[#F97316]" />, label: 'Office Address', value: company.address },
                  { icon: <Phone size={20} className="text-[#F97316]" />, label: 'Phone', value: company.phone, href: `tel:${company.phone}` },
                  { icon: <Phone size={20} className="text-[#F97316]" />, label: 'Alt. Phone', value: company.phone2, href: `tel:${company.phone2}` },
                  { icon: <Mail size={20} className="text-[#F97316]" />, label: 'Email', value: company.email, href: `mailto:${company.email}` },
                  { icon: <Mail size={20} className="text-[#F97316]" />, label: 'Projects Email', value: company.email2, href: `mailto:${company.email2}` },
                ].map(item => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-[#0B1F3A] font-medium hover:text-[#F97316] transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm text-[#0B1F3A] font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-[#F97316]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-0.5">Working Hours</div>
                    <p className="text-sm text-[#0B1F3A] font-medium">{company.workingHours.weekdays}</p>
                    <p className="text-sm text-gray-500">{company.workingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Forms */}
            <div className="lg:col-span-2">
              {/* Tab Toggle */}
              <div className="flex rounded-xl bg-[#F5F7FA] p-1.5 mb-8 w-fit">
                <button
                  onClick={() => setActiveForm('contact')}
                  className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeForm === 'contact' ? 'bg-white text-[#0B1F3A] shadow-sm' : 'text-gray-500 hover:text-[#0B1F3A]'}`}
                >
                  Contact Us
                </button>
                <button
                  onClick={() => setActiveForm('quote')}
                  className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeForm === 'quote' ? 'bg-white text-[#0B1F3A] shadow-sm' : 'text-gray-500 hover:text-[#0B1F3A]'}`}
                >
                  Request Quote
                </button>
              </div>

              <motion.div key={activeForm} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                {activeForm === 'contact' ? <ContactForm /> : <QuoteForm />}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="h-80 md:h-[480px] w-full">
        <iframe
          src={company.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="RN FUTUREFORGE Engineering Office Location, Bhubaneswar"
        />
      </section>
    </>
  );
}
