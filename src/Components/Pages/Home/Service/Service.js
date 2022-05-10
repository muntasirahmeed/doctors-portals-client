import React from 'react';

const Service = ({img,title,description}) => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center px-6 mb-5 md:mb-0'>
                <img className='w-28 h-28' src={img} alt="" />
                <h1 className='text-accent mt-8 mb-2 font-semibold text-xl'>{ title}</h1>
                <p className='text-center text-gray-600 text-[16px] '>{ description}</p>
            </div>
        </div>
    );
};

export default Service;