import React from "react";
import {
  Briefcase,
  Palette,
  HeartPulse,
  User,
  Video,
  Monitor,
  Megaphone,
  BarChart3,
} from "lucide-react";

const categories = [
  {
    title: "Business Management",
    icon: Briefcase,
    bg: "bg-[#F2F7F6]",
    border: "border-[#2F7D6B]",
    iconColor: "text-[#2F7D6B]",
  },
  {
    title: "Arts & Design",
    icon: Palette,
    bg: "bg-[#FFD33D]",
    border: "border-[#E6B800]",
    iconColor: "text-[#8A6A00]",
  },
  {
    title: "Health & Fitness",
    icon: HeartPulse,
    bg: "bg-[#FFECEC]",
    border: "border-[#F87171]",
    iconColor: "text-[#EF4444]",
  },
  {
    title: "Personal Development",
    icon: User,
    bg: "bg-[#EAF4FF]",
    border: "border-[#60A5FA]",
    iconColor: "text-[#3B82F6]",
  },
  {
    title: "Video & Photography",
    icon: Video,
    bg: "bg-[#EEF3FF]",
    border: "border-[#6366F1]",
    iconColor: "text-[#4F46E5]",
  },
  {
    title: "Computer Science",
    icon: Monitor,
    bg: "bg-[#ECFDF3]",
    border: "border-[#22C55E]",
    iconColor: "text-[#16A34A]",
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    bg: "bg-[#F5F3FF]",
    border: "border-[#A855F7]",
    iconColor: "text-[#9333EA]",
  },
  {
    title: "Data Science",
    icon: BarChart3,
    bg: "bg-[#FFF1F2]",
    border: "border-[#EC4899]",
    iconColor: "text-[#DB2777]",
  },
];

const CourseCategories: React.FC = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-5 text-center">

        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-green-100 text-green-700">
          Categories
        </span>

        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14">
          Explore Top Courses Categories
          <br />
          That Change Yourself
        </h2>

        {/* Grille */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={` group border ${item.border} ${item.bg} rounded-xl px-8 py-[15%] flex flex-col items-center gap-4 transition`}
              >
                <div className="group-hover:animate-doubleUp">
                  <Icon className={`w-10 h-10  ${item.iconColor}`} />
                </div>
                
                <p className="font-medium text-gray-800 text-sm">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CourseCategories;
