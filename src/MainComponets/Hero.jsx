import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen bg-[#120A21] text-white flex items-center justify-center px-6 md:px-12 pt-32 md:pt-40 pb-16 relative overflow-hidden"
      >

        {/* SVG BACKGROUND GRID */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="#E2D4F7" />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_20%,#120A21_85%]" />
        </div>

        {/* GLOW ORB LEFT */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-150 opacity-20 animate-pulse pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full text-[#5E25B6]"
            fill="currentColor"
          >
            <path
              d="M44.7,-76.4C58.1,-69.3,69.5,-57.4,77.5,-43.3C85.5,-29.2,90.1,-14.6,89,-0.6C87.9,13.3,81.1,26.7,73.1,39.2C65.1,51.8,55.8,63.6,43.6,71.5C31.4,79.4,15.7,83.4,-0.4,84.1C-16.5,84.8,-33.1,82.3,-46.8,75C-60.6,67.7,-71.5,55.6,-78.9,41.7C-86.3,27.8,-90.1,13.9,-89.6,0.3C-89.1,-13.3,-84.3,-26.6,-76.9,-38.4C-69.6,-50.2,-59.7,-60.5,-47.5,-68.2C-35.3,-75.9,-20.8,-81,-4.2,-73.7C12.3,-66.4,29.3,-71.6,44.7,-76.4Z"
              transform="translate(100 100)"
              filter="blur(30px)"
            />
          </svg>
        </div>

        {/* GLOW ORB RIGHT */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] max-w-125 opacity-30 pointer-events-none">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full text-[#7B2CBF]"
            fill="currentColor"
          >
            <path
              d="M38.1,-65.4C50.2,-58.5,61.4,-49,69.4,-36.8C77.4,-24.5,82.2,-9.5,81.6,5.3C81.1,20.1,75.2,34.7,66.1,46C57.1,57.3,44.9,65.3,31.7,70.9C18.4,76.5,4.2,79.7,-10.5,78.2C-25.2,76.7,-40.4,70.6,-52.7,61.1C-65.1,51.6,-74.6,38.8,-79.8,24.3C-85,9.8,-85.9,-6.3,-81.9,-21.3C-78,-36.2,-69.1,-50,-56.7,-57C-44.4,-64,-28.5,-64.1,-14.2,-65.8C0.2,-67.4,14.7,-70.5,28.1,-70.9C31.5,-71,34.8,-68.2,38.1,-65.4Z"
              transform="translate(100 100)"
              filter="blur(40px)"
            />
          </svg>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <div className="space-y-8 text-center md:text-left">

            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-2 bg-[#5E25B6]/15 border border-[#5E25B6]/40 px-4 py-1.5 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#7B2CBF] animate-ping" />

              <p className="text-[#E2D4F7] uppercase tracking-[3px] text-xs font-bold">
                Software Engineer
              </p>
            </div>

            {/* HERO TITLE */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Building Modern <br />

              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#7B2CBF] via-[#E2D4F7] to-white">
                Digital
              </span>{" "}
              Experiences
            </h1>

            {/* DESCRIPTION */}
            <p className="text-[#E2D4F7]/70 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              I create beautiful, scalable, and high-performing web
              applications with modern technologies and exceptional user
              experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">

              {/* VIEW PROJECTS */}
              <a
                href="#projects"
                className="relative group overflow-hidden bg-linear-to-r from-[#5E25B6] to-[#7B2CBF] hover:scale-[1.03] active:scale-[0.98] transition duration-300 px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-[0_4px_25px_rgba(94,37,182,0.4)]"
              >
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-[#7B2CBF] to-[#5E25B6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="relative z-10 flex items-center gap-3">
                  View Projects

                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              {/* DOWNLOAD CV */}
             <a
  href="/cv/Prisca.pdf"
  download
  target="_blank"
  rel="noreferrer"
  className="backdrop-blur-md border border-white/10 bg-white/5 hover:border-[#E2D4F7]/40 hover:bg-white/10 transition duration-300 px-8 py-4 rounded-full font-semibold"
>
  Download CV
</a>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">

              <a
                href="https://github.com/Xomcreate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#5E25B6]/50 hover:bg-[#5E25B6]/20 transition-all duration-300 text-lg"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#7B2CBF]/50 hover:bg-[#7B2CBF]/20 transition-all duration-300 text-lg"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center relative">

            <div className="absolute inset-0 bg-linear-to-tr from-[#5E25B6] to-[#7B2CBF] blur-[80px] opacity-25 rounded-full transform scale-90 animate-pulse"></div>

            <div className="relative group">

              {/* TOP FLOAT CARD */}
              <div className="absolute top-12 -left-10 md:-left-14 z-20 backdrop-blur-xl bg-[#120A21]/80 border border-white/10 p-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce [animation-duration:4s]">

                <div className="w-9 h-9 rounded-lg bg-[#5E25B6]/20 border border-[#5E25B6]/40 flex items-center justify-center text-[#E2D4F7]">
                  <FaCode />
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-medium">
                    Core Stack
                  </p>

                  <p className="text-sm font-bold text-white">
                    React / Node.JS
                  </p>
                </div>
              </div>

              {/* BOTTOM FLOAT CARD */}
              <div className="absolute bottom-12 -right-10 md:-right-12 z-20 backdrop-blur-xl bg-[#120A21]/80 border border-white/10 p-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce [animation-duration:5s]">

                <FaCheckCircle className="text-emerald-400 text-xl" />

                <div>
                  <p className="text-xs text-gray-400 font-medium">
                    Status
                  </p>

                  <p className="text-sm font-bold text-white">
                    Available For Hire
                  </p>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative w-72.5 h-97.5 sm:w-85 sm:h-115 md:w-90 md:h-122.5 rounded-3xl overflow-hidden border border-white/10 p-3 bg-[#1A1235]/40 backdrop-blur-md shadow-2xl group-hover:border-[#E2D4F7]/30 transition-all duration-500">

                <div className="w-full h-full rounded-2xl overflow-hidden relative">

                  <div className="absolute inset-0 bg-linear-to-t from-[#120A21] via-transparent to-transparent z-10 opacity-60" />

                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    alt="profile"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hero;