import React from "react";

import Button from "../../../components/Button/Button.jsx";

import "./BlogSectionContainer.scss";

const BlogSectionContainer = props => {
  return (
    <section className="blog">
      <div className="container container--padding-3">
        <h2 className="blog__heading">Most Recent Blog Post</h2>
        {props.children}
        <Button btnText="See All Blog Posts" btnStyle="primary" btnSize="md" />
      </div>
    </section>
  );
};

export default BlogSectionContainer;
