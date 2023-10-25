import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout"; //Use and import Layout2 when you use multipage
import Blog from "../components/Items/Blog";
import Pagination from "../components/Items/Pagination";
import axios from "axios";
import SectionHeading from "../components/Items/SectionHeading";

function Bloglist() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);

  const mediumApiUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
  const mediumProfileUrl = "https://medium.com/feed/@mustafa-aydogan";

  useEffect(() => {
    const url = mediumApiUrl + mediumProfileUrl;
    axios.get(url).then((data) => {
      setPosts(
        data?.data?.items?.map((item) => {
          item.id = item.guid.substring(item.guid.indexOf("p/") + 2);
          item.pubDate = item.pubDate.substring(0,10)
          return item;
        })
      );
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <SectionHeading title="Blogs" />
        <ul>
          {currentPosts.map((blog) => (
            <li key={blog.id}>
              <Blog blog={blog} />
            </li>
          ))}
        </ul>
        <div className="spacer" data-height="50"></div>
        {!(posts.length > postsPerPage) ? null : (
          <Pagination
            itemsPerPage={postsPerPage}
            totalItems={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </section>
    </Layout>
  );
}

export default Bloglist;
