import React, { useState } from "react";
import UIPageHeader from "../../components/ui/elements/UIPageHeader";
import NewsletterCta from "./sub/NewsletterCta";
import Pagination from "./sub/Pagination";
import LatestBlogSection from "./sub/LatestBlogSection";

const blogsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 4; // ← exemple (API plus tard)

  return (
    <main className="w-full">

      <UIPageHeader
        title="blogs"
        breadcrumb={{ parent: "Home", current: "blogs" }}
        image="/assets/images/blog-grid.jpg"
      />

      <LatestBlogSection/>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <NewsletterCta />
    </main>
  );
};

export default blogsPage;
