

import pro1 from "../media/pro1.png";
import pro2 from "../media/pro2.png";
import vans from "../media/vans.png";
import { FaGithub } from "react-icons/fa6";
import { VscLiveShare } from "react-icons/vsc";



// const data = [
//   {
//     title: "1. GPT-3",
//     description:
//       "GPT-3, short for Generative Pre-trained Transformer 3, is a state-of-the-art language model developed by OpenAI. It belongs to a family of deep learning models known as transformers, specifically designed for natural language processing tasks. GPT-3 is the third iteration of the GPT series, following GPT and GPT-2.",
//     img: pro2,
//     gitCode: "https://github.com/Samuelgit3919/GPT-3",
//     buttonHref: "https://gpt-3-sooty-nine.vercel.app/",
//     demoEmail: "-",
//     demoPassword: "-",
//   },
//   {
//     title: "2. Online Restaurant Booking",
//     description:
//       "Created an engaging online restaurant platform that featured a menu an atmosphere, and the ability to make reservations. Patrons have the ability to sample a variety of cuisines, easily schedule reservations, and virtually experience the ambience of the restaurant. Showcasing culinary quality and customer happiness as focus elements, the website's adaptable design allows excellent viewing on all devices.",
//     img: pro1,
//     gitCode: "https://github.com/Samuelgit3919/GPT-3",
//     buttonHref: "https://samrestorant.netlify.app/",
//     demoEmail: "-",
//     demoPassword: "-",
//   },
//   {
//     title: "2.Vans-renting",
//     description:
//       "Online van renting offers convenient and flexible solutions for individuals and businesses to easily rent vans for various needs like moving, outings, or events. Users can browse, select, and book vans through online platforms, enjoying transparent pricing, secure payments, and optional add-ons. With access to a wide range of vehicles and flexible scheduling, it's an ideal choice for personal and business transportation needs.",
//     img: vans,
//     gitCode: "https://github.com/Samuelgit3919/Vans-renting",
//     buttonHref: "https://vans-renting.vercel.app/",
//     demoEmail: "demo@d.com",
//     demoPassword: "demo123",
//   },
// ];
function Projects() {

  return (

    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div>
              <div className="projects-grid">
                <div className="image_class">
                  <img className="pro__img" src={vans} alt="" />

                </div>
                <div className="pro__text">
                  <h3>Van Renting</h3>
                  <p style={{ color: "black", lineHeight: "28px" }}>Online van renting offers convenient and
                    flexible solutions for individuals and businesses to easily rent
                    vans for various needs like moving, outings, or events. Users can browse, select, and book vans through online platforms,
                    enjoying transparent pricing, secure payments, and optional add-ons. With access to a wide range of vehicles and flexible scheduling,
                    it's an ideal choice for personal and business transportation needs.
                  </p>
                  <div>
                    <a href='#'>
                      <span style={{ fontSize: "24px", color: "black", margin: "1rem", padding: "1rem" }}>code</span>
                      <FaGithub style={{ fontSize: "24px" }} />
                    </a>
                    <a href="#">
                      <span style={{ fontSize: "24px", color: "black", margin: "1rem", padding: "1rem" }}>live demo</span>
                      <VscLiveShare style={{ fontSize: "3rem", margin: "0.5rem", justifyContent: "center" }} />
                    </a>
                  </div>
                </div>

                {/* second project */}
                <div className="image_class">
                  <img className="pro__img" src={pro2} alt="" />
                </div>
                <div className="pro__text">
                  <h3>GPT-3</h3>
                  <p style={{ color: "black", lineHeight: "28px" }}>GPT-3, short for Generative Pre-trained Transformer 3, is a state-of-the-art language model
                    developed by OpenAI. It belongs to a family of deep learning models known as transformers, specifically designed for natural language processing
                    tasks. GPT-3 is the third iteration of the GPT series, following GPT and GPT-2.
                  </p>
                  <div>
                    <a href='#'>
                      <span style={{ fontSize: "24px", color: "black", margin: "1rem", padding: "1rem" }}>code</span>
                      <FaGithub style={{ fontSize: "24px" }} />
                    </a>
                    <a href="#">
                      <span style={{ fontSize: "24px", color: "black", margin: "1rem", padding: "1rem" }}>live demo</span>
                      <VscLiveShare style={{ fontSize: "3rem", margin: "0.5rem", justifyContent: "center" }} />
                    </a>
                  </div>
                </div>

                {/* third project */}
                <div className="image_class">
                  <img className="pro__img" src={pro1} alt="" />
                  {/* <button className=""></button> */}
                </div>
                <div className="pro__text">
                  <h3>Online Restaurant Booking</h3>
                  <p style={{ color: "black", lineHeight: "28px" }}>
                    Created an engaging online restaurant platform that featured a menu an atmosphere, and the ability
                    to make reservations. Patrons have the ability to sample a variety of cuisines, easily schedule reservations,
                    and virtually experience the ambience of the restaurant. Showcasing culinary quality and customer happiness
                    as focus elements, the website's adaptable design allows excellent viewing on all devices.

                  </p>
                  <div>
                    <a href='#'>
                      <span style={{ fontSize: "24px", color: "black", margin: "1rem", padding: "1rem" }}>code</span>
                      <FaGithub style={{ fontSize: "24px" }} />
                    </a>
                    <a href="#">
                      <span style={{ fontSize: "24px", color: "black", margin: "1rem", padding: "1rem" }}>live demo</span>
                      <VscLiveShare style={{ fontSize: "3rem", margin: "0.5rem", justifyContent: "center" }} />
                    </a>
                  </div>
                </div>


              </div>
            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>
  );
}

export default Projects;

