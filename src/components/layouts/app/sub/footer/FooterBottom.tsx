import React from "react";
import { Link } from "react-router-dom";
import UIUnderlineBoutton from "../../../../ui/elements/UIUnderlineBoutton";

interface FooterBottomProps {
  className?: string;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ className }) => {
  return (
    <div className={`flex flex-col md:flex-row w-full bg-[#F7C842] md:bg-[#18702e] ${className || ""}`}>

      {/* ✅ Zone gauche : Copyright */}
      <div className="bg-[#F7C842] w-full md:w-1/2 flex items-center justify-center md:justify-start md:pl-[160px] py-4 text-sm text-black" 
      style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}>
        <p className="text-center md:text-left">
          Copyright © 2025 Ordianit All Rights Reserved.
        </p>
      </div>

      {/* ✅ Zone droite : Liens légaux */}
      <div className="bg-[#F7C842] md:bg-[#18702e] w-full md:w-1/2 flex items-top md:justify-end  md:pr-[100px] py-3 text-sm  md:text-white gap-4 flex-wrap"
      style={{ clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)" }}>
        <Link to="/terms" className="hover:underline">
          <UIUnderlineBoutton>Terms of service</UIUnderlineBoutton>
        </Link>
        <span>-</span>
        <Link to="/privacy" className="hover:underline">
          <UIUnderlineBoutton>Privacy policy</UIUnderlineBoutton>
        </Link>
        <span>-</span>
        <Link to="/subscription" className="hover:underline">
          <UIUnderlineBoutton>Subscription</UIUnderlineBoutton>
        </Link>
        <span>-</span>
        <Link to="/login" className="flex flex-col ">
          <div className="flex flex-row gap-x-2">
            <UIUnderlineBoutton>Login</UIUnderlineBoutton>
            <span>&</span>
          </div>
          <UIUnderlineBoutton>Register</UIUnderlineBoutton>
        </Link>
      </div>

    </div>
  );
};

export default FooterBottom;
