import { projects } from '../../data.js';

function ProjectCard({ project }) {
  return (
    <div className="proj" id={project.id}>
      <div className="proj-head">
        <div className="proj-title-row">
          <span className="win-dots">
            <span style={{ background: 'var(--coral)' }} />
            <span style={{ background: 'var(--amber)' }} />
            <span style={{ background: 'var(--teal)' }} />
          </span>
          <div>
            <div className="proj-name">{project.name}</div>
            <div className="proj-tech">{project.tech}</div>
          </div>
        </div>
        <a className="proj-link" href={project.link} target="_blank" rel="noopener noreferrer">
          view code →
        </a>
      </div>
      <div className="proj-body">
        <ul>
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="pane fade-up" id="projects">
      <h2 className="sec-title"><span className="num">03</span> Projects</h2>
      {projects.map((p) => (
        <ProjectCard project={p} key={p.id} />
      ))}
    </section>
  );
}
