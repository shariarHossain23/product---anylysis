import React from "react";

const Home = () => {
  return (
    <div>
      <div className="md:flex justify-center items-center px-12 mt-10">
        <div className="">
          <h1 className="text-6xl text-black font-bold">Your Next Laptop</h1>
          <h1 className="text-6xl text-purple-900 font-bold">
            Your Best Laptop
          </h1>
          <p className="mt-6">
            A laptop is a personal computer that can be easily moved and used in
            a variety of locations. Most laptops are designed to have all of the
            functionality of a desktop computer, which means they can generally
            run the same software and open the same types of files.
          </p>
          <button className="mt-4 bg-emerald-100 text-indigo-900 font-bold px-4 py-2 rounded-md">
            Live demo
          </button>
        </div>
        <div>
          <img
            className="w-screen"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
      <div>
          <h1 className="text-center mt-16 text-4xl">Customer Review</h1>
      </div>
    </div>
  );
};

export default Home;
