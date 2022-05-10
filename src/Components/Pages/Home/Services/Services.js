import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import teeth from '../../../../assets/images/whitening.png'
import Service from '../Service/Service';
const Services = () => {
    const services = [
        {
           _id:1, img: fluoride, title: 'Fluoride Treatment',description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id:1, img: cavity, title: 'Cavity Filling',description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id:1, img: teeth, title: 'Teeth Whitening',description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]
    return (
        <div className='container mx-auto'>
            <h2 className='text-xl text-center text-secondary font-bold uppercase'>Our Services</h2>
            <h1 className='text-center text-4xl  mt-2 text-accent'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-24'>
                {
                    services.map(service => <Service key={service._id} img={service.img} title={service.title} description={service.description}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;