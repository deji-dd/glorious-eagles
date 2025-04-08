import { useEffect } from "react";
import ContactCard from "../../components/ContactCard";
import Contacts from "../../components/Contacts";

export default function ContactUs() {
  useEffect(() => {
    document.title = "Glorious Eagles | Contact Us";
  }, []);
  return (
    <div style={{ paddingTop: "5.26rem" }}>
      <ContactCard />
      <div className="flex flex-column items-center gap-3 mb-5">
        <h2
          style={{
            fontFeatureSettings: "'clig' off, 'liga' off",
            lineHeight: "2.875rem",
          }}
        >
          Contact us directly
        </h2>
        <p
          style={{
            color: "var(--Text, #4D4D4D)",
            fontSize: "1.5rem",
            lineHeight: "2.71875rem",
          }}
        >
          To contact us, reach out via any of the means of communication below:
        </p>
      </div>
      <Contacts />
    </div>
  );
}
