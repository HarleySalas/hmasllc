import React, { useEffect, useState } from "react";
import "./AnimateLogo.scss";

const AnimateLogo = ({ nav, children }) => {
  const [shouldAnimate, setAnimate] = useState(false);

  const options = {
    threshold: 0.45
  };

  const animateLogo = (homePage, observer) => {
    if (homePage[0].boundingClientRect.y < 0) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(animateLogo, options);
    const homePage = document.getElementById("homePage");

    setTimeout(() => {
      if (homePage) {
        observer.observe(homePage);
      }
    }, 330);

    setTimeout(() => {
      if (!homePage) {
        setAnimate(true);
      }
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, [nav]);

  return (
    <div
      className={`animate-logo ${
        shouldAnimate ? "animate-logo__animate" : "animate-logo__hidden"
        }`}
    >
      {children}
    </div>
  );
};

export default AnimateLogo;
