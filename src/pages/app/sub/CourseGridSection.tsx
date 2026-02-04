import React, { useState } from "react";
import UICourseCard from "../../../components/ui/elements/UICourseCard";

const courses = [
  {
    title: "Design Thinking Researching for Better UX",
    category: "Design",
    instructor: "Samantha",
    image: "/assets/course/course-1-1.jpg",
    rating: 4.7,
    lessons: 20,
    students: 50,
    type: "Trending",
  },
  {
    title: "Discover Highly Rated Learning Programs",
    category: "Design",
    instructor: "Samantha",
    image: "/assets/course/course-1-2.jpg",
    rating: 4.7,
    lessons: 20,
    students: 50,
    type: "Popularity",
  },
  {
    title: "Boost Your Skills with Popular Courses",
    category: "Business",
    instructor: "Samantha",
    image: "/assets/course/course-1-3.jpg",
    rating: 4.7,
    lessons: 20,
    students: 50,
    type: "Featured",
  },
  {
    title: "Learn from the Best – Student Favorite Programs",
    category: "Technology",
    instructor: "Samantha",
    image: "/assets/course/course-1-4.jpg",
    rating: 4.7,
    lessons: 20,
    students: 50,
    type: "Trending",
  },
  {
    title: "Upgrade Your Knowledge with Expert Courses",
    category: "Cooking",
    instructor: "Samantha",
    image: "/assets/course/course-1-5.jpg",
    rating: 4.7,
    lessons: 20,
    students: 50,
    type: "Popularity",
  },
  {
    title: "Today's Most Recommended Learning Paths",
    category: "Design",
    instructor: "Samantha",
    image: "/assets/course/course-1-6.jpg",
    rating: 4.7,
    lessons: 20,
    students: 50,
    type: "Featured",
  },
];

const tabs = ["All Courses", "Trending", "Popularity", "Featured"];

const CourseGridSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Courses");

  const filteredCourses =
    activeTab === "All Courses"
      ? courses
      : courses.filter((course) => course.type === activeTab);

  return (
    <section className="w-full bg-[#F6F8F7] py-24 px-[7%] ">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-green-100 text-green-700">
          Course
        </span>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-snug">
          Highly Rated{" "}
          <span className="relative inline-block">
            Learning
            <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-300 -z-10"></span>
          </span>
          <br />
          Programs Today
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-14">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium pb-1 transition-all
                ${
                  activeTab === tab
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <UICourseCard
              key={index}
              image={course.image}
              category={course.category}
              instructor={course.instructor}
              title={course.title}
              oldPrice="$30.00"
              newPrice="$9.00"
              rating={course.rating}
              lessons={course.lessons}
              students={course.students}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGridSection;
