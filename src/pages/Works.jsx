import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import SectionHeading from "../components/Items/SectionHeading";
import Portfolios from "../components/Sections/Portfolios";

function Works() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <SectionHeading title="Portfolio" />
        <Portfolios />
      </section>
    </Layout>
  );
}

export default Works;
