import lines from "../assets/title-lines.svg";
import React from "react";
import heart from "../assets/heart-svg.svg";

export default function Caring() {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "90rem",
        width: "100%",
        padding: "4rem 4.375rem",
        justifyContent: "center",
        alignItems: "center",
        background: "#EDEBFF",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          background: `url(${lines}) 58rem -3rem no-repeat`,
          height: "13rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "70rem",
          textAlign: "center",
        }}
      >
        Caring for Every Mind, Every Age, Every Story
      </h1>
      <p className="text-center w-[60rem] text-[22px] mt-3 text-[#4D4D4D] mb-5">
        At Glorious Eagles, we provide a blend of Mental Health and ABA Therapy
        services designed to support individuals and families in achieving
        emotional balance, confidence, and independence.
      </p>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-[#190244] rounded-[3rem] py-7 px-12 text-white flex flex-col">
          <h4 className="text-white">Mental Health Services</h4>
          <p className="mt-4">
            Life can feel overwhelming sometimes but you don&apos;t have to face
            it alone. Our compassionate therapists and counsellors walk beside
            you every step of the way, helping you find balance, healing, and
            hope.
            <br />
            <br />
            <br />
            <br />
            We support teens, adults, and families through a variety of care
            options designed to fit your needs.
            <br />
            <br />
            <br />
            <br />
            <div className="grid grid-cols-2">
              <div>
                Our Services Include:
                <div className="gap-2 ps-4 flex flex-col mt-3">
                  <li>Psychotherapy</li>
                  <li>Counselling</li>
                  <li>Medication Management</li>
                  <li>Family & Marriage Counselling</li>
                  <li>Mental Health Therapy</li>
                </div>
                <button className="button-s mt-5 text-white border-white">
                  Learn More
                </button>
              </div>
              <img
                className="self-end me-0 ms-auto"
                width={"75%"}
                src={heart}
                alt=""
              />
            </div>
          </p>
        </div>
        <div className="bg-[#FB8E51] rounded-[3rem] py-7 px-12 text-[#180344] flex flex-col">
          <h4>ABA Therapy Services</h4>
          <p className="mt-4">
            Every child is full of potential. Our ABA (Applied Behaviour
            Analysis) programs are designed to nurture that potential in
            children and young adults ages 2-21.
            <br />
            <br />
            <br />
            <br />
            We focus on building practical life skills, improving communication,
            and supporting positive behavior, all in a caring, supportive
            environment.
            <br />
            <br />
            <br />
            <br />
            <div className="grid grid-cols-2">
              <div>
                We help with:
                <div className="gap-2 ps-4 flex flex-col mt-3">
                  <li>Language & Communication Skills</li>
                  <li>Functional Living Skills</li>
                  <li>Toilet Training</li>
                  <li>School Readiness</li>
                  <li>Parent & Caregiver Training</li>
                  <li>Social Skills & Play</li>
                </div>
                <button className="button-s mt-5 border-[#180344]">
                  Learn More
                </button>
              </div>
              <img
                className="self-end me-0 ms-auto"
                width={"75%"}
                src={heart}
                alt=""
              />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
