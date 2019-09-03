import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';

import Loading from '../../components/Loading/Loading.jsx';
import Button from '../../components/Button/Button.jsx';

import ErrorPage from '../ErrorPage/ErrorPage.jsx';

import './BlogPost.scss'

const BlogPost = ({ match, params }) => {
  const slug = match.params.slug;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      const res = await axios.get(`/wp-json/wp/v2/posts?slug=${slug}`);
      if (res.data && res.data.length) {
        setData(res.data);
      } else {
        setError(true);
      }
      setLoading(false);
    }

    console.log(match.params);

    fetchPost();
  }, [])

  if (error) {
    return <ErrorPage />
  }

  return (
    <section className="blog-post">
      <div className="container">
        {loading &&
          <Loading />
        }
        {data &&
          <React.Fragment>
            <div className="blog-post__back--top">
              <Link to="/blog">
                <Button icon="arrow-left" iconColor="#15171f" iconSize="1x" btnText="Back to Blog" btnStyle="blackOutline" btnSize="sm" />
              </Link>
            </div>
            <div className="blog-post__heading-container">
              <h1 className="blog-post__title">{data[0].title.rendered}</h1>
              <div className="blog-post__divider"></div>
              <div className="blog-post__date">{moment(data[0].date).format("MMM Do, YYYY")}</div>
            </div>
            <div className="blog-post__content" dangerouslySetInnerHTML={{ __html: data[0].content.rendered }} />
            <div className="blog-post__back--bottom">
              <Link to="/blog">
                <Button icon="arrow-left" iconColor="#15171f" iconSize="1x" btnText="Back to Blog" btnStyle="blackOutline" btnSize="sm" />
              </Link>
            </div>
          </React.Fragment>
        }
      </div>
    </section>
  );
};

export default BlogPost;