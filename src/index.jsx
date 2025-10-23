import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import "./style.css";
import React from "react";

// Components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MobileHeader from "./components/MobileHeader.jsx";
import MobileFooter from "./components/MobileFooter.jsx";
import Socials from "./components/Socials.jsx";

// Lazy load pages (Desktop)
const Home = lazy(() => import("./pages/Desktop/Home.jsx"));
const Services = lazy(() => import("./pages/Desktop/Services.jsx"));
const About = lazy(() => import("./pages/Desktop/About.jsx"));
const How = lazy(() => import("./pages/Desktop/How.jsx"));
const ContactUs = lazy(() => import("./pages/Desktop/ContactUs.jsx"));
const Career = lazy(() => import("./pages/Desktop/Career.jsx"));
const IntakeForm = lazy(() => import("./pages/Desktop/IntakeForm.jsx"));

// Lazy load pages (Mobile)
const MobileHome = lazy(() => import("./pages/Mobile/MobileHome.jsx"));
const MobileAbout = lazy(() => import("./pages/Mobile/MobileAbout.jsx"));
const MobileContactUs = lazy(
  () => import("./pages/Mobile/MobileContactUs.jsx")
);
const MobileHow = lazy(() => import("./pages/Mobile/MobileHow.jsx"));
const MobileServices = lazy(() => import("./pages/Mobile/MobileServices.jsx"));
const MobileCareer = lazy(() => import("./pages/Mobile/MobileCareer.jsx"));

import "./style.css";

export function App() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      {size > 500 ? (
        <>
          <Socials />
          <Header />
          <main
            style={{
              maxWidth: "90rem",
              width: "100%",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/how-we-work" element={<How />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/career" element={<Career />} />
              <Route path="/intake-form" element={<IntakeForm />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </>
      ) : (
        <>
          <MobileHeader />
          <main style={{ paddingTop: "5rem", width: "30rem" }}>
            <Routes>
              <Route path="/" element={<MobileHome />} />
              <Route path="/about-us" element={<MobileAbout />} />
              <Route path="/contact-us" element={<MobileContactUs />} />
              <Route path="/how-we-work" element={<MobileHow />} />
              <Route path="/services" element={<MobileServices />} />
              <Route path="/career" element={<MobileCareer />} />
              <Route path="*" element={<MobileHome />} />
              <Route path="/intake-form" element={<IntakeForm />} />
            </Routes>
          </main>
          <MobileFooter />
        </>
      )}
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
