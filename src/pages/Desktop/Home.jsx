import Different from "../../components/Different";
import Essentials from "../../components/Essentials";
import Offer from "../../components/Offer";
import Unlocking from "../../components/Unlocking";
import Work from "../../components/Work";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Glorious Eagles | Home";
  }, []);

  return (
    <div style={{ display: "flex", gap: "1.25rem", flexDirection: "column" }}>
      <Unlocking />
      <div
        style={{
          maxWidth: "90rem",
          width: "100%",
          display: "flex",
          padding: "2.875rem 6.4375rem 3.5rem 6.4375rem",
          flexDirection: "column",
          alignItems: "center",
          gap: "4.5625rem",
          background: "#F6F5FF",
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
    </div>
  );
}
