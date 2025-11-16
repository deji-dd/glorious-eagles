/* eslint-disable react/prop-types */
import React from "react";

export default function MentalHealthServicesCard({ img, title, desc }) {
  return (
    <div className="flex flex-col w-full gap-3">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-full bg-black/40 bg-blend-multiply bg-cover bg-center h-[20rem] rounded-2xl flex items-end px-3"
      >
        <p className="text-white font-light mb-3 text-6xl">{title}</p>
      </div>
      <div className="w-full sm:px-5 px-3 py-4 grid sm:grid-cols-3 grid-cols-1 gap-7 items-center justify-center bg-[#F4F4F4] rounded-2xl">
        <p className="sm:col-span-2 font-normal leading-6">{desc}</p>
        <a href="/contact">
          <button className="button-p px-4 sm:mx-auto shrink-0">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
}
