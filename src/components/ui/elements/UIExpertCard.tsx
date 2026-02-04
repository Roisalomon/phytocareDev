import React from "react";
import {
  Facebook,
  X,
  Dribbble,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

interface UIExpertCardProps {
  name: string;
  role: string;
  image: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    dribbble?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

const SOCIAL_ORDER = [
  { key: "facebook", icon: Facebook },
  { key: "twitter", icon: X },
  { key: "dribbble", icon: Dribbble },
  { key: "instagram", icon: Instagram },
  { key: "linkedin", icon: Linkedin },
  { key: "youtube", icon: Youtube },
] as const;

const UIExpertCard: React.FC<UIExpertCardProps> = ({
  name,
  role,
  image,
  socialLinks,
}) => {
  const visibleSocials =
    socialLinks
      ? SOCIAL_ORDER.filter(
          (s) => socialLinks[s.key as keyof typeof socialLinks]
        ).slice(0, 4)
      : [];

  return (
    <div className="w-[320px] bg-white rounded-2xl shadow-md overflow-hidden group">

      {/* Header */}
      <div className="text-center px-6 pt-6 pb-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{role}</p>
      </div>

      {/* Image + Hover overlay */}
      <div className="relative px-4 pb-4">
        <div className="relative rounded-xl overflow-hidden">

          {/* Image */}
          <img
            src={image}
            alt={name}
            className="w-full h-[300px] object-cover transition duration-300 group-hover:brightness-75"
          />

          {/* Hover social icons */}
          {visibleSocials.length > 0 && (
            <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-3">
                {visibleSocials.map(({ key, icon: Icon }) => (
                  <SocialIcon
                    key={key}
                    href={socialLinks![key as keyof typeof socialLinks]!}
                  >
                    <Icon />
                  </SocialIcon>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

/* ---------- Reusable Icon Button ---------- */
const SocialIcon: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center
    hover:bg-white transition"
  >
    <span className="text-white hover:text-gray-800 transition [&>svg]:w-5 [&>svg]:h-5">
      {children}
    </span>
  </a>
);

export default UIExpertCard;
