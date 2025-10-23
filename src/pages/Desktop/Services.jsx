import Assessments from "../../components/Assessments";
import AbaServices from "../../components/AbaServices";
import AdditionalSupport from "../../components/AdditionalSupport";
import ContactCard from "../../components/ContactCard";
import ServicesOffer from "../../components/ServicesOffer";
import Arrow from "../../assets/arrow.svg";
import { useRef, useEffect } from "react";
import React from "react";

export default function Services() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    document.title = "Glorious Eagles | Services";
  }, []);

  return (
    <div>
      <ServicesOffer
        scroll1={() => ref1.current?.scrollIntoView({ behavior: "smooth" })}
        scroll2={() => ref2.current?.scrollIntoView({ behavior: "smooth" })}
        scroll3={() => ref3.current?.scrollIntoView({ behavior: "smooth" })}
      />
      <div ref={ref1}>
        <Assessments />
      </div>
      <div ref={ref2}>
        <AbaServices />
      </div>
      <div ref={ref3}>
        <AdditionalSupport />
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
        <h3 style={{ textAlign: "center" }}>
          We’re here to support you and your child every step of the way. Let’s
          work together to create meaningful progress!
        </h3>
        <img style={{ width: "6rem", marginTop: "2rem" }} src={Arrow} />
      </div>
      <ContactCard />
    </div>
  );
}
