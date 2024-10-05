import React from "react";

const Services = () => {
  return (
    <div id="services" className="py-20 bg-gray-800">
      <h2 className="text-center text-4xl font-bold text-white">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 px-10">
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-pink-500">Web Design</h3>
          <p className="text-gray-300 mt-2">
            Creating modern and mobile-friendly websites that meet your needs.
          </p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-pink-500">Graphic Design</h3>
          <p className="text-gray-300 mt-2">
            Professional branding, logos, and graphic materials for your business.
          </p>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-pink-500">SEO Optimization</h3>
          <p className="text-gray-300 mt-2">
            Optimizing websites for search engines to help you rank higher.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
