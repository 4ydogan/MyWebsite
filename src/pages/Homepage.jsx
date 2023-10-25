import React, { useEffect } from "react";
import { Element } from "react-scroll";
import Layout from "../components/Layout/Layout";
import About from "../components/Sections/About";
import Testimonials from "../components/Sections/Testimonials";
import Herosection from "../components/Sections/Herosection";
import SectionHeading from "../components/Items/SectionHeading";
import Skills from "../components/Sections/Skills";
import Funfacts from "../components/Sections/Funfacts";
import Services from "../components/Sections/Services";
import Educations from "../components/Sections/Educations";
import Experiences from "../components/Sections/Experiences";
import Portfolios from "../components/Sections/Portfolios";
import Blogs from "../components/Sections/Blogs";
import Contact from "../components/Sections/Contact";

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Element name="section-home">
        <Herosection />
      </Element>

      <Element name="section-about">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="About Me" />
          <About />
        </section>
      </Element>

      <Element name="section-skills">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="My skills" />
          <Skills />
        </section>
      </Element>

      <Element name="section-experiences">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Experience" />
          <Experiences />
        </section>
      </Element>

      <Element name="section-education">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Education" />
          <Educations />
        </section>
      </Element>

      {/* <Element name="section-funfacts">
        <Funfacts />
      </Element> */}

      <Element name="section-services">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Services" />
          <Services />
        </section>
      </Element>

      {/* <Element name="section-portfolios">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Portfolio" />
          <Portfolios />
        </section>
      </Element> */}

      {/* <Element name="section-testimonials">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Testimonials" />
          <Testimonials />
        </section>
      </Element> */}

      <Element name="section-blogs">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Recent Blogs" />
          <Blogs />
        </section>
      </Element>

      <Element name="section-contact">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Get in touch" />
          <Contact />
        </section>
      </Element>

      <Element name="section-copyright">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Copyright" />
          &copy; {new Date().getFullYear()} Created by <a href="https://www.github.com/4ydogan" target="blank">4ydogan</a> - Mustafa Aydoğan - Tüm hakları saklıdır.
        </section>
      </Element>
    </Layout>
  );
}

export default Homepage;
