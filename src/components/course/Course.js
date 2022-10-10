import React from "react";
import CourseItem from "./CourseItem";


const Course = () => {
  return (
    <>
      <section className="pt-12">
        <div className="container">
        <div className="grid grid-cols-6 gap-4 mx-auto lg:px-0 min-h-[300px]">
          <CourseItem />
        </div>
        </div>
      </section>
    </>
  );
};

export default Course;
