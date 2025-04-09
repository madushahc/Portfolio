"use client";
import { useState, useMemo } from "react";
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
  github?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "web" | "client" | "mobile" | "ui/ux"
  >("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Website - ShoeStore",
      image: commerce,
      description:
        "A full-featured online store with product browsing, add-to-cart functionality, checkout process, and user authentication (login/logout), developed as a group project.",
      type: "web",
      technologies: ["Java EE", "MySQL"],
      link: "#",
      github: "#",
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
      github: "#",
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
      github: "#",
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
      github: "#",
    },
    {
      id: 5,
      title: "Library System",
      image: Library,
      description:
        "A library system that allows users to search for books, view book details, and read them after accessing relevant information.",
      type: "web",
      technologies: ["React", "Tailwind", "Google Books API"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Travel Site - Ella, Sri Lanka",
      image: ella,
      description:
        "Discover the beauty of Ella, Sri Lanka with this travel site. Explore attractions, accommodations, and local experiences.",
      type: "web",
      technologies: ["Bootstrap", "HTML", "CSS", "JavaScript", "PHP"],
      link: "#",
      github: "#",
    },
    {
      id: 7,
      title: "Food Recipe App",
      image: food,
      description:
        "This web application allows users to search for recipes, view ingredients, follow cooking instructions, and save favorite recipes for future reference.",
      type: "web",
      technologies: ["React", "Tailwind", "Spoonacular API", "CSS"],
      link: "#",
      github: "#",
    },
    {
      id: 8,
      title: "ComBank Digital App Redesign",
      image: combank,
      description:
        "A UI/UX redesign of the Commercial Bank mobile application with improved user flows and modern interface.",
      type: "ui/ux",
      technologies: ["Figma"],
      link: "#",
    },
  ];

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  const projectsToShow = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  const handleFilterClick = (
    filterType: "all" | "web" | "client" | "mobile" | "ui/ux"
  ) => {
    setActiveFilter(filterType);
    setVisibleProjects(6);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center py-20 px-4 "
    >
      <div className="w-full max-w-7xl">
        {/* Title Section */}
        <div className="text-center mb-12">
          <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {(["all", "web", "client", "mobile", "ui/ux"] as const).map(
            (filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filter === "all" && "All Projects"}
                {filter === "web" && "Web Projects"}
                {filter === "client" && "Client Projects"}
                {filter === "mobile" && "Mobile Apps"}
                {filter === "ui/ux" && "UI/UX Designs"}
              </button>
            )
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.length > 0 ? (
            projectsToShow.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredProject === project.id ? "scale-105" : ""
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.id <= 3} // Prioritize loading first 3 images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
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

        {/* Load More Button */}
        {hasMoreProjects && (
          <div className="relative mt-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <button
                onClick={loadMoreProjects}
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-medium border border-gray-200 shadow-sm inline-flex items-center"
              >
                Load More Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
