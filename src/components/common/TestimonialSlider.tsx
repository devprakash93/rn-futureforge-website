import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';
import type { Testimonial } from '../../types';
import { motion } from 'framer-motion';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'text-[#F97316] fill-[#F97316]' : 'text-gray-300 fill-gray-300'}
        />
      ))}
    </div>
  );
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        loop
        className="pb-12"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-white rounded-2xl p-7 shadow-[0_4px_24px_rgba(11,31,58,0.08)] border border-gray-100 h-full flex flex-col">
              <StarRating rating={t.rating} />
              <blockquote className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 flex-1 italic">
                "{t.review}"
              </blockquote>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="w-11 h-11 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#0B1F3A] text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.designation}</div>
                  <div className="text-xs text-[#F97316] font-medium">{t.company}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
