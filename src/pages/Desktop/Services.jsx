import ServicesOffer from "../../components/ServicesOffer";
import ServicesWhite from "../../components/ServicesWhite";
import Img1 from "../../assets/services-1.svg";
import Img2 from "../../assets/services-2.svg";
import Img3 from "../../assets/services-3.svg";
import Img4 from "../../assets/services-4.svg";
import Img5 from "../../assets/services-5.svg";
import Img7 from "../../assets/services-7.svg";
import Img8 from "../../assets/services-8.svg";
import Img9 from "../../assets/services-9.svg";
import { useRef } from "react";
import ServicesPurple from "../../components/ServicesPurple";
import Transform from "../../components/Transform";
import { useEffect } from "preact/hooks";

export default function Services() {
  const ref = useRef(null);
  useEffect(() => {
    document.title = "Glorious Eagles | Services";
  }, []);

  return (
    <div>
      <ServicesOffer
        scroll={() => {
          ref.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div ref={ref}>
        <ServicesWhite
          img={Img1}
          title={"Language Acquisition"}
          desc={
            "Our Language Acquisition service focuses on helping individuals of all ages develop effective communication skills. Through personalized strategies and evidence-based techniques, we empower clients to enhance their social interactions and achieve greater independence in daily life."
          }
        />
      </div>
      <ServicesPurple
        img={Img2}
        title={"School-Age Programs"}
        desc={
          "Our School-Age Programs offer personalized support for students, combining education and behavioral strategies. We collaborate with families and educators to foster academic success and social development, creating an inclusive environment for growth."
        }
      />
      <ServicesWhite
        img={Img3}
        title={"Functional Living Skills"}
        desc={
          "Our Functional Living Skills service focuses on equipping individuals with essential life skills. Through personalized instruction and practical training, we empower our clients to gain independence in daily activities such as self-care, meal preparation, and household chores. By fostering these skills, we aim to enhance their overall quality of life and promote self-sufficiency."
        }
      />
      <ServicesPurple
        img={Img4}
        title={"Parent Training"}
        desc={
          "Our Parent Training service is designed to provide caregivers with the knowledge and tools they need to support their child's development effectively. Through personalized coaching and guidance, we empower parents to implement evidence-based strategies at home, strengthening the bond with their child and promoting positive behavior. "
        }
      />
      <ServicesWhite
        img={Img5}
        title={"School Readiness"}
        desc={
          "Our School Readiness program prepares young learners for a successful academic journey. We focus on developing crucial skills such as early literacy, numeracy, and social interaction in a fun and engaging way. Our aim is to instill confidence and enthusiasm as they take their first steps into school."
        }
      />
      <ServicesPurple
        img={Img7}
        title={"Personalised Therapy"}
        desc={
          "Our Personalized Therapy service prioritizes individual needs, crafting targeted interventions for optimal progress. Our experienced team works closely with clients, employing evidence-based techniques to foster growth and well-being. We believe in the potential of personalized care to drive meaningful change and empower individuals to thrive."
        }
      />
      <ServicesWhite
        img={Img8}
        title={"Behaviour Reduction"}
        desc={
          "Our Behavior Reduction service is dedicated to addressing challenging behaviors with effective, evidence-based strategies. Our experienced team collaborates closely with clients and their families to analyze behavior patterns,  and create a more positive and functional environment. We are committed to promoting lasting behavior change."
        }
      />
      <ServicesPurple
        img={Img9}
        title={"Toilet training"}
        desc={
          "Our Toilet Training service offers a structured and supportive approach to help children develop essential toileting skills. We works closely with families, providing strategies and guidance to make this transition smooth.  We're dedicated to fostering independence and confidence in children as they achieve this important milestone."
        }
      />
      <Transform />
    </div>
  );
}
