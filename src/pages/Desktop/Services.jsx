import AbaServices from "../../components/AbaServices";
import AbaTherapy from "../../components/AbaTherapy";
import AdditionalSupport from "../../components/AdditionalSupport";
import ContactCard from "../../components/ContactCard";
import ServicesOffer from "../../components/ServicesOffer";
import Arrow from "../../assets/arrow.svg";

export default function Services() {
  return (
    <div>
      <ServicesOffer />
      <AbaServices />
      <AbaTherapy />
      <AdditionalSupport />
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
