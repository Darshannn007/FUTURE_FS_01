const getSocialIcon = (href, label) => {
  const url = (href || "").toLowerCase();

  if (url.includes("linkedin")) {
    return (
      <svg
        className="footer__social-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" rx="1" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (url.includes("github")) {
    return (
      <svg
        className="footer__social-svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.66.35-1.1.64-1.36-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.57.69.48A10.02 10.02 0 0 0 22 12.02C22 6.48 17.52 2 12 2z" />
      </svg>
    );
  }

  if (url.includes("leetcode")) {
    return (
      <svg
        className="footer__social-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 6v12h5" />
        <path d="M18 8a4 4 0 1 0 0 8" />
      </svg>
    );
  }

  if (url.includes("mailto:") || label === "Email") {
    return (
      <svg
        className="footer__social-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    );
  }

  return (
    <svg
      className="footer__social-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10" />
      <path d="M7 12h10" />
    </svg>
  );
};

const getSocialColor = (href) => {
  const url = (href || "").toLowerCase();

  if (url.includes("linkedin")) return { accent: "#00d2ff", glow: "rgba(0, 210, 255, 0.4)" };
  if (url.includes("github")) return { accent: "#a78bfa", glow: "rgba(167, 139, 250, 0.4)" };
  if (url.includes("leetcode")) return { accent: "#f89f1b", glow: "rgba(248, 159, 27, 0.4)" };
  if (url.includes("mailto:")) return { accent: "#26c6da", glow: "rgba(38, 198, 218, 0.4)" };

  return { accent: "#7c4dff", glow: "rgba(124, 77, 255, 0.4)" };
};

const Footer = ({ data, links = [], socialLinks = [], text }) => {
  const brand = data?.brand || "Darshan Desale";
  const role = data?.role || "Full Stack Java Developer";
  const tagline =
    data?.tagline ||
    "Building clean, cinematic & scalable web applications with React & Spring Boot.";
  const status = data?.status || "Open to Opportunities";
  const copyright = data?.copyright || text || "© 2026 Darshan Desale. All rights reserved.";
  const builtWith = data?.builtWith || "Crafted with React, Vite & Modern CSS";

  // Ensure direct email link is present in social icons list if not already
  const allSocials = [...socialLinks];
  const hasEmail = allSocials.some((s) => (s.href || "").includes("mailto:"));
  if (!hasEmail) {
    allSocials.push({
      label: "Email",
      href: "mailto:darshandesale143@gmail.com",
    });
  }

  return (
    <footer className="footer">
      {/* Top Gradient Separation Divider */}
      <div className="footer__divider-glow" aria-hidden="true" />

      <div className="footer__container">
        <div className="footer__grid">
          {/* Column 1: Brand & Tagline */}
          <div className="footer__col footer__brand">
            <a href="#home" className="footer__logo" aria-label="Darshan Desale Home">
              <span className="footer__logo-bracket">&lt;</span>
              <span className="footer__logo-name">Darshan</span>
              <span className="footer__logo-accent">Desale</span>
              <span className="footer__logo-bracket"> /&gt;</span>
            </a>
            <p className="footer__role">{role}</p>
            <p className="footer__tagline">{tagline}</p>
            <div className="footer__status-badge">
              <span className="footer__status-dot" />
              <span className="footer__status-text">{status}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer__col footer__nav">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__nav-list">
              {links.map((link) => (
                <li key={link.href} className="footer__nav-item">
                  <a href={link.href} className="footer__nav-link">
                    <span className="footer__nav-arrow">→</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Links & Contact */}
          <div className="footer__col footer__social">
            <h4 className="footer__col-title">Connect</h4>
            <p className="footer__social-subtitle">
              Let's connect on social platforms or discuss opportunities.
            </p>
            <div className="footer__social-icons">
              {allSocials.map((link) => {
                const colors = getSocialColor(link.href);

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="footer__social-btn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label || "Social Profile"}
                    title={link.label || "Social Profile"}
                    style={{
                      "--social-accent": colors.accent,
                      "--social-glow": colors.glow,
                    }}
                  >
                    {getSocialIcon(link.href, link.label)}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="footer__bottom">
          <p className="footer__copyright">{copyright}</p>
          <p className="footer__credits">{builtWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

