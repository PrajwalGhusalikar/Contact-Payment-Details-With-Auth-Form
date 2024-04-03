import React, { useState } from "react";
import Image from "../assets/image.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [errors, setErrors] = useState({});

  // console.log("inputCaptcha-", inputCaptcha);
  // console.log("captcha-", captcha);

  console.log("isCaptchaValid-", isCaptchaValid);
  console.log("errors-", errors);
  // Function to generate a random string for CAPTCHA
  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setCaptcha(captcha);
    setIsCaptchaValid(false); // Reset captcha validation
  };

  useState(() => {
    generateCaptcha();
  }, []);
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (!inputCaptcha) {
      errors.captcha = "CAPTCHA is required";
    } else if (inputCaptcha !== captcha) {
      errors.captcha = "CAPTCHA is incorrect";
    }
    setErrors(errors);

    // If no errors, proceed with form submission
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully!");
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Captcha:", inputCaptcha);
      // Clear form fields
      setEmail("");
      setPassword("");
      setInputCaptcha("");
      // Generate new captcha
      generateCaptcha();
    }
  };

  // Function to handle changes in CAPTCHA input
  const handleCaptchaChange = (e) => {
    setInputCaptcha(e.target.value);
    if (e.target.value === captcha) {
      setIsCaptchaValid(true);
    } else {
      setIsCaptchaValid(false);
    }
  };

  return (
    <div>
      <div className="bg-slate-200 h-screen w-screen grid grid-cols-1 md:grid-cols-2 ">
        <div className="h-full w-full bg-white flex justify-center items-center">
          <img src={Image} className="w-80 h-80 md:w-full md:h-full" alt="" />
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center relative m-2">
          <div className="flex flex-col items-start justify-center w-full max-w-md p-6 bg-white rounded-md shadow-md">
            <h5 className="text-sm font-normal text-gray-500">Welcome Back!</h5>
            <h2 className="text-2xl font-semibold text-gray-800">
              Login to your Account
            </h2>
            <form className="w-full mt-6">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email && "border-red-500"
                  }`}
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
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
                  className={`w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                    errors.password && "border-red-500"
                  }`}
                  placeholder="Enter your password"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>
              <div className="captcha mb-4">
                <div className="flex items-center">
                  <div
                    style={{
                      width: "160px",
                      backgroundColor: "#d9d9d9",
                      padding: "3px",
                      marginRight: "5px",
                    }}
                    className="  bg-cyan-300 text-center rounded-md "
                  >
                    {" "}
                    <label htmlFor="captcha" className="p-2 text-gray-700">
                      {captcha}
                    </label>
                  </div>

                  <input
                    type="text"
                    id="captcha"
                    value={inputCaptcha}
                    onChange={handleCaptchaChange}
                    className={`w-full px-3 py-2 placeholder-gray-400 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
                      errors.captcha && "border-red-500"
                    }`}
                    placeholder="Enter CAPTCHA"
                  />
                  <button
                    type="button"
                    className="ml-2 px-3 py-2 bg-gray-300 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    onClick={generateCaptcha}
                  >
                    Refresh
                  </button>
                </div>
                {errors.captcha && (
                  <p className="text-red-500 text-sm">{errors.captcha}</p>
                )}
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:cursor-pointer disabled:hover:cursor-default disabled:bg-slate-500 disabled:hover:bg-slate-500"
                disabled={!email || !password}
              >
                Login
              </button>
            </form>
          </div>
          <div className="text-lg md:absolute right-10 bottom-14 p-2">
            <h4 className="">
              Not Registered?{" "}
              <span className="text-cyan-600 hover:underline cursor-pointer">
                <Link to="/signup">Signup</Link>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
