import React from "react";
import Marquee from "react-fast-marquee";

const teamMembers = [
  { id: 1, name: "Name", role: "President", image: "/profile1.jpg" },
  { id: 2, name: "Name", role: "President", image: "/profile2.jpg" },
  { id: 3, name: "Name", role: "President", image: "/profile3.jpg" },
  { id: 4, name: "Name", role: "President", image: "/profile4.jpg" },
  { id: 5, name: "Name", role: "President", image: "/profile5.jpg" },
];

const TeamMarquee: React.FC = () => {
  return (
    <div>
        <div className="flex items-center justify-center">
        <div className="flex-1 h-px bg-gray-500 mx-4"></div>
        <h1 className="text-white text-7xl font-extrabold uppercase " style={{
              letterSpacing: "0.2em",
              fontWeight: "300",
            }}>TEAM</h1>
        <div className="flex-1 h-px bg-gray-500 mx-4"></div>
        </div>

    <div className="relative w-full  bg-gray-900 mt-16 py-8">
         
      <Marquee gradient={false} speed={150}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-60 h-64 bg-[#272448] rounded-lg shadow-lg flex flex-col items-center justify-center text-center mx-4"
          >
            <div className="w-36 h-36 rounded-full bg-gray-300 overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-white text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-400 text-sm">{member.role}</p>
          </div>
        ))}
      </Marquee>
    </div>
    </div>
  );
};

export default TeamMarquee;
