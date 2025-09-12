import React, { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthContext";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
// import loginImage from '../../assets/loginImage.png'

const Login = () => {
  const { handleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero mb-20 pt-28 bg-teal-50">
      <div className="flex items-center justify-center min-h-screen  dark:bg-gray-900 px-4">
        <div className="w-full  bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-teal-800">Login</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Welcome back! Please login to continue.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full px-4 py-3 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#2D336B] focus:outline-none"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="text-lg font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <NavLink
                  to="/forgot-password"
                  className="text-sm text-[#2D336B] hover:underline"
                >
                  Forgot password?
                </NavLink>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-3 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#2D336B] focus:outline-none"
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember me */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                {...register("remember")}
                className="w-4 h-4 text-[#2D336B] border-gray-300 rounded focus:ring-[#2D336B]"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Remember me
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold rounded-xl bg-teal-700 text-white shadow-md hover:opacity-90 transition"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-full bg-gray-300 dark:bg-gray-600"></div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                OR
              </span>
              <div className="h-px w-full bg-gray-300 dark:bg-gray-600"></div>
            </div>

           

            {/* Register link */}
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
              Don’t have an account?{" "}
              <NavLink to="/register" className="underline text-[#2D336B]">
                Register here
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
