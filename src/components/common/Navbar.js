/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="bg-white-800 h-24 w-full">
        <div className="md:container">
          <input type="checkbox" id="check" hidden />
          <label
            for="check"
            className="float-right text-3xl leading-[80px] mr-10 lg:hidden"
          >
            <i className="fas fa-bars"></i>
          </label>
         <Link to="/"> <label className="leading-[80px] md:leading-[80px] pl-4 text-3xl font-bold pointer">
            <span className="text-orange pointer">RO-</span><span className="text-[#031a3d]pointer">KITCHEN</span>
          </label>
          </Link>
          <ul className="float-right mr-10 lg:flex leading-[80px] space-x-4 uppercase rounded lg:relative h-[100vh] lg:h-0 w-[100%] lg:w-fit top-35 lg:top-0 left-[-100%] lg:left-0 fixed transition-all duration-300 lg:transition-none text-center bg-slate-700 text-white lg:text-black">
            <li>
              <a href="/" className="text-orange">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Event">Blog</a>
            </li>
            <li>
              <a href="#Footer">Contact</a>
            </li>
            <li>
            <a href="#Courses" className=" py-3 px-6 btn-orange">Course</a>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
