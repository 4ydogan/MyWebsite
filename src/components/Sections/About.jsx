import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/ozgecmis.pdf",
  image: "images/profil.png",
  name: "Mustafa Aydoğan",
  location: "Ankara, Türkiye",
  birthday: "14 August, 1990",
  email: "mustafaaydogan12@outlook.com",
  aboutMe:
    "I'm Mustafa Aydoğan, a web developer based in Ankara, Türkiye, currently studying computer science at TOBB ETU. With expertise in PHP, Docker, Kubernetes, TypeScript, Java, and C, I'm committed to making your web development dreams come true. I offer professional web design, development, advertising, marketing, SEO, copyright, and consulting services. Explore my blogs on encryption, machine learning, and React app development. Let's work together to realize your digital goals.",
};

function About() {
  return (
    <div className="row">
      <div className="col-md-3">
        <img src={aboutData.image} alt={aboutData.name} />
      </div>
      <div className="col-md-9">
        <h2 className="mt-4 mt-md-0 mb-4">Hello,</h2>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-5">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            {/* <p className="mb-0">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p> */}
            <br />
            <a href={aboutData.cvpath} className="btn btn-default mr-3">
              <i className="icon-cloud-download"></i>Download CV
            </a>
          </div>
          <div className="col-md-7 mt-2 mt-md-0 mt-sm-2">
            {/* <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p> */}
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
            <br />
            <ScrollLink
              activeClass="active"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={50}
              className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
            >
              <i className="icon-envelope"></i>Contact me
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
