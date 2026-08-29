import { useLayoutEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import heroImage from "../assets/hero4.png";
import Stats from "./Stats";

const splitText = (text, className = "") =>
  text.split("").map((char, index) => {
    const key = `${text}-${index}`;

    if (char === " ") {
      return (
        <span key={`${key}-space`} className="hero-letter hero-letter--space">
          &nbsp;
        </span>
      );
    }

    return (
      <span key={key} className={`hero-letter ${className}`.trim()}>
        {char}
      </span>
    );
  });

const getSocialMeta = (href) => {
  const url = href.toLowerCase();

  if (url.includes("linkedin")) {
    return {
      name: "LinkedIn",
      icon: (
        <svg
          className="social-icon__svg"
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
      ),
      colors: {
        start: "#5a8cff",
        end: "#00d2ff",
        glow: "rgba(0, 210, 255, 0.55)",
      },
    };
  }

  if (url.includes("github")) {
    return {
      name: "GitHub",
      icon: (
        <svg
          className="social-icon__svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12.02c0 4.42 2.87 8.18 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.66.35-1.1.64-1.36-2.22-.26-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.84c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.4.2 2.44.1 2.7.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.57.69.48A10.02 10.02 0 0 0 22 12.02C22 6.48 17.52 2 12 2z" />
        </svg>
      ),
      colors: {
        start: "#2a2f45",
        end: "#5b6b8a",
        glow: "rgba(130, 146, 181, 0.45)",
      },
    };
  }

  if (url.includes("leetcode")) {
    return {
      name: "LeetCode",
      icon: (
        <svg
          className="social-icon__svg"
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
      ),
      colors: {
        start: "#f89f1b",
        end: "#ff6a00",
        glow: "rgba(248, 159, 27, 0.55)",
      },
    };
  }

  if (url.includes("dribbble")) {
    return {
      name: "Dribbble",
      icon: (
        <svg
          className="social-icon__svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M5.5 5.5c4 4 6.5 8.5 7 13" />
          <path d="M18.5 5.5c-4 4-6.5 8.5-7 13" />
        </svg>
      ),
      colors: {
        start: "#ff6bcb",
        end: "#ff9f1a",
        glow: "rgba(255, 107, 203, 0.55)",
      },
    };
  }

  return {
    name: "Social",
    icon: (
      <svg
        className="social-icon__svg"
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
    ),
    colors: {
      start: "#7c4dff",
      end: "#26c6da",
      glow: "rgba(124, 77, 255, 0.55)",
    },
  };
};

const Hero = ({ data, stats }) => {
  const {
    greeting,
    firstName,
    lastName,
    subtitle,
    primaryCta,
    secondaryCta,
    chips,
    floatingTop,
    floatingBottom,
    socialLinks,
    scrollHint,
  } = data;

  const headingRef = useRef(null);
  const firstNameLetters = useMemo(() => splitText(firstName), [firstName]);
  const lastNameLetters = useMemo(
    () => splitText(lastName, "hero-letter--accent"),
    [lastName]
  );

  useLayoutEffect(() => {
    if (!headingRef.current) return;

    const ctx = gsap.context(() => {
      const letters = headingRef.current.querySelectorAll(".hero-letter");

      // Avoid animating blur filters (expensive). Stick to transform + opacity.
      gsap.set(letters, { y: 28, opacity: 0 });

      gsap.to(letters, {
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: "expo.out",
        stagger: 0.03,
        delay: 0.05,
        force3D: true,
      });
    }, headingRef);

    return () => ctx.revert();
  }, [firstName, lastName]);

  return (
    <section id="home" className="hero">
      <div className="hero__content reveal" style={{ "--delay": "0.1s" }}>
        <p className="eyebrow">{greeting}</p>
        <motion.h1
          ref={headingRef}
          className="hero__title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="hero-name">{firstNameLetters}</span>
          <span className="hero-name hero-name--accent">{lastNameLetters}</span>
        </motion.h1>
        <p className="hero__subtitle">{subtitle}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={primaryCta.href}>
            {primaryCta.label}
          </a>
          <a className="btn btn--outline" href={secondaryCta.href} download>
            {secondaryCta.label}
          </a>
        </div>
        <div className="hero__meta">
          {chips.map((chip) => {
            const isMobileOnly = chip === "Open to Opportunities";

            return (
              <span
                key={chip}
                className={`chip${isMobileOnly ? " chip--mobile-only" : ""}`}
              >
                {chip}
              </span>
            );
          })}
        </div>
        <Stats stats={stats} />
      </div>

      <div className="hero__visual reveal" style={{ "--delay": "0.2s" }}>
        <div className="hero__orb">
          <img
            className="hero__figure hero__figure--image"
            src={heroImage}
            alt="Darshan Desale"
            loading="lazy"
          />
        </div>
        <div className="hero__floating hero__floating--top">
          <p className="floating__title">{floatingTop.title}</p>
          <p className="floating__value">{floatingTop.value}</p>
        </div>
        <div className="hero__floating hero__floating--bottom">
          <p className="floating__title">{floatingBottom.title}</p>
          <p className="floating__value">{floatingBottom.value}</p>
        </div>
        {/* <div className="hero__floating hero__floating--opportunity">
          <p className="floating__title">{floatingOpportunity.title}</p>
          <p className="floating__value">{floatingOpportunity.value}</p>
        </div> */}
        <div className="social-rail">
          {socialLinks.map((link) => {
            const meta = getSocialMeta(link.href);

            return (
              <a
                key={link.href}
                className="social-icon"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={meta.name}
                title={meta.name}
                style={{
                  "--icon-start": meta.colors.start,
                  "--icon-end": meta.colors.end,
                  "--icon-glow": meta.colors.glow,
                }}
              >
                {meta.icon}
              </a>
            );
          })}
        </div>
      </div>

      <div className="scroll-indicator">{scrollHint}</div>
    </section>
  );
};

export default Hero;
