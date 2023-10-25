import React from "react";
import { Link } from "react-router-dom";

function Blog({
  blog: { id, title, pubDate, link, guid, author, content, categories },
}) {
  return (
    <div className="blog-item" id={id}>
      <div className="thumb blog-thumb">
        <a href="#!">
          <span className="category">{categories[0]}</span>
        </a>
        <Link to={`blogs/${id}`}>
          {/* <img src={featureImage} alt={title} className="blog-image" /> */}
        </Link>
      </div>
      <h4 className="mt-4 mb-0">
        <Link to={`blogs/${id}`}>{title}</Link>
      </h4>
      <ul className="list-inline meta mb-0 mt-3">
        <li className="list-inline-item">{pubDate}</li>
        <li className="list-inline-item">{author}</li>
      </ul>
    </div>
  );
}

export default Blog;
