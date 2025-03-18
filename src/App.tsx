import Header from "./components/Header";
import Layout from "./layouts/Layout";
import "./App.css";
import "./assets/mdi/css/materialdesignicons.min.css";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Background3D from "./components/Background3D";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Accueil />
        <About />
        <Service />
        <Project />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
