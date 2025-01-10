import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { Header } from "./component/header/Header";

function App() {
  return <MantineProvider defaultColorScheme="dark">
    <Header />
    <LandingPage />
  </MantineProvider>;
}

export default App;
