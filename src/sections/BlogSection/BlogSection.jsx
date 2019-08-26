import React from "react";
import moment from "moment";

import "./BlogSection.scss";

import { useFetch } from "../../utils";

import BlogSectionContainer from "./BlogSectionContainer/BlogSectionContainer.jsx";
import BlogSectionContent from "./BlogSectionContent/BlogSectionContent.jsx";

const BlogSection = () => {
  const res = useFetch(`/wp-json/wp/v2/posts?per_page=1`, {});

  if (res.error) {
    return (
      <BlogSectionContainer>
        There was an error processing your request!
      </BlogSectionContainer>
    );
  }

  if (!res.response) {
    return <BlogSectionContainer>Loading...</BlogSectionContainer>;
  }

  const title = res.response[0].title.rendered;
  const content = res.response[0].content.rendered;
  const excerpt = res.response[0].excerpt.rendered;
  const date = moment(res.response[0].date).format("MMM Do, YYYY");

  const excerptModified =
    excerpt.replace("[&hellip;]</p>", "...<span>Read More</span></p>") ||
    excerpt.replace("</p>", "</p>");

  return (
    <BlogSectionContainer>
      <BlogSectionContent title={title} date={date} content={excerptModified} />
    </BlogSectionContainer>
  );
};

export default BlogSection;
