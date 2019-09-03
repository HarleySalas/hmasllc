import React, { useEffect, useState } from "react";
import axios from 'axios';

import "./Excerpts.scss";

import BlogPosts from "./BlogPosts/BlogPosts.jsx";
import BlogPagination from "./BlogPagination/BlogPagination.jsx";

const Excerpts = () => {
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const fetchTotalPages = async () => {
      const res = await axios.get('/wp-json/wp/v2/posts');
      setTotalPages(res.headers['x-wp-totalpages']);
    }
    fetchTotalPages();
  }, [totalPages])

  return (
    <section className="blog-page">
      <div className="container blog-page__container">
        <h1 className="blog-page__heading">Blog</h1>
        <div className="blog-page__posts-container">
          <BlogPosts activePage={activePage} />
          {totalPages > 0 &&
            <BlogPagination activePage={activePage} setActivePage={setActivePage} totalPages={totalPages} />
          }
        </div>
      </div>
    </section>
  );
};

export default Excerpts;
