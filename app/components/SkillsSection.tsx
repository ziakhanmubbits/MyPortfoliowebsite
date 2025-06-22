import React from "react";
import SectionTitle from "./SectionTitle";
import { skillsData } from "./data-helper";
import Link from "next/link";

const SkillsSection = ({id=""}:{ id: string; } ) => {
 
  return (
    <div id={id}  className="container mx-auto px-4 py-8">
             <SectionTitle title={skillsData.title} />
            <div className="space-y-4">
            {skillsData.tools.map((skilset, index)=>(
                       <div key={index}>
                        <h3 className="text-lg font-medium">{skilset.name}</h3>
                          <div className="justify-content-start w-100 mb-4 text-start">
                            {skilset.skillSet.map((skillName, index)=>(
                            <Link target='_blank' key={index} href={skillName.skillNameLink} type="button" data-te-ripple-init="" className="my-2 inline-block rounded-full bg-neutral-200 px-3 mx-[2px] pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-700 shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-400 active:shadow-lg dark:bg-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-500 dark:focus:bg-neutral-500 dark:active:bg-neutral-400">
                              {skillName.name}
                            </Link> ))} 
                          </div> 
                          </div>
                      ))}
            </div>  
     </div>
  );
};

export default SkillsSection;
