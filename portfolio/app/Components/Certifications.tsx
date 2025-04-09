"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import github from "@/app/Images/GitHub_Foundations.jpg";
import django from "@/app/Images/Django_Application_Development.jpg";
import python from "@/app/Images/Python_for_Data_Science.jpg";
import pythonBatch from "@/app/Images/Python_for_Data_Science_Batch.jpg";
import docker from "@/app/Images/Introduction_to _Containers_Docker,_Kubernetes.jpg";
import dockerBatch from "@/app/Images/Developing_Applications_Badge.jpg";
import git from "@/app/Images/Madusha Heshan.png";
import figmate from "@/app/Images/29160.png";
import gitBatch from "@/app/Images/github-foundations.png";
import containerBatch from "@/app/Images/Container_Kubernetes_Essentials_V2_Badge.jpg";

export default function Certification() {
  interface Certification {
    id: number;
    title: string;
    description: string;
    image: StaticImageData | string;
    issuedDate?: string;
    organization: string;
    link?: string;
  }

  const [hoveredCert, setHoveredCert] = useState<number | null>(null);

  const certifications: Certification[] = [
    {
      id: 1,
      title: "GitHub Foundations certificate of completion",
      description:
        "​The GitHub Foundations course introduces beginners to GitHub's core features, including repository management, commits, branching, merging, and project collaboration. It also covers GitHub products, Git basics, and working within GitHub repositories.",
      image: github,
      issuedDate: "April 2025",
      organization: "GitHub",
      link: "https://www.credly.com/badges/546cd5a2-0232-4689-82d2-1ad56da1b20d/print",
    },
    {
      id: 2,
      title: " Django Application Development with SQL and Databases ",
      description:
        "Clear understanding of what databases are and how they function, particularly focusing on relational databases.",
      image: django,
      issuedDate: "December 2024",
      organization: "IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/4D3J56AP7Y6V",
    },

    {
      id: 3,
      title: " Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      description:
        "Understanding how to use containers to move applications quickly and efficiently across different environments.",
      image: docker,
      issuedDate: "December 2024",
      organization: "IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/E15B4TPFJQSN",
    },
    {
      id: 4,
      title: "Python for Data Science, AI & Development",
      description:
        "Focusing on core programming concepts like variables, data structures, loops, and functions. Gain proficiency in Python libraries such as Pandas and NumPy, and use Jupyter Notebooks for coding.",
      image: python,
      issuedDate: "December 2024",
      organization: "IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/UDACV8ZOQ5MN",
    },
    {
      id: 5,
      title: "Figmate UI/UX Workshop",
      description:
        "This is a workshop that focuses on the basics of UI/UX design, including  wireframing, prototyping, and usability testing.",
      image: figmate,
      issuedDate: "March 2025",
      organization: "NSBM Green University",
    },
    {
      id: 6,
      title: "SkillShare Git and GitHub Workshop",
      description:
        "This workshop covers the basics of Git and GitHub, including version control, branching, and collaboration.",
      image: git,
      issuedDate: "March 2025",
      organization: "NSBM Green University, IEEE Student Branch",
    },
    {
      id: 7,
      title: " Developing Applications with SQL, Databases, and Django Batch",
      description:
        "This credential earner has foundational knowledge in developing applications using SQL, databases, and Django.",
      image: dockerBatch,
      issuedDate: "December 2024",
      organization: "IBM",
      link: "https://www.credly.com/badges/e56f04aa-0329-4048-8a98-8af5185aa2cf/print",
    },
    {
      id: 8,
      title: " Python for Data Science and AI Batch",
      description:
        "This badge earner has core Python skills, including essential data structures, programming fundamentals, and experience with key data science libraries.",
      image: pythonBatch,
      issuedDate: "December 2024",
      organization: "IBM",
      link: "https://www.credly.com/badges/71608261-23b1-4980-aef2-ef1d191c1ffe/print",
    },

    {
      id: 9,
      title: "Container & Kubernetes Essentials V2 Batch",
      description:
        "Can build and run container images, understand the architecture of Kubernetes, and write YAML deployment files.",
      image: containerBatch,
      issuedDate: "December 2024",
      organization: "IBM",
      link: "https://www.credly.com/badges/e5b587e6-2c52-4b2d-afe2-4e38af82272f/print",
    },
    {
      id: 10,
      title: "Github foundations badge",
      description:
        "Designed for beginners, it covers essential topics such as version control with Git, repository management, branching, merging, and collaborative workflows. Participants will also explore GitHub's products",
      image: gitBatch,
      issuedDate: "April 2025",
      organization: "Github",
      link: "https://www.credly.com/badges/546cd5a2-0232-4689-82d2-1ad56da1b20d/print",
    },
  ];

  return (
    <section
      id="certification"
      className="min-h-screen flex flex-col items-center py-20 px-4"
    >
      <div className="w-full max-w-7xl">
        <div className="text-center mb-12">
          <h4 className="text-4xl font-bold text-gray-800 mb-4">
            Certifications
          </h4>
        </div>

        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group"
                onMouseEnter={() => setHoveredCert(cert.id)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <div className="relative h-74 w-full overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredCert === cert.id ? "scale-105" : ""
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                    {cert.issuedDate && (
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                        {cert.issuedDate}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-2">
                    {cert.organization}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm">
                    {cert.description}
                  </p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential
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
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No certifications available at this time.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
