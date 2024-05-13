import "./about.css";
import { pho3 } from "../../assets/index";
function About() {
  return (
    <div className=" about__class" id="about">
      <div className="about-1">
        <div className="box">
          <div className="content">
            <img
              src="https://i.pinimg.com/236x/44/9d/ad/449dada7a0411061e603af33af18f05d.jpg"
              alt=""
              style={{ width: "280px" }}
            />
            <h2>Samuel web developer</h2>
          </div>
        </div>
      </div>
      <div className="about-info">
        <h3>About me</h3>
        <h2>A dedicated Front-end Developer from Ethiopia</h2>
        <p>
          As a skilled web developer proficient in{" "}
          <strong>HTML, CSS, and JavaScript,</strong> I craft visually appealing
          front-end experiences. My expertise extends to{" "}
          <strong>integrating APIs with frameworks like React,</strong> while my
          <strong> proficiency in Tailwind CSS</strong> ensures elegant layouts.
          With a strong PHP backend, I build reliable full-stack systems. My
          insatiable curiosity and attention to detail drive me to consistently
          deliver exceptional work.
        </p>
      </div>
    </div>
  );
}

export default About;
