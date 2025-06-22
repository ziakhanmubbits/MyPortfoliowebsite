import React from "react";
import {
  FaReact,
  FaCode,
  FaServer,
  FaDatabase,
  FaAws,
  FaPaintBrush,
  FaWordpress,
  FaMobileAlt,
  FaCogs,
} from "react-icons/fa"; // Updated icons
import { GiStack } from "react-icons/gi";

import SectionTitle from "./SectionTitle";
import { services } from "./data-helper";

const WhatIDo = ({id=""}:{ id: string; }) => {

  return (
    <section id={id} className="py-12">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <SectionTitle title="What I Do" />
        {/* Service Cards */}
        <div className="flex flex-wrap">
          {services.map((service, index) => (
            <div key={index} className="p-6 transition-shadow flex  sm:w-full grid-box gap-8">
              <div className="flex justify-center mb-4">
                {service.icon == "fa-react" && (
                  <FaReact className="text-4xl text-blue-500" />
                )}
                {service.icon == "fa-stack" && (
                   <GiStack className="text-4xl text-green-500" />
                )}
                {service.icon == "fa-code" && (
                  <FaCode className="text-4xl text-green-500" />
                )}
                {service.icon == "fa-server" && (
                  <FaServer className="text-4xl text-orange-500" />
                )}
                {service.icon == "fa-database" && (
                  <FaDatabase className="text-4xl text-purple-500" />
                )}
                {service.icon == "fa-aws" && (
                  <FaAws className="text-4xl text-yellow-500" />
                )}
                {service.icon == "fa-paint-brush" && (
                  <FaPaintBrush className="text-4xl text-pink-500" />
                )}
                {service.icon == "fa-wordpress" && (
                  <FaWordpress className="text-4xl text-blue-700" />
                )}
                {service.icon == "fa-mobile-alt" && (
                  <FaMobileAlt className="text-4xl text-teal-500" />
                )} 
                {service.icon == "fa-cogs" && (
                  <FaCogs className="text-4xl text-green-500" />
                )}
              </div>
              <div>
                <h3 className="text-[16px] text-left font-semibold text-blacktext mb-2">
                  {service.title}
                </h3>
                <p className="text-grayblack text-left text-sm">
                  <div dangerouslySetInnerHTML={{ __html: service.description }} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
