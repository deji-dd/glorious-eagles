import { useEffect } from "react";
import MobileUnlocking from "../../components/MobileUnlocking";
import MobileDifferent from "../../components/MobileDifferent";
import MobileEssentials from "../../components/MobileEssentials";
import MobileOffer from "../../components/MobileOffer";
import MobileWork from "../../components/MobileWork";

export default function MobileHome() {
  useEffect(() => {
    document.title = "Glorious Eagles | Home";
  }, []);

  return (
    <>
      <MobileUnlocking />
      <MobileDifferent />
      <MobileEssentials />
      <MobileOffer />
      <MobileWork />
    </>
  );
}
