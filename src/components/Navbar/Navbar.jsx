import { useState } from "react";
import Logo from "../../assets/food-logo.png";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import DarkMode from "./DarkMode";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap nav-row">
        <a href="#home" className="brand" aria-label="Foodie home">
          <img src={Logo} alt="" width="40" height="40" />
          foodie<span>.</span>
        </a>
        <nav
          id="site-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#services" onClick={() => setOpen(false)}>
            Our menu
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About us
          </a>
          <a href="#questions" onClick={() => setOpen(false)}>
            FAQs
          </a>
        </nav>
        <div className="nav-actions">
          <DarkMode />
          <a className="button small" href="#services">
            Explore menu <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            className="icon-button menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-controls="site-navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
