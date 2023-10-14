import Img from "../assets/job-img.svg";
import NameIcon from "../assets/name-icon.svg";
import MessageIcon from "../assets/message-icon.svg";
import PositionIcon from "../assets/position-icon.svg";

export default function Job() {
  const label_style = {
    color: "#FFF",
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: "DM Sans",
    fontSize: "2rem",
    lineHeight: "2.33044rem",
    fontWeight: "500",
  };
  const div_style = {
    width: "74.5rem",
    height: "7.6875rem",
    borderRadius: "5.36rem",
    border: "4px solid #DCCDFC",
    background: "#FFF",
    display: "flex",
    alignItems: "center",
    gap: "3.75rem",
    paddingLeft: "2.34rem",
    paddingRight: "2.34rem",
  };
  const input_style = {
    width: "100%",
    color: "var(--Text, #4D4D4D)",
    fontFamily: "DM Sans",
    fontSize: "1.875rem",
    lineHeight: "2.33044rem",
    fontWeight: "400",
    border: "none",
  };
  return (
    <div
      style={{
        display: "flex",
        width: "90rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "85.3125rem",
          justifyContent: "center",
          alignItems: "center",
          height: "113.875rem",
          borderRadius: "3rem",
          background: "var(--Primary-colour, #180344)",
          flexDirection: "column",
          gap: "2.25rem",
        }}
      >
        <img src={Img} />
        <div
          style={{
            display: "flex",
            width: "90rem",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "4.8125rem",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "90rem",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "1.5625rem",
            }}
          >
            <h1
              style={{
                width: "64.625rem",
                color: "#FFF",
                lineHeight: "120%",
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              Work with Us to Transform Lives Through ABA Excellence
            </h1>
            <p
              style={{
                width: "80.3125rem",
                color: "#FFF",
                lineHeight: "160%",
                textAlign: "center",
                fontSize: "1.5rem",
              }}
            >
              Join our team and become a part of something extraordinary. We are
              passionate about making a positive impact on the lives of
              individuals and families through ABA therapy. If you're dedicated,
              compassionate, and eager to contribute your expertise to our
              mission, we invite you to explore the rewarding career
              opportunities we offer.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            style={{
              display: "flex",
              width: "74.4375rem",
              alignItems: "f;ex-start",
              flexDirection: "column",
              gap: "3.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                flexDirection: "column",
              }}
            >
              <label style={label_style}>Name</label>
              <div style={div_style}>
                <img src={NameIcon} />
                <input
                  style={input_style}
                  type={"text"}
                  placeholder={"Lorem Ipsum"}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                flexDirection: "column",
              }}
            >
              <label style={label_style}>Email</label>
              <div style={div_style}>
                <img src={MessageIcon} />
                <input
                  style={input_style}
                  type={"email"}
                  placeholder={"Lorem@gmail.com"}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                flexDirection: "column",
              }}
            >
              <label style={label_style}>Position</label>
              <div style={div_style}>
                <img src={PositionIcon} />
                <input
                  style={input_style}
                  type={"text"}
                  placeholder={"Lorem Ipsum"}
                />
              </div>
            </div>
            <button
              className={"button-p"}
              type={"submit"}
              style={{
                background: "#E1D5FD",
                color: "var(--Primary-colour, #180344)",
                padding: "2.75rem 5rem",
              }}
            >
              Apply to work with us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
