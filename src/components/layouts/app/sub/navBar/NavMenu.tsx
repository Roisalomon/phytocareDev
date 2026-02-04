import React from "react";
import { Link, redirect } from "react-router-dom";
import { ChevronDown } from "lucide-react";

// ✅ Import des composants de dropdown
import HoverHome from "./homeHover/HoverHome";
import PageHover from "./pagesHover/PageHover";
import CoursesHover from "./coursesHover/CoursesHover";
import BlogHover from "./BlogHover/BlogHover";
import ContactHover from "./ContactHover/ContactHover";

// ✅ Menu configuré avec type
const menuItems = [
  { label: "Home", type: "dropdown-home", path: "/" },
  { label: "Pages", type: "dropdown-pages", path: "/" },
  { label: "Courses", type: "dropdown-courses", path: "/courses" },
  { label: "Blog", type: "dropdown-blog", path: "/blog" },
  { label: "Contact", type: "dropdown-contact", path: "/contact" },
];


const NavMenu: React.FC = () => {
  return (
    <nav className="flex gap-0 font-[Times_New_Roman] text-[14px] text-black font-medium">
      {menuItems.map((item) => {
        switch (item.type) {
          case "dropdown-home":
            return <HoverHome key={item.label} />;
          case "dropdown-pages":
            return <PageHover key={item.label} />;
          case "dropdown-courses":
            return <CoursesHover key={item.label} />;
          case "dropdown-blog":
            return <BlogHover key={item.label} />;
          case "dropdown-contact":
            return <ContactHover key={item.label} />;
          default:
            return (
              <Link
                key={item.label}
                to={item.path}
                className="group flex items-center gap-1 px-2 py-1 rounded-sm transition-all hover:text-[#034949]"
              >
                {item.label}
                <span className="arrow inline-block text-[12px] transition-transform group-hover:-rotate-180 duration-500">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </Link>
            );
        }
      })}
    </nav>
  );
};

export default NavMenu;
