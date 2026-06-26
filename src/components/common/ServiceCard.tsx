import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../../types';
import { Droplets, FlaskConical, Flame } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets size={32} />,
  FlaskConical: <FlaskConical size={32} />,
  Flame: <Flame size={32} />,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(11,31,58,0.08)] border border-gray-100 hover:shadow-[0_16px_48px_rgba(11,31,58,0.15)] hover:-translate-y-2 transition-all duration-400"
    >
      {/* Top Color Bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#F97316] to-[#FBBF24]" />

      <div className="p-8">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A]/5 group-hover:bg-[#F97316] flex items-center justify-center text-[#0B1F3A] group-hover:text-white transition-all duration-300 mb-6">
          {iconMap[service.icon] || <Droplets size={32} />}
        </div>

        <h3 className="font-black text-[#0B1F3A] text-2xl mb-3 group-hover:text-[#F97316] transition-colors leading-tight">
          {service.title}
        </h3>
        <p className="text-sm font-semibold text-[#F97316] mb-4 italic">{service.tagline}</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {service.description}
        </p>

        {/* Sub Services */}
        <ul className="space-y-2 mb-7">
          {service.subServices.slice(0, 3).map((sub) => (
            <li key={sub.id} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] flex-shrink-0" />
              {sub.title}
            </li>
          ))}
        </ul>

        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 font-bold text-[#F97316] text-sm hover:gap-3 transition-all group/link"
        >
          Explore Service <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
