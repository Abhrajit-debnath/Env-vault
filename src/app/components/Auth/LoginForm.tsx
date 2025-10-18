// "use client";

// import { FaGithub } from "react-icons/fa";
// import { IoLogoGoogle } from "react-icons/io5";
// import { signIn } from "next-auth/react";
// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useForm, SubmitHandler } from "react-hook-form";

// type Inputs = {
//   email: string;
//   password: string;
// };

// const LoginForm = () => {
//   const [loading, setloading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const handelSocialSignin = (provider: string) => {
//     setloading(true);
//     signIn(provider, { callbackUrl: "/dashboard" });
//     setloading(false);
//   };

//     const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
//     try {
//       setloading(true);
//     const res = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });
//     if (res?.ok) {
//       router.replace("/dashboard");
//     } else {
//       console.error(res?.error);
//     }
//     } catch (error) {
//         console.error("An unexpected error occurred:", error);
//       }
//     }
//   };
//   return (
//     <div className="w-full flex-col space-y-3 justify-center">
//       {/* Google login */}
//       <div className="border-2 border-gray-500 py-2 px-6 rounded-xl flex items-center cursor-pointer">
//         <IoLogoGoogle />
//         <button
//           onClick={() => handelSocialSignin("google")}
//           className="text-center w-full text-gray-300 font-nunito cursor-pointer"
//         >
//           Sign in with Google
//         </button>
//       </div>

//       {/* Facebook login */}
//       <div className="border-2 border-gray-500 py-2 px-6 rounded-xl flex items-center cursor-pointer">
//         <FaGithub />
//         <button
//           onClick={() => handelSocialSignin("github")}
//           className="text-center w-full text-gray-300 font-nunito cursor-pointer"
//         >
//           Sign in with Github
//         </button>
//       </div>

//       <p className="text-center capitalize font-inter">or</p>

//       {/* Email/Password (mobile only) */}
//       <form
//         action=""
//         className="space-y-3 block md:hidden"
//         onSubmit={handleCredentialsSignIn}
//       >
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           value={email}
//           placeholder="Email"
//           className="w-full px-4 py-2 rounded-lg  text-gray-300 border border-gray-600 focus:outline-none focus:border-gray-400"
//         />
//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           value={password}
//           placeholder="Password"
//           className="w-full px-4 py-2 rounded-lg  text-gray-300 border border-gray-600 focus:outline-none focus:border-gray-400"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-700 text-white py-2 rounded-lg transition capitalize font-nunito font-medium"
//         >
//           Sign in
//         </button>
//       </form>
//       <p className="font-inter text-xs capitalize pt-1">
//         dont have an account?{" "}
//         <Link href="/signup">
//           <span className="text-blue-500">create one</span>
//         </Link>
//       </p>
//     </div>
//   );
// }

// export default LoginForm;

"use client";

import { FaGithub } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";

type Inputs = {
  email: string;
  password: string;
};

interface AuthResponse {
  error: string | undefined;
  ok: boolean;
  url: string | null;
  status: number;
}

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handelSocialSignin = (provider: string) => {
    setLoading(true);
    signIn(provider, { callbackUrl: "/dashboard" });
  };

  // CORRECTED: This handler now receives 'data' from useForm
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    setLoading(true);

    const loginPromise = signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    }) as Promise<AuthResponse>;

    toast
      .promise(
        loginPromise,
        {
          loading: "Signing in...",
          success: (result) => {
            setLoading(false);
            if (result.error) {
              return `Login failed: ${result.error}`;
            }
            router.replace("/dashboard");
            return "Welcome back!";
          },
          error: (err) => {
            setLoading(false);
            return "An unknown error occurred during login.";
          },
        },
        {
          style: {
            backgroundColor: "#151515",
            color: "#ffff",
          },
        }
      )
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full flex-col space-y-3 justify-center">
      {/* Google login */}
      <div
        className="border-2 border-gray-500 py-2 px-6 rounded-xl flex items-center cursor-pointer 
             transition-all duration-300 ease-in-out 
             hover:border-primary hover:text-primary 
             "
        onClick={() => handelSocialSignin("google")}
      >
        

        <button
          className="text-center w-full font-nunito 
               text-gray-300 cursor-pointer flex gap-5 justify-center items-center
            
               "
          disabled={loading}
        >
          <IoLogoGoogle className="text-xl text-gray-300" /> Sign in with Google
        </button>
      </div>

      {/* Github login */}
      <div
        className="border-2 border-gray-500 py-2 px-6 rounded-xl flex items-center cursor-pointer 
             transition-all duration-300 ease-in-out 
             hover:border-primary hover:text-primary 
             "
      >
        
        <button
          onClick={() => handelSocialSignin("github")}
          className="text-center w-full text-gray-300 font-nunito cursor-pointer flex gap-5 justify-center items-center"
          disabled={loading}
        >
          <FaGithub className="text-xl text-gray-300" /> Sign in with Github
        </button>
      </div>

      <p className="text-center capitalize font-inter">or</p>

      <form className="space-y-3 block" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
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
            className="w-full bg-gray-700 focus:border-primary px-4 py-2 rounded-lg text-gray-300 border border-gray-600 focus:outline-none"
            disabled={loading}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Input */}
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
            className="w-full px-4 py-2 bg-gray-700 focus:border-primary rounded-lg text-gray-300 border border-gray-600 focus:outline-none"
            disabled={loading}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-secondary cursor-pointer text-white py-2 rounded-lg transition capitalize font-nunito font-medium flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <LoaderCircle className="animate-spin mr-2" size={20} />
          ) : (
            "Sign in"
          )}
        </button>
      </form>
      <p className="font-inter text-xs capitalize pt-1">
        dont have an account?{" "}
        <Link href="/signup">
          <span className="text-primary">create one</span>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
