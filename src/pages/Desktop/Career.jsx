import { useEffect } from "react";
import Job from "../../components/Job";
import React from "react";

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
