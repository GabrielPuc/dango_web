import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Dango 🍡
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/hiragana" state={{contentType: "hiragana"}}>Hiragana</NavLink>
        </li>
        <li>
          <NavLink to="/katakana" state={{contentType: "katakana"}}>Katakana</NavLink>
        </li>
        <li>
          <NavLink to="/dates" state={{contentType: "dates"}}>Dates</NavLink>
        </li>
        <li>
          <NavLink to="/numbers" state={{contentType: "numbers"}}>Numbers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

function refreshPage() {
  window.location.reload(false);
}