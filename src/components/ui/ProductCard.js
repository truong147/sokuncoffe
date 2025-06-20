import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/products/${product.id}`} className="block">
      <div className="product-card group cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
            }}
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                Mới
              </span>
            )}
            {product.isBestSeller && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                Best Seller
              </span>
            )}
            {discount > 0 && (
              <span className="bg-coffee-orange text-white text-xs px-2 py-1 rounded">
                -{discount}%
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <button className="absolute bottom-0 left-0 right-0 bg-coffee-orange text-white py-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            Thêm vào giỏ
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          <h3 className="font-semibold text-coffee-dark mb-2 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-coffee-orange">
              {product.price.toLocaleString('vi-VN')}₫
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice.toLocaleString('vi-VN')}₫
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
