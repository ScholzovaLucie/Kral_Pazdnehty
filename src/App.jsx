import Hero from "./components/Hero";
import InfoStrip from "./components/InfoStrip";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box component="main" sx={{ overflow: "hidden" }}>
      <Hero />
      <InfoStrip />
      <About />
      <Gallery />
      <Services />
      <Benefits />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
