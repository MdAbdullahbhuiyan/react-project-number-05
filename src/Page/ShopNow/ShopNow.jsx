import React, { useState } from 'react';
import useData from '../../Hooks/useData';
import ProductCard from '../../Component/SharedComponent/ProductCard';

const ShopNow = () => {
    const { category, product } = useData();
    const [Id, setid] = useState()
    const [width, setwidth] = useState()

    const handlewi = (wi) => {
        setwidth(wi)
    }
    const handleid = (id) => {
        setid(id)
    }
    const filterid = product.filter(product => {
        const matchcategory=Id?product.id==Id:product;
        const matchwidth=width?product.width==width:product;
        return matchcategory && matchwidth
    })
    return (
        <div className='container mx-auto px-18 my-10'>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col col-span-3 border border-gray-200 px-6 py-4'>
                    <div className='border-b border-gray-200 my-4 pb-2 cs font-semibold'>Category</div>
                    {
                        category.map(category =>
                            <div >

                                <div className='flex gap-2 items-center cs ' onClick={() => handleid(category.id)}>
                                    <input type="checkbox" />
                                    {category.name}</div>
                            </div>
                        )
                    }
                    <div className='border-b border-gray-200 my-4 pb-2 cs font-semibold'>Width</div>
                    <div>
                        {
                          [...new Set(product.map(product=>product.width))] .map(product=>
                            <div >

                                <div className='flex gap-2 items-center cs ' onClick={() => handlewi(product)}>
                                    <input type="checkbox" />
                                    {product}</div>
                            </div>
                        )
                        }
                        </div>
                </div>
                <div className='col-span-9'>
                    <div className='grid grid-cols-4 gap-6'>
                        {
                            filterid.map(product =>
                                <div className=''><ProductCard product={product}></ProductCard></div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopNow;