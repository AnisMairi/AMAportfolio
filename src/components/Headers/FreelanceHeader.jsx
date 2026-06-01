'use client';
import React from "react";
import Image from "next/image";

function FreelancreIntro() {
  const tools = [
    "Microsoft Fabric",
    "Azure AI Foundry",
    "Azure Cloud",
    "Power BI",
    "Databricks",
  ];

  return (
    <header id="intro" className="portfolio-hero">
      <div className="container portfolio-hero-shell">
        <div className="portfolio-hero-grid">
          <div className="portfolio-hero-copy">
            <p className="hero-eyebrow">Data & AI Engineer / Microsoft ecosystem</p>
            <div className="hero-identity">
              <figure className="img portfolio-portrait">
                <Image src="/img/PP.JPG" alt="Portrait of Anis Maïri" width={178} height={178} unoptimized priority />
              </figure>
              <div>
                <h1 className="hero-title">Anis Maïri</h1>
                <p className="hero-role">Data / AI / Microsoft Fabric / Azure</p>
              </div>
            </div>
            <p className="hero-subtitle">
              I help teams modernize data platforms, build governed analytics foundations,
              and turn applied AI ideas into maintainable delivery systems.
            </p>

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

            <ul className="hero-stack" aria-label="Core technology focus">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="states">
          <ul className="portfolio-stats" aria-label="Portfolio highlights">
            <li className="portfolio-stat-card">
              <strong>4</strong>
              <span>Years of experience</span>
            </li>

            <li className="portfolio-stat-card">
              <strong>Fabric</strong>
              <span>Current migration focus</span>
            </li>

            <li className="portfolio-stat-card">
              <strong>Azure</strong>
              <span>Cloud, AI and data platform delivery</span>
            </li>

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
