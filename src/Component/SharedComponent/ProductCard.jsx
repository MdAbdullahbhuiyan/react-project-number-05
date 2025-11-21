import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    return (
        <div className="border border-gray-200 rounded-md pb-6 hover:shadow-md transition-all duration-300">
            
            {/* Image */}
            <Link to={`/details/${product.id}`}>
                <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-56 object-cover rounded-t-md"
                />
            </Link>

            {/* Content */}
            <div className="p-4 space-y-2">
                <p className="cs text-sm text-gray-500">{product.category}</p>

                <h2 className="font-bold text-[#364153] text-lg">
                    {product.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 text-orange-400">
                    {Array(5).fill(0).map((_, i) => (
                        <FaStar key={i} />
                    ))}

                    <span className="cs text-gray-600">({product.rating})</span>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3">
                    <span className="cp text-xl font-semibold">{product.price}$</span>
                    <span className="cs line-through text-gray-400">{product.oldPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
