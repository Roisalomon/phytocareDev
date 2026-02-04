import React, { useState } from "react";
import { Search, Send, X } from "lucide-react";

interface MobileSeachBarProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileSeachBar: React.FC<MobileSeachBarProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState("");

    const suggestionsList = [
        "UI Design",
        "React Navigation",
        "Tailwind Components",
        "JavaScript Basics",
        "Frontend Roadmap",
    ];

    const handleSuggestionClick = (text: string) => {
        setQuery(text);
    };

    const handleSubmit = () => {
        console.log("Recherche envoyée :", query);

        // ✅ Effacer le champ après l’envoi
        setQuery("");
    };

    return (
        <div>
            <div
                className={`fixed inset-0 h-full bg-white z-50 transform transition-all duration-300  ${isOpen ? "translate-y-0" : "translate-y-full"}`}
            >
                {/* ✅ Barre du haut */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-200">
                    <Search className="w-5 h-5 text-gray-500" />

                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search Course..."
                        className="flex-1 outline-none text-[16px] border-0 pl-4 py-2.5 text-sm text-black outline-none placeholder:text-gray-400"
                    />

                    {/* ✅ Si query vide → bouton fermer */}
                    {query.length === 0 ? (
                        <button onClick={onClose}>
                            <X className="w-6 h-6 text-gray-600" />
                        </button>
                    ) : (
                        /* ✅ Si query non vide → bouton envoyer */
                        <button onClick={handleSubmit}>
                            <Send className="w-6 h-6 text-[#034949]" />
                        </button>
                    )}
                </div>

                {/* ✅ Suggestions */}
                <div className="px-4 py-5">

                    <div className="flex flex-col gap-3">
                        {suggestionsList.map((item) => (
                            <button
                                key={item}
                                onClick={() => handleSuggestionClick(item)}
                                className="text-left text-gray-600 hover:text-[#034949] transition"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileSeachBar;
