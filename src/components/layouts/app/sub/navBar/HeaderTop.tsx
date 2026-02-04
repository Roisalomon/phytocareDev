import React from "react";
import SocialIcons from "./SocialIcons";
import { PhoneCall, Mail } from "lucide-react";
import UIUnderlineBoutton from "../../../../ui/elements/UIUnderlineBoutton";

const HeaderTop: React.FC = () => {
  return (
    <div className="
    bg-[#0C1A2A] text-white 
    py-2 
    px-[8%]
    flex flex-col sm:flex-row justify-between items-center 
    text-sm sm:text-[13px] md:text-[14px] lg:text-[15px] gap-2 sm:gap-0
    ">
      {/* Contact gauche */}
      <div className="flex items-center flex-wrap">
        <span className="mr-5 flex items-center hidden lg:flex">
          <PhoneCall className="text-[#F7C842] mr-1.5 w-5 h-5 sm:w-5 sm:h-5" />
          <UIUnderlineBoutton>(705) 569-0123 </UIUnderlineBoutton>
        </span>
        <span className="mr-5 text-[#9c9c9C] text-[16px] sm:text-[20px] hidden lg:flex">|</span>
        <span className="flex items-center ">
          <Mail className="text-[#F7C842] mr-1.5 w-5 h-5 sm:w-5 sm:h-5 " />
          <UIUnderlineBoutton>info@intogmail.com </UIUnderlineBoutton>
        </span>
      </div>

      {/* Liens + réseaux à droite */}
      <div className="flex items-center gap-4">
        <div className="hidden ecran:flex items-center gap-2">
          <a href="#" className="hover:text-[#F7C842]">Login</a>
          <span>/</span>
          <a href="#" className="hover:text-[#F7C842]">Register</a>
        </div>
        <span className=" hidden md:flex mx-2 text-[#9c9c9C] text-[16px] sm:text-[20px]">|</span>
        <span className=" hidden md:flex">Follow On:</span>
        <SocialIcons />
      </div>
    </div>
  );
}
export default HeaderTop;