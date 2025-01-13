import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { Header } from "./component/header/Header";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Skills } from "./pages/Skills/Skills";
import { Footer } from "./pages/Footer/Footer";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Header />
      <LandingPage />
      <AboutUs />
      <Skills />
      <Footer />
    </MantineProvider>
  );
}

export default App;
