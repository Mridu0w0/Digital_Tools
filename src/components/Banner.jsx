import React from "react";
import banner from "../assets/banner.png";
import play from "../assets/Play.png";
import dot from "../assets/Rectangle 4.png";

const Banner = () => {
  return (
    <>
      {/* section 1 */}
      <div className="flex flex-col-reverse lg:flex-row justify-between max-w-328 mx-auto mt-10 lg:mt-20 items-center px-6 xl:px-0 gap-12 lg:gap-0">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <button className="bg-[#E1E7FF] rounded-4xl p-2 flex items-center gap-2 text-purple-700 mb-4 text-sm w-fit">
            <img className="pl-2" src={dot} alt="" />
            New: AI-Powered Tools Available
          </button>
          <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl pb-4">
            Supercharge Your <br className="hidden lg:block" /> Digital Workflow
          </h1>
          <p className="text-gray-500 pb-6 text-sm md:text-base">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br className="hidden lg:block" />
            software—all in one place. Start creating faster today. <br className="hidden lg:block" />
            Explore Products
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="btn rounded-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6">
              Explore Products
            </button>
            <button className="btn flex items-center gap-2 rounded-4xl bg-transparent border border-purple-500 text-purple-500 px-6">
              <img src={play} alt="" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="w-full lg:w-auto flex justify-center">
          <img src={banner} alt="Banner" className="max-w-full h-auto" />
        </div>
      </div>

      {/* section 2 */}
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 lg:py-16 my-16 lg:my-20 text-white">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-328 mx-auto px-6 xl:px-0 gap-12 lg:gap-0 text-center lg:text-left">
          <p className="w-full lg:w-auto px-4 lg:px-16 xl:px-32 border-b lg:border-b-0 lg:border-r border-white/30 pb-8 lg:pb-0">
            <span className="font-bold text-5xl lg:text-6xl">50k+</span> <br className="hidden lg:block" />
            <br className="hidden lg:block" />{" "}
            <span className="font-medium text-xl lg:text-2xl mt-2 lg:mt-0 block lg:inline">Active Users</span>
          </p>
          <p className="w-full lg:w-auto px-4 lg:px-16 xl:px-32 border-b lg:border-b-0 lg:border-r border-white/30 pb-8 lg:pb-0">
            <span className="font-bold text-5xl lg:text-6xl">200+</span> <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            <span className="font-medium text-xl lg:text-2xl mt-2 lg:mt-0 block lg:inline">Premium Tools</span>
          </p>
          <p className="w-full lg:w-auto px-4 lg:px-16 xl:px-32">
            <span className="font-bold text-5xl lg:text-6xl">4.9</span> <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            <span className="font-medium text-xl lg:text-2xl mt-2 lg:mt-0 block lg:inline">Rating</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;