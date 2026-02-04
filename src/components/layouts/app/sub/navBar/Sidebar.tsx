import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    X,
    ChevronRight,
} from "lucide-react";

import HoverHome from "./homeHover/HoverHome";
import PageHover from "./pagesHover/PageHover";
import CoursesHover from "./coursesHover/CoursesHover";
import BlogHover from "./BlogHover/BlogHover";
import ContactHover from "./ContactHover/ContactHover";
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <div>
            {isOpen && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 bg-black/70 z-40"
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 h-full w-[75%] pl-3 max-w-sm bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header */}
                <div className="py-5 px-4 mb-5 flex justify-between items-center">
                    <img
                        src="/assets/mes/logo-black.png"
                        alt="Logo"
                        className="w-[100px] sm:w-[150px] h-auto"
                    />

                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-1 text-[15px] font-medium text-[#0F172B]">

                    {/* ✅ HOME */}
                    <div className="border-y-2 border-y-gray-200 py-2">
                        <button
                            className="flex items-center justify-between w-full hover:text-[#09220f]"
                            onClick={() =>
                                setOpenDropdown(openDropdown === "home" ? null : "home")
                            }
                        >
                            Home
                            <ChevronRight
                                className={`w-5 h-5 transition-transform ${
                                    openDropdown === "home" ? "rotate-90" : ""
                                }`}
                            />
                        </button>

                        {openDropdown === "home" && (
                            <div className="pl-4 pt-3">
                                <HoverHome mobile />
                            </div>
                        )}
                    </div>

                    {/* ✅ PAGES */}
                    <div className="border-b-2 border-gray-200 py-2">
                        <button
                            className="flex items-center justify-between w-full hover:text-[#09220f]"
                            onClick={() =>
                                setOpenDropdown(openDropdown === "pages" ? null : "pages")
                            }
                        >
                            Pages
                            <ChevronRight
                                className={`w-5 h-5 transition-transform ${
                                    openDropdown === "pages" ? "rotate-90" : ""
                                }`}
                            />
                        </button>

                        {openDropdown === "pages" && (
                            <div className="pl-4 pt-3">
                                <PageHover mobile />
                            </div>
                        )}
                    </div>

                    {/* ✅ COURSES */}
                    <div className="border-b-2 border-gray-200 py-2">
                        <button
                            className="flex items-center justify-between w-full hover:text-[#09220f]"
                            onClick={() =>
                                setOpenDropdown(openDropdown === "courses" ? null : "courses")
                            }
                        >
                            Courses
                            <ChevronRight
                                className={`w-5 h-5 transition-transform ${
                                    openDropdown === "courses" ? "rotate-90" : ""
                                }`}
                            />
                        </button>

                        {openDropdown === "courses" && (
                            <div className="pl-4 pt-3">
                                <CoursesHover mobile />
                            </div>
                        )}
                    </div>

                    {/* ✅ BLOG */}
                    <div className="border-b-2 border-gray-200 py-2">
                        <button
                            className="flex items-center justify-between w-full hover:text-[#09220f]"
                            onClick={() =>
                                setOpenDropdown(openDropdown === "blog" ? null : "blog")
                            }
                        >
                            Blog
                            <ChevronRight
                                className={`w-5 h-5 transition-transform ${
                                    openDropdown === "blog" ? "rotate-90" : ""
                                }`}
                            />
                        </button>

                        {openDropdown === "blog" && (
                            <div className="pl-4 pt-3">
                                <BlogHover mobile />
                            </div>
                        )}
                    </div>

                    {/* ✅ CONTACT */}
                    <div className="border-b-2 border-gray-200 py-2">
                        <button
                            className="flex items-center justify-between w-full hover:text-[#09220f]"
                            onClick={() =>
                                setOpenDropdown(openDropdown === "contact" ? null : "contact")
                            }
                        >
                            Contact
                            <ChevronRight
                                className={`w-5 h-5 transition-transform ${
                                    openDropdown === "contact" ? "rotate-90" : ""
                                }`}
                            />
                        </button>

                        {openDropdown === "contact" && (
                            <div className="pl-4 pt-3">
                                <ContactHover mobile />
                            </div>
                        )}
                    </div>
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
        </div>
    );
};

export default Sidebar;
