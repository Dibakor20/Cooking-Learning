import React from "react";

const AboutCourse = () => {
  return (
    <>
      <div
        name="home"
        id="About"
        className="w-full flex flex-col justify-between bg-light-orange mb-28 relative"
      >
        <div className="container">
          <div className="grid md:grid-cols-2 ">
            <div className="flex flex-col justify-center md:items-start w-full px-2 pt-8 md:pt-0">
                        
                          <img
                className="hidden md:block  absolute bottom-[160px] "
                src="https://cooking-learning.netlify.app/assets/images/about/home8/1.jpg"
                alt="/"
                              />
                               <img
                className="align-middle md:p-16 md:ml-52"
                src="https://cooking-learning.netlify.app/assets/images/about/home8/2.jpg"
                alt="/"
              />
       
            </div>
            <div className="py-10">
                          <div>
                              <h3 className=" md:ml-16 text-xl text-orange font-bold font-sans">ABOUT ME</h3>
                              <h1 className='py-3 md:ml-16 font-sans text-3xl md:text-3xl leading-10 text-[#031a3d] font-extrabold'>RO-KITCHEN<br />Coach</h1>
                              <p className="md:ml-16 py-3 text-gray-700 font-sans">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore etdo ldore magna this aliqua enims ad minim.Lorem ipsum dolor sit amet, consecte tur adipisic ing elit, sed eius to mod tem incididunt demo data.Get inspired and learn new recipes. From vegan meals to how to prepare the best barbecue. Become an expert in pastry and bakery with our courses. </p>
              <button className='md:ml-16 py-3 px-3 w-[35%] my-4 btn-orange'>Get Started</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCourse;
