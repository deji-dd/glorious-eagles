import MobileOfferCard from "./MobileOfferCard";
import Offer1 from "../assets/offer1.svg";
import Offer2 from "../assets/offer2.svg";
import Offer3 from "../assets/offer3.svg";

export default function MobileOffer() {
  return (
    <div
      style={{
        display: "flex",
        width: "30rem",
        padding: "2rem 1.3rem",
        justifyContent: "center",
        alignItems: "center",
        background: "#F6F5FF",
        flexDirection: "column",
        gap: "1.6rem",
      }}
    >
      <h1
        style={{
          width: "26.30704rem",
          textAlign: "center",
          fontSize: "2.4rem",
          lineHeight: "3.0256rem",
          letterSpacing: "0.024rem",
        }}
      >
        We offer therapy to kids aged 0-21
      </h1>
      <div
        style={{
          gap: "0.42rem",
          display: "flex",
        }}
      >
        <MobileOfferCard img={Offer1} desc={"At home"} />
        <MobileOfferCard img={Offer2} desc={"In school"} />
        <MobileOfferCard img={Offer3} desc={"Virtual"} />
      </div>
    </div>
  );
}
