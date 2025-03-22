import MobileAbaServices from "../../components/MobileAbaServices";
import MobileAdditionalSupport from "../../components/MobileAdditionalSupport";
import MobileAssessments from "../../components/MobileAssessments";
import MobileContactCard from "../../components/MobileContactCard";
import MobileServicesOffer from "../../components/MobileServicesOffer";
import Arrow from "../../assets/arrow.svg";

export default function MobileServices() {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <MobileServicesOffer />
      <MobileAssessments />
      <MobileAbaServices />
      <MobileAdditionalSupport />
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
