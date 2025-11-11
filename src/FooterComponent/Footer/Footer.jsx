import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaInstagramSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdAddCall, MdEmail } from 'react-icons/md';
import FooterNav from './FooterNav';

const Footer = () => {
    return (
        <div>
            <div className='container mx-auto px-18 border-t border-gray-200 py-10'>
            <div className='grid grid-cols-5'>
                <div className='col-span-2'>
                    <div className='flex items-center gap-2'>
                        <h1 className='bg-[#00A63E] text-xl font-bold  rounded-xl px-3 py-1 text-center text-white'>G</h1>
                        <h1 className='cs font-semibold text-xl'>Abdullah</h1>
                    </div>
                    <h1 className='cs text-[14px] pt-4'>Abdullah is the biggest market of grocery products. <br />
                        Get your daily needs from our store.</h1>
                    <div className='flex gap-3 py-3'>
                        <div className='flex gap-3 items-center border border-gray-400 px-4 py-1 rounded-md'>
                            <h1 className='bg-[#4B5966] p-2 w-2 h-2'></h1>
                            <h1 className='cs font-semibold text-[14px]'>Google Play </h1>
                        </div>
                        <div className='flex gap-3 items-center border border-gray-400 px-4 py-1 rounded-md'>
                            <h1 className='bg-[#4B5966] p-2 w-2 h-2 rounded-4xl'></h1>
                            <h1 className='cs font-semibold text-[14px]'>App Store </h1>
                        </div>

                    </div>
                </div>
                <div className='col-span-1'>
                    <ul className='cs text-[14px] pb-6 space-y-2'>
                        <li className='font-semibold pb-3 text-xl'>Category</li>
                        <li>Dairy & Milk</li>
                        <li>Snack & Spice</li>
                        <li>Fast Food</li>
                        <li>Juice & Drinks</li>
                        <li>Bakery</li>
                        <li>Seafood</li>
                    </ul>
                </div>
             
                <div className='col-span-1'>
                    <ul className='cs text-[14px] pb-6 space-y-2'>
                        <li className='font-semibold pb-3 text-xl'>Company</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Legal Notice</li>
                        <li>Terms & Conditions</li>
                        <li>Secure Payment</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                   <div className='col-span-1'>
                    <ul className='cs text-[14px] pb-6 space-y-2'>
                        <li className='font-semibold pb-3 text-xl'>Contact</li>
                        <li className='flex items-center gap-2'> <CiLocationOn className='text-3xl cp font-bold'/>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</li>
                        <li className='flex items-center gap-2'> <MdAddCall className='text-xl cp font-bold'/>+00 9876543210.</li>
                        <li className='flex items-center gap-2'> <MdEmail className='text-xl cp font-bold' />example@email.com.</li>
                        <div className='flex gap-2 pt-3 text-xl'>
                                <FaFacebook />
                                <FaTwitter />
                                <FaLinkedinIn />
                                <FaInstagramSquare />
                        </div>
                    </ul>
                </div>

            </div>
        </div>
        <FooterNav></FooterNav>
        </div>
    );
};

export default Footer;