import React from 'react';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import Banner from '../../components/courseComponents/Banner';
import CourseGrid from '../../components/courseComponents/CourseGrid';

const CourseDetails = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <CourseGrid />
            <Footer/>

        </>
    );
};

export default CourseDetails;