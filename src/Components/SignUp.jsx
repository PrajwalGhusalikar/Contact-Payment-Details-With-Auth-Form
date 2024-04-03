import React, { useState } from "react";
import Image from "../assets/image.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      {" "}
      <div className="bg-slate-200 h-screen w-screen grid grid-cols-1 md:grid-cols-2 ">
        <div className="h-full w-full bg-white flex justify-center items-center">
          <img src={Image} className="w-80 h-80 md:w-full md:h-full" alt="" />
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center relative m-2">
          <div className="flex flex-col items-start justify-center w-full max-w-md p-6 bg-white rounded-md shadow-md">
            <h5 className="text-sm font-normal text-gray-500">Welcome!</h5>
            <h2 className="text-2xl font-semibold text-gray-800">
              Create a New Account
            </h2>
            <form onSubmit={handleSubmit} className="w-full mt-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                SignUp
              </button>
            </form>
          </div>
          <div className="text-lg md:absolute right-10 bottom-14 p-2">
            <h4 className="">
              Already have an Account?{" "}
              <span className="text-cyan-600 hover:underline hover:cursor-pointer">
                <Link to="/login"> Login</Link>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
