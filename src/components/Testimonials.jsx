import TestimonialsCard from "./TestimonialsCard";
import Testimonial1 from "../assets/testimonial1.svg";
import Testimonial2 from "../assets/testimonial2.svg";
import Testimonial3 from "../assets/testimonial3.svg";

export default function Testimonials() {
  return (
    <div
      style={{
        display: "flex",
        padding: "4.5rem 4rem",
        justifyContent: "center",
        alignItems: "center",
        background: "#F6F5FF",
        width: "90rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "0.375rem",
          }}
        >
          <p
            style={{
              color: "var(--Secondary-orange, #FD7528)",
              textAlign: "center",
              fontSize: "1rem",
              letterSpacing: "0.03rem",
              textTransform: "uppercase",
            }}
          >
            Testimonials
          </p>
          <h1>What our clients say about us.</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3.40606rem",
            alignItems: "center",
          }}
        >
          <TestimonialsCard
            img={Testimonial1}
            name={"James Pattinson"}
            rating={4}
            desc={
              "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices Scelerisque risus tortor donec ipsum consequat semper consequatScelerisque risus tortor donec ipsum consequat semper consequat.”"
            }
          />
          <TestimonialsCard
            img={Testimonial2}
            name={"Greg Stuart"}
            rating={5}
            desc={
              "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices Scelerisque risus tortor donec ipsum consequat semper consequatScelerisque risus tortor donec ipsum consequat semper consequat.”"
            }
          />
          <TestimonialsCard
            img={Testimonial3}
            name={"Trevor Mitchell"}
            rating={3}
            desc={
              "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices Scelerisque risus tortor donec ipsum consequat semper consequatScelerisque risus tortor donec ipsum consequat semper consequat.”"
            }
          />
        </div>
        <button className={"button-p"}>Contact us</button>
      </div>
    </div>
  );
}
