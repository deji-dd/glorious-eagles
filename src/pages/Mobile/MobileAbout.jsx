import { useEffect, useRef } from "preact/hooks";
import MobileExperts from "../../components/MobileExperts";
import MobileChoose from "../../components/MobileChoose";
import MobileDifferent from "../../components/MobileDifferent";
import MobileContactCard from "../../components/MobileContactCard";
import MobileTransform from "../../components/MobileTransofrm";
import MobilePeople from "../../components/MobilePeople";

export default function MobileAbout() {
  const ref = useRef(null);
  useEffect(() => {
    document.title = "Glorious Eagles | About";
  }, []);
  return (
    <div>
      <MobileExperts
        scroll={() => {
          ref.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div ref={ref} style={{ display: "flex" }}>
        <MobileChoose />
      </div>
      <MobileDifferent />
      <MobilePeople />
      <MobileContactCard />
      <MobileTransform />
    </div>
  );
}
