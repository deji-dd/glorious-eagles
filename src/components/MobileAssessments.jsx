import Img1 from "../assets/aba-service-1.png";
import Img2 from "../assets/aba-service-2.png";
import BG from "../assets/elipses.svg";
import MobilePictureFrame from "./MobilePictureFrame";

export default function MobileAssessments() {
  return (
    <div
      style={{
        maxWidth: "30rem",
        width: "100%",
        display: "flex",
        background: `url(${BG}) -11rem -5rem no-repeat`,
        gap: "3rem",
        flexDirection: "column",
        padding: "2.4rem 2.5rem",
        marginTop: "5rem",
      }}
    >
      <h3>Assessments</h3>
      <div style={{ display: "flex", gap: "2rem", flexDirection: "column" }}>
        <MobilePictureFrame
          desc={
            "We conduct a thorough assessment to understand your child’s strengths, challenges, and unique needs."
          }
          title={"Comprehensive Multi-Disciplinary Evaluation (CMDE)"}
          img={Img1}
        />
        <MobilePictureFrame
          desc={
            "We create a customized therapy plan designed to help your child grow and succeed based on their abilities and goals."
          }
          title={"Individual Treatment Program (ITP)"}
          img={Img2}
        />
      </div>
    </div>
  );
}
