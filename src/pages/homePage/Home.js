import React from 'react';
import Navbar from '../../components/common/Navbar';
import TopBar from '../../components/common/TopBar';
import Course from '../../components/course/Course';
import AboutCourse from '../../components/homeComponents/AboutCourse';
import Hero from '../../components/homeComponents/Hero';

const Home = () => {
    return (
        <>
        <TopBar /> 
            <Navbar />
            <Hero />
            <AboutCourse />
            <Course/>
        </>
    );
};

export default Home;