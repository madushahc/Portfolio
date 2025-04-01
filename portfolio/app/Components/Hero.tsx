"use client";
import Image from "next/image";
import profile from "@/app/Images/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center items-center md:items-start p-4 order-2 md:order-1">
          <h4 className="font-sans text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white text-center md:text-left">
            Hello, It's Me
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-200 text-center md:text-left">
            Madusha Heshan
          </h2>

          <p className="text-lg md:text-2xl mb-6 text-center md:text-left">
            I'm a passionate learner and a dedicated team player with a strong
            focus on web and mobile development.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 md:gap-10 mb-6">
            <a
              href="https://www.linkedin.com/in/madusha-heshan-145269256/"
              className="hover:scale-110 transition duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 hover:text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.037 0 3.6 2.001 3.6 4.604v5.588z" />
              </svg>
            </a>
            <a
              href="https://github.com/madushahc"
              className="hover:scale-110 transition duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 hover:text-purple-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.478 5.92.43.372.823 1.102.823 2.222 0 1.606-.014 2.896-.014 3.286 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="mailto:madushahc@gmail.com"
              className="hover:scale-110 transition duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 hover:text-red-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l-11.99-7.713c-.006-.004-.01-.01-.016-.014v13.014c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13.014c-.006.004-.01.01-.016.014l-11.99 7.713zm0-2.713l11.99-7.713c-.006-.004-.01-.01-.016-.014h-23.948c-.006.004-.01.01-.016.014l11.99 7.713z" />
              </svg>
            </a>
            <a
              href="https://wa.me/0703841585"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 hover:text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 2.042.491 3.961 1.354 5.646l-1.354 6.354 6.354-1.354c1.685.863 3.604 1.354 5.646 1.354 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 22c-1.768 0-3.432-.463-4.889-1.268l-.347-.2-3.853.822.822-3.853-.2-.347c-.805-1.457-1.268-3.121-1.268-4.889 0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.516-6.547c-.297-.149-1.758-.867-2.031-.967-.273-.1-.472-.149-.67.149-.197.297-.768.967-.941 1.164-.173.197-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.496.1-.198.05-.372-.025-.521-.075-.149-.67-1.612-.916-2.207-.241-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.041 1.016-1.041 2.479s1.066 2.876 1.213 3.074c.149.198 2.1 3.21 5.077 4.502.711.306 1.265.489 1.698.626.713.227 1.362.195 1.874.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.29.173-1.412-.074-.123-.273-.198-.57-.347z" />
              </svg>
            </a>
          </div>

          {/* Download Button */}
          <div className="w-full flex justify-center md:justify-start">
            <a
              href={"/Images/CV.pdf"}
              download="/Madusha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 hover:scale-110 transition duration-300 text-sm md:text-base"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center items-center p-4 order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-72 md:h-72 ">
            <Image
              className="rounded-full hover:scale-110 transition-transform duration-300 border-4 bg-gradient-to-b from-red-300 to-red-950"
              src={profile}
              alt="Profile Image"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
