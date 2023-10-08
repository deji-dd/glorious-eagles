import Services1 from "../assets/services1.svg";
import Services2 from "../assets/services2.svg";
import Services3 from "../assets/services3.svg";
import Services4 from "../assets/services4.svg";
import Services5 from "../assets/services5.svg";
import Services6 from "../assets/services6.svg";
import Services7 from "../assets/services7.svg";
import Services8 from "../assets/services8.svg";
import Arrow from "../assets/down-arrow.svg";
import Offer1 from "../assets/service-offer1.svg";
import Offer2 from "../assets/service-offer2.svg";
import Offer3 from "../assets/service-offer3.svg";
import ServicesOfferCard from "./ServicesOfferCard";

export default function ServicesOffer(props) {
  const div_main_style = {
    display: "flex",
    gap: "3.125rem",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  const div_style = {
    display: "flex",
    gap: "0.56475rem",
    justifyContent: "center",
    alignItems: "center",
  };
  const p_style = {
    color: "var(--Primary-colour, #180344)",
    fontSize: "1.41188rem",
    lineHeight: "2.3225rem",
  };
  return (
    <div
      style={{
        width: "90rem",
        height: "53.75rem",
        display: "flex",
        gap: "1.87rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          padding: "2.4rem 2.1rem",
          gap: "3.25rem",
          borderRadius: "1.5rem",
          background: "var(--Light-purple, #F1EBFE)",
          backdropFilter: "blur(8px)",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexDirection: "column",
            }}
          >
            <h1 style={{ lineHeight: "5.375rem" }}>Services we offer</h1>
            <p
              style={{
                width: "57.25rem",
                color: "var(--Text, #4D4D4D)",
                fontSize: "1.5rem",
                lineHeight: "2.5rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              Faucibus nec gravida ipsum pulvinar vel non.Faucibus nec gravida
              ipsum pulvinar vel non.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "3.3125rem",
            }}
          >
            <div style={div_main_style}>
              <div style={div_style}>
                <img src={Services1} />
                <p style={p_style}>Language Acquisition</p>
              </div>
              <div style={div_style}>
                <img src={Services2} />
                <p style={p_style}>School-Age Programs</p>
              </div>
              <div style={div_style}>
                <img src={Services3} />
                <p style={p_style}>Functional Living Skills</p>
              </div>
            </div>
            <div style={div_main_style}>
              <div style={div_style}>
                <img src={Services4} />
                <p style={p_style}>Parent Training</p>
              </div>
              <div style={div_style}>
                <img src={Services5} />
                <p style={p_style}>School Readiness</p>
              </div>
              <div style={div_style}>
                <img src={Services6} />
                <p style={p_style}>Personalised Therapy</p>
              </div>
            </div>
            <div style={div_main_style}>
              <div style={div_style}>
                <img src={Services7} />
                <p style={p_style}>Behaviour Reduction</p>
              </div>
              <div style={div_style}>
                <img src={Services8} />
                <p style={p_style}>Toilet training</p>
              </div>
              <div style={div_style}>
                <img src={Services4} />
                <p style={p_style}>Caregiver Training</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "4rem", alignItems: "center" }}>
          <button className={"button-p"}>Contact us</button>
          <img
            style={{
              width: "4rem",
              height: "4rem",
              cursor: "pointer",
            }}
            src={Arrow}
            onClick={props.help}
          />
        </div>
      </div>
      <div
        style={{ display: "inline-flex", flexDirection: "column", gap: "1rem" }}
      >
        <ServicesOfferCard img={Offer1} desc={"At home"} />
        <ServicesOfferCard img={Offer2} desc={"In school"} />
        <ServicesOfferCard img={Offer3} desc={"Virtual"} />
      </div>
    </div>
  );
}
