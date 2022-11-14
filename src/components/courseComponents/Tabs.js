import React, { useState } from "react";

const Tabs = ({ video }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="container ">
        <div className="tab-card mb-24">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Overview
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Curriculum
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Instructor
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              Reviews
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h2>Course Details</h2>

              <p>{video.description}</p>
              <h5 className="py-5  font-sans text-xl">What you’ll learn?</h5>
              <ul className="list-disc md:pl-5">
                <li className="text-[#FF5421]">
                  <p className="text-[#666]">
                  17 Spring Dinner Recipes Packed with Fresh.
                  </p>
                </li>
                <li className="text-[#FF5421]">
                  <p className="text-[#666]">
                  Roast Chicken with Vegetables and Potatoes.
                  </p>
                </li>
                <li className="text-[#FF5421]">
                  <p className="text-[#666]">
                  Classic Cheese Omelet.
                  </p>
                </li>
                <li className="text-[#FF5421]">
                  <p className="text-[#666]">
                  Crispy Chicken Cutlets.
                  </p>
                </li>
                <li className="text-[#FF5421]">
                  <p className="text-[#666]">
                  General Tso's Chicken.
                  </p>
                </li>
              </ul>
              <h5 className="py-5  font-sans text-xl">Requirements</h5>
              <ul className="list-disc md:pl-5">
                <li className="text-[#FF5421]">
                  <p className="text-[#666]">
                  Ingredients with amounts – note: unless a sponsored recipe we do not include brand names.
                  </p>
                </li>
                <li className="text-[#FF5421]">
                  <p className="text-[#666]">
                  Equipment list – e.g. wood types, Dutch oven sizes.
                  </p>
                </li>
                <li className="text-[#FF5421]">
                  <p className="text-[#666]">
                  Basic instructions/procedures – this is how you made it including times of each step, especially cooking.
                  </p>
                </li>
                <li className="text-[#FF5421]">
                  <p className="text-[#666]">
                  Number of serves.
                  </p>
                </li>
                <li className="text-[#FF5421]">
                  <p className="text-[#666]">
                  Please remember this is an outdoor recipe website so photos taken in a kitchen should be avoided.
                  </p>
                </li>
              </ul>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h2>Cooking Learning</h2>
              <p>Comming Soon...</p>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <h2>Instructor</h2>
              <hr />
              <p>
              The home of Gordon Ramsay on YouTube. Recipe tutorials, tips, techniques and the best bits from the archives. New uploads every week - subscribe now to stay up to date!
              </p>
            </div>

            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
              <h2>Review</h2>
              <hr />
              <p>
              Joined Apr 29, 2006.<br/>3,694,287,993 views
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
