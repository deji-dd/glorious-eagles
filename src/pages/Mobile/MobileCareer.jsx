import { useEffect } from "preact/hooks";
import MobileJob from "../../components/MobileJob";

export default function MobileCareer() {
  useEffect(() => {
    document.title = "Ginoba | Career";
  }, []);
  return (
    <div>
      <MobileJob />
    </div>
  );
}
