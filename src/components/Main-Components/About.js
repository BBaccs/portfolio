import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user"></i> About
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Get a chance to know
              <br />
             <span>me</span>!
            </h1>
          </div>
          <p className="scroll-animation" data-aos="fade-up">
            Coder by day, nights, and weekends, but in my spare time I love
            to kick back & relax with friends. In the summer you'll find me
            hanging by the bonfire, swimming in the lake, and hiking up the
            mountains. In the winter you'll find me shredding down those
            mountains, and sitting on the couch nerding out with my favorite podcasts
            playing video games, or writing fiction.
          </p>
        </div>
      </div>
    </section>
  );
}
