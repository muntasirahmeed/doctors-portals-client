import React from 'react';
import Footers from '../../Shared/Footers/Footers';
import AllInfo from './AllInfo/AllInfo';
import Banner from './Banner/Banner';
import HeroSection from './HeroSection/HeroSection';
import Services from './Services/Services';
import StayConnected from './StayConnected/StayConnected';
import Testimonial from './Testimonial/Testimonial';
import TodayAppointment from './TodayAppointment/TodayAppointment';


const Home = () => {
    return (
        <div className='mx-0 md:mx-10'>
            <Banner></Banner>
            <AllInfo></AllInfo>
            <Services></Services>
            <HeroSection></HeroSection>
            <TodayAppointment></TodayAppointment>
            <Testimonial></Testimonial>
            <StayConnected></StayConnected>
            <Footers></Footers>
        </div>
    );
};

export default Home;