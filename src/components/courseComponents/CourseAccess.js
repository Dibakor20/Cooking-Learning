import React from "react";

const CourseAccess = () => {
  return (
    <>
      <div className="">
        <img
          src="https://keenitsolutions.com/products/wordpress/educavo/wp-content/uploads/2020/09/ev_k5.jpg"
          alt=""
          className=""
        />
        <div className="mt-10 tab-card p-5">
          <div className="flex justify-between border-b-2 py-4">
            <div>
              <h3 className="text-lg font-sans font-semibold">
                <span className="text-[#ff5421] pr-3">
                  <i class="fa-solid fa-file"></i>
                </span>{" "}
                Lectures
              </h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
          </div>
          <div className="flex justify-between border-b-2 py-4">
            <div>
              <h3 className="text-lg font-sans font-semibold">
                <span className="text-[#ff5421] pr-3">
                  <i class="fa-solid fa-puzzle-piece"></i>
                </span>{" "}
                Quiz
              </h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </div>
          <div className="flex justify-between border-b-2 py-4">
            <div>
              <h3 className="text-lg font-sans font-semibold">
                <span className="text-[#ff5421] pr-3">
                  <i class="fa-solid fa-clock"></i>
                </span>{" "}
                Duration
              </h3>
            </div>
            <div>
              <h3>2 hours</h3>
            </div>
          </div>
          <div className="flex justify-between border-b-2 py-4">
            <div>
              <h3 className="text-lg font-sans font-semibold">
                <span className="text-[#ff5421] pr-3">
                  <i class="fa-solid fa-user"></i>
                </span>
                Students
              </h3>
            </div>
            <div>
              <h3>125</h3>
            </div>
          </div>
        </div>
        <div className="my-5 tab-card p-5">
          <button className="py-3 px-32 md:px-44 btn-orange">Free</button>
        </div>
      </div>
    </>
  );
};

export default CourseAccess;
