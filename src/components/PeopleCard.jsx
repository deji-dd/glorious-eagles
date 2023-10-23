import Facebook from "../assets/facebook-icon.svg";
import Instagram from "../assets/instagram-icon.svg";
import Twitter from "../assets/twitter-icon.svg";
import Linkedin from "../assets/linkedin-icon.svg";

export default function PeopleCard(props) {
  const icon_style = {
    width: "2.79288rem",
    height: "2.79288rem",
    background: "var(--Primary-colour, #180344)",
    boxShadow: "1.11714px 7.82px 11.17143px 0px rgba(255, 83, 0, 0.50)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const icon_white = {
    ...icon_style,
    background: "var(--Light-primary, #F6F5FF)",
    boxShadow: "0px 1.11714px 11.17143px 0px rgba(0, 0, 0, 0.10)",
  };
  return (
    <div
      style={{
        width: "18.85181rem",
        height: "24.4375rem",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #E7DDFD",
        position: "relative",
        background: "var(--White, #FFF)",
        alignItems: "center",
        justifyContent: "center",
        gap: "6.19rem",
      }}
    >
      <img src={props.img} />
      <p
        style={{
          color: "var(--Primary-colour, #180344)",
          fontSize: "1.11713rem",
          lineHeight: "150.6%",
        }}
      >
        {props.title}
      </p>
    </div>
  );
}
