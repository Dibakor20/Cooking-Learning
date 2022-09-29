import React from "react";
import banner from '../../assets/images/doctor_consultation_02.png'

const Hero = () => {
  return (
    <>
       <div name='home' className='w-full flex flex-col justify-between'>
        <div className="container">
        <div className='grid md:grid-cols-2 '>
            <div className='flex flex-col justify-center md:items-start w-full px-2 pt-8 md:pt-0'>
                <p className='text-xl text-orange'>Online medical course</p>
              <h1 className='py-3  font-sans text-4xl md:text-5xl text-[#031a3d] font-bold'>A Complete Journey to Become a Doctor!</h1>
              <p className="w-96 py-3 text-gray-700 font-sans">pc is offering online medical courses for doctors in Bangladesh in various field. We are specialised in various field.Find the right instructor for you. </p>
              <button className='py-3 px-3 w-[35%] my-4 btn-orange'>Get Started</button>
            </div>
            <div>
                <img className='w-full md:h-[80vh]' src={banner} alt="/" />
          </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default Hero;
