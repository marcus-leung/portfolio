import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("main");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id;
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4 text-sm hidden sm:block">
      <a
        href="#main"
        className={`block py-2 px-3 ${activeLink === "main" ? "text-indigo-800 underline" : "text-gray-600"}`}
      >
        Main
      </a>
      <a
        href="#work"
        className={`block py-2 px-3 ${activeLink === "work" ? "text-indigo-800 underline" : "text-gray-600"}`}
      >
        Work
      </a>
      <a
        href="#activities"
        className={`block py-2 px-3 ${activeLink === "activities" ? "text-indigo-800 underline" : "text-gray-600"}`}
      >
        Activities
      </a>
      <a
        href="#projects"
        className={`block py-2 px-3 ${activeLink === "projects" ? "text-indigo-800 underline" : "text-gray-600"}`}
      >
        Projects
      </a>
      <a
        href="#skills"
        className={`block py-2 px-3 ${activeLink === "skills" ? "text-indigo-800 underline" : "text-gray-600"}`}
      >
        Skills
      </a>
      <a
        href="#education"
        className={`block py-2 px-3 ${activeLink === "education" ? "text-indigo-800 underline" : "text-gray-600"}`}
      >
        Education
      </a>
      <a
        href="#certifications"
        className={`block py-2 px-3 ${activeLink === "certifications" ? "text-indigo-800 underline" : "text-gray-600"}`}
      >
        Certifications
      </a>
      <a
        href="#contact"
        className={`block py-2 px-3 ${activeLink === "contact" ? "text-indigo-800 underline" : "text-gray-600"}`}
      >
        Contact
      </a>
    </div>
  );
};

export default Sidebar;
