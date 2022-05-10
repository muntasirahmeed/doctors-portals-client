import React from 'react';

const Service = ({img,title}) => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center px-6'>
                <img className='w-28 h-28' src={img} alt="" />
                <h1 className='text-accent mt-8 mb-2 font-semibold text-xl'>{ title}</h1>
                <p className='text-center text-gray-600 text-[16px] '>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
            </div>
        </div>
    );
};

export default Service;