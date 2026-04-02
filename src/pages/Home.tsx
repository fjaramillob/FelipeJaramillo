import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { projects } from '../data/projects';
import './Home.css';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
};

export default function Home() {
  return (
    <PageTransition className="page home-page">
      <section className="hero container">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Entre estrategia, tecnología y visión propia.
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Profesional, ejecutivo y tecnológico. Construyendo proyectos, criterio y una presencia propia con intención.
        </motion.p>
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <NavLink to="/perfil" className="btn-primary">Ver perfil</NavLink>
          <NavLink to="/proyectos" className="btn-secondary">Explorar proyectos</NavLink>
        </motion.div>
      </section>

      <section className="intro-section container">
        <motion.div 
          className="intro-content glass"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2>Construir con intención</h2>
          <p>
            No se trata solo de escribir código o diseñar modelos de negocio, se trata de articular sistemas con propósito. 
            Mi enfoque nace de la intersección entre el pensamiento macro (estrategia) y la ejecución de alta fidelidad (tecnología),
            siempre impregnado de una identidad fuerte y curiosidad constante.
          </p>
        </motion.div>
      </section>

      <section className="themes-section container">
        <div className="themes-grid">
          <motion.div className="theme-card glass" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h3>Estrategia</h3>
            <p>Pensamiento estructurado para resolver problemas complejos y alinear tecnología con objetivos de negocio claros.</p>
          </motion.div>
          <motion.div className="theme-card glass" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
            <h3>Tecnología</h3>
            <p>Ejecución técnica limpia, con un enfoque en arquitecturas robustas y experiencias digitales modernas.</p>
          </motion.div>
          <motion.div className="theme-card glass" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}>
            <h3>Visión propia</h3>
            <p>Una presencia digital y profesional que rechaza el cliché, enfocada en la calidad, estética premium y evolución constante.</p>
          </motion.div>
        </div>
      </section>

      <section className="featured-projects container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          Selección de Proyectos
        </motion.h2>
        <div className="projects-preview">
          {projects.slice(0, 2).map((project) => (
            <motion.div 
              key={project.id} 
              className="project-card glass"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h3>{project.title}</h3>
              <span className="category">{project.category}</span>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="view-more">
           <NavLink to="/proyectos" className="text-link">Ver todos los proyectos →</NavLink>
        </div>
      </section>

      <section className="cta-section container">
        <motion.div 
          className="cta-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
        >
          <h2>¿Exploramos una idea?</h2>
          <p>La mejor manera de construir algo sólido es empezando con la conversación correcta.</p>
          <NavLink to="/contacto" className="btn-primary">Iniciar conversación</NavLink>
        </motion.div>
      </section>
    </PageTransition>
  );
}
