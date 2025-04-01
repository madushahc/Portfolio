"use client";
import Image from "next/image";
import photo from "@/app/Images/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faQuestion,
  faComments,
  faRepeat,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const techSkills = [
    "react",
    "nextjs",
    "tailwind",
    "firebase",
    "figma",
    "github",
    "git",
    "html",
    "css",
    "javascript",
    "typescript",
    "java",
    "python",
    "mysql",
    "flutter",
    "androidstudio",
    "vscode",
  ];

  const softSkills = [
    { name: "Teamwork", icon: faUserGroup },
    { name: "Problem Solving", icon: faQuestion },
    { name: "Communication", icon: faComments },
    { name: "Adaptability", icon: faRepeat },
    { name: "Time Management", icon: faClock },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-10 px-4"
    >
      <div className="max-w-6xl w-full flex flex-col md:grid md:grid-cols-2 gap-8">
        <div className="flex justify-center order-1 md:hidden">
          <div className="relative w-56 h-56">
            <Image
              className="rounded-2xl object-cover border-4 border-gradient-to-b from-blue-300 to-green-300"
              src={photo}
              alt="Profile Image"
              priority
            />
          </div>
        </div>

        <div className="order-2 md:order-1 flex flex-col gap-8">
          <div>
            <h4 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              About Me
            </h4>
            <p className="text-base mb-6 text-gray-300">
              I'm Madusha Heshan, an undergraduate student at NSBM Green
              University, pursuing a BSc (Hons) in Management Information
              Systems. I have experience in web application development using
              ReactJS and NextJS, as well as mobile application development with
              Flutter. Passionate about building scalable, efficient, and
              user-friendly applications, I am continuously learning and
              exploring emerging technologies. With a self-motivated mindset and
              strong problem-solving skills, I strive to create innovative
              digital solutions.
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Tools
            </h4>
            <div className="mb-6">
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-10">
                {techSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="relative group flex justify-center"
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill}`}
                      alt={skill}
                      className="w-9 h-9 transition-transform hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-4 md:hidden">
          <h4 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white ">
            Soft Skills
          </h4>
          <div className="grid grid-cols-3 gap-3 justify-items-center">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="relative group flex flex-col items-center"
              >
                <div className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center mb-1 text-white">
                  <FontAwesomeIcon icon={skill.icon} className="w-4 h-4" />
                </div>
                <span className="text-xs text-center text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-col justify-center items-center md:order-1 gap-8">
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <Image
              className="rounded-2xl object-cover border-4 border-gradient-to-b from-blue-300 to-green-300"
              src={photo}
              alt="Profile Image"
              fill
              priority
            />
          </div>

          <div className="w-full">
            <h4 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white text-center">
              Soft Skills
            </h4>
            <div className="grid grid-cols-5 gap-4 justify-items-center">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="relative group flex flex-col items-center"
                >
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mb-1 text-white">
                    <FontAwesomeIcon icon={skill.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-center text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
