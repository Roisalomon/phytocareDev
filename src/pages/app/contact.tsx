import React, { useState } from "react";
import UIPageHeader from "../../components/ui/elements/UIPageHeader";
import NewsletterCta from "./sub/NewsletterCta";
import ContactMe from "./sub/contactMe";

const blogsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 4; // ← exemple (API plus tard)

  return (
    <main className="w-full">

      <UIPageHeader
        title="contact Me"
        breadcrumb={{ parent: "Home", current: "Contact Me" }}
        image="/assets/images/contact.jpg"
      />
      
      <ContactMe/>

      <NewsletterCta />
    </main>
  );
};

export default blogsPage;
