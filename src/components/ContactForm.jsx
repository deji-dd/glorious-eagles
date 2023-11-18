import NameIcon from "../assets/name-icon.svg";
import MessageIcon from "../assets/message-icon.svg";
import { useState } from "preact/hooks";
import { CircularProgress } from "@mui/material";

export default function ContactForm() {
  let [formStyleOne, setFormOneStyle] = useState(false);
  let [formStyleTwo, setFormTwoStyle] = useState(false);
  let [loading, setLoading] = useState(false);
  let [submit, setSubmit] = useState("Submit");
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

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
          enctype="multipart/form-data"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              setLoading(true);
              const request = new XMLHttpRequest();
              const formData = new FormData();
              request.open("POST", "/contact", true);
              request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                  window.location.reload();
                }
                console.log(request);
              };
              formData.append("name", name);
              formData.append("email", email);
              formData.append("message", message);
              request.send(formData);
            } catch {
              setSubmit("Please try again.");
              setTimeout(() => {
                setSubmit("Submit");
              }, 3500);
            }
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
                  placeholder={"Your name"}
                  name="name"
                  onfocusin={() => {
                    setFormOneStyle(true);
                  }}
                  onfocusout={() => {
                    setFormOneStyle(false);
                  }}
                  onChange={(e) => {
                    // @ts-ignore
                    setName(e.target.value);
                  }}
                  required
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
                  placeholder={"Your email"}
                  onfocusin={() => {
                    setFormTwoStyle(true);
                  }}
                  onfocusout={() => {
                    setFormTwoStyle(false);
                  }}
                  name="email"
                  required
                  onChange={(e) => {
                    // @ts-ignore
                    setEmail(e.target.value);
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
              placeholder={"Type your message here"}
              required
              onChange={(e) => {
                // @ts-ignore
                setMessage(e.target.value);
              }}
              name={"message"}
            />
          </div>
          <button
            style={{ width: "33.5rem", alignSelf: "center" }}
            className={"button-p"}
            type={"submit"}
          >
            {loading ? <CircularProgress color="inherit" /> : submit}
          </button>
        </form>
      </div>
    </div>
  );
}
