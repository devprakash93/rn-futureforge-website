import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ServiceDetailPage from './pages/ServiceDetail';
import ProjectsPage from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetail';
import ClientsPage from './pages/Clients';
import CareersPage from './pages/Careers';
import BlogPage from './pages/Blog';
import BlogDetailPage from './pages/BlogDetail';
import ContactPage from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch all */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </HelmetProvider>
  );
}
