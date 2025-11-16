import React from "react";
import journeyBG from "../assets/journey-bg.svg";

export default function Journey() {
  return (
    <div className="px-5">
      <div className="bg-[#180344] grid px-5 items-center grid-cols-2 py-5 rounded-3xl w-full">
        <div className="text-white w-[80%]">
          <h3 className="text-white">Let&apos;s Begin the Journey Together</h3>
          <p className="mt-4 mb-5">
            Whether you&apos;re seeking help for yourself, your child, or your
            family, we&apos;re here to support you.
          </p>
          <p className="">📍 Visit Us: 1865 132nd NW Coon Rapids MN 55448</p>
        </div>
        <img className="me-0 ms-auto" width={"80%"} src={journeyBG} alt="" />
      </div>
    </div>
  );
}
