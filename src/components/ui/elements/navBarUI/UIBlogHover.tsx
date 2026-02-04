import React from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./UIComposant/DropdownItem";

interface UIBlogHoverProps {
    links: { label: string; to: string }[];
}

const UIBlogHover: React.FC<UIBlogHoverProps> = ({links }) => {
    return (
        <div className="flex flex-col gap-2">
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

export default UIBlogHover;
