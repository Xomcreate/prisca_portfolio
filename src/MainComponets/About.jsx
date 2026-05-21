import React, { useState } from "react";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaTerminal,
} from "react-icons/fa";

function About() {
  const [activeConsole, setActiveConsole] = useState("frontend");

  const telemetryData = {
    frontend: {
      tag: "FRONTEND_ENGINE",
      status: "STABLE_RENDER",
      log: "Compiling structural UI modules... Injecting responsive context nodes, optimizing paint lifecycles, and managing state-driven client transitions flawlessly.",
    },
    backend: {
      tag: "BACKEND_CORE",
      status: "ONLINE_200_OK",
      log: "Listening on distributed worker ports... Routing high-throughput REST/GraphQL APIs, executing secure token authentication, and managing microservice pipelines.",
    },
    database: {
      tag: "DATA_PERSISTENCE",
      status: "INDEXED_READY",
      log: "Parsing data clusters... Optimizing connection pools, handling relational data normalization, running cached query indexes, and protecting transaction logs.",
    },
    fullstack: {
      tag: "STACK_INTEGRATION",
      status: "BUILD_OPTIMIZED",
      log: "Binding client layers to core engine runtimes... Bundling edge-rendered components with highly efficient server architecture to deploy unified tech products.",
    },
  };

  return (
    <section id="about" className="relative bg-[#120A21] text-white py-32 px-6 md:px-12 overflow-hidden">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="35" height="35" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#E2D4F7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-[#5E25B6] opacity-20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-[#7B2CBF] opacity-20 blur-[140px] rounded-full"></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE */}
        <div className="relative flex justify-center w-full">
          {/* MAIN IMAGE CARD */}
          <div className="relative w-full max-w-107.5 h-140 rounded-[35px] overflow-hidden border border-white/10 bg-[#1A1235]/40 backdrop-blur-xl shadow-2xl group">
            <img
              src="/images/mine.jpeg"
              alt="software engineer"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#120A21] via-[#120A21]/20 to-transparent"></div>

            {/* BOTTOM GLASS CARD */}
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6">
              <p className="text-sm uppercase tracking-[3px] text-[#E2D4F7]/70 mb-2">
                Software Engineer
              </p>
              <h3 className="text-2xl font-bold leading-snug">
                Engineering Scalable <br />
                Digital Systems
              </h3>
            </div>
          </div>

          {/* FLOATING CARD 1 */}
          <div className="absolute top-10 -left-5 md:-left-12 backdrop-blur-xl bg-[#120A21]/80 border border-white/10 p-5 rounded-2xl shadow-2xl animate-bounce [animation-duration:5s]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#5E25B6]/20 border border-[#5E25B6]/40 flex items-center justify-center text-[#E2D4F7] text-2xl">
                <FaCode />
              </div>
              <div>
                <p className="text-xs text-gray-400">Engineering</p>
                <p className="font-bold text-sm">Full Stack Systems</p>
              </div>
            </div>
          </div>

          {/* FLOATING CARD 2 */}
          <div className="absolute bottom-20 -right-5 md:-right-10 backdrop-blur-xl bg-[#120A21]/80 border border-white/10 p-5 rounded-2xl shadow-2xl animate-bounce [animation-duration:6s]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#7B2CBF]/20 border border-[#7B2CBF]/40 flex items-center justify-center text-[#E2D4F7] text-2xl">
                <FaRocket />
              </div>
              <div>
                <p className="text-xs text-gray-400">Focus</p>
                <p className="font-bold text-sm">Modern Web Apps</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          {/* SECTION TAG */}
          <div className="inline-flex items-center gap-2 bg-[#5E25B6]/15 border border-[#5E25B6]/40 px-5 py-2 rounded-full backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#7B2CBF] animate-ping"></span>
            <p className="text-[#E2D4F7] uppercase tracking-[3px] text-xs font-bold">
              About Me
            </p>
          </div>

          {/* HEADING */}
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            Software{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#7B2CBF] via-[#E2D4F7] to-white">
              Engineer
            </span>
          </h2> 

          {/* DESCRIPTION */}
          <p className="text-[#E2D4F7]/70 text-lg leading-relaxed mb-6">
            I’m a software engineer passionate about building scalable,
            high-performance, and user-focused digital solutions.
            I specialize in creating modern applications that combine
            clean architecture, responsive interfaces, and efficient backend systems.
          </p>

          <p className="text-[#E2D4F7]/70 text-lg leading-relaxed mb-10">
            From frontend experiences to backend engineering,
            I enjoy transforming ideas into reliable and impactful
            products using modern technologies and engineering principles.
          </p>

          {/* DIGITAL LIVE CODE TERMINAL MODULE */}
          <div className="mb-12 rounded-2xl border border-white/5 bg-[#090414] overflow-hidden shadow-2xl relative">
            <div className="bg-[#160d29] px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                <FaTerminal className="text-[#A370F7]" /> system_telemetry.log
              </span>
            </div>

            <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-white/80 min-h-28.75">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[#A370F7]">&gt;&gt; OBJ_PROCESS:</span>
                <span className="text-cyan-400 font-bold">"{telemetryData[activeConsole].tag}"</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-sans sm:ml-auto mt-1 sm:mt-0">
                  {telemetryData[activeConsole].status}
                </span>
              </div>
              <p className="text-[#E2D4F7]/60 font-sans text-sm font-light leading-relaxed">
                {telemetryData[activeConsole].log}
              </p>
            </div>
            
            <div className="absolute bottom-2 right-2 opacity-10 pointer-events-none text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 24H0V20 M20 24H24V20" />
              </svg>
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* CARD 1 */}
            <div 
              onMouseEnter={() => setActiveConsole("frontend")}
              className={`group relative rounded-[28px] border bg-[#1A1235]/40 backdrop-blur-xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                activeConsole === "frontend" ? "border-[#A370F7]/40 shadow-[0_0_25px_rgba(94,37,182,0.15)]" : "border-white/10"
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#5E25B6]/10 via-transparent to-[#7B2CBF]/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#120A21] border border-white/10 flex items-center justify-center text-[#E2D4F7] text-2xl mb-6">
                  <FaLaptopCode />
                </div>
                <h3 className="text-xl font-bold mb-3">Frontend Engineering</h3>
                <p className="text-[#E2D4F7]/60 text-sm leading-relaxed">
                  Creating modern, responsive, and engaging user interfaces with scalable frontend architecture.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div 
              onMouseEnter={() => setActiveConsole("backend")}
              className={`group relative rounded-[28px] border bg-[#1A1235]/40 backdrop-blur-xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                activeConsole === "backend" ? "border-[#A370F7]/40 shadow-[0_0_25px_rgba(94,37,182,0.15)]" : "border-white/10"
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#5E25B6]/10 via-transparent to-[#7B2CBF]/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#120A21] border border-white/10 flex items-center justify-center text-[#E2D4F7] text-2xl mb-6">
                  <FaServer />
                </div>
                <h3 className="text-xl font-bold mb-3">Backend Engineering</h3>
                <p className="text-[#E2D4F7]/60 text-sm leading-relaxed">
                  Building scalable APIs, authentication systems, and secure backend infrastructures.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div 
              onMouseEnter={() => setActiveConsole("database")}
              className={`group relative rounded-[28px] border bg-[#1A1235]/40 backdrop-blur-xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                activeConsole === "database" ? "border-[#A370F7]/40 shadow-[0_0_25px_rgba(94,37,182,0.15)]" : "border-white/10"
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#5E25B6]/10 via-transparent to-[#7B2CBF]/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#120A21] border border-white/10 flex items-center justify-center text-[#E2D4F7] text-2xl mb-6">
                  <FaDatabase />
                </div>
                <h3 className="text-xl font-bold mb-3">Database Systems</h3>
                <p className="text-[#E2D4F7]/60 text-sm leading-relaxed">
                  Managing structured and NoSQL databases with optimized performance and scalability.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div 
              onMouseEnter={() => setActiveConsole("fullstack")}
              className={`group relative rounded-[28px] border bg-[#1A1235]/40 backdrop-blur-xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                activeConsole === "fullstack" ? "border-[#A370F7]/40 shadow-[0_0_25px_rgba(94,37,182,0.15)]" : "border-white/10"
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#5E25B6]/10 via-transparent to-[#7B2CBF]/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#120A21] border border-white/10 flex items-center justify-center text-[#E2D4F7] text-2xl mb-6">
                  <FaLayerGroup />
                </div>
                <h3 className="text-xl font-bold mb-3">Full Stack Solutions</h3>
                <p className="text-[#E2D4F7]/60 text-sm leading-relaxed">
                  Delivering complete end-to-end web applications with modern technologies and clean engineering practices.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;