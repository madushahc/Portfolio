"use client";
import { Link } from "react-scroll";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className=" flex justify-between items-center h-20 px-4 bg-gradient-to-r from-gray-700 to-gray-950 text-white">
        <div className="text-2xl font-bold justify-self-start">Logo</div>
        <div className="sm:hidden flex space-x-6 hover:bg-blue-800 rounded-lg p-2 transition duration-300 ease-in-out">
          <button
            className="cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {menuOpen && (
            <div className=" fixed top-0 right-0 h-full w-1/2 bg-gradient-to-b from-gray-800 to-gray-950 text-white  shadow-md p-4 space-y-2 z-50 text-lg ">
              <div className="flex justify-end items-center mb-10 ">
                {" "}
                <button
                  className="cursor-pointer mt-3 hover:bg-blue-800 rounded-lg p-2 transition duration-300 ease-in-out"
                  onClick={() => setMenuOpen((prev) => !prev)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className=" space-y-4 ">
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
                >
                  About
                </Link>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
                >
                  Skills
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
                >
                  Projects
                </Link>
                <Link
                  to="certification"
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
                >
                  Certifications
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="hidden sm:flex space-x-8">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            to="certification"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
          >
            Certifications
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:bg-blue-900 rounded-lg p-2 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
