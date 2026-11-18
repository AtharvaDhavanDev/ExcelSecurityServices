import Navbar from "./components/layout/Navbar";
import HeroSlider from "./components/home/HeroSlider";
import Home from "./sections/Home";
import Services from "./sections/Services";
import AboutUs from "./sections/AboutUs";
import IndustriesServed from "./sections/IndustriesServed";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Home />
      <Services />
      <AboutUs />
      <IndustriesServed />
      <Contact />
      <Footer />

      {/* Remaining sections */}
    </>
  );
}

export default App;