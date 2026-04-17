import PageTransition from '../components/PageTransition';
import { Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Contacto.css';

const LinkedinIcon = ({ size = 24, strokeWidth = 2, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function Contacto() {
  const [searchParams] = useSearchParams();
  const projectName = searchParams.get('proyecto');
  const projectData = projects.find(p => p.title === projectName);
  const accentColor = projectData?.accentColor ?? 'var(--text-accent-light)';

  return (
    <PageTransition className="page container contacto-page">
      <motion.div
        className="contacto-wrapper"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >

        <motion.div className="contacto-header" variants={itemVariants}>
          {/* Back to project link */}
          {projectName && projectData && (
            <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
              <Link
                to={projectData.path}
                className="back-to-project"
                style={{ color: accentColor }}
              >
                ← Volver a {projectName}
              </Link>
            </motion.div>
          )}

          <div className="status-badge">
            <span className="dot" />
            Disponible para nuevas ideas
          </div>

          {projectName ? (
            <>
              <h1 className="contacto-title">
                Hablemos sobre{' '}
                <span
                  className="text-gradient"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor} 0%, #fff 100%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {projectName}
                </span>
              </h1>
              <p className="contacto-subtitle">
                Cuéntame tu perspectiva, feedback o idea relacionada con {projectName}.
                La conversación correcta puede partir aquí.
              </p>
            </>
          ) : (
            <>
              <h1 className="contacto-title">
                Iniciemos una <br />
                <span className="text-gradient">conversación</span>
              </h1>
              <p className="contacto-subtitle">
                Para explorar oportunidades, colaborar en proyectos o simplemente conectar.
              </p>
            </>
          )}
        </motion.div>

        <motion.div className="contacto-cards" variants={itemVariants}>
          <a
            href="mailto:felipe.jaramillo17@gmail.com"
            className="contact-card glass group"
            id="contacto-email"
          >
            <div className="card-icon">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <div className="card-content">
              <h3>Correo Electrónico</h3>
              <p>felipe.jaramillo17@gmail.com</p>
            </div>
            <div className="card-arrow">
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/felipejaramilloballadares/"
            target="_blank"
            rel="noreferrer"
            className="contact-card glass group"
            id="contacto-linkedin"
          >
            <div className="card-icon">
              <LinkedinIcon size={24} strokeWidth={1.5} />
            </div>
            <div className="card-content">
              <h3>LinkedIn</h3>
              <p>/in/felipejaramilloballadares</p>
            </div>
            <div className="card-arrow">
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}
