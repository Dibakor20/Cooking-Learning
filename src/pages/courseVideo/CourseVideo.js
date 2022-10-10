import React from 'react';
import Navbar from '../../components/common/Navbar';
import VideoDescription from '../../components/courseDetails/VideoDescription';
import VideoPlayer from '../../components/courseDetails/VideoPlayer';
import Module from '../../components/courseModule/Module';

const CourseVideo = () => {
    return (
        <>
            <Navbar/>
             <section class="pt-10 pb-20">
                <div className='container'>
                <div class="mx-auto  px-2 pb-20 min-h-[400px]">
                    <div class="grid grid-cols-3 gap-2 lg:gap-8">
                        <div class="col-span-full w-full space-y-8 lg:col-span-2">
                           <VideoPlayer/>
                            <VideoDescription/>
                        </div>

                        <Module/>
                    </div>
                </div>
               </div>
            </section>
        </>
    );
};

export default CourseVideo;