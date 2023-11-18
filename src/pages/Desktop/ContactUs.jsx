import { useEffect } from "preact/hooks";
import ContactCard from "../../components/ContactCard";
import ContactForm from "../../components/ContactForm";
import Contacts from "../../components/Contacts";

export default function ContactUs() {
  useEffect(() => {
    document.title = "Glorious Eagles | Contact Us";
  }, []);
  return (
    <div style={{ paddingTop: "5.26rem" }}>
      <ContactCard />
      <ContactForm />
      <Contacts />
    </div>
  );
}
