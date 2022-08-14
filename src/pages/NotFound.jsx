import React, {useEffect} from "react";
import Layout from "../components/Layout/Layout";

function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
      <section
        className="demosection herosection mt-0 background parallax shadow-dark d-flex align-items-center padding"
      >
        <div className="container">
          <div className="demo-content">
            <h1>Page Not Found - 404</h1>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
      </Layout>
    </>
  );
}

export default NotFound;
