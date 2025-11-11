import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { CiShoppingCart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='border border-gray-200 px-4 py-2'>
            <div className='flex justify-between items-center w-11/12 mx-auto '>
                <div className='  flex items-center gap-3 text-white bgp px-6 py-3 rounded-md '> <BiCategory />All Category</div>
                <div className='space-x-7'>
                    <NavLink to="/" className={({isActive})=>isActive? `cp`:`text-black`}>Home</NavLink>
                    <NavLink to="/shop" className={({isActive})=>isActive? `cp`:`text-black`}>Shop Now</NavLink>
                    <NavLink to="/about" className={({isActive})=>isActive? `cp`:`text-black`}>About</NavLink>
                    <NavLink to="/blog" className={({isActive})=>isActive? `cp`:`text-black`}>Blog</NavLink>
                    <NavLink to="/contact" className={({isActive})=>isActive? `cp`:`text-black`}>Contact</NavLink>
                    
                </div>
                <div className='  flex items-center gap-3 text-white bgp px-6 py-3 rounded-md '> <IoCartOutline />Shop Now</div>
            </div>

        </div>
    );
};

export default Navbar;