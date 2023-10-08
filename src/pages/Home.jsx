import Different from "../components/Different";
import Essentials from "../components/Essentials";
import Offer from "../components/Offer";
import Testimonials from "../components/Testimonials";
import Unlocking from "../components/Unlocking";
import Work from "../components/Work";
import Transform from "../components/Transform";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "1.25rem", flexDirection: "column" }}>
      <Unlocking />
      <Different />
      <Essentials />
      <Offer />
      <Work />
      <Testimonials />
      <Transform
        title={"Work with Us to Transform Lives Through ABA Excellence"}
        desc={
          "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices Scelerisque risus tortor donec ipsum consequat semper consequatScelerisque risus tortor donec ipsum consequat semper consequat.”"
        }
        btn={"Apply to work with us"}
      />
      <Footer />
    </div>
  );
}
