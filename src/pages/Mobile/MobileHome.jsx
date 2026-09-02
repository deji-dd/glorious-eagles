import { useEffect } from "react";
import MobileCaring from "@/components/MobileCaring";
import MobileJourney from "@/components/MobileJourney";
import MobileDifferent from "../../components/MobileDifferent";
import MobileUnlocking from "../../components/MobileUnlocking";

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
