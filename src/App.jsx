import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import { Box } from "@mui/material";
import PhotoSlider from "./components/PhotoSlider";

function App() {
  return (
    <Box>
      <Hero />
      <About />
      <Services />
      <Benefits />
      <PhotoSlider />
      <Contact />
    </Box>
  );
}

export default App;
