import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.min.css";
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    Lightbox.option({
      resizeDuration: 200,
      fadeDuration: 600,
      imageFadeDuration: 600,
      wrapAround: true,
    });
  }, []);
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical"></i> portfolio
            </h4>
            <h1 className="scroll-animation">
              Featured <span>Projects</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-full">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio/aussie-grill-desktop.png"
                    data-lightbox="example-1"
                  >
                    <img
                      src="../assets/images/portfolio/aussie-grill-desktop.png"
                      alt=""
                    />
                  </a>
                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://github.com/BBaccs/aussie-grill-react" target="_blank" title="opens new tab">
                        Source Code
                      </a>
                    </li>
                    <li>
                      <a
                        href="../assets/images/portfolio/aussie-grill-mobile.png"
                        data-lightbox="example-2"
                      >
                        Mobile Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="../assets/images/portfolio/aussie-grill-mobile2.png"
                        data-lightbox="example-3"
                      >
                        Mobile Modal
                      </a>
                    </li>
                    <li>
                      <a
                        href="../assets/images/portfolio/aussie-grill-mobile3.png"
                        data-lightbox="example-4"
                      >
                        Mobile Menu
                      </a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://www.Bureau - Architecture Studio Website.com" target="_blank" title="opens new tab">
                    Aussie Grill - React (create a live site for this)
                  </a>
                </h2>
                <p>
                  Mobile first & WCAG 2.1 compliance in mind. The react version
                  of the HTML site I developed for Aussie Grill. I did all of
                  the design and wrote all of the code, with some colloboartion
                  from the Aussie Grill marketing managers (Dawn Otremsky &
                  Claudia M). This site needed to be decomissioned because
                  Bloomin' Brands could not support a CMS for Aussie Grill,
                  which limited functionalities. This site served as the only
                  site for Aussie Grill for ~2 years. Click to <a href="https://qaussiegrillbssa01.z13.web.core.windows.net/">see the original
                  website (QA environment)</a>.
                </p>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio/original-portfolio.png"
                    data-lightbox="example-1"
                  >
                    <img
                      src="../assets/images/portfolio/original-portfolio.png"
                      alt=""
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://github.com/BBaccs/bbaccsPortfolio" target="_blank" title="opens new tab">Source Code</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://bbaccs.github.io/bbaccsPortfolio/">HTML Portfolio</a>
                </h2>
                <p>
                  HTML5, CSS3, Vanilla JavaScript, SCSS. Built without bootstrap
                  or any templates. My original Portfolio. I used this to practice working with SASS, HTML5, CSS3, JS, and proper accessibility.
                  Hosted on Netlify.
                </p>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio/movie-api.png"
                    data-lightbox="example-1"
                  >
                    <img
                      src="../assets/images/portfolio/movie-api.png"
                      alt=""
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://github.com/BBaccs/movie-api" target="_blank" title="opens new tab">
                        Source Code
                      </a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://bbaccs.github.io/movie-api/" target="_blank" title="opens new tab">Movie Finder</a>
                </h2>
                <p>A basic JavaScript & HTML finder built for practicing working with API's.</p>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio/tendershack.png"
                    data-lightbox="example-1"
                  >
                    <img
                      src="../assets/images/portfolio/tendershack.png"
                      alt=""
                    />
                  </a>

                </div>
                <h2>
                  <a href="https://www.tendershack.com">TenderShack</a>
                </h2>
                <p>
                  Built with an extremely tight deadline, it was a quick responde to a rapidly changing environment during the pandemic. The initial website is still live today, it was built with Bootstrap 4, SASS, & JS. It is WCAG 2.1 compliant.
                </p>
              </div>
            </div>

            <div className="col-md-6 scroll-animation" data-aos="fade-right">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio/dream-log.png"
                    data-lightbox="example-5"
                  >
                    <img
                      src="../assets/images/portfolio/dream-log.png"
                      alt=""
                    />
                  </a>

                  <img
                    src="../assets/images/portfolio/og-portfolio.jpg"
                    alt=""
                  />

                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://github.com/BBaccs/js-dreamLog" target="_blank" title="opens new tab">
                        Source Code
                      </a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://bbaccs.github.io/js-dreamLog/dreamlist/" target="_blank" title="opens new tab">
                    Dream Log
                  </a>
                </h2>
                <p>
                  A basic, unstyled, dream log built with JavaScript. I built
                  this to practice working with constructor functions,
                  prototypes, local storage, and form validation.
                </p>
              </div>
            </div>

            <div className="col-md-6 scroll-animation" data-aos="fade-left">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio/meal-tracker.png"
                    data-lightbox="example-1"
                  >
                    <img src="../assets/images/portfolio/meal-tracker.png" alt="" />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://github.com/BBaccs/food-journal" target="_blank" title="opens new tab">
                        Source Code
                      </a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://www.taskly-dashboard.com" target="_blank" title="opens new tab">Food Journal</a>
                </h2>
                <p>
                  A simple, unstyled food journal built with JavaScript to practice ES6, classes, and local storage.
                </p>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="../assets/images/portfolio/ltc.png"
                    data-lightbox="example-1"
                  >
                    <img src="../assets/images/portfolio/ltc.png" alt="" />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a href="https://github.com/BBaccs/learnTheCode" target="_blank" title="opens new tab">Source Code</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://learnthecode.netlify.app/" target="_blank" title="opens new tab">
                    Learn "The" Code
                  </a>
                </h2>
                <p>
                  Hosted on Netlify, a templated website for mentoring junior ui
                  developers.
                </p>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href="https://coderbyte.com/profile/bbaccz"
                    data-lightbox="example-1"
                    target="_blank"
                    title="opens new tab"
                  >
                    <img src="../assets/images/portfolio/coderbytes.png" alt="" />
                  </a>
                </div>
                <h2>
                  <a href="https://coderbyte.com/profile/bbaccz" target="_blank" title="opens new tab">
                    Coderbytes
                  </a>
                </h2>
                <p>
                  My coderbytes profile.
                </p>
              </div>
            </div>




          </div>
        </div>
      </div>
    </section>
  );
}
