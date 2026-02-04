import React from "react";
import UIExpertCard from "../../../components/ui/elements/UIExpertCard";

const instructors = [
  {
    name: "Sarah Fontenot",
    role: "Subject Expert",
    image: "assets/team/team-1-1.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Erika Walker",
    role: "Online Course Coach",
    image: "assets/team/team-1-1.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Joan Martinez",
    role: "Academic Mentor",
    image: "assets/team/team-1-3.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Helen Walker",
    role: "Language Instructor",
    image: "assets/team/team-1-3.jpg",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

const InstructorGridSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#F6F8F7]">
      <div className="max-w-7xl mx-auto">

        {/* Top bar */}
        <div className="relative flex items-center justify-between mb-8">
          <span className="inline-block px-5 py-1 text-xs rounded-full bg-red-100 text-green-700 font-medium border-yellow-400 border-[1px] opacity-60 ">
            Instructors
          </span>

          <button className=" absolute top-[400%] z-10 right-0 flex items-center gap-2 bg-green-800 text-white text-sm px-5 py-2 rounded-md hover:bg-green-900 transition">
            All Instructors →
          </button>
        </div>

        {/* Title */}
        <div className="relative max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Meet Our Expert and <br />
            Passionate{" "}
            <span className="relative inline-block">
              Teaching
              <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-300 -z-10"></span>
            </span>{" "}
            Faculty
          </h2>

          {/* Decorative waves */}
          <div className="absolute -right-20 top-4 text-yellow-400 text-3xl z-1 animate-horizontalBounce">
            <img src="assets/team/team-1.png" alt="" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <UIExpertCard
              key={index}
              name={instructor.name}
              role={instructor.role}
              image={instructor.image}
              socialLinks={instructor.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorGridSection;
