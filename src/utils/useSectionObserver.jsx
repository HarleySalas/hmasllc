import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const useSectionObserver = (sectionIds, INITIAL_STATE, navigate) => {
  const [activeSection, setActiveSection] = useState(INITIAL_STATE);

  const options = {
    threshold: 0.45
  };

  const changeActiveSection = (sections, observer) => {
    sections.forEach(section => {
      const id = section.target.getAttribute("id");

      if (section.isIntersecting && section.intersectionRatio >= 0.45) {
        setActiveSection(activeSection => ({
          ...activeSection,
          [id]: true
        }));
      }

      if (!section.isIntersecting) {
        setActiveSection(activeSection => ({
          ...activeSection,
          [id]: null
        }));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(changeActiveSection, options);
    const queriedIds = document.querySelectorAll(sectionIds);

    if (queriedIds) {
      queriedIds.forEach(section => {
        observer.observe(section);
      });
    }

    return () => {
      queriedIds.forEach(section => {
        observer.disconnect(section);
      });
    };
  }, [navigate]);

  return activeSection;
};

export default useSectionObserver;
