import { projects } from '../data/projects';
import ProjectPageLayout from '../components/ProjectPageLayout';

const project = projects.find(p => p.id === 'mostwater')!;

function MostWaterMockup() {
  return (
    <img
      src="/mostwater.png"
      alt="Most Water — Agua premium en lata"
      className="product-image"
      loading="lazy"
    />
  );
}

export default function MostWater() {
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
      mockup={<MostWaterMockup />}
      projectId={project.id}
    />
  );
}
