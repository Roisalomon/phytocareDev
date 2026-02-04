import React from "react";
import UILatestBlogCard from "../../../components/ui/elements/UILatestBlogSection";

const posts = [
  {
    image: "assets/blog/blog-1-1.jpg",
    category: "Design",
    date: "Oct. 23, 2025",
    author: "Roboth smith",
    title: "How to Avoid the Biggest College Admission Mistakes",
  },
  {
    image: "assets/blog/blog-1-2.jpg",
    category: "Design",
    date: "Oct. 23, 2025",
    author: "Roboth smith",
    title: "How Digital Platforms Are Shaping Business Schools",
  },
  {
    image: "assets/blog/blog-1-3.jpg",
    category: "Design",
    date: "Oct. 23, 2025",
    author: "Roboth smith",
    title: "Why Business Students Need Tech Skills for the Future",
  },
];

const LatestBlogSection: React.FC = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Décor jaune */}
      <div className="absolute top-10 right-10 pointer-events-none">
        <div className="grid grid-cols-6 gap-1">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 bg-yellow-300 rounded-full"
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
            Latest Blog
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-14 leading-snug">
          Latest Insights, Tips, and <br />
          Updates from{" "}
          <span className="text-green-700 underline decoration-green-300">
            Educeet
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <UILatestBlogCard
              key={index}
              image={post.image}
              category={post.category}
              date={post.date}
              author={post.author}
              title={post.title}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <button className="px-6 py-3 bg-green-800 text-white text-sm font-medium rounded-lg hover:bg-green-900 transition">
            See All Articles →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogSection;
