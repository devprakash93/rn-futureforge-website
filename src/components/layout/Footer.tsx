import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const services = [
  { label: 'Plumbing Systems', path: '/services/plumbing-systems' },
  { label: 'Sanitation & Drainage', path: '/services/sanitation-drainage' },
  { label: 'Fire Fighting Systems', path: '/services/fire-fighting-systems' },
];

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Projects', path: '/projects' },
  { label: 'Our Clients', path: '/clients' },
  { label: 'Careers', path: '/careers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071528] text-white">
      {/* CTA Strip */}
      <div className="bg-[#F97316] py-6">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg leading-tight">Ready to Start Your Project?</p>
            <p className="text-white/90 text-sm">Get a free consultation from our engineering team today.</p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 bg-white text-[#F97316] font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Request Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img 
                src="/images/logo.png" 
                alt="RN FUTUREFORGE Logo" 
                className="w-12 h-12 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <div className="text-white font-black text-sm leading-tight">RN FUTUREFORGE</div>
                <div className="text-[#F97316] text-xs font-medium tracking-widest uppercase">Engineering Pvt. Ltd.</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premier MEP engineering company based in Bhubaneswar, Odisha. Specialists in Plumbing, Sanitation, and Fire Fighting Systems.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: 'https://linkedin.com/company/rn-futureforge', label: 'LinkedIn', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { href: 'https://facebook.com/rnfutureforge', label: 'Facebook', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { href: 'https://instagram.com/rnfutureforge', label: 'Instagram', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                { href: 'https://youtube.com/@rnfutureforge', label: 'YouTube', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg> },
              ].map(({ href, label, svg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#F97316] flex items-center justify-center transition-colors text-white">
                  {svg}
                </a>
              ))}
            </div>

          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-white/10">Our Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="flex items-center gap-2 text-sm text-white/60 hover:text-[#F97316] transition-colors group">
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-white/10">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="flex items-center gap-2 text-sm text-white/60 hover:text-[#F97316] transition-colors group">
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-white/10">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Plot No. 42, Jaydev Vihar Square,<br />
                  Bhubaneswar, Odisha – 751013
                </span>
              </li>
              <li>
                <a href="tel:+919437000000" className="flex items-center gap-3 text-white/60 hover:text-[#F97316] text-sm transition-colors">
                  <Phone size={16} className="text-[#F97316] flex-shrink-0" />
                  +91-94370 00000
                </a>
              </li>
              <li>
                <a href="mailto:info@rnfutureforge.com" className="flex items-center gap-3 text-white/60 hover:text-[#F97316] text-sm transition-colors">
                  <Mail size={16} className="text-[#F97316] flex-shrink-0" />
                  info@rnfutureforge.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  Mon–Sat: 9:00 AM – 6:30 PM<br />
                  Sunday: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/40">
          <p>© {year} RN FUTUREFORGE Engineering Pvt. Ltd. All rights reserved.</p>
          <p>Designed with ♥ in Bhubaneswar, Odisha</p>
        </div>
      </div>
    </footer>
  );
}
