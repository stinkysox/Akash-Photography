import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./ScrollButton.css";

const ScrollButton = () => {
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopArrow(window.scrollY > 100);
      setShowBottomArrow(window.scrollY < 100);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-buttons-container">
      {showTopArrow && (
        <div
          className="scroll-button-top"
          onClick={scrollToTop}
          title="Go to Top"
        >
          <FaArrowUp size={28} />
        </div>
      )}
      {showBottomArrow && (
        <div
          className="scroll-button-bottom"
          onClick={scrollToBottom}
          title="Go to Bottom"
        >
          <FaArrowDown size={28} />
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
