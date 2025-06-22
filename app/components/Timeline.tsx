 import SectionTitle from "./SectionTitle";
import { educationData, experienceData } from "./data-helper";

const Timeline = ({id=""}:{ id: string; } ) => {

  const renderTimeline = ({title, data}: {title: string, data: any[]}) => (
    <div className="mb-12">
      {/* Section Title */}
      <div className="mb-6">
       <SectionTitle title={title} />
      </div>

      {/* Timeline */}
      <div className="relative">
        {data.map((item, index) => (
          <div key={index} className="relative mb-8 pl-12">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200"></div>
            {/* Dot */}
            <div className="absolute left-3 top-1 w-3 h-3 bg-green rounded-full"></div>

            {/* Content */}
            <h5 className="text-sm font-medium text-gray-600 inline-block bg-white px-3 py-1 rounded-full border border-green mb-2">
              {item.period}
            </h5>
            <span className="block text-sm text-grayblack  mb-1">{item.company}</span>
            <h4 className="text-blacktext font-semibold">{item.title}</h4>
            <p className="text-grayblack mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

return (
    <div id={id} className="container mx-auto px-4 py-8 flex mobile-block">
        {/* Education Section */}
        {renderTimeline({ title: "Education", data: educationData })}

        {/* Experience Section */}
        {renderTimeline({ title: "Experience", data: experienceData})}
    </div>
);
};

export default Timeline;
