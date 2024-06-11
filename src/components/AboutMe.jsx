import AboutImg from "../media/about-img.62b47e7f183d4b4e9feb.png"
// import RoundedText from "../images/text2.svg";
import WorkingEmoji from "../media/working-emoji.c5325f52b5be329995a5.png";

function AboutMe() {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="about-content">
                        <div className="img-side">
                            <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
                            <img src={AboutImg} alt="mee" className="img-side__main-img" />
                            <span>
                                {/* <img src={RoundedText} alt="text" /> */}
                            </span>
                        </div>
                        <div className="text-side">
                            <h3>About me</h3>
                            <h4>
                                Front-end Developer 📍
                            </h4>
                            <p>
                                Hey, my name is Samuel, and I'm a Frontend Developer. My passion
                                is to create and develop a clean UI/UX for my users.
                                <br />
                                <br />
                                My main stack currently is React.js in combination with
                                Tailwind CSS or Bootstrap CSS.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;
