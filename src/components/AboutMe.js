import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-pink-500">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Hello! I am a professional Web designer with over 5 years of experience in branding, web design, and visual communication. 
          My mission is to craft visually appealing designs that help brands stand out in their industry. 
          I combine technical skills and artistic creativity to deliver results that leave a lasting impression.
        </p>
        <div className="mt-10">
          <img 
            src="./images/owner.jpeg" 
            alt="About Me" 
            className="w-64 h-64 rounded-full mx-auto shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
