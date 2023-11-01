import { useEffect } from "preact/hooks";
import Job from "../../components/Job";

export default function Career() {
  useEffect(() => {
    document.title = "Ginoba | Career";
  }, []);
  return (
    <div>
      <Job />
    </div>
  );
}
