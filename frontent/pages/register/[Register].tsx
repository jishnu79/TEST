import { register } from '@/Api/Auth'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Register() {
    const [isSignup, setIsSignup] = useState(true)
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmpass: ""
    })
    const [confirmPass, setConfirmPss] = useState(true)
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            if (data.password === data.confirmpass) {
                register(data).then((da: any) => {
                    if (da.success) {
                        toast.success(da.message)
                        localStorage.setItem('token',da.token)
                        setdata({
                            name: "",
                            email: "",
                            password: "",
                            confirmpass: ""
                          })

                    } else {
                        toast.error(da.message)
                    }
                })
            } else {
                setConfirmPss(false)
            }
        }
    }
    const reseForm = () => {
        setConfirmPss(true)
        setdata({
            name: "",
            email: "",
            password: "",
            confirmpass: ""
        })
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign {isSignup ? " up" : "in"} to your account</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit} method="POST">
                    {
                        isSignup && (
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                <div className="mt-2">
                                    <input
                                        name="name"
                                        type="text"
                                        onChange={handleChange}
                                        value={data.name}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        )}

                    {/* { */}

                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input
                                name="email"
                                type="email"
                                onChange={handleChange}
                                value={data.email}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="mt-2">
                            <input
                                name="password"
                                type="password"
                                onChange={handleChange}
                                value={data.password}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    {
                        isSignup && (
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
                                <div className="mt-2">
                                    <input
                                        name="confirmpass"
                                        type="password"
                                        onChange={handleChange}
                                        value={data.confirmpass}
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                                <p className='text-red-600'>{confirmPass ? "" : "confirm password incorrect"} </p>
                            </div>
                        )
                    }

                    {/* } */}
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    {isSignup ? "Already i have an account!" : "Create New Account ? "}
                    <a onClick={() => {
                        setIsSignup((prev) => !prev);
                        reseForm()
                    }} className="font-semibold leading-6 cursor-pointer text-indigo-600 hover:text-indigo-500"> Login</a>
                </p>
            </div>
        </div>
    )
}

export default Register