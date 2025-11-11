import React from 'react';
import SectionHeading from '../../../Component/SharedComponent/SectionHeading';
import ProductCard from '../../../Component/SharedComponent/ProductCard';
import useData from '../../../Hooks/usedata';

const NewProduct = () => {
    const{product}=useData()
    return (
        <div className='w-11/12 mx-auto px-2'>
            <div>
                <div><SectionHeading heading={"Day of"} colorheading="The deal" description ="Don't wait. The time will never be just right."></SectionHeading></div>
            </div>
            <div className=''>
               <div className='grid grid-cols-5 gap-6 my-10 justify-center'>
                 
                {
                  product.slice(-5).map(p=> <ProductCard product={p} ></ProductCard> )
                }
               </div>
            </div>
        </div>
    );
};

export default NewProduct;