import React from "react";

const testimonialData = [
  {
    img: "https://cooking-learning.netlify.app/assets/images/testimonial/style8/3.png",
    describe: "Essential Fall Fruits That Aren’t Apples",
  },
  {
    img: "https://cooking-learning.netlify.app/assets/images/testimonial/style8/2.png",
    describe: "Job Seekers From Overcoming Failure",
  },
  {
    img: "https://cooking-learning.netlify.app/assets/images/testimonial/style8/4.png",
    describe: "Best Technology Graduation Ceremony.",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className=" py-28">
        <div>
          <h3 className="text-center font-sans text-2xl  text-[#ff5421] font-bold">
            TESTIMONIAL
          </h3>
          <h3 className="text-center font-sans text-4xl py-4  text-[#031a3d] font-bold">
            What Students Saying
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto pt-5 px-5 lg:px-0 min-h-[300px]">
          {testimonialData.map((event) => (
            <div className="col-span-12 sm:col-span-6 md:col-span-4 duration-300 hover:scale-[1.03]">
              <figure class="mx-auto max-w-screen-md text-center">
                <svg
                  aria-hidden="true"
                  class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <blockquote>
                  <p class="text-xl font-sans  text-gray-900">
                    "Flowbite is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application."
                  </p>
                </blockquote>
                <figcaption class="flex justify-center items-center mt-6 space-x-3">
                  <img
                    class="w-6 h-6 rounded-full"
                    src={event.img}
                    alt="profile picture"
                  />
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite class="pr-3 font-medium text-gray-900 dark:text-white">
                      Micheal Gough
                    </cite>
                    <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      CEO at Google
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
