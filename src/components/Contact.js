import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-gray-800">
      <h2 className="text-center text-4xl font-bold text-white">Contact Me</h2>
      <div className="mt-10 px-10 flex flex-col items-center">
        <form className="bg-gray-700 p-8 rounded-lg w-full max-w-md">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded bg-gray-800 text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded bg-gray-800 text-white" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded bg-gray-800 text-white" rows="4"></textarea>
          <button className="bg-pink-500 w-full py-2 rounded-full hover:bg-pink-600">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
