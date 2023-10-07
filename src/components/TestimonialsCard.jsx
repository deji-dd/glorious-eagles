import { Rating } from "@mui/material";

export default function TestimonialsCard(props) {
  return (
    <div
      style={{
        display: "flex",
        height: "31.0625rem",
        padding: "1.25rem 1.27725rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.25rem",
        borderRadius: "1.703rem",
        border: "1.703px solid var(--Secondary-orange, #FD7528)",
      }}
    >
      <img src={props.img} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.8515rem",
        }}
      >
        <h5>{props.name}</h5>
        <Rating
          value={props.rating}
          readOnly
          sx={{ color: "var(--Secondary-orange, #FD7528)" }}
        />
        <p
          style={{
            width: "22.4585rem",
            textAlign: "center",
            fontSize: "1.25rem",
            lineHeight: "150%",
          }}
        >
          {props.desc}
        </p>
      </div>
    </div>
  );
}
