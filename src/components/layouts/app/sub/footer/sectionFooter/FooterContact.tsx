import React from "react";
import UIFooterTitle from "../../../../../ui/elements/footerUI/UIFooterTitle";
import { Link } from "react-router-dom";
import UIFooterSocialIcon from "../../../../../ui/elements/footerUI/UIFooterSocialIcon";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const socials = [
    { to: "/twitter", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
    { to: "/facebook", icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
    { to: "/instagram", icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
    { to: "/linkedin", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
];
const contactItems = [
    { label: "Phone:", value: "(+91) 123-456-789" },
    { label: "Email:", value: "educeet@gmail.com" },
    { label: "Location:", value: "North America, USA" },
];


interface FooterContactProps {
    className?: string;
}

const FooterContact: React.FC<FooterContactProps> = ({ className }) => {
    return (
        <div className={className || ""}>
            {/* ✅ Titre */}
            <div className="mb-5">
                <UIFooterTitle className="mb-7">Get Contact</UIFooterTitle>

                {/* ✅ Contact Info */}
                <div className="flex flex-col gap-4 text-sm text-black pl-4">
                    {contactItems.map((item) => (
                        <div key={item.label} className="flex items-start gap-3">
                            <h6 className="font-semibold text-black">{item.label}</h6>
                            <span>{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ✅ Social Icons */}
            <div className="flex items-center gap-4">
                {socials.map((s) => (
                    <UIFooterSocialIcon
                        key={s.label}
                        to={s.to}
                        icon={s.icon}
                        label={s.label}
                    />
                ))}
            </div>


        </div>
    );
};

export default FooterContact;
