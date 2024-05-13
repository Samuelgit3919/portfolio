import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import FindMe from "./components/Findme/FindMe";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Project />
      <FindMe />
    </>
  );
}

export default App;
