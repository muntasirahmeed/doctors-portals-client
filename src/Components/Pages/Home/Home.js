import React from 'react';
import AllInfo from './AllInfo/AllInfo';
import Banner from './Banner/Banner';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllInfo></AllInfo>
            <Services></Services>
        </div>
    );
};

export default Home;