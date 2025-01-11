import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { Header } from "./component/header/Header";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { Skills } from "./pages/Skills/Skills";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Header />
      <LandingPage />
      <AboutUs />
      <Skills />
    </MantineProvider>
  );
}

export default App;
