import React from 'react';
import bg from '../../../assets/image/HERO-COVER.jpg'
import { Link } from 'react-router';
const Hero = () => {
    return (
        <div>
            <div className='container px-18 mx-auto'>
                <div style={{backgroundImage: `url(${bg})`}} className='bg-cover h-[70vh]  container mx-auto  my-10'>
                    <div className='w-11/12 mx-auto py-25 space-y-8'>
                        <h1 className='cp text-2xl'>70% Off For This Winter</h1>
                        <h1 className='text-6xl cs font-semibold'>Bigest Sale For Winter <br /> Man & Woman</h1>
                        <div>
                            <button className='bgp px-4 py-2 rounded-md text-white '><Link to="/shop">Shop Now</Link></button>
                        </div>
                    </div>
                </div> 
            </div>
            
        </div>
    );
};

export default Hero;