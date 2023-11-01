import Gif from "../assets/contact.gif";

export default function MobileContactCard() {
  return (
    <div
      style={{
        display: "flex",
        width: "30rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.92rem",
        gap: "2.96rem",
        flexDirection: "column",
        background: "var(--Light-purple, #F1EBFE)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.64rem",
          flexDirection: "column",
        }}
      >
        <img style={{ width: "23.36rem" }} src={Gif} />
        <h2
          style={{
            lineHeight: "3.0256rem",
            fontSize: "2.4rem",
            letterSpacing: "0.024rem",
          }}
        >
          Contact us
        </h2>
        <p
          style={{
            lineHeight: "2.0888rem",
            width: "25.56224rem",
            color: "#465371",
            fontSize: "1.28rem",
            textAlign: "center",
          }}
        >
          We're here to assist you on your journey towards positive change. If
          you have questions, would like to schedule an appointment, or need
          more information about our services, please don't hesitate to reach
          out.
        </p>
      </div>
      <a href={"/contact-us"}>
        <button
          className={"button-p button-mobile"}
          style={{
            background: "#FFF",
            color: "var(--Primary-colour, #180344)",
            width: "25.36rem",
            height: "4.8rem",
          }}
        >
          Contact Us
        </button>
      </a>
    </div>
  );
}
