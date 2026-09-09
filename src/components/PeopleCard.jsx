import { defaultAvatar } from "../data/teamMembers";

export default function PeopleCard({
  name,
  role,
  degree,
  credentials,
  image,
  imagePosition,
  imageStyle,
}) {
  return (
    <div
      className="team-card"
      style={{
        width: "18rem",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #E7DDFD",
        background: "var(--White, #FFF)",
        borderRadius: "0.75rem",
        overflow: "hidden",
        boxShadow: "0 4px 14px rgba(24, 3, 68, 0.05)",
        boxSizing: "border-box",
      }}
    >
      {/* Picture Space */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "14rem",
          width: "100%",
          backgroundColor: "#FBFBFF",
          borderBottom: "1px solid #F1EBFE",
          overflow: "hidden",
        }}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: imagePosition || "center center",
              ...imageStyle,
            }}
          />
        ) : (
          <img
            src={defaultAvatar}
            alt={name}
            style={{
              width: "5.5rem",
              height: "auto",
            }}
          />
        )}
      </div>

      {/* Member Info */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "1.25rem 1rem 1.5rem",
          gap: "0.35rem",
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            color: "var(--Primary-colour, #180344)",
            fontSize: "1.25rem",
            fontWeight: 700,
            lineHeight: "1.5rem",
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
          }}
        >
          {name}
        </h3>

        {role && (
          <p
            style={{
              color: "#453269",
              fontSize: "1rem",
              fontWeight: 600,
              lineHeight: "1.3rem",
              margin: 0,
              fontFamily: "'Lato', sans-serif",
            }}
          >
            {role}
          </p>
        )}

        {degree && (
          <p
            style={{
              color: "#374151",
              fontSize: "0.9rem",
              fontWeight: 500,
              lineHeight: "1.25rem",
              margin: 0,
              fontFamily: "'Lato', sans-serif",
            }}
          >
            {degree}
          </p>
        )}

        {credentials && (
          <p
            style={{
              color: "#6B7280",
              fontSize: "0.85rem",
              fontWeight: 400,
              lineHeight: "1.2rem",
              margin: 0,
              fontFamily: "'Lato', sans-serif",
            }}
          >
            {credentials}
          </p>
        )}
      </div>
    </div>
  );
}
