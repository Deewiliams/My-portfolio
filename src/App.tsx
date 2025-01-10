import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { LandingPage } from "./pages/landingPage/LandingPage";

function App() {
  return <MantineProvider defaultColorScheme="dark">
    <LandingPage />
  </MantineProvider>;
}

export default App;
