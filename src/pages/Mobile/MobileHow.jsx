import { useEffect } from "preact/hooks";
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
