import MobileAbaServices from "../../components/MobileAbaServices";
import MobileAdditionalSupport from "../../components/MobileAdditionalSupport";
import MobileAssessments from "../../components/MobileAssessments";
import MobileContactCard from "../../components/MobileContactCard";
import MobileServicesOffer from "../../components/MobileServicesOffer";
import Arrow from "../../assets/arrow.svg";
import { useRef, useEffect } from "react";
import React from "react";

export default function MobileServices() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  useEffect(() => {
    document.title = "Glorious Eagles | Services";
  }, []);
  return (
    <div style={{ marginBottom: "3rem" }}>
      <MobileServicesOffer
        scroll1={() => ref1.current?.scrollIntoView({ behavior: "smooth" })}
        scroll2={() => ref2.current?.scrollIntoView({ behavior: "smooth" })}
        scroll3={() => ref3.current?.scrollIntoView({ behavior: "smooth" })}
      />
      <div ref={ref1}>
        <MobileAssessments />
      </div>
      <div ref={ref2}>
        <MobileAbaServices />
      </div>
      <div ref={ref3}>
        <MobileAdditionalSupport />
      </div>
      <div
        style={{
          width: "100%",
          padding: "0rem 5rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h5 style={{ textAlign: "center" }}>
          We’re here to support you and your child every step of the way. Let’s
          work together to create meaningful progress!
        </h5>
        <img style={{ width: "6rem", marginTop: "2rem" }} src={Arrow} />
      </div>
      <MobileContactCard />
    </div>
  );
}
