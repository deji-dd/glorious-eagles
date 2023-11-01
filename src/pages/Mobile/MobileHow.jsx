import { useEffect } from "preact/hooks";
import MobileHowWeWork from "../../components/MobileHowWeWork";
import MobileContactCard from "../../components/MobileContactCard";
import MobileTransform from "../../components/MobileTransofrm";

export default function MobileHow() {
  useEffect(() => {
    document.title = "Ginoba | How we Work";
  }, []);
  return (
    <div>
      <MobileHowWeWork />
      <MobileContactCard />
      <MobileTransform />
    </div>
  );
}
