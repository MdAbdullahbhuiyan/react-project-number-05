import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    return (
        <div>
            <div>
                <div className=' '>
                    {
                        <div className='border border-gray-200 rounded-md h-92 pb-10'>
                            <div><Link to={`/details/${product.id}`}><img src={product.image} alt="" /></Link></div>
                            <div className='p-4'>
                                <h1 className='cs'>{product.category}</h1>
                                <h1 className='font-bold text-[#364153]'>{product.title}</h1>
                                <h1 className=' flex items-center gap-2'><FaStar className='text-orange-400' />
                                    <FaStar className='text-orange-400' />
                                    <FaStar className='text-orange-400' />
                                    <FaStar className='text-orange-400' />
                                    <FaStar className='text-orange-400' />
                                    <h1 className='cs'>({product.rating})</h1>
                                </h1>
                                <div className=' flex gap-3 '>
                                    <h1 className='cp'>{product.price}$</h1>
                                    <h1 className='cs  line-through '>{product.oldPrice}</h1>
                                </div>
                            </div>
                        </div>

                    }
                </div>

            </div>
        </div>
    );
};

export default ProductCard;