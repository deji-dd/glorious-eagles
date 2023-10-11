import Different from "../components/Different";
import Essentials from "../components/Essentials";
import Offer from "../components/Offer";
import Testimonials from "../components/Testimonials";
import Unlocking from "../components/Unlocking";
import Work from "../components/Work";
import Transform from "../components/Transform";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "1.25rem", flexDirection: "column" }}>
      <Unlocking />
      <div
        style={{
          width: "90rem",
          display: "flex",
          padding: "2.875rem 6.4375rem 3.5rem 6.4375rem",
          flexDirection: "column",
          alignItems: "center",
          gap: "4.5625rem",
          background: "#F6F5FF",
          marginTop: "3.55rem",
        }}
      >
        <h1
          style={{
            lineHeight: "5.21875rem",
            letterSpacing: "-0.01875rem",
            width: "77.125rem",
            textAlign: "center",
          }}
        >
          A different approach to Applied Behaviour Analysis Therapy
        </h1>
        <Different />
      </div>
      <Essentials />
      <Offer />
      <Work />
      <Testimonials />
      <ContactForm />
      <ContactCard />
      <Transform />
    </div>
  );
}
