import Choose from "../../components/Choose";
import Different from "../../components/Different";
import Experts from "../../components/Experts";
import { useRef } from "react";
import People from "../../components/People";
import ContactCard from "../../components/ContactCard";
import Transform from "../../components/Transform";
import { useEffect } from "preact/hooks";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    document.title = "Glorious Eagles | About";
  }, []);
  return (
    <div>
      <Experts
        scroll={() => {
          ref.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div ref={ref}>
        <Choose />
      </div>
      <div
        style={{
          width: "90rem",
          display: "flex",
          padding: "2.875rem 6.4375rem 3.5rem 6.4375rem",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.38rem",
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
          We run a different approach to Applied Behaviour Analysis Therapy
        </h1>
        <Different />
      </div>
      <People />
      <ContactCard />
      <Transform />
    </div>
  );
}
