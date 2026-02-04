import React from "react";
import { Bookmark, Star, BookOpen, Users, ArrowRight } from "lucide-react";
import UIButton from "./UIButton";

interface UICourseCardProps {
  image: string;
  category: string;
  instructor: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  rating: number;
  lessons: number;
  students: number;
}

const UICourseCard: React.FC<UICourseCardProps> = ({
  image,
  category,
  instructor,
  title,
  oldPrice,
  newPrice,
  rating,
  lessons,
  students,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">

      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover rounded-2xl"
        />

        {/* Category */}
        <span className="absolute top-4 left-4 bg-green-800 text-white text-xs font-medium px-4 py-1.5 rounded-md">
          {category}
        </span>

        {/* Bookmark */}
        <button
          aria-label="Save course"
          className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow"
        >
          <Bookmark size={18} className="text-gray-700" />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-5 space-y-4">

        {/* Instructor + Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-7 h-7 rounded-full bg-gray-200" />
            <span>{instructor}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400 line-through">
              {oldPrice}
            </span>
            <span className="text-green-700 font-bold text-lg">
              {newPrice}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.round(rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-gray-500">
            ({rating}/5 Customer Rating)
          </span>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Meta */}
        <div className="flex justify-between text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <BookOpen size={16} />
            {lessons} Lessons
          </span>
          <div className="w-px h-5 bg-gray-600 opacity-30 "></div>
          <span className="flex items-center gap-2">
            <Users size={16} />
            {students} Students
          </span>
        </div>

        {/* Button */}
        <button className="w-full mt-2 bg-gray-700 text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition">
          Preview This Course →
        </button>
        {/* <UIButton
            text={
              <span className="flex items-center gap-2">
                Preview This Course <ArrowRight size={16} />
              </span>
            }
            bgColor="#F7C842"
            textColor="#000"
            className="px-6 py-3 rounded-lg  text-1 text-sm font-semibold hover:bg-[#e6b838] transition"
          /> */}
      </div>
    </div>
  );
};

export default UICourseCard;
