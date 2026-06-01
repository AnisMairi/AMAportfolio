import React from "react";
import Image from "next/image";

const Network = () => {
  const engineers = [
    {
      name: "Amine Riad Remache",
      title: "Software Engineer @ AWS (R&D Network Monitoring)",
      location: "Dublin, Ireland",
      image: "/img/Amine_Remache.jpg",
      linkedin: "https://www.linkedin.com/in/amineremache/",
    },
    {
      name: "Massil Hihat, Phd",
      title: "ML Researcher @ Califrais",
      location: "Paris, France",
      image: "/img/Massil_Hihat.jpg",
      linkedin: "https://www.linkedin.com/in/massil-hihat-7b9578139/",
    },
    {
      name: "Lotfi Bokhari",
      title: "Software Engineer @ Kalvad",
      location: "Dubai, United Arab Emirates",
      image: "/img/Lotfi_Bokhari.jpg",
      linkedin: "https://www.linkedin.com/in/lotfibokhari/",
    },
    {
      name: "Mounir Remache",
      title: "Lead Software Engineer @ ELCS Research",
      location: "Algiers, Algeria",
      image: "/img/Mounir_Remache.JPG",
      linkedin: "https://www.linkedin.com/in/mohamed-mounir-remache/",
    },
    {
        name: "Chems Eddine Harouit",
        title: "Dev Cloud @ 3DS Outscale",
        location: "Paris, France",
        image: "/img/Chemssou.jpg",
        linkedin: "https://www.linkedin.com/in/chemseddine-harouit/",
    },
    {
        name: "Anes Boubeker",
        title: "Associate Consultant @ EY-Parthenon",
        location: "Paris, France",
        image: "/img/Anes_Boubeker.jpg",
        linkedin: "https://www.linkedin.com/in/anes-boubeker-245991120/",
      }
  ];

  return (
    <section id="network" className="network section-padding" aria-labelledby="network-heading">
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head portfolio-section-head">
              <h6>
                References
              </h6>
              <h2 id="network-heading" className="portfolio-section-title">
                A reference network across engineering, cloud, research and consulting.
              </h2>
              <p className="section-lede">
                People who can speak to technical standards, collaboration and delivery context.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {engineers.map((engineer, index) => (
              <article className="network-person" key={engineer.name}>
                <div>
                  <div>
                    <h3>
                      <a href={engineer.linkedin} target="_blank" rel="noreferrer">
                        {engineer.name}
                        <Image src="/img/linkedin.png" alt="" width={18} height={18} aria-hidden="true" unoptimized />
                        <span className="sr-only">LinkedIn profile</span>
                      </a>
                    </h3>
                    <p>{engineer.title}</p>
                    <p>{engineer.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="col-lg-6">
            <div className="row network-photos" aria-hidden="true">
              {engineers.map((engineer) => (
                <div className="col-6" key={engineer.name}>
                  <div className="photo-frame">
                    <Image
                      src={engineer.image}
                      alt={engineer.name}
                      title={engineer.name}
                      width={360}
                      height={360}
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
