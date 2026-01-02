import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
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

import ResponsiveComponent from "./components/ResponsiveComponent.jsx";

import {
  ResponsiveProvider,
  useResponsive,
} from "./contexts/ResponsiveContext.jsx";

export function App() {
  return (
    <ResponsiveProvider>
      <AppContent />
    </ResponsiveProvider>
  );
}

function AppContent() {
  const { isDesktop } = useResponsive();

  return (
    <BrowserRouter>
      {isDesktop ? <Socials /> : null}
      <ResponsiveComponent desktop={Header} mobile={MobileHeader} />
      <main
        style={
          isDesktop
            ? {
                maxWidth: "90rem",
                width: "100%",
              }
            : { paddingTop: "5rem", width: "30rem" }
        }
      >
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <ResponsiveComponent desktop={Home} mobile={MobileHome} />
              }
            />
            <Route
              path="/services"
              element={
                <ResponsiveComponent
                  desktop={Services}
                  mobile={MobileServices}
                />
              }
            />
            <Route
              path="/about-us"
              element={
                <ResponsiveComponent desktop={About} mobile={MobileAbout} />
              }
            />
            <Route
              path="/how-we-work"
              element={<ResponsiveComponent desktop={How} mobile={MobileHow} />}
            />
            <Route
              path="/contact-us"
              element={
                <ResponsiveComponent
                  desktop={ContactUs}
                  mobile={MobileContactUs}
                />
              }
            />
            <Route
              path="/career"
              element={
                <ResponsiveComponent desktop={Career} mobile={MobileCareer} />
              }
            />
            <Route path="/intake-form" element={<IntakeForm />} />
            <Route
              path="/mental-health-services"
              element={
                <ResponsiveComponent
                  desktop={MentalHealthServices}
                  mobile={MobileMentalHealthServices}
                />
              }
            />
            <Route
              path="*"
              element={
                <ResponsiveComponent desktop={Home} mobile={MobileHome} />
              }
            />
          </Routes>
        </Suspense>
      </main>
      <ResponsiveComponent desktop={Footer} mobile={MobileFooter} />
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
