import { useEffect } from "preact/hooks";
import ContactCard from "../../components/ContactCard";
import HowWeWork from "../../components/HowWeWork";
import Transform from "../../components/Transform";

export default function How() {
  useEffect(() => {
    document.title = "Ginoba | How we Work";
  }, []);
  return (
    <div>
      <HowWeWork />
      <ContactCard />
      <Transform />
    </div>
  );
}
