import React from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./UIComposant/DropdownItem";

interface UICoursesHoverProps {
    title: string;
    links: { label: string; to: string }[];
}

const UICoursesHover: React.FC<UICoursesHoverProps> = ({ title, links }) => {
    return (
        <div className="flex flex-col gap-2">
            <h4 className="text-[15px] font-semibold text-[#0F172B] mb-2">{title}</h4>
            <ul className="flex flex-col gap-3">
                {links.map((link) => (
                    <li key={link.to}>
                        <DropdownItem label={link.label} to={link.to} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UICoursesHover;
