import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-emerald-700 shadow-md px-6 py-3 sticky top-0 z-50">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-extrabold text-emerald-200 hover:text-white transition-colors duration-300"
        >
          Frontify25
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-4 text-emerald-100 font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-white hover:bg-emerald-600 rounded-md px-3 py-1 transition"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
