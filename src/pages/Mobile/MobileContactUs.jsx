import { useEffect } from "react";
import MobileContacts from "../../components/MobileContacts";
import MobileContactForm from "../../components/MobileContactForm";

export default function MobileContactUs() {
  useEffect(() => {
    document.title = "Glorious Eagles | Contact Us";
  }, []);
  return (
    <div>
      <MobileContactForm />
      <MobileContacts />
    </div>
  );
}
