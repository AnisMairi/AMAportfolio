'use client';
import React, { useMemo, useState } from 'react';
import Image from "next/image";
//= Static Data
import projectsData from "@/data/projects.json";

const filters = [
  { label: "All", value: "*" },
  { label: "Machine Learning", value: ".brand" },
  { label: "Generative AI", value: ".web" },
  { label: "Fabric & Data Platform", value: ".fabric" },
  { label: "BI & Visualization", value: ".graphic" },
];

function handleFilterKeyDown(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    event.currentTarget.click();
  }
}

function Works5() {
  const [activeFilter, setActiveFilter] = useState("*");
  const visibleProjects = useMemo(() => {
    if (activeFilter === "*") return projectsData;

    const category = activeFilter.replace(".", "");
    return projectsData.filter((project) => project.categories.includes(category));
  }, [activeFilter]);

  return (
    <section id="projects" className="portfolio-frl section-padding" aria-labelledby="projects-heading">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6>Projects</h6>
              <h2 id="projects-heading" className="portfolio-section-title">
                Selected data, AI and platform work
              </h2>
              <p className="section-lede">
                A concise view of problems solved across Fabric, Azure, Databricks, ML and Power BI.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter" role="group" aria-label="Project filters">
              {filters.map((filter, index) => (
                <span
                  data-filter={filter.value}
                  className={activeFilter === filter.value ? "active" : ""}
                  role="button"
                  tabIndex="0"
                  aria-pressed={activeFilter === filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  onKeyDown={handleFilterKeyDown}
                  key={filter.value}
                >
                  {filter.label}
                </span>
              ))}
            </div>
          </div>

          <div className="gallery full-width project-grid">
            {visibleProjects.map((project, index) => (
              <article
                className={`${project.featured ? "col-12 project-featured" : "col-md-6"} project-item`}
                key={project.id}
                aria-label={project.name}
              >
                <div className="project-card">
                  <div className="project-card-meta">
                    <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
                    <span>{project.domain || project.name}</span>
                    {project.featured && <span className="project-featured-label">Current focus</span>}
                  </div>

                  <div className="project-card-layout">
                    <div className="project-card-main">
                      <div className="project-card-top">
                        <span className="project-icon" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="project-kicker">{project.name}</span>
                      </div>

                      <div className="project-card-content">
                        <h3>{project.title}</h3>
                        <p className="project-subtitle">{project.subtitle}</p>
                        <p>{project.description}</p>
                      </div>
                    </div>

                    <div className="project-media" aria-label={`${project.title} visual`}>
                      {project.visual === "fabric" ? (
                        <div className="fabric-visual" aria-hidden="true">
                          <div className="fabric-stage">
                            <span>Source estate</span>
                            <strong>Azure legacy</strong>
                            <strong>Databricks</strong>
                          </div>
                          <div className="fabric-stage is-core">
                            <span>Fabric core</span>
                            <strong>OneLake</strong>
                            <strong>Lakehouse</strong>
                          </div>
                          <div className="fabric-stage">
                            <span>Business layer</span>
                            <strong>Semantic model</strong>
                            <strong>Power BI</strong>
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          width={640}
                          height={420}
                          unoptimized
                        />
                      )}
                    </div>
                  </div>

                  <div className="project-card-detail">
                    <div className="project-impact">
                      <span>Impact</span>
                      <p>{project.impact}</p>
                    </div>

                    {project.scope && (
                      <ul className="project-scope" aria-label={`${project.title} delivery scope`}>
                        {project.scope.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="project-tags" aria-label={`${project.title} topics`}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a href="#contact" className="project-card-link">
                    Discuss this kind of work <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works5
