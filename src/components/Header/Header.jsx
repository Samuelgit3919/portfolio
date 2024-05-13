import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import "./header.css";
import { pho2 } from "../../assets";

function Header() {
  return (
    <div className=" header-container" id="home">
      <div className="header-container-info">
        <div className="header-container-1">
          <img src={pho2} alt="photo" />
        </div>
        <div className="header-container-2">
          <h1>Front-End React Developer👋</h1>
          <p>
            Hi, I'm <span>Samuel</span>. A passionate Front-end React.js
            Developer
          </p>
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className=" header-container-3">
        <h3>Tech</h3>
        <span>|</span>
        <FaHtml5 style={{ color: "red" }} />
        <FaCss3Alt style={{ color: "blue" }} />
        <IoLogoJavascript />
        <FaReact style={{ color: "#26C6DC" }} />
        <RiTailwindCssFill style={{ color: "#26C6DC" }} />
        <FaPhp />
      </div>
    </div>
  );
}

export default Header;
