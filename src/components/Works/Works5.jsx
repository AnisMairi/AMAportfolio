'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import initIsotope from "@/common/initIsotope";

function Works5() {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section id="projects" className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">Projects</h6>
              <h3 className="wow color-font">
                Check out my portfolio &amp; <br />
                try out some demos first hand
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active"> All </span>
              <span data-filter=".brand">Machine Learning</span>
              <span data-filter=".web">Generative AI</span>
              <span data-filter=".graphic">Reports and visualizations</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Prediction of audit closing dates</h6>
                  <p>Trained and deployed regression model to predict duration of action plans realisation based on Sonepar's confidential features</p>
                </div>
                <Link href={`#contact`} className="rota">
                  <img src="/img/regression.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">Machine Learning</a>
                  </span>
                  <span>
                    <a href="#0">Regression</a>
                  </span>
                  <span>
                    <a href="#0">Azure ML</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Topic identification</h6>
                  <p>Efficiently classifying action plans by analyzing text columns 'Action Plans Recommendation' and 'Issue Description' to identify topics</p>
                </div>
                <Link href={`#contact`} className="rota">
                  <img src="/img/classification.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">Machine Learning</a>
                  </span>
                  <span>
                    <a href="#0">NLP</a>
                  </span>
                  <span>
                    <a href="#0">Python</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Fraud & anomaly detection</h6>
                  <p>Robust tool leveraging statistics and ML to detect fraudulent activities in travel and expenses data to identify unusual patterns and discrepancies that may indicate fraud</p>
                </div>
                <Link href={`#contact`} className="rota">
                  <img src="/img/clustering.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">Machine Learning</a>
                  </span>
                  <span>
                    <a href="#0">Statistics</a>
                  </span>
                  <span>
                    <a href="#0">Unsupervised ML</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>RAG-Enabled Interaction System</h6>
                  <p>Developed a Retrieval-Augmented Generation (RAG) tool using Azure OpenAI, ChromaDB and Streamlit, enabling auditors to interact with audit reports</p>
                </div>
                <Link href={`#contact`} className="rota">
                  <img src="/img/RAG.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">Langchain</a>
                  </span>
                  <span>
                    <a href="#0">OpenAI Embeddings</a>
                  </span>
                  <span>
                    <a href="#0">ChromaDB</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Live data chatbot</h6>
                  <p>Developed a chatbot to interact with structured data in Databricks SQL Warehouse. The system dynamically queries based on user questions and retrieves information.</p>
                </div>
                <Link href={`#contact`} className="rota">
                  <img src="/img/chatbot.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">Langchain</a>
                  </span>
                  <span>
                    <a href="#0">Generative AI</a>
                  </span>
                  <span>
                    <a href="#0">Azure SQL Warehouse</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items graphic wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Power BI Reporting Solutions</h6>
                  <p>Delivered end-to-end Power BI reports for various departments including Audit, Merger and Acquisitions , Finance and Accounting, Green Offer and Sustainability... </p>
                </div>
                <Link href={`#contact`} className="rota">
                  <img src="/img/dataviz.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">PowerBI</a>
                  </span>
                  <span>
                    <a href="#0">Power Query</a>
                  </span>
                  <span>
                    <a href="#0">DAX / M</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works5
