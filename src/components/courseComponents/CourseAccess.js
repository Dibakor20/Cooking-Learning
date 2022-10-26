import React from 'react';

const CourseAccess = () => {
    return (
        <>
            <div>
                <img src="https://keenitsolutions.com/products/wordpress/educavo/wp-content/uploads/2020/09/ev_k5.jpg" alt="" className='md:w-full'/>
                <div className='mt-10 tab-card p-5 '>
                    <div className='flex justify-between border-b-2 py-4'>
                        <div>
                            <h3 className='text-lg font-sans text-[#101010;]'> Lectures</h3>
                        </div>
                        <div>
                            <h3>7</h3>
                        </div>
                    </div>
                    <div className='flex justify-between border-b-2 py-4'>
                        <div>
                            <h3 className='text-lg font-sans text-[#101010;]'>Quiz</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </div>
                    <div className='flex justify-between border-b-2 py-4'>
                        <div>
                            <h3 className='text-lg font-sans text-[#101010;]'>Duration</h3>
                        </div>
                        <div>
                            <h3>2 hours</h3>
                        </div>
                    </div>
                    <div className='flex justify-between border-b-2 py-4'>
                        <div>
                            <h3 className='text-lg font-sans text-[#101010;]'>Students</h3>
                        </div>
                        <div>
                            <h3>125</h3>
                        </div>
                    </div>
                </div>
                <div className='my-5 tab-card p-5'>
                    <button className='py-3 px-44 btn-orange'>
                        Free
                    </button>
                </div>
            </div> 
           
        </>
    );
};

export default CourseAccess;