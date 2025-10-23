import { useEffect } from "react";
import MobileHowWeWork from "../../components/MobileHowWeWork";
import React from "react";

export default function MobileHow() {
  useEffect(() => {
    document.title = "Glorious Eagles | How we Work";
  }, []);
  return (
    <div>
      <MobileHowWeWork />
    </div>
  );
}
