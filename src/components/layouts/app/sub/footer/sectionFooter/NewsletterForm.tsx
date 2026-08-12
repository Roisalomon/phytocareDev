import React, { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      return;
    }

    // TODO: brancher sur l'API d'inscription newsletter
    setStatus("success");
    setEmail("");
  };

  return (
    <div className="relative bg-[#034949] text-white py-8 px-[8%] rounded-2xl mb-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="max-w-xl">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Abonnez-vous à notre Newsletter
        </h3>
        <p className="text-gray-200 text-sm">
          Recevez nos conseils de santé naturelle et nos offres exclusives
          directement dans votre boîte mail.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
        noValidate
      >
        <div className="w-full sm:w-[280px]">
          <label htmlFor="newsletter-email" className="sr-only">
            Adresse email
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Votre adresse email..."
            className="px-4 py-3 rounded-lg text-black outline-none text-sm w-full"
            aria-invalid={status === "error"}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#F7C842] hover:bg-yellow-500 text-[#0C1A2A] font-semibold px-6 py-3 rounded-lg text-sm transition-all shadow-md flex items-center justify-center gap-2"
        >
          S'abonner
          <i className="fas fa-paper-plane text-xs" aria-hidden="true"></i>
        </button>
      </form>

      {status === "success" && (
        <p role="status" className="text-xs text-[#F7C842] absolute -bottom-5 left-[8%]">
          Merci pour votre inscription !
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-xs text-red-300 absolute -bottom-5 left-[8%]">
          Veuillez saisir une adresse email valide.
        </p>
      )}
    </div>
  );
};

export default NewsletterForm;
