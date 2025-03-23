import { useRef, useState } from "react";
import UploadIcon from "../assets/upload-icon.svg";
import { CircularProgress } from "@mui/material";

export default function MobileFileUploader(props) {
  let [name, setName] = useState("Upload");
  let [err, setErr] = useState(false);
  let [loading, setLoading] = useState(false);

  const p_style = {
    fontFamily: "DM Sans",
    color: "var(--Text, #4D4D4D)",
    fontSize: "1.22368rem",
    lineHeight: "1.52096rem",
    fontWeight: "400",
  };
  const p_err = { color: "#cc0000" };
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
  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  async function handleChange(e) {
    try {
      const fileUploaded = e.target.files[0];
      if (fileUploaded.type != "application/pdf") {
        setErr(true);
        throw "Only PDF files are supported.";
      } else {
        if (fileUploaded.size > 1024000) {
          setErr(true);
          throw "Max file size allowed is 1MB.";
        } else {
          setErr(false);
          setLoading(true);

          const API_ENDPOINT = "https://file.io";
          const request = new XMLHttpRequest();
          const formData = new FormData();

          request.open("POST", API_ENDPOINT, true);
          request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
              const obj = JSON.parse(request.response);
              const link = obj.link;
              props.link(link);
              setName(fileUploaded.name);
              setLoading(false);
            } else {
              throw "Please try again.";
            }
          };
          formData.append(props.name, fileUploaded);
          request.send(formData);
        }
      }
    } catch (e) {
      setName(e);
    }
  }

  return (
    <>
      <button
        style={{
          ...div_style,
          display: "flex",
          gap: "1.3rem",
          alignItems: "center",
          justifyContent: "center",
          border: "0.951px solid #E6DCFC",
        }}
        onClick={handleClick}
      >
        <img src={UploadIcon} />
        <p style={err ? p_err : p_style}>
          {loading ? <CircularProgress color="inherit" /> : name}
        </p>
      </button>
      <input
        type="file"
        style={{ display: "none" }}
        ref={hiddenFileInput}
        onChange={handleChange}
        id={props.id}
        name={props.name}
        // required
      />
    </>
  );
}
