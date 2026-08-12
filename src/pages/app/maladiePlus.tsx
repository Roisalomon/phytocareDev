import React from "react";
import { useParams, Link } from "react-router-dom";
import { DiseaseDetailHero } from "./sub/maladies/DiseaseDetailHero";
import { DiseaseDetailContent } from "./sub/maladies/DiseaseDetailContent";
import { getDiseaseById } from "../../data/diseasesData";

export const MaladiePlusPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const disease = id ? getDiseaseById(id) : undefined;

    if (!disease) {
        return (
            <main className="min-h-screen flex flex-col bg-slate-50">
                <div className="flex-1 flex flex-col items-center justify-center text-center py-24 px-[8%]">

                    <h1 className="text-3xl font-bold text-[#2F5D3A] mb-4">
                        Fiche introuvable
                    </h1>
                    <p className="text-gray-500 mb-8">
                        Cette fiche maladie n'existe pas ou n'est plus disponible.
                    </p>
                    <Link
                        to="/maladie"
                        className="bg-[#2F5D3A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#F7C842] hover:text-[#0C1A2A] transition"
                    >
                        Voir toutes les maladies
                    </Link>
                </div>
            </main>

        );
    }

    return (
        <main className="min-h-screen flex flex-col bg-slate-50">
            <div className="flex-1 py-20 px-[8%] bg-[#FAFBF8]">

                <DiseaseDetailHero disease={disease} />
                <DiseaseDetailContent disease={disease} />
            </div>
        </main>

    );
};

export default MaladiePlusPage;