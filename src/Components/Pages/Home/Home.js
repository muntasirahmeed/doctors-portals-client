import React from 'react';
import AllInfo from './AllInfo/AllInfo';
import Banner from './Banner/Banner';
import HeroSection from './HeroSection/HeroSection';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllInfo></AllInfo>
            <Services></Services>
            <HeroSection></HeroSection>
        </div>
    );
};

export default Home;