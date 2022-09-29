import React from 'react';
import Navbar from '../../components/common/Navbar';
import TopBar from '../../components/common/TopBar';
import About from '../../components/homeComponents/About';
import Hero from '../../components/homeComponents/Hero';

const Home = () => {
    return (
        <>
        <TopBar /> 
            <Navbar />
            <Hero />
            <About/>
        </>
    );
};

export default Home;