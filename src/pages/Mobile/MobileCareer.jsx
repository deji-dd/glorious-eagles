import { useEffect } from "preact/hooks";
import Job from "../../components/Job";

export default function MobileCareer() {
  useEffect(() => {
    document.title = "Ginoba | Career";
  }, []);
  return (
    <div>
      <Job />
    </div>
  );
}
