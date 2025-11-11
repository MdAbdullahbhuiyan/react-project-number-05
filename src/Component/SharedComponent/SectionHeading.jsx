import React from 'react';

const SectionHeading = ({heading,colorheading ,description} ) => {
    return (
        <div>
            <div>
                <div> <h1 className='text-[36px] font-bold cs'>{heading} <span className='cp'>{colorheading}</span></h1> 
                <h1 className='text-[14px] cs'>{description}</h1>
                </div>
            </div>
        </div>
    );
};

export default SectionHeading;