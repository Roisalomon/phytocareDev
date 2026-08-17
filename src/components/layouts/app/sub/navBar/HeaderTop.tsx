import React from "react";
import SocialIcons from "./SocialIcons";
import { PhoneCall, Mail } from "lucide-react";
import UIUnderlineBoutton from "../../../../ui/elements/UIUnderlineBoutton";

export const HeaderTop: React.FC = () => {
  return (
    <div className="bg-[#0C1A2A] text-white py-2 px-[8%] flex flex-col sm:flex-row justify-between items-center">
      {/* LEFT CONTACT */}
     <div className="flex items-center flex-wrap">
        <span className="mr-5 flex items-center hidden lg:flex">
          <PhoneCall className="text-[#F7C842] mr-1.5 w-5 h-5 sm:w-5 sm:h-5" />
          <UIUnderlineBoutton>+229 95 71 98 98</UIUnderlineBoutton>
        </span>
        <span className="mr-5 text-[#9c9c9C] text-[14px] sm:text-[20px] hidden lg:flex">|</span>
        <span className="flex items-center ">
          <Mail className="text-[#F7C842] mr-1.5 w-5 h-5 sm:w-5 sm:h-5 " />
          <UIUnderlineBoutton>phytocare74@gmail.com</UIUnderlineBoutton>
        </span>
      </div>
      {/* RIGHT SOCIAL */}
      <div className="flex items-center gap-4">
        <span className=" hidden md:flex mx-2 text-[#9c9c9C] text-[14px] sm:text-[20px]">|</span>
        <span className=" hidden md:flex">Follow On:</span>
        <SocialIcons />
      </div>

    </div>
  );
};

export default HeaderTop;
