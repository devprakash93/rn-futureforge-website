import { motion } from 'framer-motion';
import type { TimelineItem } from '../../types';

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-[#E8ECF0]" />

      <div className="space-y-10 md:space-y-0">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative flex md:items-center gap-6 md:gap-0 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } md:mb-16`}
            >
              {/* Content Box */}
              <div className={`w-full md:w-5/12 pl-10 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(11,31,58,0.08)] border border-gray-100 hover:shadow-[0_8px_32px_rgba(11,31,58,0.12)] transition-shadow">
                  <span className="inline-block bg-[#F97316]/10 text-[#F97316] text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide">
                    {item.year}
                  </span>
                  <h3 className="font-bold text-[#0B1F3A] text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-[#F97316] ring-4 ring-[#F97316]/20 z-10" />
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
