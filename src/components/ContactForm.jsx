import NameIcon from "../assets/name-icon.svg";

export default function ContactForm() {
  const label_style = {
    color: "var(--neutral-800, #170F49)",
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: "DM Sans",
    fontSize: "2rem",
    lineHeight: "2.33044rem",
    fontWeight: "500",
  };
  const div_style = {
    width: "33.8125rem",
    height: "7.6875rem",
    borderRadius: "5.36rem",
    border: "4px solid #DCCDFC",
    background: "var(--neutral-100, #FFF)",
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
        padding: "3.75rem 0rem",
        flexDirection: "column",
        alignItems: "center",
        gap: "3.9375rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <h2
          style={{
            fontFeatureSettings: "'clig' off, 'liga' off",
            lineHeight: "2.875rem",
          }}
        >
          Contact us directly
        </h2>
        <p
          style={{
            color: "var(--Text, #4D4D4D)",
            fontSize: "1.5rem",
            lineHeight: "2.71875rem",
          }}
        >
          You can contact us by filling the form provided below, and we'll
          respond promptly to assist you
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6.25rem",
          width: "79.0625rem",
          height: "66.5rem",
          borderRadius: "2.125rem",
          border: "1px solid var(--neutral-300, #EFF0F6)",
          background: "#F1EBFE",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.88025rem",
            alignItems: "flex-start",
          }}
        >
          <h2
            style={{
              fontFeatureSettings: "'clig' off, 'liga' off",
              lineHeight: "4.07825rem",
            }}
          >
            Contact details
          </h2>
          <p
            style={{
              fontFeatureSettings: "'clig' off, 'liga' off",
              lineHeight: "2.5rem",
              fontSize: "1.5rem",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisc.
          </p>
        </div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "4.9375rem",
              width: "72.6875rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                width: "33.8125rem",
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
                width: "33.8125rem",
                flexDirection: "column",
              }}
            >
              <label style={label_style}>Email</label>
              <div style={div_style}>
                <img src={NameIcon} />
                <input
                  style={input_style}
                  type={"email"}
                  placeholder={"Lorem Ipsum"}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              width: "72.4375rem",
              flexDirection: "column",
              height: "26rem",
            }}
          >
            <label style={label_style}>Message</label>
            <textarea
              style={{
                ...div_style,
                ...input_style,
                width: "72.4375rem",
                height: "22.125rem",
                borderRadius: "3.75rem",
                border: "1.864px solid #DCCDFC",
                padding: "2.54rem 2.34rem",
              }}
              placeholder={"Lorem Ipsum"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
