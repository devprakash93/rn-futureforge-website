import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Stat } from '../../types';

interface StatCounterProps {
  stats: Stat[];
  light?: boolean;
}

function Counter({ value, suffix, label, light }: Stat & { light?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className={`text-4xl md:text-5xl font-black mb-2 ${light ? 'text-white' : 'text-[#0B1F3A]'}`}>
        <span className="tabular-nums">{count.toLocaleString()}</span>
        <span className="text-[#F97316]">{suffix}</span>
      </div>
      <div className={`text-sm font-semibold tracking-wide uppercase ${light ? 'text-white/70' : 'text-gray-500'}`}>
        {label}
      </div>
    </div>
  );
}

export default function StatCounter({ stats, light = false }: StatCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Counter {...stat} light={light} />
        </motion.div>
      ))}
    </div>
  );
}
