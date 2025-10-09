"use client";

import { FaGithub } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handelSocialSignin = (provider: string) => {
    signIn(provider);
  };

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) {
      router.replace("/dashboard");
    } else {
      console.error(res?.error);
    }
  };
  return (
    <div className="w-full flex-col space-y-3 justify-center">
      {/* Google login */}
      <div className="border-2 border-gray-500 py-2 px-6 rounded-xl flex items-center cursor-pointer">
        <IoLogoGoogle />
        <button
          onClick={() => handelSocialSignin("google")}
          className="text-center w-full text-gray-300 font-nunito cursor-pointer"
        >
          Sign in with Google
        </button>
      </div>

      {/* Facebook login */}
      <div className="border-2 border-gray-500 py-2 px-6 rounded-xl flex items-center cursor-pointer">
        <FaGithub />
        <button
          onClick={() => handelSocialSignin("github")}
          className="text-center w-full text-gray-300 font-nunito cursor-pointer"
        >
          Sign in with Github
        </button>
      </div>

      <p className="text-center capitalize font-inter">or</p>

      {/* Email/Password (mobile only) */}
      <form
        action=""
        className="space-y-3 block md:hidden"
        onSubmit={handleCredentialsSignIn}
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="Email"
          className="w-full px-4 py-2 rounded-lg  text-gray-300 border border-gray-600 focus:outline-none focus:border-gray-400"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          placeholder="Password"
          className="w-full px-4 py-2 rounded-lg  text-gray-300 border border-gray-600 focus:outline-none focus:border-gray-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-lg transition capitalize font-nunito font-medium"
        >
          Sign in
        </button>
      </form>
      <p className="font-inter text-xs capitalize pt-1">
        dont have an account?{" "}
        <Link href="/signup">
          <span className="text-blue-500">create one</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
