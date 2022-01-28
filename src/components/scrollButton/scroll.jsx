import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Button } from "react-bootstrap";
import "./scroll.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      setVisible(true);
    } else if (scrolled <= 50) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      id="myBtn"
      onClick={scrollToTop}
      style={{ display: visible ? "block" : "none" }}
    >
      <IconContext.Provider
        value={{
          color: "white",
          size: "25px",
        }}
      >
        <FaArrowCircleUp />
      </IconContext.Provider>
    </Button>
  );
};

export default ScrollButton;
