import React from 'react';
import useData from '../../Hooks/useData';
import { useParams } from 'react-router';
import { FaStar } from 'react-icons/fa';

const SingleProductDetails = () => {
    const { product } = useData();
    const { id } = useParams();
    const findProduct = product.find(product => product.id == id)

    return (
        <div>
            <div className='container mx-auto px-24'>

                {

                    <div className='grid grid-cols-2 justify-center gap-6 my-15 '>
                        <div> <img src={findProduct?.image} alt="" /> </div>
                        <div>
                            <h1> {findProduct?.title}</h1>
                            <h1> {findProduct?.category}</h1>
                            <h1 className=' flex items-center gap-2'>
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <FaStar className='text-orange-400' />
                                <h1 className='cs'>( Total Rating:{findProduct?.rating})</h1>
                            </h1>
                            <h1> {findProduct?.title}</h1>
                            <div className=' flex gap-3 '>
                                <h1 className='cp'>{findProduct?.price}$</h1>
                                <h1 className='cs  line-through '>{findProduct?.oldPrice}</h1>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
};

export default SingleProductDetails;