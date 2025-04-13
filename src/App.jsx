import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import useAnalytics from "./hooks/useAnalytics";
import SocialIcons from "./components/SocialIcons";

export default function App() {
  useAnalytics();

  return (
    <BrowserRouter>
      <Layout>
        <SocialIcons />
        <Hero />
        <Projects />
        <Contact />
      </Layout>
    </BrowserRouter>
  );
}
