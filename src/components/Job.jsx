import Img from "../assets/career.gif";
import NameIcon from "../assets/name-icon.svg";
import MessageIcon from "../assets/message-icon.svg";
import { useRef, useState } from "preact/hooks";
import FileUploader from "./FileUploader";
import { CircularProgress } from "@mui/material";

export default function Job() {
  let [cover, setCover] = useState(null);
  let [resume, setResume] = useState(null);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [submit, setSubmit] = useState("Apply");
  let [loading, setLoading] = useState(false);

  const form = useRef();

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

  function refreshPage() {
    window.location.reload();
  }

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
          height: "114.4375rem",
          borderRadius: "3rem",
          background: "var(--Primary-colour, #180344)",
          flexDirection: "column",
          gap: "2.25rem",
        }}
      >
        <img style={{ height: "14.375rem" }} src={Img} />
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
            enctype="multipart/form-data"
            ref={form}
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                if (cover != null && resume != null) {
                  setLoading(true);
                  const request = new XMLHttpRequest();
                  const formData = new FormData();
                  request.open("POST", "/career/submit", true);
                  request.onreadystatechange = () => {
                    if (request.readyState === 4 && request.status === 200) {
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
              <label for={"i-name"} style={label_style}>
                Name
              </label>
              <div style={div_style}>
                <img src={NameIcon} />
                <input
                  style={input_style}
                  type={"text"}
                  placeholder={"Lorem Ipsum"}
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
                gap: "1.25rem",
                flexDirection: "column",
              }}
            >
              <label for={"i-email"} style={label_style}>
                Email
              </label>
              <div style={div_style}>
                <img src={MessageIcon} />
                <input
                  id={"i-email"}
                  style={input_style}
                  type={"email"}
                  placeholder={"Lorem@gmail.com"}
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
              <label for={"i-cover"} style={label_style}>
                Upload cover letter
              </label>
              <FileUploader id={"i-cover"} name={"cover"} link={setCover} />
            </div>
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                flexDirection: "column",
              }}
            >
              <label for={"i-resume"} style={label_style}>
                Upload resume
              </label>
              <FileUploader id={"i-resume"} name={"resume"} link={setResume} />
            </div>
            <button
              className={"button-p"}
              type={"submit"}
              style={{
                background: "#E1D5FD",
                color: "var(--Primary-colour, #180344)",
                padding: "2.75rem 5rem",
                width: "28.1rem",
                alignSelf: "center",
              }}
            >
              {loading ? <CircularProgress color="secondary" /> : submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
