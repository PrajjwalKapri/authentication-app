import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-300">
      <div className="  flex justify-between items-center max-w-[80%] mx-auto p-4">
        <h1 className="text-2xl font-bold">Auth App</h1>
        <ul className="font-medium text-lg flex gap-6">
          <Link to={"/"}>
            <li>Home</li>
          </Link>

          <Link to={"/about"}>
            <li>About</li>
          </Link>

          <Link to={"/signin"}>
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
