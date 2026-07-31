const Skills = ({ content, skills }) => {
  const groupMeta = {
    Frontend: {
      title: "Frontend",
      subtitle: "UI systems, motion, and polish",
      tone: "frontend",
    },
    Backend: {
      title: "Backend",
      subtitle: "APIs, security, and service logic",
      tone: "backend",
    },
    Databases: {
      title: "Databases",
      subtitle: "Schema design and queries",
      tone: "database",
    },
    "Core CS": {
      title: "Core CS Fundamentals",
      subtitle: "Foundations of systems and design",
      tone: "core",
    },
    Tools: {
      title: "Tools",
      subtitle: "Workflow and dev tooling",
      tone: "tools",
    },
  };

  const groupOrder = ["Frontend", "Backend", "Databases", "Core CS", "Tools"];
  const grouped = groupOrder
    .map((type) => {
      const items = skills.filter((skill) => skill.type === type);
      if (!items.length) return null;
      return { type, items, ...groupMeta[type] };
    })
    .filter(Boolean);

  return (
    <section id="skills" className="section skills">
      {/* Header — staggered text cascade from left */}
      <div className="section__header">
        <div>
          <p className="eyebrow reveal reveal--from-left" style={{ "--delay": "0.05s" }}>{content.eyebrow}</p>
          <h2 className="section__title reveal reveal--from-left" style={{ "--delay": "0.15s" }}>{content.title}</h2>
          <p className="section__subtitle reveal reveal--from-left" style={{ "--delay": "0.25s" }}>{content.subtitle}</p>
        </div>
      </div>

      <div className="skills__layout">
        {/* Feature card — glow burst up */}
        <div className="skills__feature reveal reveal--glow-up" style={{ "--delay": "0.15s" }}>
          <div className="skills__feature-top">
            <span className="skills__feature-label">Stack Snapshot</span>
          </div>
          <h3 className="skills__feature-title">Full Stack Focus</h3>
          <p className="skills__feature-text">
            Clean UI systems, secure APIs, reliable data flows, and fast shipping
            workflows.
          </p>
          <div className="skills__feature-metrics">
            {grouped.map((group) => (
              <div
                key={group.type}
                className="skills__metric"
                data-tone={group.tone}
              >
                <span className="skills__metric-title">{group.title}</span>
                <span className="skills__metric-count">{group.items.length}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill panels — staggered slide from right */}
        <div className="skills__stack">
          {grouped.map((group, index) => (
            <article
              key={group.type}
              className="skills__panel reveal reveal--from-right"
              data-tone={group.tone}
              style={{ "--delay": `${0.1 + index * 0.1}s` }}
            >
              <div className="skills__panel-head">
                <div className="skills__panel-text">
                  <div className="skills__panel-title-row">
                    <p className="skills__panel-title">{group.title}</p>
                    <span className="skills__panel-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="skills__panel-subtitle">{group.subtitle}</p>
                </div>
              </div>
              <div className="skills__chips">
                {group.items.map((skill) => (
                  <span key={skill.name} className="skills__chip">
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
