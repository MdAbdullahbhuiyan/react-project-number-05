import React from 'react';
import useData from '../../Hooks/useData';
import { useParams } from 'react-router';
import { FaStar } from 'react-icons/fa';
import ProductCard from './ProductCard';
import SectionHeading from './SectionHeading';

const SingleProductDetails = () => {
    const { product } = useData();
    const { id } = useParams();
    const findProduct = product.find(product => product.id == id);


    return (
        <div>
            <div className='container mx-auto px-24'>

                {

                    <div className='grid grid-cols-2 justify-center gap-6 my-15 '>
                        <div> <img src={findProduct?.image} alt="" /> </div>
                        <div className=' py-15 space-y-4 border border-gray-200 rounded-md px-6  justify-center'>

                            <h1 className='cs'> {findProduct?.category}</h1>
                            <h1 className='text-4xl text-bold'> {findProduct?.title}</h1>

                            <h1 className=' flex items-center gap-1'>
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <h1 className='cs pl-4'>( Total Rating:{findProduct?.rating})</h1>
                            </h1>

                            <div className=' flex gap-3 '>
                                <h1 className='cs text-2xl'><span className='text-black'>Price:$ </span>{findProduct?.price}$</h1>
                                <h1 className=' line-through text-2xl '>${findProduct?.oldPrice}</h1>

                            </div>
                            <h1 className='cs'>{findProduct?.description}</h1>
                            <h1 className='cs'><span className='text-black font-bold'>Stock :</span> {findProduct?.stock}</h1>
                            <h1 className='cs'><span className='text-black font-bold'>Sku :</span>{findProduct?.sku}</h1>
                            <h1 className='cs'><span className='text-black font-bold'>Closure :</span> {findProduct?.closure}</h1>
                            <h1 className='cs'>Size: {findProduct?.size}</h1>
                            <div className='flex gap-3 pt-8'>
                                <div className=' flex gap-4 border border-gray-200 px-8  rounded-md py-1'>
                                    <p>-</p>
                                    <p>1</p>
                                    <p>+</p>

                                </div>
                                <div className='border border-gray-200 px-5 py-1 rounded-md  text-white bgp'>Add To Cart</div>
                            </div>
                        </div>
                    </div>
                }

            </div>
            <div className='container mx-auto px-18 py-10 '>
                <div >
                    <div><SectionHeading heading={"Top Rted "} colorheading={"Seleing Products"} description={"High-quality denim jeans for men with a comfortable"}></SectionHeading> </div>
                    <div className='grid grid-cols-5 gap-4 my-10'>
                        {product.slice(0,5).map(product =>
                        
                    <div >{<ProductCard product={product}></ProductCard>}</div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;