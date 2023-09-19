import Home from "./Home";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Contact from "./Contact";
import Projects from "./Projects";
import Achievment from "./Acheivment";
import AboutMe from "./AboutMe";
import Stages from "./Stages";
import Skills from "./Skills";

function Homepage() {
  return (
    <>
      <Home />

      <AboutMe />
      <Testimonial />
      <Contact />

      <Stages />
      <Skills />

      <Projects />
      <Achievment />

      <Footer />
    </>
  );
}
export default Homepage;
