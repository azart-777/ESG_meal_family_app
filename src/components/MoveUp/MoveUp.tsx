import React, { useEffect, useRef, useState } from "react";
import "./MoveUp.scss";

export const MoveUp: React.FC = () => {
  const scrollBtnRef = useRef<HTMLDivElement>(null);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollBtnRef.current) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const offset = 180;

        if (window.scrollY > 700) {
          scrollBtnRef.current.classList.remove("move-up-arrow--hidden");
        } else {
          scrollBtnRef.current.classList.add("move-up-arrow--hidden");
        }

        if (scrollPosition >= documentHeight - offset) {
          setIsBottom(true);
        } else {
          setIsBottom(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="move-up-arrow"
      className={`move-up-arrow ${isBottom ? "move-up-arrow--bottom" : ""} move-up-arrow--hidden`}
      ref={scrollBtnRef}
      onClick={handleClick}
    ></div>
  );
};

