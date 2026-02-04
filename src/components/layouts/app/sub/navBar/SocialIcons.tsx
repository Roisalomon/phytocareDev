import React from "react";
import { Facebook, Instagram, Twitter, Linkedin} from "lucide-react";

const SocialIcons: React.FC = () => {
  return (
    <div className="flex items-center  hidden md:flex ">
      <Facebook className="ml-3 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer  transition-colors hover:text-[#F7C842]" />
      <Twitter className="ml-3 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer  transition-colors hover:text-[#F7C842]" />
      <Instagram className="ml-3 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer  transition-colors hover:text-[#F7C842]" />
      <Linkedin className="ml-3 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer  transition-colors hover:text-[#F7C842]" />
    </div>
  );
}

export default SocialIcons;
