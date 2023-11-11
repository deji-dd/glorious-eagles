import { useEffect } from "preact/hooks";
import MobileContacts from "../../components/MobileContacts";
import MobileContactForm from "../../components/MobileContactForm";
import MobileTransform from "../../components/MobileTransofrm";

export default function MobileContactUs() {
  useEffect(() => {
    document.title = "Glorious Eagles | Contact Us";
  }, []);
  return (
    <div>
      <MobileContacts />
      <MobileContactForm />
      <MobileTransform />
    </div>
  );
}
