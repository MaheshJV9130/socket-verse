"use client";

import React from "react";
import BackgroundVideo from "@/components/BackgroundVideo";
import LogoComponent from "@/components/LogoComponent";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Forgot = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, otp } = data;

    if (!otp) {
      let req = await fetch("http://localhost:8080/auth/forgot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      req = await req.json();

      if (req.status === 200) {
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
      } else {
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
        setError("rootError", { message: req.message });
        setTimeout(() => reset(), 2000);
      }
    }

    if (email && otp) {
      let req = await fetch("http://localhost:8080/auth/verify-otp", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      req = await req.json();

      if (req.status === 200) {
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
          router.refresh(); // Refresh the page or route
        }, 700);
      } else {
        setError("otp", { message: req.message });
      }
    }
  };

  return (
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <BackgroundVideo />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 mx-auto h-full">
        <LogoComponent />

        <div className="w-full bg-gray-800/50 backdrop-blur-md rounded-lg shadow border border-gray-700 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Forgot Password
            </h1>

            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  type="email"
                  name="email"
                  id="email"
                  className="input-styles"
                  placeholder="example@mail.com"
                  required
                />
              </div>

              {isSubmitted && !errors.rootError && (
                <>
                  <input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    pattern="\d{6}"
                    maxLength={6}
                    className="input-styles"
                    placeholder="Enter OTP"
                    {...register("otp", {
                      required: "OTP is required",
                      minLength: {
                        value: 6,
                        message: "OTP must be 6 digits",
                      },
                      maxLength: {
                        value: 6,
                        message: "OTP must be 6 digits",
                      },
                      pattern: {
                        value: /^\d{6}$/,
                        message: "OTP must be numeric",
                      },
                    })}
                  />
                  {errors.otp && (
                    <span className="text-red-500">{errors.otp.message}</span>
                  )}
                </>
              )}

              {errors.rootError && (
                <span className="text-red-500">{errors.rootError.message}</span>
              )}

              {isSubmitted && !errors.rootError ? (
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto"
                >
                  Verify OTP
                </button>
              ) : (
                <input
                  id="sub"
                  type="submit"
                  disabled={isSubmitting}
                  className={`${
                    isSubmitting
                      ? "cursor-not-allowed disabled:bg-gray-600"
                      : "cursor-pointer bg-blue-600 text-white hover:bg-blue-500"
                  } w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto`}
                  value={isSubmitting ? "Sending..." : "Send OTP"}
                />
              )}

              <p className="text-sm font-light text-gray-400">
                Don't have an account yet?{" "}
                <Link
                  className="font-medium text-blue-500 hover:underline"
                  href="/auth"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
