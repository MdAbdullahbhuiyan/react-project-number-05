import React from 'react';
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from 'react-icons/fa';
import { SiAmericanexpress } from 'react-icons/si';

const FooterNav = () => {
    return (
        <div className='border border-gray-200 px-4 py-3 '>
            <div className='flex justify-between container mx-auto px-18 '>
               <h1 className='text-[14px] cs'>Copyright © 2025  <span className='cp'>Abdullah</span> all rights reserved. Powered by <span className='cp'>Abdullah</span> .</h1>
               <div className='flex gap-2 text-xl'>
                <FaCcVisa/>
                <FaCcMastercard/>
                <FaCcPaypal />
                <SiAmericanexpress />
               </div>
            </div>
        </div>
    );
};

export default FooterNav;