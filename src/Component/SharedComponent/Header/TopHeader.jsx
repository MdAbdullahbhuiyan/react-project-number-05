import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';
import { Link } from 'react-router';

const TopHeader = () => {
    return (
        <div className='bgs cs text-xs'>
            <div className='flex justify-between  w-11/12 mx-auto cs px-4 py-2'>
            <div className='flex gap-6'>
                <div className='flex items-center gap-1 cs'><IoIosCall />
                    <h1>01753923093</h1>
                </div>
                <div className='flex items-center gap-1 cs'><FaWhatsapp />
                    <h1>01322840808</h1></div>
            </div>
            <div className='flex gap-60'>
                <div>
                    <h1 className='text-xs'>World's Fastest Online Shopping Destination</h1>
                </div>
                <div className=' flex items-center gap-3'>
                    <Link to="">Help?</Link>
                    <Link to="">Trac Order?</Link>
                    <Link to="">English</Link>
                    <Link to="">Contact Us</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TopHeader; 