import React, { useEffect, useState, useRef } from "react";
import { BookOpen, Users, Video, GraduationCap } from "lucide-react";

const stats = [
  { value: 1090, label: "Our Online Courses", icon: BookOpen },
  { value: 120, label: "Our Instructors", icon: Users },
  { value: 120, label: "Total Video Lessons", icon: Video },
  { value: 6000, label: "Total Students Enrolled", icon: GraduationCap },
];

const StatsBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      stats.forEach((item, i) => {
        let start = 0;
        const increment = item.value / (2000 / 16); // 2s animation
        const step = () => {
          start += increment;
          if (start < item.value) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[i] = Math.floor(start);
              return newCounts;
            });
            requestAnimationFrame(step);
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[i] = item.value;
              return newCounts;
            });
          }
        };
        requestAnimationFrame(step);
      });
    }
  }, [visible]);

  return (
    <section ref={sectionRef} className="w-full bg-[#0B5C4D]">
      <div className="grid grid-cols-1 md:grid-cols-4 md:px-[4%] md:py-[1%] ">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className=" group flex items-center justify-center  px-6 py-10 text-white"
            >
              <Icon className="w-[40%] h-[40%] text-white/90 group-hover:animate-demiSpin" />
              <div>
                <p className="text-2xl font-bold leading-tight">
                  {counts[index]} +
                </p>
                <p className="text-sm text-white/70">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsBar;
