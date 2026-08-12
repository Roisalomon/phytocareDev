import React from "react";
import { Link } from "react-router-dom";
import { FooterLink } from "../../../../../../types/footer";

interface FooterLinksGroupProps {
  title: string;
  links: FooterLink[];
}

export const FooterLinksGroup: React.FC<FooterLinksGroupProps> = ({
  title,
  links,
}) => {
  return (
    <div>
      <h4 className="text-white text-base font-semibold mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-8 after:h-0.5 after:bg-[#F7C842]">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm text-gray-300">
        {links.map((link) =>
          link.external ? (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F7C842] hover:pl-1.5 transition-all duration-200 block"
              >
                {link.label}
              </a>
            </li>
          ) : (
            <li key={link.label}>
              <Link
                to={link.href}
                className="hover:text-[#F7C842] hover:pl-1.5 transition-all duration-200 block"
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default FooterLinksGroup;
