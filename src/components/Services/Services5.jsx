import React from "react";
//= Static Data
import featuresData from "@/data/sections/features.json";

function Services5() {
  return (
    <section id="services" className="services section-padding" aria-labelledby="services-heading">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head portfolio-section-head">
              <h6>
                Expertise
              </h6>
              <h2 id="services-heading" className="portfolio-section-title">
                Practical engineering across data platforms, AI delivery and analytics.
              </h2>
              <p className="section-lede">
                Clear architecture, maintainable implementation and business-readable outcomes.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {featuresData.map((item, index) => (
            <div
              className="col-lg-6"
              key={item.id}
            >
              <article className="item-box">
                <div>
                  <span className="service-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services5;
