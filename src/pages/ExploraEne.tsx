import { projects } from '../data/projects';
import ProjectPageLayout from '../components/ProjectPageLayout';

const project = projects.find(p => p.id === 'exploraene')!;

function ExploraEneMockup() {
  return (
    <div className="exploraene-visual">
      <div className="exploraene-visual-title">Explora Ene</div>
      <div className="exploraene-visual-sub">
        Destinos que no están en ninguna lista
      </div>
      <div className="exploraene-tags">
        <span className="exploraene-tag">Patagonia</span>
        <span className="exploraene-tag">Atacama</span>
        <span className="exploraene-tag">Chiloé</span>
        <span className="exploraene-tag">Atacama</span>
        <span className="exploraene-tag">Aysén</span>
        <span className="exploraene-tag">Isla de Pascua</span>
      </div>
    </div>
  );
}

export default function ExploraEne() {
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
      mockup={<ExploraEneMockup />}
      projectId={project.id}
    />
  );
}
