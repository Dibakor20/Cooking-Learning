import React, { useState } from "react";

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
     <div className="container tab-card mb-24">
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
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Course Details</h2>

          <p>
          Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus.<br/><br/>

          Eleifend euismod pellentesque vel Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus.
            </p>
            <h5 className="py-5  font-sans text-xl">What you’ll learn?</h5>
            <ul className="list-disc md:pl-5">
              <li className="text-[#666]">Phasellus enim magna, varius et commodo ut.</li>
              <li className="text-[#666]">Phasellus enim magna, varius et commodo ut.</li>
              <li className="text-[#666]">Phasellus enim magna, varius et commodo ut.</li>
              <li className="text-[#666]">Phasellus enim magna, varius et commodo ut.</li>
              <li className="text-[#666]">Phasellus enim magna, varius et commodo ut.</li>
            </ul>
            <h5 className="py-5  font-sans text-xl">Requirements</h5>
            <ul className="list-disc md:pl-5">
              <li className="text-[#666]">Phasellus enim magna, varius et commodo ut.</li>
              <li className="text-[#666]">Phasellus enim magna, varius et commodo ut.</li>
              <li className="text-[#666]">Phasellus enim magna, varius et commodo ut.</li>
              <li className="text-[#666]">Phasellus enim magna, varius et commodo ut.</li>
              <li className="text-[#666]">Phasellus enim magna, varius et commodo ut.</li>
            </ul>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Cooking Learning</h2>
          <p>
            Comming Soon...
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
          </div>
          
          <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2></h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Tabs;
