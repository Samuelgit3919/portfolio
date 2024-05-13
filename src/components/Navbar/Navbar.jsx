import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1 style={{ fontFamily: "Roboto" }}>Sam dev</h1>
        </div>
        <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#project">Project</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
