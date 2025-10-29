import React from "react";
import journeyBG from "../assets/journey-bg.svg";

export default function Journey() {
  return (
    <div className="px-5">
      <div className="bg-[#180344] grid px-5 grid-cols-2 py-5 rounded-3xl w-full">
        <div className="text-white w-[80%]">
          <h3 className="text-white">Let&apos;s Begin the Journey Together</h3>
          <p className="mt-4">
            Whether you&apos;re seeking help for yourself, your child, or your
            family, we&apos;re here to support you.
          </p>
          <div className="flex mt-4 gap-2">
            <p className="">📞 Call Us: </p>
            <div className="flex gap-2 flex-col">
              <p>+1 612-4566-090</p>
              <p>651-263-7927</p>
              <p>9522209361</p>
            </div>
          </div>

          <p className="mt-3">📧 Email: info@gloeiouseagles.com</p>
          <p className="mt-3">
            📍 Visit Us: 1865 132nd NW Coon Rapids MN 55448
          </p>
        </div>
        <img className="me-0 ms-auto" width={"80%"} src={journeyBG} alt="" />
      </div>
    </div>
  );
}
