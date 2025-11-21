import React from 'react';
import useData from '../../Hooks/useData';

const Blog = () => {
     const {  product } = useData();
    return (
        <div>
            <div>
                <h1 className='cs text-4xl text-center my-15 font-bold'>This is blog page</h1>
            </div>
            <div  className='flex gap-6 conainer px-18 mx-auto my-6'>
                {product.map(product=>
                    <div key={product.id} className='border px-6 py-3 rounded-2xl'>
                        <img src={product.image} alt="pic" />
                        <h1>{product.title}</h1></div>
                )}
            </div>
        </div>
    );
};

export default Blog;