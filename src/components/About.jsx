const About = ({ about, facts, reviewsSection, reviews }) => {
  return (
    <section id="about" className="section about">
      {/* Left column — staggered cascade from left */}
      <div className="about__content">
        <p className="eyebrow reveal reveal--from-left" style={{ "--delay": "0.05s" }}>{about.eyebrow}</p>
        <h2 className="section__title reveal reveal--from-left" style={{ "--delay": "0.15s" }}>{about.title}</h2>
        <p className="section__subtitle reveal reveal--from-left" style={{ "--delay": "0.25s" }}>{about.subtitle}</p>
        <a className="btn btn--outline reveal reveal--from-left" style={{ "--delay": "0.35s" }} href={about.cta.href}>
          {about.cta.label}
        </a>
      </div>

      {/* Right panel — slides in from RIGHT */}
      <div className="about__panel reveal reveal--from-right" style={{ "--delay": "0.2s" }}>
        <div className="about__visuals">
          <div className="about__blob" />
          <div className="code-card">
            <div className="code-card__header">
              <div className="code-card__header-left">
                <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ff6bcb" }} />
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#f89f1b" }} />
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#26c6da" }} />
                </div>
                <span className="code-card__header-title">LiveBuild.js</span>
              </div>
              <span className="code-card__header-response">
                ⚡ Avg. Response: 2 hrs
              </span>
              <span className="code-card__header-status">
                ● Available • 1 Slot Open
              </span>
            </div>
            <pre className="code-card__body" style={{ fontFamily: "monospace", marginTop: "12px" }}>
              <code>{`const developer = {
  status: "Available for Hire",
  experience: "2+ Years Dev Experience",
  projectsCompleted: "5+ Finished Projects",
  valueProposed: "complex designs into pixel-perfect code",
  guarantee: "Clean, performant & on-time delivery"
};`}</code>
            </pre>
          </div>
          <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.08)", margin: "4px 0", gridColumn: "1" }} />
          <div className="terminal-card">
            <p className="terminal__line">$ npm run dev</p>
            <p className="terminal__line terminal__line--delay">
              Launching Immersive Experience...
            </p>
            <p className="terminal__line" style={{ animationDelay: "3.5s" }}>
              $ npx invite-darshan --freelance
            </p>
            <p className="terminal__line" style={{ animationDelay: "5.5s", color: "#26c6da" }}>
              &gt;&gt; Ready to build your next product! Let's talk.
            </p>
          </div>
          <div className="stack-orbit">
            <span className="stack-orbit__item" style={{ "--angle": "0deg" }} data-tooltip="React: Component design, GSAP & responsive UI/UX">
              React
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "60deg" }} data-tooltip="Spring Boot: Secure REST APIs & transaction logic">
              Spring
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "120deg" }} data-tooltip="JavaScript: Clean ES6+, Async patterns & DOM performance">
              JS
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "180deg" }} data-tooltip="MySQL: Optimized queries, indexes & relational design">
              MySQL
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "240deg" }} data-tooltip="Docker: Multi-stage builds & containerized hosting">
              Docker
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "300deg" }} data-tooltip="Git: VCS workflows, branches & history management">
              Git
            </span>
          </div>
        </div>
      </div>

      {/* Reviews — blur-up stagger */}
      <div className="about__reviews" style={{ "--delay": "0.1s" }}>
        <h3 className="reviews__title reveal reveal--from-left" style={{ "--delay": "0.1s" }}>{reviewsSection.title}</h3>
        <p className="reviews__subtitle reveal reveal--blur-up" style={{ "--delay": "0.2s" }}>{reviewsSection.subtitle}</p>
        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card reveal reveal--blur-up"
              style={{ "--delay": `${0.15 + index * 0.12}s` }}
            >
              <p className="review-card__quote">"{review.quote}"</p>
              <div className="review-card__author">
                <div className="review-card__avatar" />
                <div className="review-card__info">
                  <span className="review-card__name">{review.name}</span>
                  <span className="review-card__role">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
