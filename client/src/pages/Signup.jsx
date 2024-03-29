import React from "react";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold my-12 text-center">Sign Up</h1>
      <form className="flex flex-col gap-5">
        <input
          className="p-3 rounded-lg bg-slate-100"
          type="text"
          placeholder="Username"
          required
          name="username"
          id="username"
        />
        <input
          className="p-3 rounded-lg bg-slate-100"
          type="email"
          placeholder="email"
          required
          name="email"
          id="email"
        />
        <input
          className="p-3 rounded-lg bg-slate-100"
          type="password"
          placeholder="password"
          required
          name="password"
          id="password"
        />
        <button className=" bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Sign Up
        </button>
      </form>
      <div className=" flex gap-4 py-5">
        <p>Already have an account? </p>
        <Link to={"/signin"}>
          <span className=" text-blue-700 font-medium">Sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
