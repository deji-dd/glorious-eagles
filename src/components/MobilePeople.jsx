import { teamMembers } from "../data/teamMembers";
import MobilePeopleCard from "./MobilePeopleCard";

export default function MobilePeople() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "var(--Light-primary, #F6F5FF)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.8rem",
        padding: "3.5rem 1.28rem",
        width: "30rem",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: "2.56rem",
          lineHeight: "3.0256rem",
          letterSpacing: "0.0256rem",
          textAlign: "center",
          margin: 0,
        }}
      >
        Team Members
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.4rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {teamMembers.map((member) => (
          <MobilePeopleCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}
