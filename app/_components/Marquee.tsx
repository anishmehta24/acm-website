import React from "react";
import Marquee from "react-fast-marquee";

const CustomMarquee: React.FC = () => {
  const items = ["HACKABIT", "DSA WORKSHOP", "CQM", "LOGIC LOUNGE","CP WORKSHOP","CODEZILLA & LOST CODES"];

  return (
    <div className=" py-8 " >
      <Marquee gradient={false} speed={150}>
        {items.map((item, index) => (
          <div
            key={index}
            // Change the theme from here 
            className="flex items-center text-white text-4xl font-extrabold tracking-wide mx-8 mt-10 mb-12"
          >
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-4"></span>
            {item}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default CustomMarquee;
