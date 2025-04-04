import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authslice.js'
import {Button, Input} from "./index.js"
import {useDispatch} from "react-redux"
import authService from "../backend/auth.js"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            console.log("the data from login ",session);
            
            if (session) {
                const userData = await authService.getCurrentUser()
                console.log("the data of user from api call ",userData);
                
                if(userData) dispatch(authLogin(userData));
                navigate("/")
                location.reload()
            }
        } catch (error) {
            setError(error.message)
            
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full h-screen text-iphone-white '
    >
        <div className={`mx-auto w-full max-w-lg  rounded-xl p-10 ring-1 ring-iphone-white ring-opacity-70`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                       
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label=" "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
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
                <Button
                type="submit"
                className="w-full  bg-iphone-black text-iphone-white hover:bg-iphone-white hover:text-iphone-black duration-150 hover:duration-150"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login