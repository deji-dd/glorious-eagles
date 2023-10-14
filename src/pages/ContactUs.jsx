import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import Contacts from "../components/Contacts";
import Transform from "../components/Transform";

export default function ContactUs() {
  return (
    <div style={{ paddingTop: "5.26rem" }}>
      <ContactCard />
      <Contacts />
      <ContactForm />
      <Transform />
    </div>
  );
}
