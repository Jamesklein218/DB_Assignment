import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.svg?react";

export default function Navbar() {
  return (
    <div className="drawer-content flex flex-col">
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <Link to="/" className="btn btn-ghost ">
            <div className="flex justify-center items-center w-16 aspect-square">
              <Logo className="w-full" color="rgb(0,0,0)" />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="active">
              <NavLink to="/">Fixtures</NavLink>
            </li>
            <li>
              <NavLink to="/awards">Awards</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn hover:bg-slate-800 hover:text-white mr-4"
          >
            Log in
          </Link>
          <Link to="/signup" className="btn btn-outline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
