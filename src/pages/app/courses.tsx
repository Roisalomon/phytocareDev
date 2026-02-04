import React, { useState } from "react";
import UIPageHeader from "../../components/ui/elements/UIPageHeader";
import CourseGridSection from "./sub/CourseGridSection";
import FilterBar from "./sub/course/FilterBar";
import NewsletterCta from "./sub/NewsletterCta";
import Pagination from "./sub/Pagination";

const CoursesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 4; // ← exemple (API plus tard)

  return (
    <main className="w-full">

      <UIPageHeader
        title="Courses"
        breadcrumb={{ parent: "Home", current: "Courses" }}
        image="/assets/images/courses-header.jpg"
      />

      <FilterBar />

      <CourseGridSection />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <NewsletterCta />
    </main>
  );
};

export default CoursesPage;
