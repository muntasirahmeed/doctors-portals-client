import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import teeth from '../../../../assets/images/whitening.png'
import Service from '../Service/Service';
const Services = () => {
    const services = [
        {
           id:1, img: fluoride, title: 'Fluoride Treatment'
        },
        {
           id:1, img: cavity, title: 'Cavity Filling'
        },
        {
           id:1, img: teeth, title: 'Teeth Whitening'
        },
    ]
    return (
        <div className='container mx-auto'>
            <h2 className='text-xl text-center text-secondary font-bold uppercase'>Our Services</h2>
            <h1 className='text-center text-3xl  mt-2 text-accent'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16'>
                {
                    services.map(service=><Service key={service.id} img={service.img} title={service.title}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;