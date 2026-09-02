import { useEffect } from "react";
import Job from "../../components/Job";

export default function Career() {
  useEffect(() => {
    document.title = "Glorious Eagles | Career";
  }, []);
  return (
    <div>
      <Job />
    </div>
  );
}
