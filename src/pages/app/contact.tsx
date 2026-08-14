import React from "react";
import  ContactHero  from "./sub/contact/ContactHero";
import  ContactInfo  from "./sub/contact/ContactInfo";
import  WhatsAppContactForm  from "./sub/contact/WhatsAppContactForm";


const blogsPage: React.FC = () => {

  return (
    <main className="w-full pt-2 pb-10">

      <ContactHero />
      <ContactInfo />
      <WhatsAppContactForm />

    </main>
  );
};

export default blogsPage;
