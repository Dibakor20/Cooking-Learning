import React from 'react';
import Navbar from '../../components/common/Navbar';
import TopBar from '../../components/common/TopBar';
import Course from '../../components/course/Course';
import Pagination from '../../components/course/Pagination';
import LatestEvent from '../../components/homeComponents/LatestEvent';
import AboutCourse from '../../components/homeComponents/AboutCourse';
import Hero from '../../components/homeComponents/Hero';
import Testimonial from '../../components/homeComponents/Testimonial';
import Footer from '../../components/common/Footer';

const Home = () => {
    return (
        <>
        <TopBar /> 
            <Navbar />
            <Hero />
            <AboutCourse />
            <Course />
            <Pagination />
            <LatestEvent />
            <Testimonial />
            <Footer/>
        </>
    );
};

export default Home;