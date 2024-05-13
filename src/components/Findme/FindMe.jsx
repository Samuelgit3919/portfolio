import "./FindMe.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
function FindMe() {
  return (
    <div className="find-me">
      <div>
        <h2>Hit me up! without hesitate</h2>
        <div>
          <h3>
            <span>location:</span>&nbsp;&nbsp; Adama, Oromia,Ethiopia
          </h3>
        </div>
        <div>
          <span>
            <MdEmail />
            &nbsp;{" "}
          </span>
          <a href="mail:saminew3919@gmail.com">saminew3919@gmail.com</a>
        </div>
        <span>
          <FaPhoneAlt />
        </span>

        <a href="tel:5554280940">&nbsp;&nbsp; +251939191959</a>
        <div className="social-media">
          <FaLinkedin />
          <BsTelegram />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default FindMe;
