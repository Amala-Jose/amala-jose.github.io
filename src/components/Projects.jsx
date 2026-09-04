import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <h2>Projects</h2>
          <span className="section-index">04</span>
        </div>

        {projects.length === 0 ? (
          <div className="projects-empty">
            <p>
              Live, interactive builds are being added here, linked straight
              to CodeSandbox so you can explore the code, not just a
              screenshot.
            </p>
            <p className="projects-empty-sub">
              Check back soon, or reach out directly for code samples.
            </p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <a
                key={project.title}
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.tags && (
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
