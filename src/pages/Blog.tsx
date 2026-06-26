import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';

import blogsData from '../data/blogs.json';
import type { BlogPost } from '../types';

import { SEOHead } from '../components/common/SEOHead';
import SectionTitle from '../components/common/SectionTitle';

const posts = blogsData as BlogPost[];
const allCategories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];

function BlogCard({ post, featured = false, index = 0 }: { post: BlogPost; featured?: boolean; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${featured ? 'md:col-span-2 md:flex' : ''}`}
    >
      {/* Image Placeholder */}
      <div className={`bg-gradient-to-br from-[#0B1F3A] to-[#1A3A5C] flex items-center justify-center ${featured ? 'md:w-1/2 h-56 md:h-auto' : 'h-48'}`}>
        <div className="text-white/10 text-6xl font-black">
          {post.category.charAt(0)}
        </div>
      </div>

      <div className={`p-7 flex flex-col ${featured ? 'md:flex-1 md:justify-center' : ''}`}>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-2.5 py-1 bg-[#F97316]/10 text-[#F97316] text-xs font-bold rounded-lg">{post.category}</span>
          {post.featured && <span className="px-2.5 py-1 bg-[#0B1F3A]/5 text-[#0B1F3A] text-xs font-bold rounded-lg">Featured</span>}
        </div>

        <h2 className={`font-black text-[#0B1F3A] group-hover:text-[#F97316] transition-colors leading-tight mb-3 ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {post.title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>

        <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-5">
          <span className="flex items-center gap-1.5"><Calendar size={12} />{new Date(post.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
          <span className="flex items-center gap-1.5"><Clock size={12} />{post.readTime}</span>
          <span className="flex items-center gap-1.5"><User size={12} />{post.author}</span>
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#F97316] hover:gap-3 transition-all mt-auto group/link"
        >
          Read Article <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = posts.filter(p => activeCategory === 'All' || p.category === activeCategory);
  const featured = posts.filter(p => p.featured);
  const latest = posts.filter(p => !p.featured).slice(0, 4);

  return (
    <>
      <SEOHead
        title="Blog & Insights"
        description="Engineering insights, fire safety guides, plumbing best practices, and MEP industry news from RN FUTUREFORGE Engineering."
        canonical="/blog"
        keywords="MEP Engineering Blog, Plumbing Tips India, Fire Safety Standards, Engineering Insights Odisha"
      />

      {/* Hero */}
      <div className="bg-[#0B1F3A] pt-32 pb-20">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#F97316] mb-4">Knowledge Hub</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">Blog & Engineering Insights</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Expert articles on plumbing systems, fire safety standards, sanitation engineering, and MEP industry trends.
            </p>
          </motion.div>
          <div className="flex justify-center gap-2 mt-8 text-sm text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Blog</span>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle eyebrow="Top Reads" title="Featured Articles" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {featured.map((post, i) => (
              <BlogCard key={post.id} post={post} featured={i === 0} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter + All Posts */}
      <section className="section-padding bg-[#F5F7FA]">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-black text-[#0B1F3A]">All Articles</h2>
            <div className="flex flex-wrap gap-2">
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-[#F97316] text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((post, i) => <BlogCard key={post.id} post={post} index={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}
