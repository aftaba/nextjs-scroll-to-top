import React, { useEffect, useState } from "react";

const ScrollToTop = ({
  showBelow = 200,
  icon = "↑",
  style = {},
  className = "",
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > showBelow);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showBelow]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className={className}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 1000,
          padding: "10px 15px",
          borderRadius: "50%",
          fontSize: "20px",
          backgroundColor: "#333",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          ...style,
        }}
      >
        {icon}
      </button>
    )
  );
};

export default ScrollToTop;

