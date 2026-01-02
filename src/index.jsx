import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, useEffect, useState, Suspense } from "react";
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
const MentalHealthServices = lazy(
  () => import("./pages/Desktop/MentalHealthServices.jsx")
);

// Lazy load pages (Mobile)
const MobileHome = lazy(() => import("./pages/Mobile/MobileHome.jsx"));
const MobileAbout = lazy(() => import("./pages/Mobile/MobileAbout.jsx"));
const MobileContactUs = lazy(
  () => import("./pages/Mobile/MobileContactUs.jsx")
);
const MobileHow = lazy(() => import("./pages/Mobile/MobileHow.jsx"));
const MobileServices = lazy(() => import("./pages/Mobile/MobileServices.jsx"));
const MobileCareer = lazy(() => import("./pages/Mobile/MobileCareer.jsx"));
const MobileMentalHealthServices = lazy(
  () => import("./pages/Mobile/MobileMentalHealthServices.jsx")
);

import "./style.css";

export function App() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setSize(window.innerWidth);
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
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
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/how-we-work" element={<How />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/career" element={<Career />} />
                <Route path="/intake-form" element={<IntakeForm />} />
                <Route
                  path="/mental-health-services"
                  element={<MentalHealthServices />}
                />
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </>
      ) : (
        <>
          <MobileHeader />
          <main style={{ paddingTop: "5rem", width: "30rem" }}>
            <Suspense fallback={<div className="loading">Loading...</div>}>
              <Routes>
                <Route path="/" element={<MobileHome />} />
                <Route path="/about-us" element={<MobileAbout />} />
                <Route path="/contact-us" element={<MobileContactUs />} />
                <Route path="/how-we-work" element={<MobileHow />} />
                <Route path="/services" element={<MobileServices />} />
                <Route path="/career" element={<MobileCareer />} />
                <Route path="*" element={<MobileHome />} />
                <Route path="/intake-form" element={<IntakeForm />} />
                <Route
                  path="/mental-health-services"
                  element={<MobileMentalHealthServices />}
                />
              </Routes>
            </Suspense>
          </main>
          <MobileFooter />
        </>
      )}
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
