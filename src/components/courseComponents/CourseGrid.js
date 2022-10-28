import React from 'react';
import CourseAccess from './CourseAccess';
import Tabs from './Tabs';

const CourseGrid = () => {
    return (
        <div className='container pt-16'>
            <div className='lg:grid lg:grid-cols-12 gap-10'>
                <div className='md:grid col-span-7'>
                    <Tabs/>
                </div>
                <div className='md:grid col-span-4'>
                    <CourseAccess/>
                </div>
            </div>
        </div>
    );
};

export default CourseGrid;