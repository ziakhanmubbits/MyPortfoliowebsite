import React from "react";
import { data } from "./data-helper";

const HomePhotoWithDetails = ({id=""}:{ id: string; } ) => {

  return (
    <div id={id} className="flex mobile-space flex-col md:flex-row items-center md:items-start justify-center  space-y-8 md:space-y-0 md:space-x-8 py-20  gap-4">
      {/* Photo Section */}
      <div className="home-photo relative w-96 h-96 bg-white rounded-full border-[14px] border-white overflow-hidden box-shadow ">
        <div
          className="hp-inner bg-center bg-no-repeat bg-cover h-full"
          style={{
            backgroundImage: "url(/images/me.jpg)",
            backgroundPosition: "calc(55% - 0.13672px) calc(50% + -1.21141px)",
          }}
        ></div>
      </div>

      {/* Details Section */}
      <div className="text-center mobile-space md:text-left max-w-xl pt-16">
        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>

        {/* Description */}
        <p className="mt-4 text-grayblack">{data.description}</p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a
            href={data.resumeLink}
            download
            className="px-6 py-2 border-2 border-green text-grayblack rounded-full shadow-md hover:bg-green"
          >
            Download Resume
          </a>
          <a
            target="_blank"
            href={data.contactLink}
            className="px-6 text-grayblack py-2 bg-gray-200 text-gray-800 rounded-full shadow-md hover:bg-gray-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePhotoWithDetails;
