import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-emerald-600 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">FPage</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>Support Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
