import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({ eyebrow, title, subtitle, centered = true, light = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 ${light ? 'text-white' : 'text-[#0B1F3A]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
