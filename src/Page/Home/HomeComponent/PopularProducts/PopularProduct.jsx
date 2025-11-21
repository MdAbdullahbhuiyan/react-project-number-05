import React, { useState } from 'react';
import SectionHeading from '../../../../Component/SharedComponent/SectionHeading';
import ProductCard from '../../../../Component/SharedComponent/ProductCard';
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router';
import useData from '../../../../Hooks/useData';

const PopularProduct = () => {
    const { category, product } = useData();
    const [categoryId, setCategoryId] = useState(null);

    const handler = (id) => {
        setCategoryId(id);
    }

    const filterid = categoryId
        ? product.filter(product => product.category === categoryId)
        : product;

    return (
        <div className='w-11/12 mx-auto'>
            
            {/* Heading and category tabs */}
            <div className='flex justify-between items-center'>
                <SectionHeading
                    heading={"Popular"}
                    colorheading={"Product"}
                    description={"Shop online for new arrivals and get free shipping!"}
                />
                <div className='flex gap-4'>
                    <p
                        className='text-[#2B7FFF] font-semibold cursor-pointer'
                        onClick={() => handler(null)}
                    >
                        All
                    </p>
                    {
                        category.map(cat =>
                            <div
                                key={cat.id}  // 🔥 key warning fixed
                                onClick={() => handler(cat?.name)}
                                className='cs cursor-pointer'
                            >
                                {cat?.name}
                            </div>
                        )
                    }
                </div>
            </div>

            {/* Product grid */}
            <div className='grid grid-cols-5 gap-6 my-10'>
                {filterid
                    .sort((a, b) => a.price - b.price)
                    .slice(0, 10)
                    .map(prod =>
                        <ProductCard
                            key={prod.id}  // 🔥 key warning fixed
                            product={prod}
                        />
                    )
                }
            </div>

            {/* View All button */}
            <Link to="/shop">
                <div className='grid justify-center'>
                    <div className='flex items-center font-bold gap-3 text-white bgp px-6 py-3 rounded-md justify-center'>
                        View All Products <BiCategory />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PopularProduct;
