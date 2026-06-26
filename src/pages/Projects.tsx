import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Filter } from 'lucide-react';

import projectsData from '../data/projects.json';
import type { Project } from '../types';

import { SEOHead } from '../components/common/SEOHead';
import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/common/ProjectCard';
import CTABanner from '../components/common/CTABanner';

const projects = projectsData as Project[];
const allCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = projects.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.client.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <>
      <SEOHead
        title="Projects"
        description="Explore RN FUTUREFORGE's portfolio of 150+ completed MEP engineering projects across Odisha and Eastern India — plumbing, sanitation, and fire fighting systems."
        canonical="/projects"
        keywords="MEP Projects Odisha, Plumbing Projects Bhubaneswar, Fire Fighting Projects Odisha"
      />

      {/* Hero */}
      <div className="bg-[#0B1F3A] pt-32 pb-20">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Project Portfolio</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              150+ successfully completed MEP projects across commercial, residential, institutional, and infrastructure sectors.
            </p>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Projects</span>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <section className="py-10 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects by name, client, or location..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#F5F7FA] rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316]"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
              <Filter size={16} className="text-gray-400 flex-shrink-0" />
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-[#F97316] text-white shadow-md'
                      : 'bg-[#F5F7FA] text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          {filtered.length > 0 ? (
            <>
              <p className="text-sm text-gray-500 mb-6">
                Showing <strong>{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
                {activeCategory !== 'All' && <> in <strong>{activeCategory}</strong></>}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
                {filtered.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-2">No Projects Found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); }}
                className="mt-5 px-5 py-2.5 bg-[#F97316] text-white font-semibold rounded-xl hover:bg-[#EA6C0A] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Have a Project in Mind?"
        subtitle="Our engineering team is ready to assess your requirements and provide a detailed proposal."
        primaryLabel="Discuss Your Project"
        primaryLink="/contact"
        variant="navy"
      />
    </>
  );
}
