import Clipboard from "../assets/clipboard.svg";
import Puzzle from "../assets/puzzle.svg";
import Heart from "../assets/heart.svg";
import { useState } from "preact/hooks";

export default function ServicesOffer(props) {
  const [selected, setSelected] = useState(0);

  const div_style = {
    display: "inline-flex",
    padding: "2.4rem 2.1rem",
    borderRadius: "1.5rem",
    background: "var(--Light-purple, #F1EBFE)",
    backdropFilter: "blur(8px)",
    flexDirection: "column",
    width: "25rem",
    alignItems: "center",
    paddingTop: "5rem",
    justifyContent: "space-between",
    cursor: "pointer",
  };

  const selected_style = {
    ...div_style,
    borderColor: "#180344",
    borderWidth: "2px",
    borderStyle: "solid",
  };

  return (
    <div
      style={{
        maxWidth: "90rem",
        display: "flex",
        gap: "3rem",
        justifyContent: "center",
        padding: "2.4rem 0rem 0rem",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          padding: "2.4rem 2.1rem",
          borderRadius: "1.5rem",
          background: "var(--Light-purple, #F1EBFE)",
          backdropFilter: "blur(8px)",
          width: "80rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexDirection: "column",
          }}
        >
          <h1 style={{ lineHeight: "5.375rem" }}>Services we offer</h1>
          <p
            style={{
              width: "57.25rem",
              color: "var(--Text, #4D4D4D)",
              fontSize: "1.5rem",
              lineHeight: "2.5rem",
            }}
          >
            At Glorious Eagles, we provide personalized therapy and support to
            help children develop essential skills, improve behaviors, and gain
            independence.
          </p>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <div
            style={selected === 1 ? selected_style : div_style}
            onClick={() => {
              props.scroll1();
              setSelected(1);
            }}
          >
            <img src={Clipboard} />
            <h4>Assessments</h4>
          </div>
          <div
            style={selected === 2 ? selected_style : div_style}
            onClick={() => {
              props.scroll2();
              setSelected(2);
            }}
          >
            <img src={Puzzle} />
            <h4>ABA Therapy</h4>
          </div>
          <div
            style={selected === 3 ? selected_style : div_style}
            onClick={() => {
              props.scroll3();
              setSelected(3);
            }}
          >
            <img src={Heart} />
            <h4 style={{ textAlign: "center" }}>
              Psychotherapy & Additional Support
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
