import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  X,
  // ChevronRight,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
      // const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-[280px] h-full bg-white shadow-xl z-[9999] transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <button
          onClick={onClose}
          aria-label="Fermer le menu"
          className="absolute top-4 right-4 text-xl text-gray-600 hover:text-red-500"
        >
          <X className="w-8 h-8" />
        </button>
        <nav className="mt-16 flex flex-col gap-5 px-6 text-sm font-medium bg-white">
          <Link to="/" onClick={onClose} className="hover:text-[#F7C842]">
            Accueil
          </Link>
          <Link to="/Produits" onClick={onClose} className="hover:text-[#F7C842]">
            Produits
          </Link>
          <Link to="/Maladies" onClick={onClose} className="hover:text-[#F7C842]">
            Maladies
          </Link>
          <Link to="/Propos" onClick={onClose} className="hover:text-[#F7C842]">
            À propos
          </Link>
          <Link to="/Contact" onClick={onClose} className="hover:text-[#F7C842]">
            Contact
          </Link>
          
          <a
            href="https://wa.me/+2290166414894"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-[#F7C842] text-white text-center py-2 rounded-lg font-semibold"
          >
            Commander
          </a>
        </nav>


        {/* Contact Info */}
        <div className="p-4 mt-10">
          <h2 className="text-lg font-semibold mb-8 text-[#0F172B]">
            Get In Touch
          </h2>
          <ul className="space-y-3 text-[15px] text-[#0F172B]">
            <li className="flex items-center gap-3">
              <Mail className="w-11 h-11 text-white bg-[#01380e] p-2.5 rounded-full" />
              hello@yourmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-11 h-11 text-white bg-[#01380e] p-2.5 rounded-full" />
              (00) 456 1122 7890
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-11 h-11 text-white bg-[#01380e] p-2.5 rounded-full" />
              Riverside 255, San Francisco, USA
            </li>
          </ul>
        </div>

      </div>

      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-[9998]"
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default MobileMenu;
