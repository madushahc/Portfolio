"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import lilalodge from "@/app/Images/Lilalodge.jpg";
import profile from "@/app/Images/profile.jpg";
import commerce from "@/app/Images/e-commerce.jpg";
import food from "@/app/Images/food.jpg";
import ella from "@/app/Images/ella.jpg";
import Library from "@/app/Images/Library.jpg";
import portfolio from "@/app/Images/portfolio.jpg";
import combank from "@/app/Images/Combank.jpg";
interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
  type: "all" | "web" | "client" | "mobile" | "ui/ux";
  technologies: string[];
  link?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "web" | "client" | "mobile" | "ui/ux"
  >("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website - ShoeStore ",
      image: commerce,
      description:
        "A full-featured online store with product browsing, add-to-cart functionality, checkout process, and user authentication (login/logout), developed as a group project.",
      type: "web",
      technologies: ["Java EE", "MySQL"],
      link: "#",
    },
    {
      id: 2,
      title: "Villa website - Lilalodge",
      image: lilalodge,
      description:
        "This is a villa booking website that enables users to reserve rooms and explore detailed information about the villa. This project was developed for a client.",
      type: "client",
      technologies: ["Next.js", "Tailwind", "EmailJs", "Hosting", "Domain"],
      link: "#",
    },
    {
      id: 3,
      title: "Job Find Mobile App - Upsees",
      image: profile,
      description:
        "This is a mobile application that connects job seekers with potential employers, allowing users to create profiles, search for jobs, filter jobs and apply directly through the app. This is a group project.",
      type: "mobile",
      technologies: ["Flutter", "RapidAPI", "Firebase"],
      link: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      image: portfolio,
      description:
        "Responsive portfolio site with project showcase and contact form.",
      type: "web",
      technologies: ["Next.js", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 5,
      title: "Library System ",
      image: Library,
      description:
        "A library system that allows users to search for books, view book details, and read them after accessing relevant information.",
      type: "web",
      technologies: ["React", "Tailwind", "Google Books API"],
      link: "#",
    },
    {
      id: 6,
      title: "Travel Site - Ella, Sri Lanka",
      image: ella,
      description:
        "Discover the beauty of Ella, Sri Lanka with this travel site. Explore attractions, accommodations, and local experiences. ",
      type: "web",
      technologies: ["Bootstrap ", "HTML", "CSS", "JavaScript", "PHP"],
      link: "#",
    },
    {
      id: 7,
      title: "Food Recipe App",
      image: food,
      description:
        "This web application allows users to search for recipes, view ingredients, follow cooking instructions, and experience favorite recipes for future reference.",
      type: "web",
      technologies: ["React", "Tailwind", "Spoonacular API", "CSS"],
      link: "#",
    },
    {
      id: 8,
      title: "ComBank Digital App Redesign",
      image: combank,
      description:
        "A full-featured online store with payment integration and inventory management.",
      type: "ui/ux",
      technologies: ["Figma"],
      link: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  const handleFilterClick = (
    filterType: "all" | "web" | "client" | "mobile" | "ui/ux"
  ) => {
    setActiveFilter(filterType);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center py-20 px-4"
    >
      <div className="w-full max-w-7xl">
        {/* Title Section */}
        <div className="text-center mb-6">
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(["all", "web", "client", "mobile", "ui/ux"] as const).map(
            (filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-blue-400 text-amber-50 hover:bg-blue-600"
                }`}
              >
                {filter === "all" && "All Projects"}
                {filter === "web" && "Web Projects"}
                {filter === "client" && "Client Projects"}
                {filter === "mobile" && "Mobile Apps"}
                {filter === "ui/ux" && "UI/UX"}
              </button>
            )
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-black px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
