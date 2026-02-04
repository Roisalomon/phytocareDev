import React, { useState } from "react";
import UITestimonialCard from "../../../components/ui/elements/UITestimonialCard";

const testimonials = [
  {
    image: "/assets/thumb/thumb-1-1.jpg",
    quote:
      "Educeet transformed my learning journey! The platform is intuitive, the courses are top-notch, and the support is exceptional. I’ve gained real skills and confidence. Highly recommended for anyone serious about education.",
    name: "Wanda Shawvern",
    title: "Foundr & CEO UIPainter",
    logo: "/logos/uipainter.png",
  },
  // autres témoignages
];

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      {/* Badge */}
      <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-green-100 text-green-700">
        Testimonial
      </span>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 leading-snug">
        What Our Learners{" "}
        <span className="line-through decoration-black">
          Say About
        </span>{" "} <br />
        Educeet’s Impact and Value
      </h2>

      {/* Slider Card */}
      <UITestimonialCard
        {...testimonials[current]}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
};

export default TestimonialSlider;
