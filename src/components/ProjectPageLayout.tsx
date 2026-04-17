import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../utils/motion';
import {
  Clock, Video, Lock, Heart,
  FileText, BarChart2, Bell, ClipboardList,
  Sparkles, Package, Award,
  Compass, Star, Leaf,
  Users, ArrowUpRight, ArrowLeft,
} from 'lucide-react';
import PageTransition from './PageTransition';
import type { Feature } from '../data/projects';
import './ProjectPageLayout.css';

const iconMap: Record<string, ReactNode> = {
  Clock:         <Clock size={22} strokeWidth={1.5} />,
  Video:         <Video size={22} strokeWidth={1.5} />,
  Lock:          <Lock size={22} strokeWidth={1.5} />,
  Heart:         <Heart size={22} strokeWidth={1.5} />,
  FileText:      <FileText size={22} strokeWidth={1.5} />,
  BarChart2:     <BarChart2 size={22} strokeWidth={1.5} />,
  Bell:          <Bell size={22} strokeWidth={1.5} />,
  ClipboardList: <ClipboardList size={22} strokeWidth={1.5} />,
  Sparkles:      <Sparkles size={22} strokeWidth={1.5} />,
  Package:       <Package size={22} strokeWidth={1.5} />,
  Award:         <Award size={22} strokeWidth={1.5} />,
  Users:         <Users size={22} strokeWidth={1.5} />,
  Compass:       <Compass size={22} strokeWidth={1.5} />,
  Star:          <Star size={22} strokeWidth={1.5} />,
  Leaf:          <Leaf size={22} strokeWidth={1.5} />,
};

interface ProjectPageLayoutProps {
  title: string;
  tagline: string;
  accentColor: string;
  accentColorDim: string;
  accentColorBorder: string;
  category: string;
  type: string;
  status: 'Concepto' | 'En desarrollo' | 'En vivo' | 'Completado';
  problem: string;
  solution: string;
  features: Feature[];
  mockup: ReactNode;
  projectId: string;
}



export default function ProjectPageLayout({
  title,
  tagline,
  accentColor,
  accentColorDim,
  accentColorBorder,
  category,
  type,
  status,
  problem,
  solution,
  features,
  mockup,
  projectId,
}: ProjectPageLayoutProps) {
  const cssVars = {
    '--project-accent': accentColor,
    '--project-accent-dim': accentColorDim,
    '--project-accent-border': accentColorBorder,
  } as React.CSSProperties;

  const statusClass = status.toLowerCase().replace(/\s+/g, '-');

  return (
    <PageTransition className="page project-page" style={cssVars}>

      {/* ── Hero ── */}
      <section className="project-hero">
        <div className="hero-bg-glow" aria-hidden="true" />
        <div className="container">
          <motion.div
            className="project-hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="project-meta-row" variants={fadeUp}>
              <span className="project-category-tag">{category} · {type}</span>
              <span className={`project-status-badge status-${statusClass}`}>{status}</span>
            </motion.div>

            <motion.h1 className="project-title" variants={fadeUp}>{title}</motion.h1>
            <motion.p className="project-tagline" variants={fadeUp}>{tagline}</motion.p>

            <motion.div className="project-hero-actions" variants={fadeUp}>
              <Link
                to={`/contacto?proyecto=${encodeURIComponent(title)}`}
                className="btn-project-primary"
              >
                Conversemos sobre este proyecto <ArrowUpRight size={18} />
              </Link>
              <Link to="/proyectos" className="btn-project-back">
                <ArrowLeft size={16} /> Ver todos los proyectos
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Problema & Solución ── */}
      <section className="project-ps">
        <div className="container">
          <div className="ps-grid">
            <motion.div
              className="ps-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              <div className="ps-label">El problema</div>
              <p>{problem}</p>
            </motion.div>
            <motion.div
              className="ps-card solution-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              <div className="ps-label accent">La solución</div>
              <p>{solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="project-features">
        <div className="container">
          <motion.h2
            className="features-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Pilares del proyecto
          </motion.h2>
          <motion.div
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {features.map((f) => (
              <motion.div className="feature-card glass" key={f.title} variants={fadeUp}>
                <div className="feature-icon" aria-hidden="true">
                  {iconMap[f.iconName] ?? <Sparkles size={22} strokeWidth={1.5} />}
                </div>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Visual Mockup ── */}
      <section className="project-visual">
        <div className="container">
          <motion.div
            className="visual-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            {mockup}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="project-cta">
        <div className="container">
          <motion.div
            className="cta-card glass"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>¿Te interesa este proyecto?</h2>
            <p>Estoy abierto a conversaciones sobre colaboración, inversión y feedback temprano.</p>
            <Link
              to={`/contacto?proyecto=${encodeURIComponent(title)}`}
              className="btn-cta-project"
              id={`cta-${projectId}`}
            >
              Conversemos sobre este proyecto <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

    </PageTransition>
  );
}
