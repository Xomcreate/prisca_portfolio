import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaJava,
  FaCode,
  FaServer,
  FaTerminal,
  FaLaptopCode
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiDjango,
  SiDotnet,
  SiExpress
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiNetbeans } from "react-icons/di";

function Skills() {
  const defaultTelemetry = {
    index: "00",
    tag: "SYSTEM_READY",
    status: "SYSTEM: ACTIVE",
    name: "System Telemetry",
    desc:
      "Inspect individual node blocks across the grid layout to access deep internal performance configuration files..."
  };

  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState("all");

  const branches = [
    { id: "all", label: "Global Stack", icon: <FaCode /> },
    { id: "frontend", label: "Client Architectures", icon: <FaLaptopCode /> },
    { id: "backend", label: "Server Systems & DB", icon: <FaServer /> },
    { id: "tools", label: "Development Tools", icon: <FaTerminal /> }
  ];

  const skillNodes = [
    { id: 1, name: "React.js", icon: <FaReact />, branch: "frontend", index: "01", status: "Core Engine", desc: "Hooks, Context API, state management, and component optimization." },
    { id: 2, name: "TailwindCSS", icon: <SiTailwindcss />, branch: "frontend", index: "02", status: "Fluid UI", desc: "Utility-first design systems, custom configuration, and modular layouts." },
    { id: 3, name: "TypeScript", icon: <SiTypescript />, branch: "frontend", index: "03", status: "Type-Safe", desc: "Strict interfaces, structural generics, and robust application architecture." },
    { id: 4, name: "Node.js", icon: <FaNodeJs />, branch: "backend", index: "04", status: "Async Runtime", desc: "Event-driven architecture and non-blocking asynchronous I/O operations." },
    { id: 5, name: "Express.js", icon: <SiExpress />, branch: "backend", index: "05", status: "REST Router", desc: "Middleware configuration, scalable routing matrices, and secure API endpoints." },
    { id: 6, name: "MongoDB", icon: <SiMongodb />, branch: "backend", index: "06", status: "NoSQL DB", desc: "Flexible document models, structural aggregation pipelines, and schema indexing." },
    { id: 7, name: "MySQL", icon: <SiMysql />, branch: "backend", index: "07", status: "Relational DB", desc: "Structured query optimizations, database schema normalization, and ACID compliance." },
    { id: 8, name: "Django", icon: <SiDjango />, branch: "backend", index: "08", status: "MVC Framework", desc: "Python-driven rapid backend provisioning and built-in ORM security layers." },
    { id: 9, name: "Java", icon: <FaJava />, branch: "backend", index: "09", status: "OOP System", desc: "Robust, object-oriented software engineering and multi-threaded systems architecture." },
    { id: 10, name: "VB.NET", icon: <SiDotnet />, branch: "backend", index: "10", status: "Legacy Win", desc: "Enterprise Windows desktop application logic and relational database pipelines." },
    { id: 11, name: "VS Code", icon: <VscVscode />, branch: "tools", index: "11", status: "Primary IDE", desc: "Advanced workspace environments, automated shortcuts, and custom debugging extensions." },
    { id: 12, name: "NetBeans IDE", icon: <DiNetbeans />, branch: "tools", index: "12", status: "Java Environment", desc: "Compilation lifecycle management, classic Java GUI layout designs, and Ant/Maven builds." },
    { id: 13, name: "GitHub", icon: <FaGithub />, branch: "tools", index: "13", status: "VCS Platform", desc: "Git branch control systems, pull request collaboration workflows, and cloud history hosting." }
  ];

  const filteredNodes =
    selectedBranch === "all"
      ? skillNodes
      : skillNodes.filter((node) => node.branch === selectedBranch);

  const activeDisplay = hoveredNode || defaultTelemetry;

  return (
    <section
      id="skills"
      className="relative bg-[#120A21] text-white py-32 px-6 md:px-12 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-12 items-start"
      >

        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-4 lg:sticky lg:top-32 space-y-8 text-center lg:text-left"
        >

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#5E25B6]/15 border border-[#5E25B6]/40 px-3 py-1 rounded-md">
              <span className="font-mono text-[10px] text-[#E2D4F7] tracking-[2px] uppercase">
                Ecosystem Architecture
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-center lg:text-left">
              Technical<br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#7B2CBF] via-[#E2D4F7] to-white">
                Capabilities
              </span>
            </h2>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-col gap-2 border-l border-white/5 pl-2 items-center lg:items-start">
            {branches.map((branch) => {
              const isSelected = selectedBranch === branch.id;

              return (
                <motion.button
                  key={branch.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSelectedBranch(branch.id)}
                  className={`group text-xs uppercase tracking-wider flex items-center justify-between p-3 rounded-xl transition-all duration-300 relative w-full lg:w-auto ${
                    isSelected
                      ? "text-white font-bold"
                      : "text-white/40 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeBranchCapsule"
                      className="absolute inset-0 bg-linear-to-r from-[#5E25B6]/30 to-[#7B2CBF]/10 border border-[#5E25B6]/40 rounded-xl"
                    />
                  )}

                  <div className="flex items-center gap-3 relative z-10">
                    <span>{branch.icon}</span>
                    <span>{branch.label}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* TERMINAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/5 bg-[#090414] overflow-hidden shadow-2xl relative text-center lg:text-left"
          >
            <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-white/80 min-h-35 flex flex-col justify-between">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDisplay.index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
                    <span className="text-[#A370F7]">&gt;&gt; NODE:</span>
                    <span className="text-cyan-400 font-bold">
                      {hoveredNode ? activeDisplay.name : activeDisplay.tag}
                    </span>
                    <span className="text-emerald-400 text-xs ml-0 lg:ml-auto">
                      {activeDisplay.status}
                    </span>
                  </div>

                  <p className="text-[#E2D4F7]/60 text-sm">
                    {activeDisplay.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between text-[9px] text-white/30">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  SYSTEM: ACTIVE
                </span>
                <span>FILTER: {selectedBranch.toUpperCase()}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT GRID */}
        <motion.div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AnimatePresence>
            {filteredNodes.map((node) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                className="group bg-[#1A1235]/20 border border-white/5 rounded-xl p-5 flex items-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/5">
                  {node.icon}
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-white font-bold">{node.name}</h3>
                  <span className="text-xs text-white/40">{node.status}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Skills;