import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { PageVariants } from "./PageVariants";
import UIPageHover from "../../../../../ui/elements/navBarUI/UIPageHover";

interface PageHoverProps {
    mobile?: boolean;
}

const PageHover: React.FC<PageHoverProps> = ({ mobile = false }) => {
    const [open, setOpen] = useState(false);

    /* ✅ ✅ VERSION MOBILE (Sidebar) */
    if (mobile) {
        return (
            <div className="flex flex-col gap-4">
                {PageVariants.map((section) => (
                    <UIPageHover
                        key={section.title}
                        title={section.title}
                        links={section.links}
                    />
                ))}
            </div>
        );
    }

    /* ✅ ✅ VERSION DESKTOP (hover) — inchangée */
    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            {/* ✅ Pages est un lien ET déclenche le hover */}
            <Link
                to="/pages"
                className="group flex items-center gap-1 px-2 py-1 rounded-sm transition-all hover:text-[#034949] "
            >
                Pages
                <span className="arrow inline-block text-[12px] transition-transform group-hover:-rotate-180 duration-500">
                    <ChevronDown className="w-4 h-4" />
                </span>
            </Link>

            {/* ✅ Dropdown full-width aligné sous Pages */}
            <div
                className={`fixed top-[120px] left-1/2 -translate-x-1/2 w-[1000px] bg-white shadow-xl rounded-xl p-8 z-50 transition-all duration-200
                ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
                <div className="max-w-[1400px] mx-auto grid grid-cols-4 gap-8">
                    {PageVariants.map((section) => (
                        <UIPageHover
                            key={section.title}
                            title={section.title}
                            links={section.links}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageHover;
