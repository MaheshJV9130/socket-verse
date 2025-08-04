"use client";
import Link from "next/link";
import React, { useState } from "react";
import LogoComponent from "./LogoComponent";
import BackgroundVideo from "./BackgroundVideo";

const LoginPage = () => {
  const [isLoginStatus, setIsLoginStatus] = useState(true);
  return (
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <BackgroundVideo />
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 mx-auto h-full">
        <LogoComponent />

        {/* Login form */}
        <div className="w-full bg-gray-800/50 backdrop-blur-md rounded-lg shadow border border-gray-700 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              {isLoginStatus ? "Log in to your account" : "Sign up"}
            </h1>

            <form className="space-y-4 md:space-y-6">
              {!isLoginStatus && (
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input-styles"
                    placeholder="name@company.com"
                    required
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="input-styles"
                  placeholder="Enter username"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="input-styles"
                  required
                />
              </div>

              {isLoginStatus && (
                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    className="text-sm font-medium text-blue-500 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {isLoginStatus ? "Log in" : "Sign Up"}
              </button>

              <p className="text-sm font-light text-gray-400">
                {isLoginStatus
                  ? "Don't have an account yet? "
                  : "Already have an account? "}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLoginStatus((prev) => !prev);
                  }}
                  className="font-medium text-blue-500 hover:underline"
                >
                  {isLoginStatus ? "Sign up" : "Log in"}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
