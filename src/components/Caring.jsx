import lines from "../assets/title-lines.svg";
import React from "react";

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
            Our Services Include:
            <ol className="gap-2 flex flex-col mt-3">
              <li>Psychotherapy</li>
              <li>Counselling</li>
              <li>Medication Management</li>
              <li>Family & Marriage Counselling</li>
              <li>Mental Health Therap</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}
