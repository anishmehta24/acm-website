import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function AboutUs() {
  return (
    <div className=" py-16 px-8 ">
      {/* ABOUT US heading outside the content box */}
      <div className="flex justify-center mb-8">
      <div className="flex-1 h-px bg-gray-500 mx-4"></div>
        <h1 className="text-8xl text-white text-center mb-10"
            style={{
              letterSpacing: "0.2em",
              fontWeight: "300",
            }}>ABOUT US</h1>
            <div className="flex-1 h-px bg-gray-500 mx-4"></div>
      </div>

      {/* Content box */}
      <div className="bg-[#1A182E] text-white p-8 rounded-3xl max-w-7xl ml-24 mt-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
             <p className="mb-10 text-gray-400 text-center">@acmbitmesra</p>
            <div className="flex items-center mb-4 space-x-4 justify-center">
              <img src="/acm_logo.png" alt="Logo 1" className="h-12" />
              <img src="/bitm_logo.png" alt="Logo 2" className="h-12" />
            </div>
           
            <div className=" rounded-lg mt-60">
              <img src="Rectangle 24.svg" alt="DSA Workshop" className="w-full mb-4 rounded-lg" />
            </div>
          </div>

          {/* Right Section */}
          <div className=''>
            <img src="/aboutus1.jpeg" alt="Image" className="rounded-lg w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold mb-4 mt-20">Subheading</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur. Nulla id nisl pellentesque cum. Eros pellentesque aliquam cursus
              dignissim. Pulvinar et id arcu nibh tristique. Vitae at volutpat scelerisque a eu cras sit nibh purus.
              Diam posuere vulputate eu nunc integer. Consequat mattis id eu nam id. Eros sed bibendum diam etiam
              penatibus amet. Netus elit id nec id non sed in ac. Ornare eget sagittis pellentesque id.
            </p>
            <div className="bottom-0 left-0 mt-[280px] space-x-4 flex items-center">
              <Link href={''}><FaFacebook /></Link>
              <Link href={''}><FaLinkedin/></Link>
              <Link href={''}><FaInstagram/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
