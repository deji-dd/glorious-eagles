import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/_404.jsx";
import "./style.css";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";
import How from "./pages/How.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Socials from "./components/Socials.jsx";
import Career from "./pages/Career.jsx";

export function App() {
  return (
    <LocationProvider>
      <Socials />
      <Header />
      <main style={{ paddingTop: "5.3125rem" }}>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about-us" component={About} />
          <Route path="/how-we-work" component={How} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/career" component={Career} />
          <Route default component={NotFound} />
        </Router>
      </main>
      <Footer />
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
