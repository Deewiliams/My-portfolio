import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { Header } from "./component/header/Header";
import { Skills } from "./pages/Skills/Skills";
import { Footer } from "./pages/Footer/Footer";
// import { Project } from "./pages/Project/Project";
import { AboutMe } from "./pages/AboutUs/AboutMe";
import { Personality } from "./pages/Personality/Personality";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Header />
      <div id="landing">
        <LandingPage />
      </div>
      <div id="about_me">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>

      <div id="personality">
        <Personality />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </MantineProvider>
  );
}

export default App;
