import React from "react";
import { ArrowRight} from "lucide-react";

const ContactBoutton: React.FC = () => {
  return (
    <button
      className="flex items-center justify-center flex-row px-6 py-3  
                 bg-[#01380e] text-white font-semibold text-[14px] 
                 rounded-lg shadow-[0_4px_6px_rgba(255,193,7,0.3)] 
                 cursor-pointer 
                "
    >
      Contact us
      <span className="ml-2 text-[14px] leading-none">
        <ArrowRight className="w-4 h-4"/>
      </span>
    </button>
  );
}

export default ContactBoutton;