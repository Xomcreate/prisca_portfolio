import React, { useState } from "react";
import { FaTerminal, FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaHeading } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [systemStatus, setSystemStatus] = useState("READY_TO_TRANSMIT");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSystemStatus("TRANSMITTING_PACKETS...");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Server error");

      setSystemStatus("TRANSMISSION_SUCCESS_200_OK");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSystemStatus("READY_TO_TRANSMIT"), 4000);
    } catch (err) {
      setSystemStatus("TRANSMISSION_FAILED_500");
      console.error("Transmission error:", err);
      setTimeout(() => setSystemStatus("READY_TO_TRANSMIT"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#120A21] text-white py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden min-h-screen flex flex-col justify-center">

      {/* BACKGROUND ORBITAL GLOWS */}
      <div className="absolute top-10 left-1/4 w-75 md:w-150 h-75 md:h-150 bg-[#5E25B6]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-75 md:w-150 h-75 md:h-150 bg-[#7B2CBF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto space-y-12 md:space-y-16">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#5E25B6]/15 border border-[#5E25B6]/40 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#7B2CBF] animate-ping"></span>
            <p className="text-[#E2D4F7] uppercase tracking-[3px] text-xs font-bold">
              Secure Channel
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Initialize{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#7B2CBF] via-[#E2D4F7] to-white">
              Connection
            </span>
          </h2>
          <p className="text-[#E2D4F7]/60 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Have a project tracking matrix in mind? Drop a transmission packet below, and let's compile something monumental together.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto w-full">

          {/* LEFT: TELEMETRY & SOCIAL */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            {/* TERMINAL STATUS BOX */}
            <div className="rounded-2xl border border-white/5 bg-[#090414] overflow-hidden shadow-2xl relative flex flex-col h-full">
              <div className="bg-[#160d29] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest flex items-center gap-1.5">
                  <FaTerminal className="text-[#A370F7]" /> network_status.sh
                </span>
              </div>

              <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-white/80 grow flex flex-col justify-between text-center items-center">
                <div className="w-full space-y-4 my-auto">
                  <div className="text-[#A370F7]">&gt;&gt; NET_PORT_STATUS:</div>
                  <div>
                    <span className={`text-[11px] px-3 py-1 rounded-md border font-sans uppercase font-bold transition-all duration-300 ${
                      systemStatus.includes("SUCCESS")
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : systemStatus.includes("FAILED")
                        ? "bg-red-500/10 text-red-400 border-red-500/30"
                        : isSubmitting
                        ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
                        : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                    }`}>
                      {systemStatus}
                    </span>
                  </div>
                  <p className="text-[#E2D4F7]/40 font-sans text-xs font-light max-w-xs mx-auto">
                    Direct routing pathways are secured using SSL architecture wrappers for end-to-end processing protection.
                  </p>
                </div>

                <div className="w-full border-t border-white/5 pt-4 mt-6 text-left space-y-3 font-sans text-sm">
                  <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#E2D4F7] group-hover:bg-[#5E25B6]/30 transition-colors">
                      <FaEnvelope />
                    </div>
                    <span>your.email@example.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl border border-white/5 bg-[#1A1235]/20 backdrop-blur-sm hover:bg-[#1A1235]/60 hover:border-[#E2D4F7]/20 transition-all duration-300 group text-center">
                <FaLinkedin className="text-xl text-[#E2D4F7]/60 group-hover:text-[#A370F7] transition-colors" />
                <span className="font-mono text-xs uppercase tracking-wider text-white/70">LinkedIn</span>
              </a>
              <a href="https://github.com/Xomcreate" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl border border-white/5 bg-[#1A1235]/20 backdrop-blur-sm hover:bg-[#1A1235]/60 hover:border-[#E2D4F7]/20 transition-all duration-300 group text-center">
                <FaGithub className="text-xl text-[#E2D4F7]/60 group-hover:text-[#A370F7] transition-colors" />
                <span className="font-mono text-xs uppercase tracking-wider text-white/70">GitHub</span>
              </a>
            </div>

          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#1A1235]/20 backdrop-blur-xl space-y-5">

              <div className="grid sm:grid-cols-2 gap-5">
                {/* NAME */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-[#E2D4F7]/50">Identity Segment</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 text-xs"><FaUser /></span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-[#090414]/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#5E25B6] focus:ring-1 focus:ring-[#5E25B6] transition-all"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="space-y-2">
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-[#E2D4F7]/50">Return Address</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 text-xs"><FaEnvelope /></span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@terminal.com"
                      className="w-full bg-[#090414]/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#5E25B6] focus:ring-1 focus:ring-[#5E25B6] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* SUBJECT */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase tracking-widest text-[#E2D4F7]/50">Topic Header</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 text-xs"><FaHeading /></span>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="System Integration Request"
                    className="w-full bg-[#090414]/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#5E25B6] focus:ring-1 focus:ring-[#5E25B6] transition-all"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] uppercase tracking-widest text-[#E2D4F7]/50">Payload Core Description</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detail your architecture request or collaborative concept strings here..."
                  className="w-full bg-[#090414]/50 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#5E25B6] focus:ring-1 focus:ring-[#5E25B6] transition-all resize-none"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-linear-to-r from-[#5E25B6] to-[#7B2CBF] hover:from-[#6c30ca] hover:to-[#8c3fe0] text-white font-bold transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane className={`text-xs transition-transform ${isSubmitting ? "animate-ping" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
                <span>{isSubmitting ? "Transmitting..." : "Transmit Packet"}</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;