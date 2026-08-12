import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetailHero from "./sub/produits/ProductDetailHero";
import ProductDetailContent from "./sub/produits/ProductDetailContent";
import RelatedProducts from "./sub/produits/RelatedProducts";
import { getProductById, getRelatedProducts } from "../../data/productsData";

export const ProduitPlusPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = id ? getProductById(id) : undefined;

    if (!product) {
        return (
            <main className="min-h-screen w-full flex flex-col bg-slate-50 pt-2 pb-10">
                <div className="flex-1 flex flex-col items-center justify-center text-center py-24 px-[8%]">
                    <h1 className="text-3xl font-bold text-[#2F5D3A] mb-4">
                        Produit introuvable
                    </h1>
                    <p className="text-gray-500 mb-8">
                        Ce produit n'existe pas ou n'est plus disponible.
                    </p>
                    <Link
                        to="/produit"
                        className="bg-[#2F5D3A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#F7C842] hover:text-[#0C1A2A] transition"
                    >
                        Voir tous nos produits
                    </Link>
                </div>
            </main>
        );
    }

    const relatedProducts = getRelatedProducts(product);

    return (
        <main className="min-h-screen flex flex-col bg-slate-50">
            <div className="flex-1 py-20 px-[8%] bg-[#FAFBF8]">

                <ProductDetailHero product={product} />

                <ProductDetailContent product={product} />
                <RelatedProducts products={relatedProducts} />
            </div>
        </main>

    );
};

export default ProduitPlusPage;