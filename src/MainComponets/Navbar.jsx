import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // NAV LINKS
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full fixed top-6 left-0 z-50 px-6 md:px-12"
    >
      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-[#120A21]/70 border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(94,37,182,0.15)]">
        <div className="px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#home"
            className="relative flex items-center gap-2 cursor-pointer"
          >
            <div className="text-2xl font-black tracking-wider">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-[#E2D4F7] to-[#7B2CBF]">
                Prisca
              </span>
              <span className="text-[#7B2CBF] animate-pulse">.</span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group"
              >
                <a
                  href={item.href}
                  className="hover:text-[#E2D4F7] transition duration-300"
                >
                  {item.name}
                </a>

                {/* UNDERLINE */}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#7B2CBF] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
              </motion.li>
            ))}
          </ul>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">

            {/* SOCIALS */}
            <div className="hidden lg:flex gap-3">
              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://github.com/Xomcreate"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#5E25B6]/20 hover:border-[#5E25B6]/40 transition duration-300 text-white"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15 }}
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#7B2CBF]/20 hover:border-[#7B2CBF]/40 transition duration-300 text-white"
              >
                <FaLinkedin />
              </motion.a>
            </div>

            {/* HIRE ME BUTTON */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center justify-center px-6 py-2 rounded-xl bg-linear-to-r from-[#5E25B6] to-[#7B2CBF] text-white font-semibold shadow-[0_4px_20px_rgba(94,37,182,0.35)]"
            >
              Hire Me
            </motion.a>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-24 left-6 right-6"
          >
            <div className="backdrop-blur-2xl bg-[#120A21]/95 border border-white/10 rounded-2xl p-6 shadow-2xl">

              {/* MOBILE LINKS */}
              <ul className="flex flex-col gap-5 text-gray-300 font-medium">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-[#E2D4F7] transition duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* MOBILE FOOTER */}
              <div className="flex items-center justify-between mt-8">

                {/* MOBILE SOCIALS */}
                <div className="flex gap-4 text-white text-xl">
                  <a
                    href="https://github.com/Xomcreate"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>

                {/* MOBILE HIRE BUTTON */}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#7B2CBF] px-4 py-2 rounded-xl text-xs text-white font-semibold"
                >
                  Hire Me
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;