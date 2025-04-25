import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="max-w-[1040px] m-auto p-4 py-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact</h2>
          <div className="w-20 h-1 mx-auto bg-indigo-600 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries or opportunities. You can also <a href="https://www.linkedin.com/in/marcus-leung-582006252/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-600 hover:text-indigo-800">connect with me on LinkedIn</a> and send me a message there.
          </p>
        </div>
      <form
        action="https://getform.io/f/67ab702a-4da6-49c9-afa4-d352a28def7a"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows="10"
            name="message"
          ></textarea>
        </div>
        <button className="bg-indigo-800 text-gray-100 mt-4 w-full p-4 rounded-lg hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
