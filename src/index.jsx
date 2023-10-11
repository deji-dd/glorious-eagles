import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/_404.jsx";
import "./style.css";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";

export function App() {
  return (
    <LocationProvider>
      <Header />
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about-us" component={About} />
          <Route default component={NotFound} />
        </Router>
      </main>
      <Footer />
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
