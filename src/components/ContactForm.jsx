import NameIcon from "../assets/name-icon.svg";
import MessageIcon from "../assets/message-icon.svg";
import { useState } from "preact/hooks";

export default function ContactForm() {
  let [formStyleOne, setFormOneStyle] = useState(false);
  let [formStyleTwo, setFormTwoStyle] = useState(false);

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
    border: "1.864px solid #E6DCFC",
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
  const div_active = {
    ...div_style,
    border: "4px solid #DCCDFC",
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
          width: "79.0625rem",
          height: "61.5625rem",
          borderRadius: "2.125rem",
          border: "1px solid var(--neutral-300, #EFF0F6)",
          background: "#F1EBFE",
          flexDirection: "column",
          padding: "0 3.19rem",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
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
              <div style={formStyleOne ? div_active : div_style}>
                <img src={NameIcon} />
                <input
                  style={input_style}
                  type={"text"}
                  placeholder={"Lorem Ipsum"}
                  onfocusin={() => {
                    setFormOneStyle(true);
                  }}
                  onfocusout={() => {
                    setFormOneStyle(false);
                  }}
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
              <div style={formStyleTwo ? div_active : div_style}>
                <img src={MessageIcon} />
                <input
                  style={input_style}
                  type={"email"}
                  placeholder={"Lorem Ipsum"}
                  onfocusin={() => {
                    setFormTwoStyle(true);
                  }}
                  onfocusout={() => {
                    setFormTwoStyle(false);
                  }}
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
          <button
            style={{ width: "33.5rem", alignSelf: "center" }}
            className={"button-p"}
            type={"submit"}
          >
            Sumbit
          </button>
        </form>
      </div>
    </div>
  );
}
