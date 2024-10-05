import React from "react";

const Portfolio = () => {
  return (
    <div id="portfolio" className="py-20 bg-gray-900">
      <h2 className="text-center text-4xl font-bold text-white">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 px-10">
        <div className="bg-gray-700 p-6 rounded-lg">
          <img src="./images/1.jpeg" alt="Project 1" className="rounded-lg"/>
          <h3 className="text-xl font-bold text-pink-500 mt-4">Project 1</h3>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <img src="./images/2.avif" alt="Project 2" className="rounded-lg"/>
          <h3 className="text-xl font-bold text-pink-500 mt-4">Project 2</h3>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg">
          <img src="./images/3.jpeg" alt="Project 3" className="rounded-lg"/>
          <h3 className="text-xl font-bold text-pink-500 mt-4">Project 3</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
