import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCode, FaFileAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const timeoutRef = useRef(null);

  const projectData = [
    {
      title: "Computer Based Test Platform",
      description: "A comprehensive digital examination system featuring real-time test delivery, automated grading scales, individual student profiles, and deep performance analytics dashboards for administrators.",
      image: "https://xomcodes.vercel.app/assets/ee-B3m5Ub_F.png",
      tech: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/Xomcreate/elesson",
      liveUrl: "https://elesson.vercel.app/"
    },
    {
      title: "Simba Ventures Autos Website",
      description: "A premium, dynamic automotive showroom application showcasing vehicle fleets with detailed specification criteria, interactive filtering systems, and a direct test-drive booking interface.",
      image: "https://xomcodes.vercel.app/assets/hye-D1lq2Nwc.png",
      tech: ["React", "Tailwind", "Node.js"],
      githubUrl: "https://github.com/Xomcreate/Simba_Ventures",
      liveUrl: "https://simba-ventures.vercel.app/"
    },
    {
      title: "A Simple Online Sales Software",
      description: "A standalone, lightweight point-of-sale desktop engine supporting local product inventory tracking, immediate digital receipt generation, and transactional record archiving.",
      image: "https://xomcodes.vercel.app/assets/min-CbiuH1ja.png",
      tech: ["Java", "Netbeans", "Sqlite"],
      githubUrl: "https://github.com/Xomcreate/ChisomOnlineApp",
      isDesktopApp: true
    },
    {
      title: "Human Resource Management System",
      description: "An organizational workforce console designed for corporate employee directory logging, payroll structuring, leave tracking modules, and internal review evaluations.",
      image: "https://xomcodes.vercel.app/assets/broa-Bpf4XabF.png",
      tech: ["React", "Framer Motion", "Tailwind"],
      githubUrl: "https://github.com/Xomcreate/agile",
      liveUrl: "https://agile360-pmc.com/"
    },
    {
      title: "Catholic Church Website",
      description: "A community-focused parish hub featuring interactive parish event calendars, weekly bulletin digital downloads, liturgical ministry scheduling, and sacrament registration utilities.",
      image: "https://xomcodes.vercel.app/assets/cap2-DbnEJtED.jpg",
      tech: ["React", "Tailwind"],
      githubUrl: "https://github.com/Xomcreate/st_marys",
      liveUrl: "https://st-marys-rho.vercel.app/"
    },
    {
      title: "Charity/Donation Site",
      description: "A secure crowdsourcing platform supporting itemized charitable campaigns, continuous real-time milestone funding trackers, transparent impact statements, and payment gateways.",
      image: "https://xomcodes.vercel.app/assets/pro-D4JdIrhp.png",
      tech: ["React", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/Xomcreate/givebloom",
      liveUrl: "https://givebloom.vercel.app/"
    },
    {
      title: "Real Estate Platform",
      description: "A sleek property discovery web application featuring advanced geographic listing filters, high-resolution immersive galleries, virtual tour scheduling, and direct agent connection channels.",
      image: "/webp-images/key.webp",
      tech: ["React", "Firebase", "Tailwind"],
      githubUrl: "https://github.com/Xomcreate/keyway_properties",
      isComingSoon: true
    },
    {
      title: "Learning Management System",
      description: "An online educational environment equipped with structured multi-tier course tracks, fluid video lecture streams, interactive quiz blocks, and individual student progress metrics.",
      image: "/webp-images/cbt.webp",
      tech: ["Vb.net", "visual studio"],
      githubUrl: "#",
      isDesktopApp: true
    },
    {
      title: "Ecommerce Platform",
      description: "A modern storefront platform featuring global payment processing integration, real-time stock allocation workflows, personalized shopping carts, and dynamic customer checkout experiences.",
      image: "/webp-images/eco.webp",
      tech: ["React", "Node.js", "MongoDB"],
      githubUrl: "#",
      isComingSoon: true
    },
    {
      title: "Admin DashBoard Investment Tracker",
      description: "An internal corporate financial matrix built for tracking multi-tier stakeholder capital, compiling macro asset performance yields, managing secure ledger auditing, and generating high-fidelity balance records.",
      image: "/webp-images/admin.webp",
      tech: ["React", "Django", "db.sqlite"],
      githubUrl: "https://github.com/Xomcreate/admindashboard",
      isAdminDashboard: true
    },
    {
      title: "Prisca's PortFolio",
      description: "An elegant, highly interactive digital showcase displaying selective creative design works, detailed career progression milestones, client feedback loops, and an asynchronous automated contact system.",
      image: "/webp-images/prisca.webp",
      tech: ["React", "Node.js", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Personalized Birthday Celebration Portal",
      description: "An immersive, interactive tribute landing page built with custom animations, dynamic photo memories, virtual wishing walls, and tailored audio experiences to celebrate milestone birthdays.",
      image: "/webp-images/ant.webp",
      tech: ["React", "Framer Motion", "Tailwind"],
      githubUrl: "https://github.com/Xomcreate/happy_birthday",
      liveUrl: "https://happy-birthday-sable-seven.vercel.app/"
    },
    {
      title: "Automated Birthday Greeting Engine",
      description: "A automated system designed to manage and schedule automated digital birthday card dispatches, integrate contact calendars, and render dynamic card templates for friends and clients.",
      image: "/webp-images/lon.webp",
      tech: ["React", "Node.js", "Tailwind"],
      githubUrl: "https://github.com/Xomcreate/my_shaylaa_birthday",
      liveUrl: "https://my-shaylaa-birthday.vercel.app/"
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
    }, 5000);

    return () => resetTimeout();
  }, [currentIndex]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const renderActionButton = (project) => {
    if (project.isComingSoon) {
      return (
        <button 
          disabled
          className="bg-white/5 border border-white/10 text-white/40 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider cursor-not-allowed"
        >
          Coming Soon
        </button>
      );
    }

    if (project.isDesktopApp) {
      return (
        <a 
          href={project.githubUrl}
          className="relative group overflow-hidden bg-linear-to-r from-slate-700 to-slate-800 hover:scale-[1.03] active:scale-[0.98] transition duration-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 shadow-lg"
        >
          <span className="relative z-10 flex items-center gap-2.5 text-slate-200">
            Desktop Repo <FaCode size={11} />
          </span>
        </a>
      );
    }

    if (project.isAdminDashboard) {
      return (
        <a 
          href={project.githubUrl}
          className="relative group overflow-hidden bg-linear-to-r from-indigo-700 to-indigo-900 hover:scale-[1.03] active:scale-[0.98] transition duration-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 shadow-lg"
        >
          <span className="relative z-10 flex items-center gap-2.5 text-indigo-100">
            View Case Study <FaFileAlt size={11} />
          </span>
        </a>
      );
    }

    return (
      <a 
        href={project.liveUrl || "#"}
        className="relative group overflow-hidden bg-linear-to-r from-[#5E25B6] to-[#7B2CBF] hover:scale-[1.03] active:scale-[0.98] transition duration-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 shadow-[0_4px_25px_rgba(94,37,182,0.4)]"
      >
        <span className="absolute inset-0 w-full h-full bg-linear-to-r from-[#7B2CBF] to-[#5E25B6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="relative z-10 flex items-center gap-2.5">
          Launch App <FaExternalLinkAlt size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </a>
    );
  };

  return (
    <section id="projects" className="min-h-screen bg-[#120A21] text-white py-32 px-6 md:px-12 relative overflow-hidden flex flex-col justify-center">
      
      {/* ANIMATED SVG WAVY MESH BACKGROUND */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            animate={{
              d: [
                "M 0,200 C 300,150 600,300 900,220 C 1200,140 1350,280 1440,240 L 1440,800 L 0,800 Z",
                "M 0,220 C 350,280 550,130 850,200 C 1150,270 1300,160 1440,210 L 1440,800 L 0,800 Z",
                "M 0,200 C 300,150 600,300 900,220 C 1200,140 1350,280 1440,240 L 1440,800 L 0,800 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            fill="url(#gradient-mesh-1)"
          />
          <motion.path
            animate={{
              d: [
                "M 0,350 C 400,450 700,250 1000,380 C 1300,510 1380,330 1440,360 L 1440,800 L 0,800 Z",
                "M 0,380 C 300,300 650,420 950,320 C 1250,220 1350,400 1440,390 L 1440,800 L 0,800 Z",
                "M 0,350 C 400,450 700,250 1000,380 C 1300,510 1380,330 1440,360 L 1440,800 L 0,800 Z"
              ]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            fill="url(#gradient-mesh-2)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="gradient-mesh-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E25B6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#7B2CBF" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#120A21" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gradient-mesh-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7B2CBF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#5E25B6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* MATCHING HERO PURPLE GLOWING BALLOONS */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-150 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[#5E25B6] rounded-full blur-[120px]" />
      </div>

      {/* COMPONENT CONTENT CORE */}
      <div className="max-w-7xl w-full mx-auto relative z-10 space-y-12">
        
        {/* HEADER BLOCK */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 text-center md:text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#5E25B6]/15 border border-[#5E25B6]/40 px-4 py-1.5 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#7B2CBF]" />
              <p className="text-[#E2D4F7] uppercase tracking-[3px] text-xs font-bold">Portfolio</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Featured{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#7B2CBF] via-[#E2D4F7] to-white">
                Projects
              </span>
            </h2>
          </div>

          {/* CAROUSEL CONTROLLER UTILITIES */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E2D4F7] hover:text-white hover:bg-[#5E25B6]/30 hover:border-[#5E25B6]/50 active:scale-95 transition-all duration-300 z-20"
            >
              <FaChevronLeft size={16} />
            </button>
            <span className="font-mono text-sm text-[#E2D4F7]/60">
              {String(currentIndex + 1).padStart(2, '0')} / {String(projectData.length).padStart(2, '0')}
            </span>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E2D4F7] hover:text-white hover:bg-[#5E25B6]/30 hover:border-[#5E25B6]/50 active:scale-95 transition-all duration-300 z-20"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* CAROUSEL CARDS SLIDER SLIDE CONTAINER */}
        <div className="relative min-h-137.5 md:min-h-105 flex items-center justify-center overflow-hidden px-2">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full grid md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* LEFT BLOCK: CARD VISUAL WRAPPER */}
              <div className="md:col-span-7 flex justify-center relative group w-full">
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#E2D4F7]/40 pointer-events-none" />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#E2D4F7]/40 pointer-events-none" />

                <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 p-2.5 bg-[#1A1235]/40 backdrop-blur-md shadow-2xl group-hover:border-[#E2D4F7]/30 transition-all duration-500">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-linear-to-t from-[#120A21] via-transparent to-transparent z-10 opacity-50" />
                    <img
                      src={projectData[currentIndex].image}
                      alt={projectData[currentIndex].title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT BLOCK: METADATA AND CONTENT */}
              <div className="md:col-span-5 space-y-6 text-center md:text-left">
                <div className="space-y-3">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-[#E2D4F7]/70">
                    <FaCode className="text-[#7B2CBF]" />
                    <span>{projectData[currentIndex].tech.join(" // ")}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none text-white">
                    {projectData[currentIndex].title}
                  </h3>
                </div>

                <p className="text-[#E2D4F7]/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                  {projectData[currentIndex].description}
                </p>

                {/* TECH LABELS & PILLS */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                  {projectData[currentIndex].tech.map((techItem, i) => (
                    <span 
                      key={i} 
                      className="font-mono text-[11px] font-bold bg-[#5E25B6]/10 border border-[#5E25B6]/30 px-3 py-1 rounded-md text-[#E2D4F7]"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* BRAND ACTIONS */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
                  {renderActionButton(projectData[currentIndex])}

                  <a
                    href={projectData[currentIndex].githubUrl || "#"}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#5E25B6]/50 hover:bg-[#5E25B6]/20 transition-all duration-300 text-base"
                    title="GitHub Code"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM PAGINATION MAP */}
        <div className="flex items-center justify-center gap-2 pt-6">
          {projectData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "w-8 bg-linear-to-r from-[#5E25B6] to-[#7B2CBF]" 
                  : "w-2.5 bg-white/10 hover:bg-white/20"
              }`}
              title={`Go to project ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;