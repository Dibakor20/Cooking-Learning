import React from 'react';
import CourseAccess from './CourseAccess';
import Tabs from './Tabs';

const CourseGrid = () => {
    return (
        <div className='container pt-16'>
            <div className='grid lg:grid-cols-12 gap-10'>
                <div className='grid col-span-8'>
                    <Tabs/>
                </div>
                <div className='grid col-span-4'>
                    <CourseAccess/>
                </div>
            </div>

        </div>
    );
};

export default CourseGrid;