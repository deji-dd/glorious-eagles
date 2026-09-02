import { useEffect } from "react";
import Caring from "@/components/Caring";
import Journey from "@/components/Journey";
import Different from "../../components/Different";
import Unlocking from "../../components/Unlocking";

export default function Home() {
  useEffect(() => {
    document.title = "Glorious Eagles | Home";
  }, []);

  return (
    <div style={{ display: "flex", gap: "1.25rem", flexDirection: "column" }}>
      <Unlocking />
      <Caring />
      <div
        style={{
          maxWidth: "90rem",
          width: "100%",
          display: "flex",
          padding: "2.875rem 6.4375rem 3.5rem 6.4375rem",
          flexDirection: "column",
          alignItems: "center",
          gap: "4.5625rem",
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
          Why Families Choose Glorious Eagles
        </h1>
        <Different />
      </div>
      <Journey />
    </div>
  );
}
