import React from "react";

const TopBar = () => {
  return (
    <>
      <section className="bg-light-orange">
        <div className="md:container">
        <div class="border-b-1 py-2 px-2 md:px-6">
        <div class="flex justify-between">
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-orange"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <span class="ml-1 md:ml-2 font-semibold text-[#252C32]"> support@debakor.com</span>
          </div>

          <div class="hidden md:block ml-6 py-2 flex flex-1 gap-x-3">
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-orange"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <span class="ml-2 font-semibold text-[#252C32]">374 William S Canning Blvd, MA 2721, USA</span>
          </div>
          </div>

          <div class="md:ml-2 flex">
            <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-2 md:px-4 hover:bg-gray-100">
              <div class="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <span class="text-sm font-medium">Login/Register</span>
            </div>

            {/* <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
              <span class="text-sm font-medium">Sign in</span>
            </div> */}
          </div>
          </div>
          </div>
     </div>
      </section>
    </>
  );
};

export default TopBar;
