"use client";
import { LoaderCircle } from 'lucide-react';
import { IoLogoGoogle } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import rea


type Inputs = {
  name: string;
  email: string;
  password: string;
};


const SignUpForm = () => {

  const [loading, setloading] = useState(false)
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handelSocialSignup = (provider: string) => {
    setloading(true)
    signIn(provider,{callbackUrl:"/dashboard"});
    setloading(false)
  };

const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
  try {
    setloading(true)
    const res = await axios.post("/api/register", data, {
      headers: { "Content-Type": "application/json" },
    });
    if (res) {
      setloading(false)
      router.replace("/signin")
      
    }

  } catch (error) {
    // Check if the error is an Axios error and has a response
    if (axios.isAxiosError(error) && error.response) {
      
      // *** THIS IS THE CRUCIAL LINE ***
      // This will show you the exact JSON error message returned by your backend.
      console.error("Server Error:", error.response.data.error); 
      
      // Optionally, show the error to the user in the UI (e.g., using a toast/state)
      // setErrorMessage(error.response.data.error);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
};
  return (
    <div className="w-full flex-col space-y-3 justify-center">
      {/* Google login */}
      <div className="border-2 border-gray-500 py-2 px-6 rounded-xl flex items-center cursor-pointer">
        <IoLogoGoogle />
        <button
          onClick={() => handelSocialSignup("google")}
          className="text-center w-full text-gray-300 font-nunito capitalize text-sm cursor-pointer"
        >
          Sign up with Google
        </button>
      </div>

      {/* Facebook login */}
      <div className="border-2 border-gray-500 py-2 px-6 rounded-xl flex items-center cursor-pointer">
        <FaGithub />
        <button
          onClick={() => handelSocialSignup("github")}
          className="text-center w-full text-gray-300 font-nunito capitalize text-sm cursor-pointer"
        >
          Sign up with Github
        </button>
      </div>

      <p className="text-center capitalize font-inter">or</p>

      {/* Email/Password (mobile only) */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 block md:hidden"
      >
        {/* Name */}
        <div>
          <input
            {...register("name", {
              required: "Name is required",
              maxLength: 50,
            })}
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded-lg text-gray-300 border border-gray-600 focus:outline-none focus:border-gray-400"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg text-gray-300 border border-gray-600 focus:outline-none focus:border-gray-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength: 100,
            })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg text-gray-300 border border-gray-600 focus:outline-none focus:border-gray-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-lg transition capitalize font-nunito font-medium"
        >
          Sign up
        </button>
      </form>

      <p className="font-inter text-xs capitalize pt-1">
        already have an account?{" "}
        <Link href="/signin">
          {" "}
          <span className="text-blue-500">Sign in</span>
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
