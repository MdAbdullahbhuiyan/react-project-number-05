import React from 'react';
import pic1 from '../../../assets/image/about.png'
import pic2 from '../../../assets/image/about-2.png'
import pic3 from '../../../assets/image/about-3.png'
import SectionHeading from '../../../Component/SharedComponent/SectionHeading';
import Support from '../../Home/HomeComponent/Support';
const AboutHero = () => {
    return (
        <div className='container px-18 mx-auto'>
            <div className='grid grid-cols-4 gap-6 my-10'>
                <div className='col-span-1'>
                    <img className='rounded-xl' src={pic1} alt="" />
                </div>
                <div className='col-span-1 grid gap-5 '>
                    <img  className='rounded-xl' src={pic2} alt="" />
                    <img  className='rounded-xl' src={pic3} alt="" />
                </div>
                <div className='col-span-2 py-15'>
                    <SectionHeading heading={"Who"} colorheading={"We Are?"}></SectionHeading>
                    <h1 className='cs font-semibold py-6 text-2xl'>We’re here to serve only the best products for you. <br />
                        Enriching your homes with the best essentials.</h1>
                    <h1 className='cs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
                </div>
            </div>
            <div className='my-20'>
                <div className='text-center'>
            <SectionHeading heading={"Our"} colorheading={"Services"} description={"Customer service should not be a department. It should be the entire company."} ></SectionHeading>

            </div>
            <Support></Support>

            </div>
        </div>
    );
};

export default AboutHero;