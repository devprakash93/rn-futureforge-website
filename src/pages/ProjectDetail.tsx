import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, User, Tag, Building2, ArrowLeft } from 'lucide-react';

import projectsData from '../data/projects.json';
import type { Project } from '../types';
import { SEOHead } from '../components/common/SEOHead';
import CTABanner from '../components/common/CTABanner';

const projects = projectsData as Project[];

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const related = projects.filter(p => p.category === project.category && p.id !== project.id).slice(0, 3);

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `https://www.rnfutureforge.com/projects/${project.slug}#project`,
    name: project.title,
    description: project.description,
    keywords: project.tags.join(', '),
    creator: {
      '@id': 'https://www.rnfutureforge.com/#organization'
    },
    dateCreated: project.completionDate,
    spatialCoverage: {
      '@type': 'Place',
      name: project.location
    }
  };

  return (
    <>
      <SEOHead
        title={project.title}
        description={`${project.title} — ${project.description.substring(0, 150)}...`}
        canonical={`/projects/${project.slug}`}
        structuredData={projectSchema}
        breadcrumbs={[
          { name: 'Projects', url: '/projects' },
          { name: project.title, url: `/projects/${project.slug}` }
        ]}
      />

      {/* Hero */}
      <div className="bg-[#0B1F3A] pt-32 pb-20">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex gap-2 mb-6 text-sm text-white/40">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
              <span>/</span>
              <span className="text-white/70 line-clamp-1">{project.title}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#F97316] text-white text-xs font-bold rounded-full">{project.category}</span>
              <span className="text-white/40 text-sm">{project.completionDate}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight max-w-3xl">{project.title}</h1>
            <p className="text-white/60 text-lg">{project.client}</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Image Placeholder */}
              <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1A3A5C] rounded-2xl h-72 md:h-96 flex items-center justify-center mb-8">
                <div className="text-center text-white/20">
                  <Building2 size={64} />
                  <p className="mt-4 text-sm">{project.title}</p>
                </div>
              </div>

              <h2 className="text-2xl font-black text-[#0B1F3A] mb-4">Project Overview</h2>
              <p className="text-gray-500 leading-relaxed text-base mb-8">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-[#F5F7FA] text-sm text-gray-600 font-medium rounded-lg border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-[#F97316] font-semibold hover:gap-3 transition-all"
              >
                <ArrowLeft size={16} />
                Back to All Projects
              </Link>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#F5F7FA] rounded-2xl p-7 sticky top-24">
                <h3 className="font-bold text-[#0B1F3A] text-lg mb-6 pb-3 border-b border-gray-200">Project Details</h3>
                <div className="space-y-5">
                  {[
                    { icon: <User size={16} className="text-[#F97316]" />, label: 'Client', value: project.client },
                    { icon: <Tag size={16} className="text-[#F97316]" />, label: 'Category', value: project.category },
                    { icon: <MapPin size={16} className="text-[#F97316]" />, label: 'Location', value: project.location },
                    { icon: <Calendar size={16} className="text-[#F97316]" />, label: 'Completion', value: project.completionDate },
                    { icon: <Building2 size={16} className="text-[#F97316]" />, label: 'Project Area', value: project.area },
                    { icon: <span className="text-[#F97316] text-xs font-bold">₹</span>, label: 'Project Value', value: project.value },
                  ].map(item => (
                    <div key={item.label} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                      <div>
                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</div>
                        <div className="text-sm font-semibold text-[#0B1F3A] mt-0.5">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 pt-6 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="block w-full py-3 bg-[#F97316] text-white text-center font-bold rounded-xl hover:bg-[#EA6C0A] transition-colors"
                  >
                    Request Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="py-16 bg-[#F5F7FA]">
          <div className="container-custom">
            <h2 className="text-2xl font-black text-[#0B1F3A] mb-8">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <Link key={p.id} to={`/projects/${p.slug}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <span className="text-xs font-bold text-[#F97316] uppercase tracking-wide">{p.category}</span>
                    <h3 className="font-bold text-[#0B1F3A] mt-1 mb-2 leading-tight">{p.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <MapPin size={11} />{p.location}
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Looking for Similar MEP Solutions?"
        subtitle="Discuss your project with our engineers and get a customized proposal."
        primaryLabel="Contact Us"
        primaryLink="/contact"
        variant="orange"
      />
    </>
  );
}
