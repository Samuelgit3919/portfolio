import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-scroll";

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
        <div className="menu">
          <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
            <li className="nav-item">
              <Link
                onClick={() => setIsOpen(false)}
                to="home"
                spy={true}
                smooth={true}
              >
                <a href="#home">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => setIsOpen(false)}
                to="about"
                spy={true}
                smooth={true}
              >
                <a href="#home">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => setIsOpen(false)}
                to="project"
                spy={true}
                smooth={true}
              >
                <a href="#home">Project</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={() => setIsOpen(false)}
                to="contact"
                spy={true}
                smooth={true}
              >
                <a href="#home">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
