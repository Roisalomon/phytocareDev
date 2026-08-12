import React from "react";
import { Link } from "react-router-dom";
import { Disease } from "../../../../types/disease";
import { productsData } from "../../../../data/productsData";
import { ProductCard } from "../produits/ProductCard";

interface DiseaseDetailContentProps {
  disease: Disease;
}

export const DiseaseDetailContent: React.FC<DiseaseDetailContentProps> = ({ disease }) => {
  const relatedProducts = productsData.filter((p) =>
    disease.relatedProductIds.includes(p.id)
  );

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section>
        <h2 className="text-xl font-bold text-[#034949] mb-2 flex items-center gap-2">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          Cause
        </h2>
        <p className="text-gray-600 leading-relaxed">{disease.cause}</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#034949] mb-2 flex items-center gap-2">
          <i className="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
          Conséquence
        </h2>
        <p className="text-gray-600 leading-relaxed">{disease.consequence}</p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#034949] mb-2 flex items-center gap-2">
          <i className="fa-solid fa-leaf" aria-hidden="true"></i>
          Solution proposée par Phytocare
        </h2>
        <p className="text-gray-600 leading-relaxed">{disease.solution}</p>
      </section>

      {relatedProducts.length > 0 && (
        <section>
          <h3 className="text-lg font-bold text-[#2F5D3A] mb-6">
            Produits recommandés
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      <p className="text-xs text-gray-400 italic border-t border-gray-100 pt-6">
        Ces informations sont fournies à titre indicatif, basées sur les notices
        de nos produits, et ne remplacent pas un avis médical professionnel.
        En cas de doute, consultez un professionnel de santé.
      </p>

      <div>
        <Link
          to="/maladie"
          className="inline-flex items-center gap-2 text-[#2F5D3A] font-semibold hover:underline"
        >
          <i className="fa-solid fa-arrow-left text-xs" aria-hidden="true"></i>
          Retour à toutes les maladies
        </Link>
      </div>
    </div>
  );
};

export default DiseaseDetailContent;