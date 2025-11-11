import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { GrHome } from 'react-icons/gr';
import { IoVolumeHigh } from 'react-icons/io5';
import { MdOutlineHeadsetMic } from 'react-icons/md';

const Support = () => {
    const serviceData = [
  {
    id: 1,
    icon: <IoVolumeHigh />,
    title: "Free Shipping",
    description: "Free shipping on all US orders or orders above $200"
  },
  {
    id: 2,
    icon: <GrHome/>,
    title: "24x7 Support",
    description: "Contact us 24 hours a day, 7 days a week"
  },
  {
    id: 3,
    icon: <GiShoppingCart />,
    title: "30 Days Return",
    description: "Simply return it within 30 days for an exchange"
  },
  {
    id: 4,
    icon: <MdOutlineHeadsetMic className='text-center'/>,
    title: "Payment Secure",
    description: "Secure payment processing available 24/7"
  }
];
    return (
        <div>
            <div className='container px-18 mx-auto py-7'>
                <div className='grid grid-cols-4 gap-6 '>
                    {serviceData.map(s=> 
                        <div className='border border-gray-200 shadow-2xl rounded-md px-8 py-6'>
                            <div className='grid justify-center pb-2 font-bold text-4xl cp'>{s.icon}</div>
                            <div className='text-center cs font-bold'>{s.title}</div>
                            <div className='text-center cs '>{s.description}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Support;