import { useState, useEffect } from "react";

const useScrollSpy2 = (sectionIds, INITIAL_STATE) => {
  // const sectionNames = sectionIds.map(el => el.slice(1));
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
    console.log(queriedIds);

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
  }, []);

  return activeSection;
};

export default useScrollSpy2;
