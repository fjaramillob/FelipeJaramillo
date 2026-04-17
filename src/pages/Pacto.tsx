import { projects } from '../data/projects';
import ProjectPageLayout from '../components/ProjectPageLayout';

const project = projects.find(p => p.id === 'pacto')!;

function PactoMockup() {
  return (
    <div className="mockup-window">
      <div className="mockup-titlebar">
        <div className="titlebar-dots">
          <span /><span /><span />
        </div>
        <span className="titlebar-text">PACTO · Arriendo Depto Providencia</span>
      </div>
      <div className="mockup-body">
        {/* Participants */}
        <div className="pacto-participants">
          <div className="participant-avatar">F</div>
          <div className="pacto-plus">+</div>
          <div className="participant-avatar">M</div>
          <div className="participant-names">
            <span>Felipe</span>
            <span>·</span>
            <span>Marcela</span>
          </div>
        </div>

        {/* Expense 1 — Arriendo */}
        <div className="pacto-items">
          <div className="pacto-item">
            <div className="pacto-item-header">
              <span className="pacto-item-name">Arriendo · Abril 2026</span>
              <span className="pacto-item-amount">$450.000</span>
            </div>
            <div className="pacto-split-bar">
              <div className="split-segment f" style={{ width: '50%' }}>F 50%</div>
              <div className="split-segment m" style={{ width: '50%' }}>M 50%</div>
            </div>
          </div>

          {/* Expense 2 — Internet (paid) */}
          <div className="pacto-paid">
            <span className="paid-name">Internet</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>$35.000</span>
              <span className="paid-badge">✓ Pagado</span>
            </div>
          </div>
        </div>

        <div className="pacto-footer">
          📅 Próximo vencimiento: 30 Abr 2026
        </div>
      </div>
    </div>
  );
}

export default function Pacto() {
  return (
    <ProjectPageLayout
      title={project.title}
      tagline={project.tagline}
      accentColor={project.accentColor}
      accentColorDim={project.accentColorDim}
      accentColorBorder={project.accentColorBorder}
      category={project.category}
      type={project.type}
      status={project.status}
      problem={project.problem}
      solution={project.solution}
      features={project.features}
      mockup={<PactoMockup />}
      projectId={project.id}
    />
  );
}
