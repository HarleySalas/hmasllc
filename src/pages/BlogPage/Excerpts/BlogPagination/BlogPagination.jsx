import React, { useState, useEffect } from "react";

import './BlogPagination.scss';

const BlogPagination = (props) => {
  const [initialRender, setInitialRender] = useState(true);
  const [pagination, setPagination] = useState(null);
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    if (props.totalPages && initialRender) {
      getPaginateArray(props.activePage);
      setInitialRender(false);
    }

    if (props.activePage !== activeLink) {
      setActiveLink(props.activePage)
      getPaginateArray(props.activePage)
    }
  }, [props.totalPages, props.activePage, pagination])

  function getPaginateArray(current, { min = 1, total = props.totalPages, length = 5 } = {}) {
    if (length > total) length = total;

    let start = current - Math.floor(length / 2);
    start = Math.max(start, min);
    start = Math.min(start, min + total - length);

    return setPagination(Array.from({ length: length }, (el, i) => start + i));
  }

  const paginate = (target) => {
    props.setActivePage(target);
  }

  return (
    <ul className="pagination">
      {pagination &&
        pagination.map((num, index) =>
          <li
            key={index}
            onClick={() => paginate(`${num}`)}
            className={`pagination__number ${props.activePage === num && 'pagination__number--active'} ${props.activePage === `${num}` && 'pagination__number--active'}`}
          >
            {num}
          </li>
        )}
    </ul>
  );
};

export default BlogPagination;
