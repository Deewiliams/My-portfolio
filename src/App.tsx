import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { Header } from "./component/header/Header";
import { Skills } from "./pages/Skills/Skills";
import { Footer } from "./pages/Footer/Footer";
import { Project } from "./pages/Project/Project";
import { AboutMe } from "./pages/AboutUs/AboutMe";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Header />
      <div id="landing">
        <LandingPage />
      </div>
      <div id="aboutMe">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </MantineProvider>
  );
}

export default App;
