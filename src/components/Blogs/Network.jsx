import React from "react";
import Link from "next/link";

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
      image: "/img/Mounir_Remache.jpg",
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
    <section id="network" className="network section-padding sub-bg">
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                References
              </h6>
              <h3 className="wow color-font" style={{ fontSize: '2em' }}>
                Meet my network filled with the most talented engineers
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {engineers.map((engineer, index) => (
              <div className="item wow fadeInUp" data-wow-delay={`${0.3 + index * 0.2}s`} key={engineer.name} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div className="cont" style={{ flex: 1 }}>
                  <div>
                    <h5 style={{ margin: '0 0 5px 0', display: 'flex', alignItems: 'center' }}>
                      <Link href={engineer.linkedin} legacyBehavior>
                        <a style={{ color: '#20bdff', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                          {engineer.name}
                          <img src="/img/linkedin.png" alt="LinkedIn" style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
                        </a>
                      </Link>
                    </h5>
                    <p style={{ margin: '0 0 5px 0', color: '#bbb' }}>{engineer.title}</p>
                    <p style={{ margin: '0', color: '#bbb' }}>{engineer.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <div className="row">
              {engineers.map((engineer, index) => (
                <div className="col-6" key={engineer.name} style={{ padding: '10px' }}>
                  <div className="img valign">
                    <img src={engineer.image} alt={engineer.name} title={engineer.name} style={{ width: '100%', borderRadius: '10px' }} />
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
