import "../dist/styles.css";
import Waving from "../media/waving.1bae5fcfb51082b5c2b4.png";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import profile from "../media/profile.jpg"

const skillsIcons = [
    {
        img: "https://skillicons.dev/icons?i=html,css",
        id: 1,
    },
    {
        img: "https://skillicons.dev/icons?i=js,react",
        id: 2,
    },
    {
        img: "https://skillicons.dev/icons?i=tailwind,bootstrap",
        id: 3,
    },
    {
        img: "https://skillicons.dev/icons?i=php",
        id: 4,
    },
];

function Hero() {
    return (
        <>
            <section id="home" className="hero">
                <div className="container">
                    <div className="content">
                        <div className="hero-main">
                            <div className="hero-text">
                                <h1>Front-End React Developer</h1>
                                <img src={Waving} alt="waving_hand" />
                                <p>
                                    Hi, I'm <strong>Samuel</strong>  Habtamu. A passionate Front-end React
                                    Developer. 📍
                                </p>
                                <span>
                                    <a
                                        aria-label="linkedin"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://www.linkedin.com/in/sami3919/"
                                    >
                                        <IconBrandLinkedin width={32} height={32} />
                                    </a>
                                    <a
                                        aria-label="github"
                                        rel="noreferrer"
                                        target="_blank"
                                        href="https://github.com/Samuelgit3919"
                                    >
                                        <IconBrandGithub width={32} height={32} />
                                    </a>
                                </span>
                            </div>

                            <div className="hero-img"></div>
                        </div>

                        {/*  */}
                        <div className="skills">
                            <p>Tech Stack</p>
                            <div className="logos">
                                <ul>
                                    {skillsIcons.map((icon) => (
                                        <li key={icon.id}>
                                            <img src={icon.img} alt="skill-icon" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
