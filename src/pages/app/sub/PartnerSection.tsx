import React from "react";

const partners = [
  { logo: "assets/partner/brand-1-1.png" },
  { logo: "assets/partner/brand-1-2.png" },
  { logo: "assets/partner/brand-1-3.png" },
  { logo: "assets/partner/brand-1-4.png" },
  { logo: "assets/partner/brand-1-5.png" },
  { logo: "assets/partner/brand-1-6.png" },
  { logo: "assets/partner/brand-1-7.png" },
  { logo: "assets/partner/brand-1-8.png" },
];

const PartnerSection: React.FC = () => {
  return (
    <section className="py-20 px-11 bg-white">
      <div className=" mx-auto">

        {/* Container */}
        <div className="bg-[#F6F8F7] rounded-2xl border border-gray-200 overflow-hidden">

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-15">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center p-20 justify-center h-40  border-b border-r border-gray-200
                last:border-r-0 md:[&:nth-child(4n)]:border-r-0
                [&:nth-last-child(-n+4)]:border-b-0"
              >
                <img
                  src={partner.logo}
                  alt={`Partner logo ${index + 1}`}
                  className="max-h-16 max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
