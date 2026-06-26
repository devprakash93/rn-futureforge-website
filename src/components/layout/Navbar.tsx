import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Plumbing Systems', path: '/services/plumbing-systems' },
      { label: 'Sanitation & Drainage', path: '/services/sanitation-drainage' },
      { label: 'Fire Fighting Systems', path: '/services/fire-fighting-systems' },
    ],
  },
  { label: 'Projects', path: '/projects' },
  { label: 'Clients', path: '/clients' },
  { label: 'Careers', path: '/careers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);
      
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isHome = location.pathname === '/';
  const solidBg = scrolled || !isHome;

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? '-100%' : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solidBg
          ? 'bg-[#0B1F3A] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-10">
            <img 
              src="/images/logo.png" 
              alt="RN FUTUREFORGE Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain bg-white rounded-lg p-1"
            />
            <div className="hidden sm:block">
              <div className="text-white font-black text-sm md:text-base leading-tight tracking-wide">
                RN FUTUREFORGE
              </div>
              <div className="text-[#F97316] text-xs font-medium tracking-widest uppercase">
                Engineering Pvt. Ltd.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-[#F97316]'
                        : 'text-white/90 hover:text-[#F97316]'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-3 text-sm text-[#0B1F3A] font-medium hover:bg-[#F97316]/10 hover:text-[#F97316] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? 'text-[#F97316]'
                        : 'text-white/90 hover:text-[#F97316]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919437000000"
              className="flex items-center gap-2 text-white/80 hover:text-[#F97316] text-sm font-medium transition-colors"
            >
              <Phone size={14} />
              <span>+91-94370 00000</span>
            </a>
            <Link
              to="/contact"
              className="px-5 py-2 bg-[#F97316] text-white text-sm font-semibold rounded-lg hover:bg-[#EA6C0A] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors z-10"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0B1F3A] border-t border-white/10 overflow-hidden"
          >
            <div className="container-custom py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <li key={link.label}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-white/90 font-medium rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden ml-4"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                className="block px-4 py-2.5 text-sm text-white/70 hover:text-[#F97316] transition-colors"
                              >
                                → {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className={`block px-4 py-3 font-medium rounded-lg transition-colors ${
                          isActive(link.path)
                            ? 'text-[#F97316] bg-white/10'
                            : 'text-white/90 hover:bg-white/10 hover:text-[#F97316]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="tel:+919437000000"
                  className="flex items-center gap-2 px-4 py-3 text-white/80 hover:text-[#F97316] font-medium transition-colors"
                >
                  <Phone size={16} />
                  <span>+91-94370 00000</span>
                </a>
                <Link
                  to="/contact"
                  className="block px-4 py-3 bg-[#F97316] text-white font-semibold rounded-lg text-center hover:bg-[#EA6C0A] transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
