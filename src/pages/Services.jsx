import ServicesOffer from "../components/ServicesOffer";
import ServicesWhite from "../components/ServicesWhite";
import Img from "../assets/services-img.svg";
import { useRef } from "react";
import ServicesPurple from "../components/ServicesPurple";
import Transform from "../components/Transform";
import Footer from "../components/Footer";

export default function Services() {
  const ref = useRef(null);

  return (
    <div>
      <ServicesOffer
        scroll={() => {
          ref.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div ref={ref}>
        <ServicesWhite
          img={Img}
          title={"Language Acquisition"}
          desc={
            " Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate."
          }
        />
      </div>
      <ServicesPurple
        img={Img}
        title={"School-Age Programs"}
        desc={
          " Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate."
        }
      />
      <ServicesWhite
        img={Img}
        title={"Functional Living Skills"}
        desc={
          " Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate."
        }
      />
      <ServicesPurple
        img={Img}
        title={"Parent Training"}
        desc={
          " Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate."
        }
      />
      <ServicesWhite
        img={Img}
        title={"School Readiness"}
        desc={
          " Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate."
        }
      />
      <ServicesPurple
        img={Img}
        title={"Personalised Therapy"}
        desc={
          " Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate."
        }
      />
      <ServicesWhite
        img={Img}
        title={"Behaviour Reduction"}
        desc={
          " Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum. Quam vel aliquam sit vulputate."
        }
      />
      <Transform
        title={"Contact us today to  get started"}
        desc={
          "“Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices Scelerisque risus tortor donec ipsum consequat semper consequatScelerisque risus tortor donec ipsum consequat semper consequat.”"
        }
        btn={"Contact Us"}
      />
    </div>
  );
}
