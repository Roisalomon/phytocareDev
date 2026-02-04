import React from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./UIComposant/DropdownItem";

interface UIContactHoverProps {
    links: { label: string; to: string }[];
}

const UIContactHover: React.FC<UIContactHoverProps> = ({ links }) => {
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

export default UIContactHover;
