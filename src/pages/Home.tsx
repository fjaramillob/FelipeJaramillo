import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { projects } from '../data/projects';
import { fadeUp, stagger, EASE_OUT } from '../utils/motion';
import './Home.css';

export default function Home() {
  return (
    <PageTransition className="page home-page">

      {/* ── Hero ── */}
      <section className="hero container">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="hero-eyebrow" variants={fadeUp}>
            <span className="eyebrow-dot" /> {projects.length} proyectos en cartera
          </motion.p>
          <motion.h1 className="hero-title" variants={fadeUp}>
            Entre estrategia,<br />tecnología y<br />visión propia.
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeUp}>
            Profesional, ejecutivo y tecnológico. Construyendo proyectos, criterio
            y una presencia propia con intención.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <NavLink to="/proyectos" className="btn-primary">Ver proyectos</NavLink>
            <NavLink to="/contacto" className="btn-secondary">Contactar</NavLink>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Filosofía ── */}
      <section className="intro-section container">
        <motion.div
          className="intro-content glass"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
          <h2>Construir con intención</h2>
          <p>
            No se trata solo de escribir código o diseñar modelos de negocio, se trata de articular sistemas con propósito.
            Mi enfoque nace de la intersección entre el pensamiento macro (estrategia) y la ejecución de alta fidelidad (tecnología),
            siempre impregnado de una identidad fuerte y curiosidad constante.
          </p>
        </motion.div>
      </section>

      {/* ── Ejes ── */}
      <section className="themes-section container">
        <div className="themes-grid">
          {[
            { title: 'Estrategia', text: 'Pensamiento estructurado para resolver problemas complejos y alinear tecnología con objetivos de negocio claros.' },
            { title: 'Tecnología', text: 'Ejecución técnica limpia, con un enfoque en arquitecturas robustas y experiencias digitales modernas.' },
            { title: 'Visión propia', text: 'Una presencia digital y profesional que rechaza el cliché, enfocada en la calidad, estética premium y evolución constante.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="theme-card glass"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT, delay: i * 0.08 } } }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Proyectos ── */}
      <section className="featured-projects container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="section-title">Proyectos en cartera</h2>
          <NavLink to="/proyectos" className="text-link">
            Ver todos →
          </NavLink>
        </motion.div>

        <motion.div
          className="home-projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
        >
          {projects.map((project) => {
            const statusClass = project.status.toLowerCase().replace(/\s+/g, '-');
            return (
              <motion.div key={project.id} variants={fadeUp}>
                <NavLink
                  to={project.path}
                  className="home-project-card glass"
                  style={{ '--card-accent': project.accentColor, '--card-accent-dim': project.accentColorDim, '--card-accent-border': project.accentColorBorder } as React.CSSProperties}
                >
                  <div className="hpc-accent-bar" />
                  <div className="hpc-top">
                    <span className="hpc-category">{project.category}</span>
                    <span className={`hpc-status status-${statusClass}`}>{project.status}</span>
                  </div>
                  <h3 className="hpc-title">{project.title}</h3>
                  <p className="hpc-desc">{project.shortDescription}</p>
                  <span className="hpc-link">Ver proyecto →</span>
                </NavLink>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section container">
        <motion.div
          className="cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>¿Exploramos una idea?</h2>
          <p>La mejor manera de construir algo sólido es empezando con la conversación correcta.</p>
          <NavLink to="/contacto" className="btn-primary" id="home-cta">Iniciar conversación</NavLink>
        </motion.div>
      </section>

    </PageTransition>
  );
}
