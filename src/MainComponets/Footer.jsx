import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#090414] text-white border-t border-white/5 py-12 px-6 md:px-12 overflow-hidden">
      
      {/* Subtle Background Glow Patch */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-75 sm:w-125 h-37.5 bg-[#5E25B6]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
        
        {/* Core System Branding Node */}
        <div className="flex items-center gap-2.5 bg-[#120A21] border border-white/5 px-4 py-1.5 rounded-xl shadow-lg">
          <FaTerminal className="text-[#A370F7] text-xs" />
          <span className="font-mono text-[10px] uppercase tracking-[3px] text-[#E2D4F7]">
            Core_Engine // v2.0.26
          </span>
        </div>

        {/* Dynamic Social Anchor Connections */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/Xomcreate" 
            target="_blank" 
            rel="noreferrer" 
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-[#A370F7] hover:border-[#5E25B6]/30 hover:bg-[#1A1235]/40 transition-all duration-300"
            aria-label="GitHub Profile Pipeline"
          >
            <FaGithub className="text-lg" />
          </a>
          <a 
            href="https://www.linkedin.com/feed/" 
            target="_blank" 
            rel="noreferrer" 
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-[#A370F7] hover:border-[#5E25B6]/30 hover:bg-[#1A1235]/40 transition-all duration-300"
            aria-label="LinkedIn Network Node"
          >
            <FaLinkedin className="text-lg" />
          </a>
      <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=priscaojimba15@gmail.com&su=Support%20Request"
  target="_blank"
  rel="noopener noreferrer"
  className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-[#A370F7] hover:border-[#5E25B6]/30 hover:bg-[#1A1235]/40 transition-all duration-300"
>
  <FaEnvelope className="text-base" />
</a>
        </div>

        {/* Separator String Grid Layer */}
        <div className="w-16 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Secondary Meta Telemetry & Copyright Section */}
        <div className="space-y-2">
          <p className="text-white/40 text-xs font-light tracking-wide">
            Designed &amp; engineered to process digital system matrices cleanly.
          </p>
          <p className="font-mono text-[10px] text-[#E2D4F7]/30 uppercase tracking-widest">
            &copy; {currentYear} All Rights Reserved // System Operational
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;