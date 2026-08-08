
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  navLinks,
  navCta,
  hero,
  stats,
  about,
  facts,
  projectsSection,
  projects,
  skillsSection,
  skills,
  experienceSection,
  timeline,
  contactSection,
  reviewsSection,
  reviews,
  footerText,
} from "./data/portfolioData";

const App = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    let observer;

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target;

            if (entry.isIntersecting) {
              target.classList.add("is-visible");
              if (target.dataset.revealSeen === "true") {
                target.classList.add("reveal--repeat");
              } else {
                target.dataset.revealSeen = "true";
              }
            } else {
              target.classList.remove("is-visible");
              if (target.dataset.revealSeen === "true") {
                target.classList.add("reveal--repeat");
              }
            }
          });
        },
        { threshold: 0.02, rootMargin: "0px 0px 150px 0px" }
      );

      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="app">
      <div className="noise" />
      <Navbar links={navLinks} cta={navCta} />
      <main>
        <Hero data={hero} stats={stats} />
        <About about={about} facts={facts} reviewsSection={reviewsSection} reviews={reviews} />
        <Skills content={skillsSection} skills={skills} />
        <Projects content={projectsSection} projects={projects} />
        <Experience content={experienceSection} timeline={timeline} />
        <Contact content={contactSection} />
      </main>
      <Footer text={footerText} />
    </div>
  );
};

export default App;
