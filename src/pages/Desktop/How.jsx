import HowWeWork from "../../components/HowWeWork";
import { useEffect } from "react";
import React from "react";

export default function How() {
  useEffect(() => {
    document.title = "Glorious Eagles | How we Work";
  }, []);
  return (
    <div>
      <HowWeWork />
    </div>
  );
}
