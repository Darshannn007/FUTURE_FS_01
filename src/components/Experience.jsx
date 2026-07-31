const Experience = ({ content, timeline }) => {
  return (
    <section id="experience" className="section timeline">
      {/* Header — staggered text cascade from left */}
      <div className="section__header">
        <div>
          <p className="eyebrow reveal reveal--from-left" style={{ "--delay": "0.05s" }}>{content.eyebrow}</p>
          <h2 className="section__title reveal reveal--from-left" style={{ "--delay": "0.15s" }}>{content.title}</h2>
          {content.subtitle && <p className="section__subtitle reveal reveal--from-left" style={{ "--delay": "0.25s" }}>{content.subtitle}</p>}
        </div>
        {content.highlight && (
          <div className="experience__badge reveal reveal--blur-up" style={{ "--delay": "0.3s" }}>
            {content.highlight}
          </div>
        )}
      </div>

      {/* Timeline items — staggered drop-in from left */}
      <div className="timeline__list">
        {timeline.map((item, index) => (
          <div
            key={`${item.role}-${item.company}`}
            className="timeline__item reveal reveal--timeline"
            style={{ "--delay": `${0.1 + index * 0.15}s` }}
          >
            <span className="timeline__year">{item.year}</span>
            <div className="timeline__content">
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.details}</p>
              {item.link && (
                <a className="timeline__link" href={item.link} target="_blank" rel="noreferrer">
                  {item.linkLabel || "View Certificate"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
