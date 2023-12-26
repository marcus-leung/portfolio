import React from "react";
import { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Dropdown = ({ subject, text }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const contentRef = useRef();

  let content = null;

  if (subject === "Overview") {
    content = text;
  } else {
    content = (
      <ul className="list-disc">
        {text.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center pt-2">
      <button
        onClick={toggle}
        className="bg-indigo-200 rounded-full w-full h-10"
      >
        <h3 className="flex items-center justify-center">
          <span className="pr-3">{subject}</span>
          <FaChevronDown />
        </h3>
      </button>
      <div
        className="content-transition overflow-hidden w-full h-0"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <div className="py-3 px-3 mx-5">{content}</div>
      </div>
    </div>
  );
};

export default Dropdown;
