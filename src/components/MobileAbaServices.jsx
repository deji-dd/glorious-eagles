import Img1 from "../assets/aba-therapy-1.png";
import MobilePictureFrame from "./MobilePictureFrame";
import Img2 from "../assets/aba-therapy-2.png";
import Img3 from "../assets/aba-therapy-3.png";
import Img4 from "../assets/aba-therapy-4.png";
import Img5 from "../assets/aba-therapy-5.png";
import Img6 from "../assets/aba-therapy-6.png";

export default function MobileAbaServices() {
  return (
    <div
      style={{
        maxWidth: "30rem",
        width: "100%",
        display: "flex",
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
            "We help children build the skills they need, like communication, social interaction, and following instructions, to thrive in a school environment."
          }
          title={"Pre-School Readiness"}
          img={Img1}
        />
        <MobilePictureFrame
          desc={
            "We offer one-on-one therapy sessions tailored to each child’s unique needs, using structured learning and play to encourage progress."
          }
          title={"Direct Intervention"}
          img={Img2}
        />
        <MobilePictureFrame
          desc={
            "We provide structured and intensive support for children with significant behavioral challenges"
          }
          title={"High-Intensity Behavior Reduction"}
          img={Img3}
        />
        <MobilePictureFrame
          desc={
            "We work on everyday skills such as communication, problem-solving, and social interactions to help children become more independent"
          }
          title={"Skill Development"}
          img={Img4}
        />
        <MobilePictureFrame
          desc={
            "We guide children step by step toward bathroom independence using proven ABA techniques."
          }
          title={"Toilet Training"}
          img={Img5}
        />
        <MobilePictureFrame
          desc={
            "We equip families with practical strategies to support their child’s progress at home and in daily life."
          }
          title={"Parent & Caregiver Training"}
          img={Img6}
        />
      </div>
    </div>
  );
}
