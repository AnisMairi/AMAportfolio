import React from 'react';

const contactEmail = "contact@anis-mairi.com";
const mailtoHref = `mailto:${contactEmail}?subject=Portfolio%20contact`;

function ContactFormS({ noLine }) {
  return (
    <section id="contact" className="portfolio-contact section-padding" aria-labelledby="contact-heading">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head portfolio-section-head">
              <h6>Contact</h6>
              <h2 id="contact-heading" className="portfolio-section-title">
                Useful conversations start with a concrete system, constraint or roadmap.
              </h2>
              <p className="section-lede">
                Available for Microsoft Fabric migration, data engineering, BI and applied AI work.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-options">
              <a className="contact-card contact-card-primary" href={mailtoHref}>
                <span className="contact-card-symbol" aria-hidden="true">@</span>
                <span>
                  <strong>Direct email</strong>
                  {contactEmail}
                </span>
              </a>

              <a className="contact-card" href="#projects">
                <span className="contact-card-symbol" aria-hidden="true">01</span>
                <span>
                  <strong>Selected work</strong>
                  Fabric, AI, ML and BI delivery
                </span>
              </a>

              <div className="contact-card" aria-label="Location">
                <span className="contact-card-symbol" aria-hidden="true">FR</span>
                <span>
                  <strong>Location</strong>
                  Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        !noLine &&
        <div className="line"></div>
      }
    </section>
  );
}

export default ContactFormS;
