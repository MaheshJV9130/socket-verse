"use client";
import Link from "next/link";
import React, { useState } from "react";
import LogoComponent from "@/components/LogoComponent";
import BackgroundVideo from "@/components/BackgroundVideo";
import { useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";

import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginPage = () => {
  const [isLoginStatus, setIsLoginStatus] = useState(false);
  const [profilePic, setProfilePic] = useState("/default.webp");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const signUp = async (email, username, password) => {
    const disallowedRegex = /[^a-zA-Z0-9_]/;

    if (disallowedRegex.test(username)) {
      setError("username", {
        message:
          "Username can only contain letters, numbers, and underscores (no spaces or special characters).",
      });
    } else {
      let req = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      });
      req = await req.json();
      clearErrors("rootError");
      if (req.status === 404) {
        toast.error(req.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      } else {
        toast.success(req.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
        setTimeout(() => {
          router.push("/");
        }, 700);
      }
    }
  };

  const login = async (username, password) => {
    const disallowedRegex = /[^a-zA-Z0-9_]/;

    if (disallowedRegex.test(username)) {
      setError("username", {
        message:
          "Username can only contain letters, numbers, and underscores (no spaces or special characters).",
      });
    } else {
      let req = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      req = await req.json();

      if (req.status === 404) {
        toast.error(req.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      } else {
        toast.success(req.message, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
        setTimeout(() => {
          router.push("/");
        }, 700);
      }
    }
  };
  const handleProfile = (e) => {
    const MAX_FILE_SIZE = 2 * 1024 * 1024;

    if (e.target.files[0].size > MAX_FILE_SIZE) {
      setError("profile", { message: "File size must be less than 2MB" });
      setTimeout(() => {
        clearErrors()
      }, 1500);
    } else {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = async (data) => {
    const { email, username, password } = data;

    if (!email) {
      login(username, password);
    } else {
      signUp(email, username, password);
    }
  };

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

            <form
              className="space-y-2 md:space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              {!isLoginStatus && (
                <div>
                  <label
                    htmlFor="profile"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    <Image
                      src={profilePic}
                      className="rounded-full  mx-auto cursor-pointer"
                      alt="profilePic"
                      width={100}
                      height={100}
                    />
                  </label>
                  <input
                    onChange={handleProfile}
                    type="file"
                    name="profile"
                    id="profile"
                    className="hidden"
                    accept="image/*"
                  />
                  {errors.profile && (
                    <p className="mx-auto w-full text-center text-sm text-red-500">
                      {errors.profile.message}
                    </p>
                  )}
                </div>
              )}
              {!isLoginStatus && (
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    id="email"
                    className="input-styles"
                    placeholder="example@mail.com"
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
                  {...register("username", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Create a username at least 3 characters long.",
                    },

                    maxLength: 20,
                  })}
                  type="text"
                  name="username"
                  id="username"
                  className="input-styles"
                  placeholder="Enter username"
                  required
                />
                {errors.username && (
                  <p className="text-center text-sm text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Create a password at least 6 characters long.",
                    },
                    maxLength: 20,
                  })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="input-styles"
                  required
                />
                {errors.password && (
                  <p className="text-center text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {isLoginStatus && (
                <div className="flex items-center justify-between">
                  <Link
                    href="/recover"
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
                    reset();
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
