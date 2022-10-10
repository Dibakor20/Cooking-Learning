import React from "react";
import banner from '../../assets/images/doctor_consultation_02.png'

const Hero = () => {
  return (
    <>
       <div name='home' className='w-full flex flex-col justify-between bg-light-orange mb-28'>
        <div className="container">
        <div className='grid md:grid-cols-2 '>
            <div className='flex flex-col justify-center md:items-start w-full px-2 pt-8 md:pt-0'>
                <p className='text-xl text-orange'>Good Food Good Life</p>
              <h1 className='py-3  font-sans text-3xl md:text-5xl leading-10 text-[#031a3d] font-bold'>Cooking Start<br/>Learning recipes to <br/>Cook today</h1>
              <p className=" md:w-96 py-3 text-gray-700 font-sans">Get inspired and learn new recipes. From vegan meals to how to prepare the best barbecue. Become an expert in pastry and bakery with our courses. Unlimited Access. </p>
              <button className='py-3 px-3 w-[35%] my-4 btn-orange'>Get Started</button>
            </div>
            <div className="py-20">
                <img className='w-full md:h-[70vh]' src="https://cooking-learning.netlify.app/assets/images/slider/home8/1.png" alt="/" />
          </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default Hero;
