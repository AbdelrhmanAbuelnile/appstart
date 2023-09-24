import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showButton = scrollY > window.innerHeight * 0.2;
      setIsVisible(showButton);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 z-10 ${
        isVisible ? "block" : "hidden"
      } rounded-full p-2 bg-secondry hover:bg-fourth text-white hover:text-secondry focus:outline-none transition-all duration-300 `}
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon fontSize="large" />
    </button>
  );
};

export default ScrollToTopButton;
