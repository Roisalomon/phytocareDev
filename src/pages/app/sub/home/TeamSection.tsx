import React from "react";
import { teamData } from "../../../../data/teamData";

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 w-full   bg-[#FAFBF8]">
      <div className="px-[8%]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2F5D3A] mb-4">
            Nos Responsables
          </h2>
          <p className="text-gray-600 text-lg">
            Une équipe qualifiée et passionnée, engagée pour votre bien-être
            naturel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-56 object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x300?text=Photo";
                }}
              />
              <div className="p-5">
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;