import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Teachers from '../../Teachers/Teachers';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Teachers></Teachers>
            <About></About>
        </div>
    );
};

export default Home;