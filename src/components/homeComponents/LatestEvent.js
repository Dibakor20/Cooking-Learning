import React from "react";

const eventData = [
  {
    img: "https://cooking-learning.netlify.app/assets/images/event/2.jpg",
    title: "Essential Fall Fruits That Aren’t Apples",
  },
  {
    img: "https://cooking-learning.netlify.app/assets/images/event/4.jpg",
    title: "Job Seekers From Overcoming Failure",
  },
  {
    img: "https://cooking-learning.netlify.app/assets/images/event/5.jpg",
    title: "Best Technology Graduation Ceremony.",
  },
];

const LatestEvent = () => {
  return (
    <>
      <div className="bg-light-orange py-28" id="Event">
        <div>
          <h3 className="text-center font-sans text-2xl  text-[#ff5421] font-bold">
            Latest Event
          </h3>
          <h3 className="text-center font-sans text-4xl py-4  text-[#031a3d] font-bold">
            Our Upcoming Events
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto pt-5 lg:px-0 ">
          {eventData.map((event) => (
            <div className="col-span-12 sm:col-span-6 md:col-span-4 duration-300 hover:scale-[1.03] mb-5">
              <div class=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src={event.img}
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                     {event.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far,
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      aria-hidden="true"
                      class="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestEvent;
