export default function ServicesOffer() {
  return (
    <div
      style={{
        width: "90rem",
        height: "53.75rem",
        display: "flex",
        gap: "1.87rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "inline-flex",

          padding: "2.4rem 2.1rem",
          gap: "3.25rem",
          borderRadius: "1.5rem",
          background: "var(--Light-purple, #F1EBFE)",
          backdropFilter: "blur(8px)",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            flexDirection: "column",
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              Faucibus nec gravida ipsum pulvinar vel non.Faucibus nec gravida
              ipsum pulvinar vel non.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "3.3125rem",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
