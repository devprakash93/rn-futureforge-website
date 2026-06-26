import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryLink?: string;
  secondaryLabel?: string;
  secondaryLink?: string;
  variant?: 'orange' | 'navy';
}

export default function CTABanner({
  title,
  subtitle,
  primaryLabel = 'Request Quote',
  primaryLink = '/contact',
  secondaryLabel,
  secondaryLink,
  variant = 'orange',
}: CTABannerProps) {
  const isOrange = variant === 'orange';

  return (
    <section className={`py-16 ${isOrange ? 'bg-[#F97316]' : 'bg-[#0B1F3A]'}`}>
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className={`text-base md:text-lg mb-8 max-w-2xl mx-auto ${isOrange ? 'text-white/90' : 'text-white/70'}`}>
              {subtitle}
            </p>
          )}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to={primaryLink}
              className={`inline-flex items-center gap-2 px-7 py-3.5 font-bold rounded-xl transition-all duration-200 hover:gap-3 ${
                isOrange
                  ? 'bg-white text-[#F97316] hover:bg-gray-100'
                  : 'bg-[#F97316] text-white hover:bg-[#EA6C0A]'
              }`}
            >
              {primaryLabel} <ArrowRight size={18} />
            </Link>
            {secondaryLabel && secondaryLink && (
              <Link
                to={secondaryLink}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
