import React, { useRef } from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Button/Button.jsx";

import "./BlogSectionContainer.scss";

import { useAnimateObserver } from '../../../utils';

const BlogSectionContainer = props => {
  const ref = useRef(null);

  const animated = useAnimateObserver({
    itemRef: ref
  });

  return (
    <section className={`blog ${animated && 'blog--animated'}`} ref={ref}>
      <div className="container container--padding-3 blog__container">
        <h2 className="blog__heading">Most Recent Blog Post</h2>
        {props.children}
        <Link to="/blog">
          <Button
            btnText="See All Blog Posts"
            btnStyle="primary"
            btnSize="md"
          />
        </Link>
      </div>
    </section>
  );
};

export default BlogSectionContainer;
