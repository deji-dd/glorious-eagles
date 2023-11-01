import { useEffect } from "preact/hooks";
import MobileUnlocking from "../../components/MobileUnlocking";
import MobileDifferent from "../../components/MobileDifferent";
import MobileEssentials from "../../components/MobileEssentials";
import MobileOffer from "../../components/MobileOffer";
import MobileWork from "../../components/MobileWork";
import MobileContactForm from "../../components/MobileContactForm";
import MobileContactCard from "../../components/MobileContactCard";
import MobileTransform from "../../components/MobileTransofrm";

export default function MobileHome() {
  useEffect(() => {
    document.title = "Ginoba | Home";
  }, []);

  return (
    <>
      <MobileUnlocking />
      <MobileDifferent />
      <MobileEssentials />
      <MobileOffer />
      <MobileWork />
      <MobileContactForm />
      <MobileContactCard />
      <MobileTransform />
    </>
  );
}