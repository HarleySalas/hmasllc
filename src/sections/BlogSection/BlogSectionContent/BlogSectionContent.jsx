import React from "react";

import "./BlogSectionContent.scss";

const BlogSectionContent = props => {
  return (
    <div className="blog__post-container">
      <div className="blog__title-container">
        <h3 className="blog__title">{props.title}</h3>
        <div className="blog__title-divider" />
        <div className="blog__title-date">{props.date}</div>
      </div>
      <div
        className="blog__content"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  );
};

export default BlogSectionContent;
