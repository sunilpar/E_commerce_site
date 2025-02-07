import React, { useState } from "react";
import authService from "../backend/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authslice";
import { Button, Input } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);//creating user
      if (userData?.statusCode === 200) {
        const userData = await authService.login(data);//logging in user
        if (userData.statusCode===200){
        const userData = await authService.getCurrentUser();//getting current user
        if (userData.statusCode===200) {
         dispatch(login(userData));
         navigate("/");
        }
         
        }
      }
    } catch (error) {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen text-iphone-white ">
      <div
        className={`mx-auto w-full max-w-lg rounded-xl p-10 ring-1 ring-iphone-white ring-opacity-70 ` }
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]"></span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="  "
              placeholder="Enter your full name"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label=" "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label=" "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            {/* <Input
              label=" "
              type="select"
              placeholder="choose your avatar"
              {...register("avatar")}
            /> */}

            <Button type="submit" className="w-full bg-iphone-black text-iphone-white hover:bg-iphone-white hover:text-iphone-black duration-150 hover:duration-150 ">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
