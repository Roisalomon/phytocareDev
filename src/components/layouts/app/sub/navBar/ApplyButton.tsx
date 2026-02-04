import React from "react";
import { ArrowRight} from "lucide-react";
import UIButton from "../../../../ui/elements/UIButton";

const ApplyButton: React.FC = () => {
  return (
    <UIButton text={ <span className="flex items-center">
          Apply Now
          <span className="ml-2 text-[14px] leading-none">
            <ArrowRight className="w-4 h-4" />
          </span>
        </span>
      }
      bgColor="#ffc107"
      textColor="#000000"
      className="flex-row px-5 py-3 text-[14px] font-semibold rounded-lg 
                 shadow-[0_4px_6px_rgba(255,193,7,0.3)] cursor-pointer 
                 transition-colors hover:bg-[#e0a800] hidden md:inline-flex"
    />
  );
}

export default ApplyButton ;