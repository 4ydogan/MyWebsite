import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import Layout from "../components/Layout/Layout"; //Use and import Layout2 when you use multipage
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function BlogDetails(props) {
  const emptyPost = {
    id: 0,
    title: "",
    pubDate: "",
    link: "",
    guid: "",
    author: "",
    content: "",
    categories: [],
  };
  const [post, setPost] = useState(emptyPost);

  const { id } = useParams();

  const mediumApiUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
  const mediumProfileUrl = "https://medium.com/feed/@mustafa-aydogan";

  useEffect(() => {
    const url = mediumApiUrl + mediumProfileUrl;
    axios.get(url).then((data) => {
      setPost(
        data?.data?.items?.filter((item) => {
          return id === item.guid.substring(item.guid.indexOf("p/") + 2);
        })[0]
      );
    });
  }, []);

  return (
    <Layout>
      {
        <section className="shadow-blue white-bg padding mt-0">
          <h2 className="mt-4 mb-10">{post.title}</h2>
          <ul className="list-inline portfolio-info mt-0">
            <li className="list-inline-item">
              <i className="icon-user"></i>
              {post.author}
            </li>
            <li className="list-inline-item">
              <i className="icon-calendar"></i>
              {post.pubDate.substring(0,10)}
            </li>
            <li className="list-inline-item">
              <i className="icon-folder"></i>
              {post.categories.pop()}
            </li>
          </ul>
          <div
            className="blog-content mt-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </section>
      }
    </Layout>
  );
}

export default BlogDetails;
