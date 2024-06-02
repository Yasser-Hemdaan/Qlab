// import React from "react";

import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      {" "}
      <div className="scroll-to-top">
        {isVisible && (
          <button onClick={scrollToTop}>
            {/* &#8679; Unicode arrow up symbol */}
            <i className="fa-solid fa-arrow-turn-up"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default ScrollToTop;
