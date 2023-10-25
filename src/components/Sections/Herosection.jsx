import { Button } from "bootstrap";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const herosectionData = {
  name: "Mustafa Aydoğan",
  aboutMe:
    "I am Mustafa Aydoğan, a web developer located in Ankara, Türkiye, presently pursuing a degree in computer science at TOBB ETU. My passion lies in the intricate realms of programming, data structures, and algorithm analysis. Explore my portfolio on GitHub to see my work.",
};

function Herosection() {
  return (
    <section
      className="hero background parallax shadow-dark d-flex align-items-center"
      style={{ backgroundImage: "url(/images/hero.jpg)" }}
    >
      <div className="cta mx-auto mt-2">
        <h1 className="mt-0 mb-4">
          I’m {herosectionData.name}
          <span className="dot"></span>
        </h1>
        <p className="mb-4">{herosectionData.aboutMe}</p>
        <a
          href="https://github.com/4ydogan"
          className="btn btn-default btn-lg mr-3"
          target="_blank"
        >
          <i className="icon-grid"></i>View Portfolio
        </a>
        <div
          className="spacer d-md-none d-lg-none d-sm-none"
          data-height="10"
        ></div>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-border-light btn-lg"
        >
          <i className="icon-envelope"></i>Contact Me
        </ScrollLink>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Herosection;
