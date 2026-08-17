import React, { useState } from "react";

const PHONE_NUMBER = "22995719898"; // sans le "+", format requis par l'API wa.me

export const WhatsAppContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState(""); 
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !subject.trim() || !message.trim()) return;

    const text = [
      `Nom : ${name}`,
      `Sujet : ${subject}`,
      "",
      message,
    ].join("\n");

    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-gray-400 p-8 shadow-xl border border-gray-300 py-16 px-[8%]">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nom Complet
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2F5D3A] focus:ring-2 focus:ring-green-200 outline-none transition"
            placeholder="Votre nom..."
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Sujet (Maladie ou Produit)
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2F5D3A] focus:ring-2 focus:ring-green-200 outline-none transition"
            placeholder="Ex: Arthrose, Cure détox..."
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Votre Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#2F5D3A] focus:ring-2 focus:ring-green-200 outline-none transition"
            placeholder="Comment pouvons-nous vous aider ?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#2F5D3A] text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition shadow-lg"
        >
          Envoyer sur WhatsApp
          <i className="fab fa-whatsapp text-xl" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  );
};

export default WhatsAppContactForm;