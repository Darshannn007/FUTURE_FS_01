const Projects = ({ content, projects }) => {
  return (
    <section id="projects" className="section projects">
      {/* Header — staggered text cascade from left */}
      <div className="section__header">
        <div>
          <p className="eyebrow reveal reveal--from-left" style={{ "--delay": "0.05s" }}>{content.eyebrow}</p>
          <h2 className="section__title reveal reveal--from-left" style={{ "--delay": "0.15s" }}>{content.title}</h2>
          <p className="section__subtitle reveal reveal--from-left" style={{ "--delay": "0.25s" }}>{content.subtitle}</p>
        </div>
        <a className="btn btn--ghost reveal reveal--from-left" style={{ "--delay": "0.35s" }} href={content.cta.href}>
          {content.cta.label}
        </a>
      </div>

      {/* Project cards — 3D flip-up staggered */}
      <div className="projects__grid">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="project-card reveal reveal--card"
            style={{
              "--accent": project.accentColor,
              "--delay": `${0.05 + index * 0.06}s`,
            }}
          >
            <div className="project-card__glow" />

            {/* Top */}
            <div className="project-card__top">
              <h3>{project.title}</h3>

              <div className="project-card__links">

  {project.liveLink && (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noreferrer"
      className="project-btn project-btn--live"
    >
      <span>Live Demo</span>
    </a>
  )}

  {project.githubLink && (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noreferrer"
      className="project-btn project-btn--github"
    >
      <span>Source Code</span>
    </a>
  )}

</div>
            </div>

            {/* Description */}
            <p className="project-card__description">
              {project.description}
            </p>

            {/* Features */}
            {project.features && (
              <div className="project-card__features">
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;