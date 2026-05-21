import React, { useState } from "react";
import { FaTerminal, FaCubes, FaCode, FaGlobe, FaLaptopCode, FaChevronDown, FaCalendarAlt } from "react-icons/fa";

function Experience() {
  const [activeNode, setActiveNode] = useState("ceo");

  const careerMatrix = [
    {
      id: "ceo",
      role: "Chief Executive Officer & Founder",
      company: "Prisbyte Innovations",
      period: "May 2024 - Present",
      icon: <FaCubes />,
      tag: "EXEC_SYS_ACTIVE",
      status: "FOUNDER_NODE",
      coreStack: ["Enterprise Architecture", "Full-Stack System Design", "Product Strategy"],
      achievements: [
        "Founded and direct Prisbyte Innovations, leading technical strategy and end-to-end product architecture.",
        "Engineered and deployed a high-fidelity Computer-Based Testing (CBT) platform tailored for structured student assessments.",
        "Designed and implemented a dynamic Invoice Management System and a secure, modern Donation Platform utilizing React, Node.js, and MongoDB."
      ]
    },
    {
      id: "mern",
      role: "MERN Stack Developer",
      company: "Bitxbase Coding Academy, Lagos State",
      period: "2024 - Present",
      icon: <FaCode />,
      tag: "MERN_RUNTIME_STABLE",
      status: "BUILD_OPTIMIZED [cite: 38]",
      coreStack: ["MongoDB [cite: 17, 27]", "Express.js [cite: 17, 27]", "React.js [cite: 17, 27]", "Node.js [cite: 17, 27]"],
      achievements: [
        "Built scalable and responsive web applications using the unified MongoDB, Express, React, and Node.js technical ecosystem[cite: 17].",
        "Designed performance-tuned RESTful APIs to streamline backend processing efficiency and link seamlessly with front-end views[cite: 18].",
        "Conducted structured code reviews and established rigorous development best practices for high maintainability[cite: 19].",
        "Recognized as the top-performing software developer across the academy for delivering high-quality web solutions under strict timelines[cite: 38]."
      ]
    },
    {
      id: "freelance",
      role: "Software Developer (Freelance & Personal Projects)",
      company: "Self-Employed Matrix",
      period: "May 2022 - Present",
      icon: <FaGlobe />,
      tag: "DISTRIBUTED_ROUTING",
      status: "ONLINE_OK",
      coreStack: ["Python/Django [cite: 4, 28]", "Flask Runtimes [cite: 28]", "API Integrations [cite: 6, 30]"],
      achievements: [
        "Architected, tested, and maintained web systems matching varying production requirements across a 5-year software engineering track record[cite: 5].",
        "Integrated secure third-party payment routing layers and optimized background application jobs for client software packages[cite: 6].",
        "Applied advanced debugging matrices and strategic troubleshooting profiles to isolate performance blocks across independent codebases[cite: 29]."
      ]
    },
    {
      id: "frontend",
      role: "Frontend Developer",
      company: "Nathconcept Ltd",
      period: "2022 - 2024 [cite: 21]",
      icon: <FaLaptopCode />,
      tag: "CLIENT_RENDER_SUCCESS",
      status: "COMPILATION_COMPLETE",
      coreStack: ["UI/UX Usability [cite: 23]", "Performance Tuning [cite: 25]", "Cross-Functional Sync [cite: 7, 24]"],
      achievements: [
        "Developed and scaled highly dynamic client user interfaces for a variety of projects, boosting engagement and overall system usability[cite: 23].",
        "Collaborated natively with design and product teams to safeguard visual fidelity and strict brand rule adherence[cite: 24].",
        "Optimized deep browser paint cycles and component load profiles to secure much faster responsive page rendering times[cite: 25].",
        "Spearheaded structural development for a modern e-commerce platform, which successfully elevated sales conversion metrics by 25%[cite: 36, 37]."
      ]
    }
  ];

  return (
    <section id="experience" className="relative bg-[#120A21] text-white py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* GLOWING ORBITAL EMITTERS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-100 md:w-225 h-100 md:h-100 bg-[#5E25B6]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full mx-auto space-y-16">
        
        {/* HEADER TRACK SECTION - CENTERED */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#5E25B6]/15 border border-[#5E25B6]/40 px-3 py-1 rounded-md">
            <span className="font-mono text-[10px] text-[#E2D4F7] tracking-[2px] uppercase">System Ledger Deployment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Career{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#7B2CBF] via-[#E2D4F7] to-white">
              Pipeline
            </span>
          </h2>
          <p className="text-[#E2D4F7]/60 text-sm font-light">
            Click on any timeline step to activate data logs and map core deployment trace logs.
          </p>
        </div>

        {/* CHRONOLOGICAL NETWORK PIPELINE */}
        <div className="relative space-y-4">
          
          {/* Vertical central path line indicator */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-px bg-white/5 -translate-x-1/2 hidden sm:block" />

          {careerMatrix.map((node, index) => {
            const isActive = activeNode === node.id;

            return (
              <div 
                key={node.id}
                className="relative w-full"
              >
                {/* INTERACTIVE ROW BLOCK STEPPER HEADER */}
                <button
                  onClick={() => setActiveNode(isActive ? "" : node.id)}
                  className={`w-full flex items-center justify-between p-4 sm:p-6 rounded-2xl border text-left transition-all duration-300 relative group ${
                    isActive 
                      ? "bg-[#1A1235]/40 border-[#E2D4F7]/30 shadow-[0_4px_30px_rgba(94,37,182,0.15)]" 
                      : "bg-[#1A1235]/10 border-white/5 hover:border-white/10 hover:bg-[#1A1235]/20"
                  }`}
                >
                  <div className="flex items-center gap-4 z-10">
                    {/* Circle Node Icon Marker */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-sm sm:text-lg border transition-all duration-300 ${
                      isActive 
                        ? "bg-[#5E25B6] text-white border-[#7B2CBF]/50 scale-105" 
                        : "bg-[#090414] text-[#E2D4F7]/60 border-white/5 group-hover:text-[#E2D4F7]"
                    }`}>
                      {node.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#E2D4F7] transition-colors line-clamp-1">
                        {node.role}
                      </h3>
                      <p className="text-white/40 text-xs font-light">
                        {node.company}
                      </p>
                    </div>
                  </div>

                  {/* Right Alignment: Chrono Period badge + chevron indicator */}
                  <div className="flex items-center gap-4 z-10 shrink-0 pl-2">
                    <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-wider text-[#E2D4F7]/50 items-center gap-1.5 hidden md:flex">
                      <FaCalendarAlt className="opacity-40" /> {node.period}
                    </span>
                    <FaChevronDown className={`text-xs text-white/30 transition-transform duration-300 ${isActive ? "rotate-180 text-[#A370F7]" : "group-hover:text-white/60"}`} />
                  </div>

                  {/* Micro gradient background glow on row item active state */}
                  {isActive && (
                    <div className="absolute inset-0 bg-linear-to-r from-[#5E25B6]/5 to-transparent rounded-2xl pointer-events-none" />
                  )}
                </button>

                {/* SLIDEOUT EXPANDABLE ARCHITECTURAL CARGO CONTENT */}
                <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  isActive ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                }`}>
                  <div className="overflow-hidden">
                    <div className="p-5 sm:p-7 rounded-2xl border border-white/5 bg-[#090414]/60 space-y-6">
                      
                      {/* Telemetry metadata block tag strip */}
                      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] bg-[#120A21] p-3 rounded-xl border border-white/5">
                        <div className="flex items-center gap-2">
                          <FaTerminal className="text-[#A370F7]" />
                          <span className="text-white/40">CORE_PROC:</span>
                          <span className="text-cyan-400 font-bold">"{node.tag}"</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-emerald-400 font-medium uppercase tracking-wider">{node.status}</span>
                        </div>
                      </div>

                      {/* Achievements Core Description Bullet String Arrays */}
                      <div className="space-y-3">
                        <h4 className="font-mono text-[10px] text-[#E2D4F7]/40 uppercase tracking-widest">Deployment Milestones</h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#E2D4F7]/70 font-light leading-relaxed list-none pl-0">
                          {node.achievements.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-[#A370F7] font-mono select-none mt-0.5">&gt;</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skill String Labels Wrapper */}
                      <div className="space-y-3 pt-2 border-t border-white/5">
                        <h4 className="font-mono text-[10px] text-[#E2D4F7]/40 uppercase tracking-widest">Integrated Stack Profiles</h4>
                        <div className="flex flex-wrap gap-2">
                          {node.coreStack.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#5E25B6]/10 text-[#E2D4F7]/80 border border-[#5E25B6]/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Experience;