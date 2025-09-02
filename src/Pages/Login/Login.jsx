import React, { useContext } from 'react';
import { AuthContext } from '../../Authentication/AuthContext';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router';
// import loginImage from '../../assets/loginImage.png'

const Login = () => {

    const {handleLogin} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLoginForm = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        handleLogin(email,password)
        .then(()=>{
            toast.success("You've successfully logged in!");
            setTimeout(()=>{
                navigate('/')
            },1500);
        })
        .catch(()=>{
            toast.error("You have put invalid credentials.Please try again")
        })
    }

    
    return (
        <div className="hero mt-30">
            <div className="rounded-3xl mt-30 flex-col justify-evenly lg:flex-col-reverse">
                <div className="bg-gradient-to-tl from-[#FFF2F2] to-[#DAD2FF] flex flex-col lg:flex-row-reverse justify-center items-center p-2 rounded-2xl shadow-2xl">
                    <div className="p-6 flex flex-col rounded-2xl text-gray-800">
                        <div className="mb-4 text-center">
                            <h1 className="my-3 text-4xl font-bold underline">Login</h1>
                            <p className="text-2xl dark:text-gray-600">
                                Welcome Back!
                            </p>
                            <div className="divider"></div>
                        </div>
                        <form onSubmit={handleLoginForm} className="space-y-8">
                            <div className="space-y-4 text-2xl">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-2xl">Enter Email</label>
                                    <input type="email" name="email" id="email" placeholder="Enter email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"/>
                                </div>
                                <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-2xl">Enter Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Enter password"className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div>
                                    <button type="submit" className="cursor-pointer w-full px-8 py-3 text-2xl font-semibold rounded-md dark:bg-[#2D336B] dark:text-gray-50">Login</button>
                                </div>
                                {/* <h1 className="text-center text-2xl font-bold">Or</h1> */}
                                <div className="divider"></div>
                                <p className="px-6 text-xl text-center dark:text-gray-600">
                                Don't have an account?
                                <NavLink className="underline text-purple-700"to="/register"> Register here</NavLink>
                                </p>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;