import "./mobileNavBar.css";
import { useEffect, useState } from "react";
export default function MobileNavBar() {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    {
      text: "Main",
      to: "/#main",
    },
    {
      text: "New Arrival",
      to: "/#new-arrivals",
    },
    {
      text: "Categories",
      to: "/#categories",
    },
    {
      text: "Reviews",
      to: "/#reviews",
    },
  ];
  useEffect(() => {
    window.addEventListener("scroll", handlePageScroll);
    if (window.pageYOffset > 1) {
      setScrolled(true);
    }
  }, []);

  const handlePageScroll = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    }
    if (window.scrollY <= 1) {
      setScrolled(false);
    }
  };

  return (
    <div className={`navigation  `}>
      <input
        type="checkbox"
        id="navi-toggle"
        className="navigation__checkbox"
        placeholder=""
        onClick={() => setShowNav(!showNav)}
        checked={!showNav ? false : true}
      />
      <label
        htmlFor="navi-toggle"
        className={`navigation__button ${
          scrolled ? "navigation__button__scrolled" : null
        }`}
      >
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {links.map((link, index) => {
            return (
              <li
                className="navigation__item"
                key={index}
                onClick={() => setShowNav(false)}
              >
                <a href={`${link.to}`} className="navigation__link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
