'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import initIsotope from "@/common/initIsotope";

function WorksStyle2({ grid, filterPosition, hideFilter }) {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className={`${grid ? (grid === 3 ? 'three-column' : null) : null} portfolio section-padding pb-70`}>
      {
        !hideFilter &&
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
                <h3 className="wow color-font fz-40 fw-500">
                  Our Recent Web Design workstyle2&amp; <br />
                  Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      }
      <div className="container">
        <div className="row">
          {
            !hideFilter &&
            <div className={`filtering ${filterPosition === 'center'
              ? 'text-center'
              : filterPosition === 'left'
                ? 'text-left'
                : 'text-right'
              } col-12`}>
              <div className="filter">
                <span data-filter="*" className="active"> All </span>
                <span data-filter=".brand">Branding</span>
                <span data-filter=".web">Mobile App</span>
                <span data-filter=".graphic">Creative</span>
              </div>
            </div>
          }

          <div className="gallery full-width">
            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items graphic wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Creativity Demand</h6>
                <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span>
              </div>
            </div>

            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items web wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/portfolio/1/2.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Through The Breaking</h6>
                <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span>
              </div>
            </div>

            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items brand wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link href="/project-details2/project-details2-dark" className="imago wow">
                  <img src="/img/portfolio/portfolio/1/3.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Create With Creatives</h6>
                <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span>
              </div>
            </div>

            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items graphic wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Energies of Love</h6>
                <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span>
              </div>
            </div>

            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items web wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/portfolio/1/5.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>See It Yourself</h6>
                <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span>
              </div>
            </div>

            <div className={`${grid === 3
              ? 'col-lg-4 col-md-6'
              : grid === 2
                ? 'col-md-6'
                : 'col-12'
              } items brand wow fadeInUp`} data-wow-delay=".4s">
              <div className="item-img">
                <Link className="imago wow" href="/project-details2/project-details2-dark">
                  <img src="/img/portfolio/portfolio/1/6.jpg" alt="image" />
                  <div className="item-img-overlay"></div>
                </Link>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
                <span> <a href="#0">Design</a>, <a href="#0">WordPress</a> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorksStyle2