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
import MobileServicesOfferCard from "./MobileServicesOfferCard";

export default function MobileServicesOffer(props) {
  const div_main_style = {
    display: "flex",
    gap: "2.24rem",
    flexDirection: "column",
    alignItems: "flex-start",
  };
  const div_style = {
    display: "flex",
    gap: "0.34rem",
    justifyContent: "center",
    alignItems: "center",
  };
  const p_style = {
    color: "var(--Primary-colour, #180344)",
    fontSize: "1.12rem",
    lineHeight: "1.38808rem",
  };
  const img_style = { width: "1.19536rem" };
  return (
    <div
      style={{
        width: "30rem",
        display: "flex",
        gap: "2.96rem",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "2.24rem 0",
        background: "var(--Light-purple, #F1EBFE)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          gap: "1.92rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "0.96rem",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.56rem",
              lineHeight: "3.0256rem",
              letterSpacing: "0.0256rem",
            }}
          >
            Services we offer
          </h1>
          <p
            style={{
              width: "26.8rem",
              color: "var(--Text, #4D4D4D)",
              fontSize: "1.28rem",
              lineHeight: "2.0888rem",
            }}
          >
            Our comprehensive range of services is designed to meet the unique
            needs of each individual we serve. We collaborate closely with
            families, employing evidence-based practices to unlock potential and
            transform lives.
          </p>
        </div>
        <div
          style={{
            display: "inline-flex",
            gap: "0.42rem",
          }}
        >
          <MobileServicesOfferCard img={Offer1} desc={"At home"} />
          <MobileServicesOfferCard img={Offer2} desc={"In school"} />
          <MobileServicesOfferCard img={Offer3} desc={"Virtual"} />
        </div>
        <div style={{ display: "flex", gap: "6rem", alignItems: "center" }}>
          <a href={"/contact-us"}>
            <button
              style={{ height: "3.28rem", width: "10rem" }}
              className={"button-p button-mobile"}
            >
              Contact us
            </button>
          </a>
          <img
            style={{
              width: "2.68392rem",
              height: "2.68392rem",
              cursor: "pointer",
              background: "var(--Light-purple, #F1EBFE)",
            }}
            src={Arrow}
            onClick={props.scroll}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2.56rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "3.3125rem",
          }}
        >
          <div style={div_main_style}>
            <div style={div_style}>
              <img style={img_style} src={Services1} />
              <p style={p_style}>Language Acquisition</p>
            </div>
            <div style={div_style}>
              <img style={img_style} src={Services2} />
              <p style={p_style}>School-Age Programs</p>
            </div>
            <div style={div_style}>
              <img style={img_style} src={Services3} />
              <p style={p_style}>Functional Living Skills</p>
            </div>
            <div style={div_style}>
              <img style={img_style} src={Services7} />
              <p style={p_style}>Behaviour Reduction</p>
            </div>
          </div>
          <div style={div_main_style}>
            <div style={div_style}>
              <img style={img_style} src={Services4} />
              <p style={p_style}>Parent Training</p>
            </div>
            <div style={div_style}>
              <img style={img_style} src={Services5} />
              <p style={p_style}>School Readiness</p>
            </div>
            <div style={div_style}>
              <img style={img_style} src={Services6} />
              <p style={p_style}>Personalised Therapy</p>
            </div>

            <div style={div_style}>
              <img style={img_style} src={Services8} />
              <p style={p_style}>Toilet training</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
