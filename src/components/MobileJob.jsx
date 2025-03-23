import Img from "../assets/career.gif";
import NameIcon from "../assets/name-icon.svg";
import MessageIcon from "../assets/message-icon.svg";
import { useRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import MobileFileUploader from "./MobileFileUploader";

export default function MobileJob() {
  let [cover, setCover] = useState(null);
  let [resume, setResume] = useState(null);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [submit, setSubmit] = useState("Apply");
  let [loading, setLoading] = useState(false);

  const form = useRef(null);

  const label_style = {
    color: "#FFF",
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
    border: "2.04px solid #DCCDFC",
    background: "#FFF",
    display: "flex",
    alignItems: "center",
    gap: "2.45rem",
    paddingLeft: "1.55rem",
    paddingRight: "1.55rem",
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

  return (
    <div
      style={{
        display: "flex",
        width: "30rem",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 1.3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "27.36rem",
          height: "93.92rem",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1.38688rem",
          background: "var(--Primary-colour, #180344)",
          flexDirection: "column",
          gap: "0.65rem",
          border: "0.51px solid var(--neutral-300, #EFF0F6)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1.68rem",
          }}
        >
          <img style={{ height: "9.92rem" }} src={Img} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "0.65rem",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                width: "25.2rem",
                color: "#FFF",
                lineHeight: "3.0256rem",
                textTransform: "capitalize",
                textAlign: "center",
                fontSize: "2.24rem",
                letterSpacing: "0.0224rem",
              }}
            >
              Work with Us to Transform Lives Through ABA Excellence
            </h1>
            <p
              style={{
                width: "25.2rem",
                color: "#FFF",
                lineHeight: "2.0888rem",
                textAlign: "center",
                fontSize: "1.28rem",
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
        </div>
        <form
          encType="multipart/form-data"
          ref={form}
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              if (cover != null && resume != null) {
                setLoading(true);
                const request = new XMLHttpRequest();
                const formData = new FormData();
                request.open("POST", "/application", true);
                request.onreadystatechange = () => {
                  if (request.readyState === 4 && request.status === 200) {
                    window.location.reload();
                  }
                };
                formData.append("name", name);
                formData.append("email", email);
                formData.append("cover", cover);
                formData.append("resume", resume);
                request.send(formData);
              } else {
                throw "Please fill all fields.";
              }
            } catch (err) {
              setSubmit(err);
              setLoading(false);
              setTimeout(() => {
                setSubmit("Apply");
              }, 3500);
            }
          }}
          style={{
            display: "flex",
            width: "25.44rem",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "3.2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.8rem",
              flexDirection: "column",
            }}
          >
            <label htmlFor={"i-name"} style={label_style}>
              Name
            </label>
            <div style={div_style}>
              <img src={NameIcon} />
              <input
                style={input_style}
                type={"text"}
                placeholder={"Your name"}
                name="name"
                id={"i-name"}
                required
                onChange={(e) => {
                  // @ts-ignore
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "0.8rem",
              flexDirection: "column",
            }}
          >
            <label htmlFor={"i-email"} style={label_style}>
              Email
            </label>
            <div style={div_style}>
              <img src={MessageIcon} />
              <input
                id={"i-email"}
                style={input_style}
                type={"email"}
                placeholder={"Your email"}
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
              gap: "1.25rem",
              flexDirection: "column",
            }}
          >
            <label htmlFor={"i-cover"} style={label_style}>
              Upload cover letter
            </label>
            <MobileFileUploader id={"i-cover"} name={"cover"} link={setCover} />
          </div>
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              flexDirection: "column",
            }}
          >
            <label htmlFor={"i-resume"} style={label_style}>
              Upload resume
            </label>
            <MobileFileUploader
              id={"i-resume"}
              name={"resume"}
              link={setResume}
            />
          </div>
          <button
            className={"button-p button-mobile"}
            type={"submit"}
            style={{
              background: "#E1D5FD",
              color: "var(--Primary-colour, #180344)",
              width: "22.48rem",
              alignSelf: "center",
              height: "4.8rem",
              fontSize: "1.6rem",
            }}
          >
            {loading ? <CircularProgress color="secondary" /> : submit}
          </button>
        </form>
      </div>
    </div>
  );
}
