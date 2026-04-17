import { projects } from '../data/projects';
import ProjectPageLayout from '../components/ProjectPageLayout';

const project = projects.find(p => p.id === 'afterme')!;

function AfterMeMockup() {
  return (
    <div className="mockup-window">
      <div className="mockup-titlebar">
        <div className="titlebar-dots">
          <span /><span /><span />
        </div>
        <span className="titlebar-text">AfterMe · Mis cápsulas</span>
      </div>
      <div className="mockup-body">
        <div className="capsule-item">
          <div className="capsule-seal">🔒</div>
          <div className="capsule-info">
            <div className="capsule-to">Para: <strong>María García</strong></div>
            <div className="capsule-type">📹 Video personal · 📄 3 archivos adjuntos</div>
            <div className="capsule-date">Se entrega el 15 Mar 2040</div>
          </div>
        </div>
        <div className="capsule-item">
          <div className="capsule-seal">📝</div>
          <div className="capsule-info">
            <div className="capsule-to">Para: <strong>Familia</strong></div>
            <div className="capsule-type">💬 Mensaje de texto · 🖼 5 fotos</div>
            <div className="capsule-date">Se entrega el 1 Ene 2055</div>
          </div>
        </div>
        <div className="capsule-timeline">
          <div className="timeline-step done">
            <div className="step-dot" />
            <span>Creada</span>
          </div>
          <div className="timeline-connector done" />
          <div className="timeline-step active">
            <div className="step-dot" />
            <span>En espera</span>
          </div>
          <div className="timeline-connector" />
          <div className="timeline-step">
            <div className="step-dot" />
            <span>Entregada</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AfterMe() {
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
      mockup={<AfterMeMockup />}
      projectId={project.id}
    />
  );
}
