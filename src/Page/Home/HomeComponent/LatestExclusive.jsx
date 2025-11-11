import React from 'react';
import bg2 from '../../../assets/image/bg2.jpg'
import { Link } from 'react-router';
const LatestExclusive = () => {
    return (
        <div className='container mx-auto px-18'>
            <div style={{ backgroundImage: `url(${bg2})` }} className='bg-cover bg-no-repeat h-[70vh] my-10'>
                <div className='grid justify-end pr-20 py-40 items-center gap-2'>
                    <h1 className='text-[#FEFEFE] text-3xl grid justify-end' >30% off sale</h1>
                    <h1 className='text-[#FEFEFE] text-6xl grid justify-end font-semibold'>Latest Exclusive 
                        </h1>
                        <h1  className='text-[#FEFEFE] text-6xl grid justify-end font-semibold'>Summer Collection</h1>
                        <div className='grid justify-end'>
                            <button className='bgp px-4 py-2 rounded-md text-white '><Link to="/shop">Shop Now</Link></button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default LatestExclusive;