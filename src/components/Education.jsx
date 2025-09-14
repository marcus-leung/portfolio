import React from "react";
import ucsc from "../assets/ucsc.png";
import deanza from "../assets/deanza.png";

const Education = () => {
  return (
    <section id="education" className="max-w-[1040px] m-auto p-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Education</h2>
          <div className="w-20 h-1 mx-auto bg-indigo-600 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my academic journey, the knowledge I’ve gained through my studies, and my active involvement in various affiliations and clubs. Each experience reflects my dedication to learning, growth, and collaboration in the field of technology.
          </p>
        </div>
      <div>
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <div className="flex items-center">
            <img src={ucsc} alt="UCSC Logo" className="h-10 w-10" />
            <h2 className="text-xl font-semibold pl-2">
              University of California, Santa Cruz
            </h2>
          </div>
          <h3 className="my-1">Sep 2023 - Jun 2025</h3>
        </div>
        <h3>
          Bachelor of Science (B.S) in Technology and Information Management
          <br />
          Minor in Computer Science <br />
          GPA: 3.81
          <br />
        </h3>
        <h2 className="font-semibold mt-3">Relevant Coursework:</h2>
        <ul className="my-2 pl-6">
          <li>CSE 101 - Data Structures and Algorithms</li>
          <li>CSE 151 - Advanced Computer Networks</li>
          <li>CSE 153 - Network Security and Privacy</li>
          <li>CSE 120 - Computer Architecture</li>
          <li>CSE 182 - Database Management Systems</li>
          <li>TIM172A/B - Management of Technology</li>
        </ul>

        <h2 className="font-semibold mt-3">Affiliations and involvements:</h2>
        <ul className="my-2 pl-6">
          <li>Computer Networking Student Assoiciation (CNSA)</li>
          <li>Slug Fund Investment Group (SFIG)</li>
          <li>Association for Computing Machinery (ACM)</li>
        </ul>
      </div>
      <div>
        <div className="flex justify-between mt-6 items-center flex-col sm:flex-row">
          <div className="flex items-center">
            <img src={deanza} alt="De Anza Logo" className="h-9 w-9"/>
            <h2 className="text-xl font-semibold pl-2">De Anza College</h2>
          </div>
          <h3 className="my-1">Jun 2021 - Aug 2022</h3>
        </div>
        <h3>GPA: 3.96</h3>
        <h2 className="font-semibold mt-3">Relevant Coursework:</h2>
        <ul className="my-2 pl-6">
          <li>CIS 22B - Intermediate Programming Methodologies in C++</li>
          <li>CIS 22C - Data Abstraction and Structures</li>
          <li>
            CIS 21JA - x86 Processor Assembly Language and Computer Architecture
          </li>
        </ul>
        <h2 className="font-semibold mt-3">Affiliations and involvements:</h2>
        <ul className="my-2 pl-6">
          <li>Developers' Guild</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
