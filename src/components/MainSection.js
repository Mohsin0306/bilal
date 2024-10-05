import React from "react";

const MainSection = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-800 via-black to-gray-900 text-white">
      <div className="relative bg-black p-10 text-center rounded-lg max-w-lg shadow-lg">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-pink-500 rounded-full opacity-30 -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full opacity-30 -z-10 animate-pulse"></div>

        <h1 className="text-pink-500 text-sm tracking-wide uppercase">I am a Professional</h1>
        <h2 className="text-5xl font-extrabold text-white mt-2">Web Developer</h2>
        <p className="text-gray-400 mt-4">
          With years of experience in crafting compelling visual designs, I bring creativity and attention to detail.
        </p>
        <a href="#contact" className="bg-pink-500 px-6 py-2 mt-6 rounded-full text-sm uppercase tracking-wide hover:bg-pink-600 transition duration-300 button" style={{marginTop:'10px'}}>
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default MainSection;
