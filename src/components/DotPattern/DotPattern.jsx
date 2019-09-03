import React from "react";

import "./DotPattern.scss";

const DotPattern = props => {
  return (
  <div className={`dot-pattern
    ${props.dotColor === 'black' && 'dot-pattern--black'}
    ${props.dotColor === 'white' && 'dot-pattern--white'}
    ${props.addClass}`} 
  />
  );
};

export default DotPattern;
