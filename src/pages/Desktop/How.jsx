import { useEffect } from "preact/hooks";
import HowWeWork from "../../components/HowWeWork";

export default function How() {
  useEffect(() => {
    document.title = "Glorious Eagles | How we Work";
  }, []);
  return (
    <div>
      <HowWeWork />
    </div>
  );
}
