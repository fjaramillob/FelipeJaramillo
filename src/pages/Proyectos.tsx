import PageTransition from '../components/PageTransition';
import { projects } from '../data/projects';
import './Proyectos.css';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  status: string;
};

export default function Proyectos() {
  return (
    <PageTransition className="page container proyectos-page">
      <h1>Proyectos</h1>
      <div className="projects-grid">
        {projects.map((project: Project) => (
          <div key={project.id} className="project-card glass">
            <h3>{project.title}</h3>
            <span className="category">{project.category}</span>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}
