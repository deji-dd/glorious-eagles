import { useEffect } from "react";
import MobileContactForm from "../../components/MobileContactForm";
import MobileContacts from "../../components/MobileContacts";

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
