import React from "react";

interface UILatestBlogCardProps {
    image: string;
    category: string;
    date: string;
    author: string;
    title: string;
}

const UILatestBlogCard: React.FC<UILatestBlogCardProps> = ({
    image,
    category,
    date,
    author,
    title,
}) => {
    return (
        <div
            className="
        bg-white rounded-2xl 
        border border-transparent
        transition-all duration-300 ease-out
        hover:border-green-600
        hover:-translate-y-2
        hover:shadow-[0_15px_45px_rgba(16,185,129,0.25)]
        group
      "
        >
            {/* Image */}
            <div className="relative mb-4">
                <img
                    src={image}
                    alt={title}
                    className="
            w-full h-44 object-cover rounded-xl
            transition-transform duration-500
            
          "
                />

                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-green-800 text-white text-xs px-3 py-1 rounded-md">
                    {category}
                </span>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                    📅 {date}
                </span>
                <span className="flex items-center gap-1">
                    👤 {author}
                </span>
            </div>

            {/* Title */}
            <h3
                className="
                text-sm font-semibold text-gray-900
                leading-snug mb-3
                text-left
                line-clamp-2
                ">
                {title}
            </h3>


            {/* CTA */}
            <span
                className="
          inline-flex items-center gap-1
          text-sm font-medium text-gray-500
          transition-colors duration-300
          group-hover:text-green-700
        "
            >
                More Details →
            </span>
        </div>
    );
};

export default UILatestBlogCard;
