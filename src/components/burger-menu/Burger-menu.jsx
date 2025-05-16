import { useState } from "react";
import "./Burger-menu.scss";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Open Button */}
      <span
        style={{ fontSize: "30px", cursor: "pointer" }}
        onClick={() => setIsOpen(true)}
      >
        &#9776; Open
      </span>

      {/* Overlay Menu */}
      <div className={`overlay ${isOpen ? "show" : ""}`}>
        <a className="closebtn" onClick={() => setIsOpen(false)}>
          &times;
        </a>
        <div className="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}
