
import { useState, useEffect } from "react";
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
        body: JSON.stringify({
          sheet1: formData,
        }),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", role: "", linkedin: "", message: "" });
    } catch (error) {
      alert("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-950 text-white font-sans">
      {/* ...existing sections... */}

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

      <motion.footer className="bg-gray-900 text-white text-sm text-center py-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <p>UNAI – Universal Neural Architect & Incubator</p>
        <p>AI. Reimagined. Rooted in India. Open to the World.</p>
        <p>📧 info@unai.ai | 🌍 www.unai.ai</p>
      </motion.footer>
    </div>
  );
}
