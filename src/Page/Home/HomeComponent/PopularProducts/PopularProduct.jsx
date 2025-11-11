import React, { useState } from 'react';
import SectionHeading from '../../../../Component/SharedComponent/SectionHeading';
import useData from '../../../../Hooks/usedata';
import ProductCard from '../../../../Component/SharedComponent/ProductCard';
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router';

const PopularProduct = () => {
    const { category, product } = useData()
    const [categoryId, setCategoryId] = useState(null);
    const handler = (id) => {
        setCategoryId(id)
    }
    const filterid = categoryId ? product.filter(product => product.category == categoryId) : product
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center'>
                <SectionHeading heading={"Popular"} colorheading={"Product"} description={"Shop online for new arrivals and get free shipping!"}></SectionHeading>
                <div className='flex gap-4'>
                    <p className='text-[#2B7FFF] font-semibold'>All</p>
                    {
                        category.map(category =>
                            <div onClick={() => handler(category?.name)} className='cs cursor-pointer'>{category?.name}</div>
                        )
                    }
                </div>
            </div>
            <div>
                <div className='grid grid-cols-5 gap-6 my-10'>
                    {filterid.sort((a, b) => a.price - b.price).slice(0 -10).map(product => <ProductCard product={product}></ProductCard>)}
                </div>
            </div>
             <Link to="/shop"><div className='grid justify-center'><div className='  flex items-center font-bold gap-3 text-white bgp px-6 py-3 rounded-md justify-center  '>View All Products <BiCategory/></div></div></Link>
        </div>
    );
};

export default PopularProduct;