import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="max-w-[1040px] m-auto p-4 py-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
        <div className="w-20 h-1 mx-auto bg-indigo-600 mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, my LinkedIn is the best way to reach me.
        </p>
        <a
          href="https://www.linkedin.com/in/marcus-leung-582006252/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors duration-300"
        >
          <FaLinkedin size={22} />
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
