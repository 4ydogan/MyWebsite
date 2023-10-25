import React from "react";
import { Link } from "react-router-dom";
import Blog from "../Items/Blog";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(6);

  const mediumApiUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
  const mediumProfileUrl = "https://medium.com/feed/@mustafa-aydogan";

  useEffect(() => {
    const url = mediumApiUrl + mediumProfileUrl;
    axios.get(url).then((data) =>
      setPosts(
        data?.data?.items?.map((blog, i) => {
          blog.id = blog.guid.substring(blog.guid.indexOf("p/") + 2);
          blog.pubDate = blog.pubDate.substring(0,10)

          return blog;
        })
      )
    );
  }, []);

  return (
    <>
      <ul>
        {posts.map((blog, i) => {
          if (i < postsPerPage) {
            return (
              <li key={blog.id}>
                <Blog blog={blog} />
              </li>
            );
          }
        })}
      </ul>
      <div className="spacer" data-height="50"></div>
      <div className="text-center">
        <Link to="/blogs" className="btn btn-default">
          Show All Blogs
        </Link>
      </div>
    </>
  );
};

export default Blogs;
