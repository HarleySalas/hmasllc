import React, { useState, useEffect } from "react";

const useAnimateObserver = ({ itemRef, animateDelay }) => {
  const [animated, setAnimated] = useState(false);

  const options = {
    rootMargin: "10%",
    threshold: 0.45
  };

  const animateItem = (item, observer) => {
    const node = item[0];
    if (node.isIntersecting) {
      setTimeout(animateDelay => {
        setAnimated(true);
      }, animateDelay);
    } else {
      setAnimated(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(animateItem, options);
    const item = itemRef.current;

    if (item) {
      observer.observe(item);

      if (
        !("IntersectionObserver" in window) ||
        !("IntersectionObserverEntry" in window) ||
        !("isIntersecting" in window.IntersectionObserverEntry.prototype)
      ) {
        setAnimated(true);
      }
    }
    return () => {
      observer.disconnect();
    };
  }, [itemRef, animateDelay]);

  return animated;
};

export default useAnimateObserver;
