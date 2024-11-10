import React, { useState, useEffect, useRef } from "react";
import "./LanguageSwitch.scss";
import { useLanguage } from "../../shared/hooks/useLanguage";

export const LanguageSwitch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [liVisible, setLiVisible] = useState(false);
  const { selectedLanguage, languages, changeLanguage } = useLanguage();
  const anchorRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      setLiVisible(true);
    } else {
      const timer = setTimeout(() => setLiVisible(false), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleLanguageChange = (code: string) => {
    changeLanguage(code);
    setIsOpen(false);
    anchorRef.current?.blur();
  };

  const handleMouseLeave = () => {
    if (!isOpen) {
      anchorRef.current?.classList.remove("hover");
    }
  };

  const handleMouseEnter = () => {
    if (!isOpen) {
      anchorRef.current?.classList.add("hover");
    }
  };

  return (
    <div className={`language_menu ${isOpen ? "active" : ""}`}>
      <button
        className={`toggle ${isOpen ? "closed" : ""}`}
        ref={anchorRef}
        onClick={toggleMenu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {selectedLanguage.abbreviation}
      </button>
      <ul>
        {languages.map((language, index) => (
          <li
            key={language.code}
            className={`nav-icon ${liVisible ? "visible" : ""}`}
            style={{ "--i": index } as React.CSSProperties}
          >
            <button
              rel="noopener noreferrer"
              onClick={() => handleLanguageChange(language.code)}
            >
              {language.abbreviation}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
