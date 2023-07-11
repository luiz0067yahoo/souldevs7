//@ts-nocheck
import React, { useState, useEffect } from "react";
export const GoTop = () => {
  const [is_visible, setVisible] = useState(false);

  function toggleVisibility() {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", function (e) {
      toggleVisibility();
    });
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="scroll-to-top">
        {is_visible && <i className="pe-7s-angle-up" onClick={scrollToTop}></i>}
      </div>
    </>
  );
};

export default GoTop;
