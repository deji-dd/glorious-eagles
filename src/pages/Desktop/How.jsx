import HowWeWork from "../../components/HowWeWork";
import { useEffect } from "react";

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
