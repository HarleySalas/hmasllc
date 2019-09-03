import React, { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

import './BlogPosts.scss';

import Loading from '../../../../components/Loading/Loading.jsx';

const BlogPosts = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/wp-json/wp/v2/posts?page=${props.activePage}`);
      setData(res.data);
    }
    fetchData();
  }, [props.activePage])

  if (!data) {
    return <Loading />;
  }

  return (
    data.map((data, index) => {
      const title = data.title.rendered;
      const id = data.id;
      const date = moment(data.date).format("MMM Do, YYYY");
      const excerpt = data.excerpt.rendered;
      const excerptModified =
        excerpt.replace("[&hellip;]</p>", "...<span>Read More</span></p>") ||
        excerpt.replace("</p>", "</p>");
      const slug = data.slug
      return (
        <Link to={`/${slug}`} key={id}>
          <div className="blog-posts">
            <article className="blog-posts__excerpt">
              <div className="blog-posts__title-container">
                <h2 className="blog-posts__title">{title}</h2>
                <div className="blog-posts__title-divider"></div>
                <div className="blog-posts__title-date">{date}</div>
              </div>
              <p className="blog-posts__content" dangerouslySetInnerHTML={{ __html: excerptModified }} />
            </article>
          </div>
        </Link>
      )
    })
  );
};

export default BlogPosts;
