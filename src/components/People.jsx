import { teamMembers } from "../data/teamMembers";
import PeopleCard from "./PeopleCard";

export default function People() {
  return (
    <div
      style={{
        maxWidth: "90rem",
        width: "100%",
        display: "flex",
        backgroundColor: "var(--Light-primary, #F6F5FF)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "3.5rem",
        padding: "5rem 4rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <h1
          style={{
            lineHeight: "4.5rem",
            color: "var(--Primary-colour, #180344)",
            textAlign: "center",
            margin: 0,
          }}
        >
          Team Members
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          maxWidth: "80rem",
          width: "100%",
        }}
      >
        {teamMembers.map((member) => (
          <PeopleCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}
