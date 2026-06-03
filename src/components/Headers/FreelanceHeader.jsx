'use client';
import React from "react";
import Image from "next/image";

function FreelancreIntro() {
  const tools = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Azure Cloud Services",
  ];

  const highlights = [
    {
      value: "4",
      label: "Years of experience",
    },
    {
      value: "Azure",
      label: "Cloud, AI and data platform delivery",
    },
  ];

  return (
    <header id="intro" className="portfolio-hero">
      <div className="container portfolio-hero-shell">
        <div className="hero-stage">
          <div className="hero-photo-system" aria-label="Portrait and technical profile">
            <span className="hero-photo-grid" aria-hidden="true" />
            <figure className="hero-photo-frame">
              <Image
                src="/img/PP.JPG"
                alt="Portrait of Anis Maïri"
                width={520}
                height={650}
                sizes="(min-width: 1200px) 470px, (min-width: 768px) 38vw, 82vw"
                className="hero-photo"
                unoptimized
                priority
              />
            </figure>
            <span className="hero-signal hero-signal-top" aria-hidden="true">AI</span>
            <span className="hero-signal hero-signal-side" aria-hidden="true">AZURE</span>
            <span className="hero-signal hero-signal-bottom" aria-hidden="true">DATA</span>
          </div>

          <div className="portfolio-hero-copy">
            <p className="hero-eyebrow">Cloud data systems / applied AI</p>
            <h1 className="hero-title">Anis Maïri</h1>
            <p className="hero-role">Data & AI Engineer / Microsoft Fabric / Azure</p>
            <p className="hero-subtitle">
              I help teams modernize data platforms, build governed analytics foundations,
              and turn applied AI ideas into maintainable delivery systems.
            </p>

            <div className="hero-stack-panel">
              <span className="stack-kicker">Core stack</span>
              <ul className="hero-stack" aria-label="Technical stack">
                {tools.map((tool, index) => (
                  <li
                    key={tool}
                    style={{
                      "--stack-delay": `${index * 90}ms`,
                      "--scan-delay": `${900 + index * 210}ms`,
                    }}
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-actions" aria-label="Primary calls to action">
              <a href="#projects" className="butn hero-btn hero-btn-primary">
                <span>Review selected work</span>
              </a>
              <a
                href="mailto:contact@anis-mairi.com?subject=Portfolio%20contact"
                className="butn hero-btn hero-btn-secondary"
              >
                <span>Start a conversation</span>
              </a>
            </div>
          </div>
        </div>

        <div className="states">
          <ul className="portfolio-stats" aria-label="Portfolio highlights">
            {highlights.map((item) => (
              <li className="portfolio-stat-card" key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}

            <li className="portfolio-stat-card hero-mail">
              <a href="mailto:contact@anis-mairi.com?subject=Portfolio%20contact">
                <span>Contact</span>
                <strong>contact@anis-mairi.com</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default FreelancreIntro;
