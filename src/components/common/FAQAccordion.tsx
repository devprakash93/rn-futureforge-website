import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { ServiceFAQ } from '../../types';

interface FAQAccordionProps {
  faqs: ServiceFAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-semibold text-[#0B1F3A] text-base">{faq.question}</span>
            <ChevronDown
              size={18}
              className={`text-[#F97316] flex-shrink-0 transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {openId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
