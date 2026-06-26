import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(11,31,58,0.08)] border border-gray-100 hover:shadow-[0_12px_40px_rgba(11,31,58,0.15)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 bg-gradient-to-br from-[#0B1F3A] to-[#1A3A5C] overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20">
          <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20">
            <rect x="10" y="20" width="60" height="40" rx="4" stroke="currentColor" strokeWidth="2"/>
            <line x1="10" y1="35" x2="70" y2="35" stroke="currentColor" strokeWidth="2"/>
            <rect x="25" y="40" width="12" height="20" stroke="currentColor" strokeWidth="2"/>
            <rect x="43" y="35" width="17" height="25" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#F97316] text-white text-xs font-bold rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-[#0B1F3A] text-lg mb-1 leading-tight group-hover:text-[#F97316] transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-xs text-gray-400 font-medium mb-3">{project.client}</p>

        <div className="flex flex-col gap-1.5 mb-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin size={12} className="text-[#F97316]" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar size={12} className="text-[#F97316]" />
            <span>Completed: {project.completionDate}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-5">{project.description}</p>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:gap-3 transition-all group/link"
        >
          View Details <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
