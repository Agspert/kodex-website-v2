import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm mb-2">Full name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-transparent border border-kodex-light-gray rounded-lg px-4 py-3 focus:outline-none focus:border-kodex-green"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-2">Work email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-transparent border border-kodex-light-gray rounded-lg px-4 py-3 focus:outline-none focus:border-kodex-green"
          required
        />
      </div>

      <div>
        <label className="block text-sm mb-2">Your message for us</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-transparent border border-kodex-light-gray rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-kodex-green"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white px-8 py-4 rounded-full font-bold border border-white shadow-lg shadow-white/40 hover:shadow-white/60 transition-all"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
