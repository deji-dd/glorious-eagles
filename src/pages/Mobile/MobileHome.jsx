import { useEffect } from "react";
import MobileUnlocking from "../../components/MobileUnlocking";
import MobileDifferent from "../../components/MobileDifferent";

import React from "react";
import MobileCaring from "@/components/MobileCaring";
import MobileJourney from "@/components/MobileJourney";

export default function MobileHome() {
  useEffect(() => {
    document.title = "Glorious Eagles | Home";
  }, []);

  return (
    <>
      <MobileUnlocking />
      <MobileCaring />
      <MobileDifferent />
      <MobileJourney />
    </>
  );
}
