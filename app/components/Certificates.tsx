import React from "react";
import SectionTitle from "./SectionTitle";
import { certificatesData } from "./data-helper";
import Image from 'next/image'

const Certificates = ({id=""}:{ id: string; } ) => {

  return (
    <div id={id}  className="container mx-auto px-4 py-8">
      <SectionTitle title="Certificates" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificatesData.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            className="block text-grayblack group hover:shadow-lg rounded-lg border border-gray-200 overflow-hidden bg-white transition-shadow duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center p-4">
              {/* Logo */}
              <div className="flex-shrink-0">
              <Image 
                  width={800}
                  height={500} 
                  src={cert.logo}
                  alt="Logo"
                  className="w-16 h-16 object-contain rounded-md"
                />
              </div>
              {/* Content */}
              <div className="ml-4">
                <h4 className="text-[16px] font-semibold text-blacktext group-hover:text-green-500 transition-colors">
                  {cert.title}
                </h4>
                <div className="text-sm text-gray-500 mt-1">
                  {/* <span className="block">Membership ID: {cert.membershipId}</span> */}
                  <span className="block">{cert.date}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
