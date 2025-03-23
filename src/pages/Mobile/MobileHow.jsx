import { useEffect } from "react";
import MobileHowWeWork from "../../components/MobileHowWeWork";

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
