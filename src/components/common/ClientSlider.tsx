import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import type { Client } from '../../types';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

interface ClientSliderProps {
  clients: Client[];
}

export default function ClientSlider({ clients }: ClientSliderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={2}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
      >
        {clients.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="flex flex-col items-center justify-center p-4 h-24 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#F97316]/20 transition-all group">
              <Building2 size={28} className="text-gray-300 group-hover:text-[#F97316] transition-colors mb-1" />
              <span className="text-xs text-center text-gray-400 group-hover:text-[#0B1F3A] font-medium transition-colors leading-tight line-clamp-2">
                {client.name}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
