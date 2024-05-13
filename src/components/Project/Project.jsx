import "./project.css";
import { FaCode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import data from "./data";
function Project() {
  return (
    <div className=" project-class" id="project">
      <h3>PORTFOLIO</h3>
      <h2>
        Each project is a unique piece of development <FaCode />
      </h2>
      <div>
        {data.map((item, index) => (
          <div key={index} className="project-description">
            <div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>

            <div className="projects">
              <img src={item.img} alt="images" />
              <a href={item.gitCode} target="_black">
                Code <FaGithub />
              </a>
              <button>
                <a href={item.buttonHref} target="_blank">
                  see project
                </a>
              </button>
              <p>demo Email:{item.demoEmail}</p>
              <p>demo Password:{item.demoPassword}</p>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
