import React from 'react';
import SectionHeading from '../../../Component/SharedComponent/SectionHeading';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';

const ContactHero = () => {
    return (
        <div>
            <div className='container mx-auto px-18 py-10'>
                <div className='text-center'>
                    <SectionHeading heading={"Contact"} colorheading={"With Us"} description={"Customer service should not be a department. It should be the entire company."}></SectionHeading>
                </div >
                <div className='grid grid-cols-3 gap-6 my-15'>
                    <div  className=' px-8 py-6 border border-gray-200 rounded-md text-center'>
                        <div className='grid justify-center py-3'>
                            <div className='border w-12 border-gray-100 px-8 rounded-md py-3 text-3xl font-bold grid items-center justify-center'>
                            <FaPhoneAlt />
                        </div>
                        </div>
                        <div className='text-center space-y-1'>
                            <h1 className='cs text-2xl font-semibold pb-2'>Contact With Phone</h1>
                            <h1 className='cs'>Phone: 01753924093</h1>
                            <h1 className='cs'>Phone: 01753924093</h1>
                        </div>
                    </div>
                    <div  className=' px-8 py-6 border border-gray-200 rounded-md text-center'>
                        <div className='grid justify-center py-3'>
                            <div className='border w-12 border-gray-100 px-8 rounded-md py-3 text-3xl font-bold grid items-center justify-center'>
                          <MdOutlineMail />
                        </div>
                        </div>
                        <div className='text-center space-y-1'>
                            <h1 className='cs text-2xl font-semibold pb-2'>Contact With Phone</h1>
                            <h1 className='cs'>Phone: 01753924093</h1>
                            <h1 className='cs'>Phone: 01753924093</h1>
                        </div>
                    </div>
                    <div  className=' px-8 py-6 border border-gray-200 rounded-md text-center'>
                        <div className='grid justify-center py-3'>
                            <div className='border w-12 border-gray-100 px-8 rounded-md py-3 text-3xl font-bold grid items-center justify-center'>
                           <CiLocationOn />
                        </div>
                        </div>
                        <div className='text-center space-y-1'>
                            <h1 className='cs text-2xl font-semibold pb-2'>Contact With Phone</h1>
                            <h1 className='cs'>Phone: 01753924093</h1>
                            <h1 className='cs'>Phone: 01753924093</h1>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-6 mt-8'>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.770464306812!2d90.36453464969917!3d23.802854858150862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0d33532b3fb%3A0x2b27b0c01cb2bc0d!2sMirpur-10%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1762890977298!5m2!1sen!2sbd" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='border border-gray-200 rounded-md px-8 py-6 '>
                        <form action="">
                            <div className='text-center py-4'><label htmlFor="">Name: </label>
                            <input className='border border-gray-200 px-6 w-90 py-2 rounded-md' type="text"  placeholder='MD ABDULLAH'/></div>
                            <div className='text-center'><label htmlFor="">Email: </label>
                            <input className='border border-gray-200 px-6 w-90 py-2 rounded-md' type="email" required  placeholder='abdulah16@gmail.com'/></div>
                            <div className='text-center py-4'><label htmlFor="">Phone: </label>
                            <input className='border border-gray-200 px-6 w-90 py-2 rounded-md' type="text"  required placeholder='0154554155'/></div>
                            <div className='text-center '><label htmlFor="">Password: </label>
                            <input className='border border-gray-200 px-6 w-90 py-2 rounded-md' type="password"  required placeholder='51212115'/></div>
                           
                           <div className='text-center py-6'><button className='bgp text-white px-4 py-2 rounded-md'>Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;