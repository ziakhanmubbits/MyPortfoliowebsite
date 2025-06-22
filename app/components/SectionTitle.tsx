import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-left mb-8">
      <h2 className="text-[21px] font-semibold text-blacktext inline-block relative">
        {title}
        <span className="absolute left-1/4 bottom-[-5px] h-[2px] w-1/2 bg-green transform -translate-x-1/2"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
