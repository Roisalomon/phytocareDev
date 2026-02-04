import React from "react";
import { Mail, Phone } from "lucide-react";

const ContactInfoSection: React.FC = () => {
  return (
    <section className="bg-green-900 text-white  py-12 px-6 w-[82%] rounded-2xl texte-2xl ">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-center gap-6 md:gap-0">
 
        {/* Email */}
        <div className="flex flex-col items-center gap-2">
          <Mail className="w-6 h-6" />
          <p className="text-sm font-medium">Our Email</p>
          <p className="text-base font-semibold">Educeet info@gmail.Com</p>
        </div>

        {/* OR */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-white opacity-30"></div>
          <p className="text-sm font-semibold">or</p>
          <div className="w-px h-10 bg-white opacity-30"></div>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center gap-2">
          <Phone className="w-6 h-6" />
          <p className="text-sm font-medium">Call US</p>
          <p className="text-base font-semibold">(+918) 123-456-789</p>
        </div>

      </div>
    </section>
  );
};

export default ContactInfoSection;
