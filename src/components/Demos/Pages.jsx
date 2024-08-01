'use client';
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

function Pages() {
  const [loadTypeWriter, setloadTypeWriter] = useState(false);

  useEffect(() => {
    setloadTypeWriter(true);
  }, []);

  return (
    <header className="freelancre valign">
      <div className="container">
        <div className="row align-items-center justify-content-center" style={{marginLeft : "-350px"}}>
          <div className="col-lg- align-items-center justify-content-center">
          <div className="img">
            <img src="/img/PP.jpg" alt="Anis Maïri"/>
          </div>
          </div>
          <div className="col-lg-8 valign" style={{marginRight : "-400px"}}>
            <div className="cont" style={{marginLeft : "100px"}}>
              <h1 className="col-lg-11 col-md-15">
                <span style={{ fontSize: "55px", fontWeight: "bold" }}>Anis Maïri</span><br />
                <span style={{ fontSize: "40px", fontWeight: "semibold" }}>Data Science & Engineering | Machine Learning & Generative AI specialist</span><br />
                <span style={{ fontSize: "40px", lineHeight: "59px"}}> Using </span>
                <span style={{ fontSize: "40px", lineHeight: "59px", marginLeft: '7px' }} className="cd-words-wrapper">
                  {
                    loadTypeWriter &&
                    <Typewriter
                      options={{
                        wrapperClassName: "color-font fw-600",
                        strings: [
                          "Python",
                          "JavaScript",
                          "Azure Cloud",,
                          "Power BI",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                      loop={true}
                    />
                  }
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="states">
          <div className="container">
            <ul className="flex">
              <li className="flex">
                <div className="numb valign">
                  <h3>3</h3>
                </div>
                <div className="text valign">
                  <p>
                    Years <br /> Of Experience
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <h3>+6</h3>
                </div>
                <div className="text valign">
                  <p>
                    Projects Completed
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <p>actually based in Paris, France</p>
                </div>
              </li>
              

              <li className="mail-us">
                <a href="mailto:contact@anis-mairi.com?subject=Subject">
                  <div className="flex">
                    <div className="text valign">
                      <div className="full-width">
                        <p>Get In Touch</p>
                        <h6>contact@anis-mairi.com</h6>
                      </div>
                    </div>
                    <div className="mail-icon">
                      <div className="icon-box">
                        <span className="icon color-font pe-7s-mail"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Pages;