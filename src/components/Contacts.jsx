import AdressIcon from "../assets/address-icon.svg";
import EmailIcon from "../assets/email-icon.svg";
import CallIcon from "../assets/call-icon.svg";

export default function Contacts() {
  const h3_style = { fontSize: "2.5rem", lineHeight: "130%" };
  const p_style = {
    color: "var(--Text, #4D4D4D)",
    textAlign: "center",
    fontSize: "2rem",
    lineHeight: "200%",
  };
  const div_style = {
    width: "37.5rem",
    height: "20.75rem",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
    background: "var(--Light-purple, #F1EBFE)",
    alignItems: "center",
    justifyContent: "center",
  };
  const h3_small = { ...h3_style, lineHeight: "2.94025rem" };
  const p_small = { ...p_style, fontSize: "2.25rem", lineHeight: "2.94025rem" };
  return (
    <div
      style={{
        width: "90rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "79.125rem",
          display: "flex",
          flexDirection: "column",
          gap: "3.5rem",
        }}
      >
        <div style={{ display: "flex", width: "79.125rem", gap: "4rem" }}>
          <div style={div_style}>
            <img src={EmailIcon} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3 style={h3_small}>Email here</h3>
              <p style={p_style}>info@gloriouseagles.com</p>
            </div>
          </div>
          <div style={div_style}>
            <img src={CallIcon} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3 style={h3_small}>Call Here</h3>
              <p style={p_style}>+1 612-4566-090</p>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "79.125rem",
            height: "30.25rem",
            borderRadius: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            background: "var(--Light-purple, #F1EBFE)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={AdressIcon} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 style={h3_style}>Address</h3>
            <p style={p_style}>
              2119 110th Lane NW Coon Rapids, MN 55433.
              <br />
              MN DHS Licensed Early Intensive Developmental and Behavioral
              Intervention
              <br />
              (EIDBI)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
