import { useEffect } from "react";
import MobileJob from "../../components/MobileJob";
import React from "react";

export default function MobileCareer() {
  useEffect(() => {
    document.title = "Glorious Eagles | Career";
  }, []);
  return (
    <div>
      <MobileJob />
    </div>
  );
}
