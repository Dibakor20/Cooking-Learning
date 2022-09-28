import React from 'react';
import Navbar from '../../components/common/Navbar';
import TopBar from '../../components/common/TopBar';
import Hero from '../../components/homeComponents/Hero';

const Home = () => {
    return (
        <>
        <TopBar /> 
            <Navbar />
            <Hero/>
        </>
    );
};

export default Home;