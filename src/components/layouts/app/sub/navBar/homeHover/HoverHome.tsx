import React, { useState } from "react";
import UIHoverHomeCard from "../../../../../ui/elements/navBarUI/UIHoverHomeCard";
import { HoverVariants } from "./HoverVariants";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface HoverHomeProps {
    mobile?: boolean;
}

const HoverHome: React.FC<HoverHomeProps> = ({ mobile = false }) => {
    const [open, setOpen] = useState(false);

    // ✅ VERSION MOBILE
    if (mobile) {
        return (
            <div className="flex flex-col gap-3">
                {HoverVariants.map((item) => (
                    <UIHoverHomeCard
                        key={item.to}
                        title={item.title}
                        image={item.image}
                        to={item.to}
                    />
                ))}
            </div>
        );
    }

    // ✅ VERSION DESKTOP (hover)
    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <Link
                to="/"
                className="group flex items-center gap-1 px-2 py-1 rounded-sm transition-all hover:text-[#034949]"
            >
                Home
                <span className="arrow inline-block text-[12px] transition-transform group-hover:-rotate-180 duration-500">
                    <ChevronDown className="w-4 h-4" />
                </span>
            </Link>

            <div
                className={`fixed left-0 top-[100px] w-screen bg-white shadow-xl p-5 z-50 transition-all duration-200
        ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
                <div className="max-w-[1400px] mx-auto grid grid-cols-5 gap-4 mb-5">
                    {HoverVariants.map((item) => (
                        <UIHoverHomeCard
                            key={item.to}
                            title={item.title}
                            image={item.image}
                            to={item.to}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HoverHome;
