import BG from "../assets/footer-bg.svg";

export default function Footer() {
  return (
    <div
      style={{
        width: "90rem",
        height: "33.625rem",
        flexShrink: "0",
        background: `url(${BG})`,
      }}
    ></div>
  );
}
