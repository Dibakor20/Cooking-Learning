import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searched } from "../../features/filter/FilterSlice";
import { useMatch, useNavigate } from "react-router-dom";
import Search from "./Search";
import sicon from '../../assets/images/search.svg'

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
    if (!match) {
      navigate("/");
    }
    setInput("");
  };
  return (
    <>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <Link to="/">
            <span className=" text-orange font-bold text-xl md:text-2xl">RO-</span>
            <span className="text-[#031a3d] font-bold text-xl md:text-2xl">KITCHEN</span>
          </Link>
          <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            <Search
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
            />
            <img
              className="inline h-4 cursor-pointer"
              src={sicon}
              alt="Search"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
