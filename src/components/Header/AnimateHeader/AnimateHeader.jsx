import React, { useEffect, useState } from "react";
import "./AnimateHeader.scss";

const AnimateHeader = props => {
  const [shouldRender, setRender] = useState(false);
  const [hidden, setHidden] = useState(false);

  const options = {
    threshold: 0.45
  };

  const animateLogo = (homePage, observer) => {
    if (homePage[0].boundingClientRect.y < 0) {
      setHidden(false);
      setRender(true);
    } else {
      setHidden(true);
    }
  };

  const onAnimationEnd = observer => {
    if (hidden) setRender(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(animateLogo, options);
    const homePage = document.getElementById("homePage");

    setTimeout(() => {
      if (homePage) {
        observer.observe(homePage);
      }
    }, 500);

    setTimeout(() => {
      if (!homePage) {
        setRender(true);
        setHidden(false);
        observer.disconnect(homePage);
      }
    }, 100);

    return () => {
      observer.disconnect(homePage);
    };
  }, [props.nav]);

  return (
    shouldRender && (
      <div
        className={`animate-header ${
          !hidden ? props.animatedClass : props.hiddenClass
          }`}
        onAnimationEnd={onAnimationEnd}
      >
        {props.children}
      </div>
    )
  );
};

export default AnimateHeader;
