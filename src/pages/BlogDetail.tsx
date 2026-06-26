import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';

import blogsData from '../data/blogs.json';
import type { BlogPost } from '../types';
import { SEOHead } from '../components/common/SEOHead';

const posts = blogsData as BlogPost[];

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://www.rnfutureforge.com/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@id': 'https://www.rnfutureforge.com/#organization'
    },
    image: `https://www.rnfutureforge.com/images/og-image.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.rnfutureforge.com/blog/${post.slug}`
    }
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        keywords={post.tags.join(', ')}
        ogType="article"
        structuredData={articleSchema}
        breadcrumbs={[
          { name: 'Blog & Insights', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` }
        ]}
        article={{
          publishedTime: new Date(post.date).toISOString(),
          author: post.author,
          section: post.category,
          tags: post.tags
        }}
      />

      {/* Hero */}
      <div className="bg-[#0B1F3A] pt-32 pb-20">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex gap-2 mb-6 text-sm text-white/40">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70 line-clamp-1">{post.title}</span>
            </div>
            <span className="inline-block px-3 py-1 bg-[#F97316]/20 text-[#F97316] text-xs font-bold rounded-full mb-5">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 max-w-3xl leading-tight">{post.title}</h1>
            <div className="flex flex-wrap gap-5 text-sm text-white/50">
              <span className="flex items-center gap-2"><Calendar size={14} />{new Date(post.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              <span className="flex items-center gap-2"><Clock size={14} />{post.readTime}</span>
              <span className="flex items-center gap-2"><User size={14} />{post.author}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              {/* Image */}
              <div className="bg-gradient-to-br from-[#0B1F3A] to-[#1A3A5C] rounded-2xl h-72 md:h-96 flex items-center justify-center mb-8">
                <div className="text-white/10 text-8xl font-black">{post.category.charAt(0)}</div>
              </div>

              <p className="text-gray-500 text-lg leading-relaxed mb-6 font-medium">{post.excerpt}</p>
              <div className="prose prose-slate max-w-none">
                <p className="text-gray-500 text-base leading-relaxed">{post.content}</p>
                <p className="text-gray-500 text-base leading-relaxed mt-6">
                  For more information about our engineering services or to discuss a specific project requirement, contact the RN FUTUREFORGE engineering team. Our experts are ready to provide technical guidance tailored to your project needs.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-100">
                {post.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F7FA] text-sm text-gray-600 rounded-lg border border-gray-200">
                    <Tag size={11} />{tag}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/blog" className="inline-flex items-center gap-2 text-[#F97316] font-semibold hover:gap-3 transition-all">
                  <ArrowLeft size={16} /> Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-[#F5F7FA] rounded-2xl p-6">
                  <h3 className="font-bold text-[#0B1F3A] text-base mb-5">Related Articles</h3>
                  <div className="space-y-4">
                    {related.length > 0 ? related.map(p => (
                      <Link key={p.id} to={`/blog/${p.slug}`} className="block group">
                        <div className="text-xs text-[#F97316] font-semibold mb-1">{p.category}</div>
                        <div className="text-sm font-semibold text-[#0B1F3A] group-hover:text-[#F97316] transition-colors leading-tight">{p.title}</div>
                        <div className="text-xs text-gray-400 mt-1">{p.readTime}</div>
                      </Link>
                    )) : <p className="text-sm text-gray-400">No related articles found.</p>}
                  </div>
                </div>

                <div className="bg-[#0B1F3A] rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-base mb-3">Need MEP Engineering Help?</h3>
                  <p className="text-white/60 text-sm mb-4">Talk to our experts for a free consultation on your project.</p>
                  <Link to="/contact" className="block text-center py-2.5 bg-[#F97316] text-white font-bold rounded-xl hover:bg-[#EA6C0A] transition-colors text-sm">
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
