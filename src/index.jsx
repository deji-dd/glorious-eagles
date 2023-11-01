import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import Header from "./components/Header.jsx";
import Home from "./pages/Desktop/Home.jsx";
import "./style.css";
import Services from "./pages/Desktop/Services.jsx";
import About from "./pages/Desktop/About.jsx";
import Footer from "./components/Footer.jsx";
import How from "./pages/Desktop/How.jsx";
import ContactUs from "./pages/Desktop/ContactUs.jsx";
import Socials from "./components/Socials.jsx";
import Career from "./pages/Desktop/Career.jsx";
import { useEffect, useState } from "preact/hooks";
import MobileHeader from "./components/MobileHeader.jsx";
import MobileHome from "./pages/Mobile/MobileHome.jsx";
import MobileFooter from "./components/MobileFooter.jsx";
import MobileAbout from "./pages/Mobile/MobileAbout.jsx";
import MobileContactUs from "./pages/Mobile/MobileContactUs.jsx";
import MobileHow from "./pages/Mobile/MobileHow.jsx";
import MobileServices from "./pages/Mobile/MobileServices.jsx";
import MobileCareer from "./pages/Mobile/MobileCareer.jsx";

export function App() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return size > 481 ? (
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
          {/* <Route path="/career" component={Career} /> */}
          <Route default component={Home} />
        </Router>
      </main>
      <Footer />
    </LocationProvider>
  ) : (
    <LocationProvider>
      <MobileHeader />
      <main style={{ paddingTop: "5rem" }}>
        <Router>
          <Route path="/" component={MobileHome} />
          <Route path="/about-us" component={MobileAbout} />
          <Route path="/contact-us" component={MobileContactUs} />
          <Route path="/how-we-work" component={MobileHow} />
          <Route path="/services" component={MobileServices} />
          {/* <Route path="/career" component={MobileCareer} /> */}
          <Route default component={MobileHome} />
        </Router>
      </main>
      <MobileFooter />
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
