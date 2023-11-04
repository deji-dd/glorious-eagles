import { useRef, useState } from "preact/hooks";
import UploadIcon from "../assets/upload-icon.svg";
import { CircularProgress } from "@mui/material";

export default function FileUploader(props) {
  let [name, setName] = useState("Upload");
  let [err, setErr] = useState(false);
  let [loading, setLoading] = useState(false);

  const p_style = {
    fontFamily: "DM Sans",
    color: "var(--Text, #4D4D4D)",
    fontSize: "1.875rem",
    lineHeight: "2.33044rem",
    fontWeight: "400",
  };
  const p_err = { color: "#cc0000" };
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
  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  async function handleChange(e) {
    try {
      const fileUploaded = e.target.files[0];
      console.log(fileUploaded); //Remember to remove this
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
          gap: "1.5rem",
          alignItems: "center",
          justifyContent: "center",
          border: "1.864px solid #E6DCFC",
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
