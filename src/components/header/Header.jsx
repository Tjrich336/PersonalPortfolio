import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  /* ===================== TOGGLE MENU ===================== */
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollToSection = (event) => {
      event.preventDefault();
      setMenuOpen(false);

      const targetId = event.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top;
        const headerHeight = document.querySelector(".header").clientHeight;
        const scrollPosition = offsetTop + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll(".nav__link");
    links.forEach((link) => {
      link.addEventListener("click", handleScrollToSection);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScrollToSection);
      });
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">Richardson</a>

        <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => setMenuOpen(false)}></i>
        </div>

        <div className="nav__toggle" onClick={() => setMenuOpen(!isMenuOpen)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;