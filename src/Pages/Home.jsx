
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Project.jsx";
import Contact from "../components/Contact";
import Footer from "../components/Footer.jsx";


function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
