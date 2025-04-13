
import { useState } from "react";
import { motion } from "framer-motion";

export default function UNAILandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    linkedin: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://api.sheety.co/3b27e3e3e68747b9aeb022d8820b1c3e/unaiSignups/sheet1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sheet1: formData }),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", role: "", linkedin: "", message: "" });
    } catch (error) {
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-950 text-white font-sans">
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20">
            <source src="/ai-network-placeholder.mp4" type="video/mp4" />
          </video>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Building Tomorrow’s Intelligence, Today.</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 mx-auto">
            Welcome to <strong>UNAI</strong> — The <em><strong>Universal Neural Architect & Incubator</strong></em>. A next-gen, AI-exclusive virtual ecosystem designed to ignite, nurture, and elevate early-stage AI startups with global aspirations.
          </p>
          <div className="space-x-4">
            <a href="#form" className="bg-white text-black px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-gray-200 transition">
              👉 Join the Movement
            </a>
            <button
              onClick={() => setShowVideo(true)}
              className="bg-transparent border border-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition"
            >
              🎬 Watch Intro Video
            </button>
          </div>
        </motion.div>

        {showVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-white text-2xl z-50"
              >
                ✕
              </button>
              <video controls autoPlay className="w-full rounded-xl shadow-2xl">
                <source src="/intro-unai.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </section>

      <motion.section className="bg-gray-800 py-16 px-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-6">What's Coming</h2>
        <div className="text-lg text-gray-300 max-w-3xl mx-auto space-y-4">
          <p>🚀 <strong>First Virtual Cohort</strong> launching soon with curated AI founders</p>
          <p>📣 <strong>Global Demo Day</strong> with leading VCs and AI mentors</p>
          <p>📊 <strong>LaunchPad Platform</strong> for investor-startup matchmaking and advisory access</p>
        </div>
      </motion.section>

      <motion.section className="bg-black py-16 px-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-6">Our Roadmap</h2>
        <div className="text-lg text-gray-300 max-w-4xl mx-auto space-y-4">
          <p><strong>Year 1:</strong> Build ecosystem, run 2 global virtual cohorts, onboard 20+ AI mentors</p>
          <p><strong>Year 2:</strong> Launch UNAI Studio + partner with universities & labs</p>
          <p><strong>Year 3–5:</strong> Scale operations to 3 continents, establish physical innovation hubs, launch AI impact funds</p>
        </div>
      </motion.section>

      <motion.section className="bg-gray-900 py-16 px-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-6">Future Collaborators</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
          We’re currently in discussions with global VCs, accelerators, research labs, and policy experts. Want to be among our founding ecosystem?
        </p>
        <a href="#form" className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
          🤝 Express Interest
        </a>
      </motion.section>

      <motion.section id="form" className="bg-black text-white py-20 px-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Join the UNAI Collective</h2>
          <p className="text-lg mb-8">
            We’re building a movement — of builders, believers, and backers of the AI-first future. Curious? Inspired? Ready?
          </p>
          {submitted ? (
            <p className="text-green-400 font-semibold text-xl">Thank you for your interest! We'll be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-2 rounded-xl text-black" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full px-4 py-2 rounded-xl text-black" required />
              <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role (Startup / Mentor / Investor / Partner)" className="w-full px-4 py-2 rounded-xl text-black" required />
              <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn URL" className="w-full px-4 py-2 rounded-xl text-black" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your interest..." rows="4" className="w-full px-4 py-2 rounded-xl text-black"></textarea>
              <button type="submit" className="bg-white text-black px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-gray-300 transition">
                📬 Submit Interest
              </button>
            </form>
          )}
        </div>
      </motion.section>

      <motion.footer className="bg-gray-900 text-white text-sm text-center py-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <p>UNAI – Universal Neural Architect & Incubator</p>
        <p>AI. Reimagined. Rooted in India. Open to the World.</p>
        <p>📧 info@unai.ai | 🌍 www.unai.ai</p>
      </motion.footer>
    </div>
  );
}

