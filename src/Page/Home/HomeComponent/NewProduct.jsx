import React from 'react';
import SectionHeading from '../../../Component/SharedComponent/SectionHeading';
import ProductCard from '../../../Component/SharedComponent/ProductCard';
import useData from '../../../Hooks/useData';

const NewProduct = () => {
    const { product } = useData();

    return (
        <div className='w-11/12 mx-auto px-2'>
            
            {/* Section Heading */}
            <div>
                <SectionHeading
                    heading={"Day of"}
                    colorheading="The deal"
                    description="Don't wait. The time will never be just right."
                />
            </div>

            {/* Product Grid */}
            <div className='grid grid-cols-5 gap-6 my-10 justify-center'>
                {product.slice(-5).map(p => 
                    <ProductCard
                        key={p.id}  // 🔥 key warning fixed
                        product={p}
                    />
                )}
            </div>
        </div>
    );
};

export default NewProduct;
