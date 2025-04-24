import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-8 px-4 md:px-24">
        <div className="text-3xl font-bold mb-4 md:mb-0">
          <Link to="/">
            Edu<span className="text-blue-600">Cate</span>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-6 text-xl">
          <Link to="/Awareness">Parent Awareness</Link>
          <Link to="/LastDay">LastDay</Link>
        </div>
        <div className="flex flex-col md:flex-row gap-6 text-2xl mt-4 md:mt-0">
          <Link to="/login" className="hover:text-blue-500">
            Login
          </Link>
          <Link to="/signup" className="hover:text-blue-500">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
