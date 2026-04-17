import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import PageTransition from '../components/PageTransition';
import { fadeUp, staggerFast as stagger } from '../utils/motion';
import './Proyectos.css';

const statusLabels: Record<string, string> = {
  'Concepto': 'Concepto',
  'En desarrollo': 'En desarrollo',
  'En vivo': 'En vivo',
  'Completado': 'Completado',
};

export default function Proyectos() {
  return (
    <PageTransition className="page proyectos-page">
      <div className="container">

        {/* Header */}
        <motion.div
          className="proyectos-header"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p className="proyectos-eyebrow" variants={fadeUp}>
            Portafolio
          </motion.p>
          <motion.h1 className="proyectos-title" variants={fadeUp}>
            Proyectos
          </motion.h1>
          <motion.p className="proyectos-subtitle" variants={fadeUp}>
            Ideas en distintas etapas de evolución. Desde conceptos hasta productos en desarrollo,
            cada uno responde a un problema real con una propuesta concreta.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="bento-grid"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {projects.map((project) => {
            const statusClass = project.status.toLowerCase().replace(/\s+/g, '-');
            return (
              <motion.div key={project.id} variants={fadeUp}>
                <Link
                  to={project.path}
                  className={`bento-card bento-card--${project.id}`}
                  style={{
                    '--card-accent': project.accentColor,
                    '--card-accent-dim': project.accentColorDim,
                    '--card-accent-border': project.accentColorBorder,
                  } as React.CSSProperties}
                  aria-label={`Ver proyecto ${project.title}`}
                >
                  {/* Glow bg */}
                  <div className="card-glow" aria-hidden="true" />

                  {/* Top row */}
                  <div className="card-top">
                    <div className="card-badges">
                      <span className="card-category">{project.category}</span>
                      <span className={`card-status status-${statusClass}`}>
                        {statusLabels[project.status]}
                      </span>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="card-body">
                    <h2 className="card-title">{project.title}</h2>
                    <p className="card-tagline">{project.tagline}</p>
                  </div>

                  {/* Feature pills (shown on large cards) */}
                  <div className="card-pills">
                    {project.features.slice(0, 3).map((f) => (
                      <span key={f.title} className="card-pill">{f.title}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="card-cta">
                    <span>Ver proyecto</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </PageTransition>
  );
}
