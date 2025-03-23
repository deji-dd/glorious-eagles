import NameIcon from "../assets/name-icon.svg";
import MessageIcon from "../assets/message-icon.svg";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

export default function MobileContactForm() {
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
    fontSize: "1.36888rem",
    lineHeight: "1.52096rem",
    fontWeight: "500",
  };
  const div_style = {
    width: "25.44rem",
    height: "4.96rem",
    borderRadius: "3.49816rem",
    border: "0.951px solid #E6DCFC",
    background: "var(--neutral-100, #FFF)",
    display: "flex",
    alignItems: "center",
    gap: "2.45rem",
    paddingLeft: "1.53rem",
    paddingRight: "1.53rem",
  };
  const input_style = {
    width: "100%",
    color: "var(--Text, #4D4D4D)",
    fontFamily: "DM Sans",
    fontSize: "1.22368rem",
    lineHeight: "1.52096rem",
    fontWeight: "400",
    border: "none",
  };
  const div_active = {
    ...div_style,
    border: "2.04px solid #DCCDFC",
  };
  return (
    <div
      style={{
        display: "flex",
        width: "30rem",
        padding: "2.5rem 1rem",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.64rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            lineHeight: "3.0256rem",
            width: "26.30704rem",
            fontSize: "2.4rem",
            letterSpacing: "0.024rem",
          }}
        >
          Contact us directly
        </h2>
        <p
          style={{
            color: "var(--Text, #4D4D4D)",
            fontSize: "1.28rem",
            lineHeight: "2.0888rem",
            width: "25.56224rem",
          }}
        >
          You can contact us by filling the form provided below, and we'll
          respond promptly to assist you
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "27.36rem",
          height: "48.48rem",
          borderRadius: "1.38688rem",
          border: "0.51px solid var(--neutral-300, #EFF0F6)",
          background: "#F1EBFE",
          padding: "0 0.96rem",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <form
          encType="multipart/form-data"
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
            gap: "2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.8rem",
              width: "25.44rem",
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
                onFocus={() => {
                  setFormOneStyle(true);
                }}
                onBlur={() => {
                  setFormOneStyle(false);
                }}
                name="name"
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
              gap: "0.8rem",
              width: "25.44rem",
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
                onFocus={() => {
                  setFormTwoStyle(true);
                }}
                onBlur={() => {
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

          <div
            style={{
              display: "flex",
              gap: "0.8rem",
              width: "25.44rem",
              flexDirection: "column",
            }}
          >
            <label style={label_style}>Message</label>
            <textarea
              style={{
                ...div_style,
                ...input_style,
                width: "25.36rem",
                height: "14.48rem",
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
            style={{ width: "25.36rem", height: "4.8rem" }}
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
