import PageTransition from '../components/PageTransition';
import './Perfil.css';

export default function Perfil() {
  return (
    <PageTransition className="page container perfil-page">
      <h1 className="perfil-title">Perfil Ejecutivo</h1>
      <div className="perfil-content">
        <p>
          <strong>Me interesa construir con intención.</strong> Ya sea diseñando arquitecturas digitales escalables,
          trazando la estrategia de crecimiento de un producto, o refinando un equipo, mi enfoque está
          en entender el problema central antes de ejecutar.
        </p>
        <p>
          A lo largo de mi carrera, he conectado el pensamiento de alto nivel (estrategia y visión de negocio)
          con la implementación técnica diaria. Creo firmemente que un líder moderno no solo delega, sino que entiende la tecnología a un nivel táctico.
        </p>
        <p>
          Mi filosofía de trabajo se basa en la <strong>calidad, iteración y estética</strong>. Construir interfaces y aplicaciones sólidas no es suficiente; deben comunicar confianza, robustez y tener una presencia distintiva.
        </p>
      </div>

      <div className="perfil-timeline">
        <div className="perfil-timeline-item">
          <span className="year">Presente</span>
          <div>
            <p><strong>Liderazgo y Transformación Digital</strong></p>
            <p style={{ color: 'var(--text-secondary)' }}>Guiando equipos en la modernización de sistemas heredados a stacks modernos.</p>
          </div>
        </div>
        <div className="perfil-timeline-item">
          <span className="year">Anterior</span>
          <div>
            <p><strong>Desarrollo y Arquitectura de Producto</strong></p>
            <p style={{ color: 'var(--text-secondary)' }}>Especialización en frontend, diseño de sistemas corporativos y frameworks modernos.</p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
