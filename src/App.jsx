import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Links from "./components/Links";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="m-16">
        <Home />
        <About />
        <Projects />
        <Technologies />
        <Links />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
