"use client";
import Image from "next/image";
import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "./data-helper";

const Portfolio = ({id=""}:{ id: string; } ) => {
  const [showCard, setShowCard] = useState<string>("all");

  const handleProject = (category: any) => {
    setShowCard(category);
  };
  return (
    <>
      <section id={id} className="pt-20 px-5 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="slg:px-2 px-5">
          <SectionTitle title="Portfolio" />
          {/* note with icon  */}
          {/* bellow projects is just old and small projects there is a lot more will add soon */}
          <div className="mx-auto mb-12  flex">
            <span className="relative  mr-4 top-3">
              <svg className="w-8 h-8 inline-block text-green" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"
                ></path>
              </svg>
            </span>
            <p className="mt-4 text-grayblack">
             {/* refine version 
              */}
              Here are some of the projects I've worked in the start of my development journey. I will be adding more professional and complex projects soon.
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`px-6 py-2 border-2 border-green text-grayblack  rounded-full shadow-md hover:bg-green
                    ${
                      showCard === "all"
                        ? "bg-green  text-white"
                        : "inactiveClasses"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("websites")}
                    className={`px-6 py-2 border-2 border-green text-grayblack  rounded-full shadow-md hover:bg-green ${
                      showCard === "websites"
                        ? "bg-green  text-white"
                        : "inactiveClasses"
                    }`}
                  >
                    Websites
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("web-apps")}
                    className={`px-6 py-2 border-2 border-green text-grayblack  rounded-full shadow-md hover:bg-green ${
                      showCard === "web-apps"
                        ? " bg-green text-white"
                        : "inactiveClasses"
                    }`}
                  >
                    FE (Web-Apps)
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("mobile-apps")}
                    className={`px-6 py-2 border-2 border-green text-grayblack  rounded-full shadow-md hover:bg-green ${
                      showCard === "mobile-apps"
                        ? "bg-green  text-white"
                        : "inactiveClasses"
                    }`}
                  >
                    Mobile Apps
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("other")}
                    className={`px-6 py-2 border-2 border-green text-grayblack  rounded-full shadow-md hover:bg-green                    ${
                      showCard === "other"
                        ? "bg-green  text-white"
                        : "inactiveClasses"
                    }`}
                  >
                    other
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {projects(showCard).map((project, index) => (
              <div
                key={index}
                className={`w-full slg:px-1 px-4 md:w-1/2 xl:w-1/3 ${
                  project.showCard === "all" ||
                  project.showCard === project.category.toLowerCase()
                    ? "block"
                    : "hidden"
                }`}
              >
                <PortfolioCard
                  key={project.id}
                  showCard={project.showCard}
                  category={project.category}
                  tags={project.tags}
                  ImageHref={project.ImageHref}
                  title={project.title}
                  button={project.button}
                  buttonHref={project.buttonHref}
                  github={project.github}
                  behance={project.behance}
                  detailPageLink={project.title
                    .toLowerCase()
                    .replace(/\s/g, "-")}
                />
              </div>
            ))}
            {showCard === "mobile-apps" && (
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                  <h4 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                    No Projects
                  </h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
  tags,
  github,
  behance,
  detailPageLink,
}: {
  showCard: string;
  category: string;
  ImageHref: string;
  title: string;
  button: string;
  buttonHref: string;
  tags: string[];
  github: string;
  behance: string;
  detailPageLink?: string;
}) => {
  return (
    <div className="relative mb-12">
      {/* <Link href={`/portfolio/${detailPageLink}`}> */}
        <div className="overflow-hidden rounded-lg bg-gradientemerald slg:h-60 h-80 portfolio-item relative group shadow-lg transition-transform transform hover:scale-105">
          <Image
            src={ImageHref}
            alt="portfolio"
            className="w-full"
            width={500}
            height={500}
          />
        </div>
        <div className="bg-gray-100 relative z-10 px-3 bottom-5 text-center rounded-lg shadow-lg slg:mx-2 mx-7 py-2 bg-slate-100">
          <h3 className="mb-2 text-[16px] font-semibold text-blacktext ">{title}</h3>
          {/* <div className="flex justify-center mmd:flex-wrap mb-1">
            {tags?.map((category, index) => (
              <span
                key={index}
                className={`mr-1 pt-1 text-xs h-6 ${
                  category.length == 3
                    ? "w-8"
                    : category.length <= 8
                    ? "w-16"
                    : "w-20"
                } font-semibold text-white rounded-full border-l   bg-green hover:bg-slate-300 hover:text-gray-500 cursor-pointer`}
              >
                {category}
              </span>
            ))}
          </div>
          <div className="flex justify-center flex-wrap mb-1">
             <Link
              target="_blank"
              href={buttonHref}
              className="hover:bg-slate-200 mr-2  inline-block text-grayblack  py-1 text-sm font-semibold transition border rounded-md border-gray-400 slg:px-2 px-4 text-body-color hover:border-primary hover:bg-primary hover:text-slate-700"
            >
              {button}
            </Link> 
             {behance !== "" && (
              <Link
                target="_blank"
                href={buttonHref}
                className="hover:bg-slate-200 mr-2  inline-block text-grayblack  py-1 text-sm font-semibold transition border rounded-md slg:px-2 px-2 border-gray-400 text-body-color hover:border-primary hover:bg-primary hover:text-slate-700"
              >
                Portfolio
              </Link>
            )} 
             {github !== "" ? (
              <Link
                target="_blank"
                href={github}
                className="hover:bg-slate-200 mr-2  inline-block text-grayblack  py-1 text-sm font-semibold transition border rounded-md slg:px-2 px-4 border-gray-400 text-body-color hover:border-primary hover:bg-primary hover:text-slate-700"
              >
                Github
              </Link>
            ) : (
              <div className="hover:bg-slate-200 mr-2  border-gray-400 inline-block text-grayblack  py-1 text-sm font-semibold transition border rounded-md slg:px-2 px-2 text-body-color hover:border-green hover:bg-primary hover:text-slate-700">
                {" "}
                Code Privated
              </div>
            )} 
          </div> */}
        </div>
      {/* </Link> */}
    </div>
  );
};
