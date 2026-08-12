import React from "react";
import { Product } from "../../../../types/products/product";
import { formatPrice } from "../../../../utils/formatPrice";
import { buildProductOrderLink } from "../../../../utils/whatsapp";

interface ProductDetailContentProps {
  product: Product;
}

export const ProductDetailContent: React.FC<ProductDetailContentProps> = ({ product }) => {
  const hasPromo = product.pricePromo < product.priceNormal;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "https://via.placeholder.com/600x600?text=Phytocare";
          }}
        />
      </div>

      {/* Infos */}
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-[#2F5D3A] font-serif mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 leading-relaxed">{product.shortDesc}</p>
        </div>

        <div className="flex items-center gap-3">
          {hasPromo && (
            <span className="text-gray-400 text-lg line-through">
              {formatPrice(product.priceNormal)}
            </span>
          )}
          <span className="font-bold text-[#2F5D3A] text-2xl">
            {formatPrice(product.pricePromo)}
          </span>
        </div>

        <a
          href={buildProductOrderLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#2F5D3A] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#F7C842] hover:text-[#0C1A2A] transition-all duration-300 shadow-lg w-full sm:w-auto"
        >
          Commander sur WhatsApp
          <i className="fab fa-whatsapp text-xl" aria-hidden="true"></i>
        </a>

        {product.benefits.length > 0 && (
          <div>
            <h3 className="font-bold text-lg text-[#034949] mb-3">Bienfaits</h3>
            <ul className="space-y-2">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-gray-600 text-sm">
                  <i className="fa-solid fa-circle-check text-[#2F5D3A] mt-1" aria-hidden="true"></i>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.composition && (
          <div>
            <h3 className="font-bold text-lg text-[#034949] mb-2">Composition</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{product.composition}</p>
          </div>
        )}

        {product.posologie && (
          <div>
            <h3 className="font-bold text-lg text-[#034949] mb-2">Posologie</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{product.posologie}</p>
          </div>
        )}

        {product.warning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h3 className="font-bold text-sm text-amber-800 mb-1 flex items-center gap-2">
              <i className="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
              Attention
            </h3>
            <p className="text-amber-700 text-sm">{product.warning}</p>
          </div>
        )}

        {!product.hasFullNotice && (
          <p className="text-xs text-gray-400 italic">
            Notice détaillée disponible auprès de nos agents — contactez-nous pour plus d'informations.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetailContent;