import React from 'react'
import { useState } from "react";
import axios from "axios";

// https://tailwind-elements.com/docs/standard/forms/login-form/
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URI}/login`, formData, { withCredentials: true })
      .then((res) => {
        console.log(res?.data)

      });
  }

  return (
    <main className="bg-neutral100 flex justify-center">
      {/* Form container */}
      <div className="px-4 md:p-6 md:w-8/12 lg:w-6/12 xl:w-5/12">
        {/* <!--Logo--> */}
        <div className="text-center">
          <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
            Welcome to Weather Wizard
          </h4>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit}>
          <p className="mb-4">Please login to your account</p>
          {/* <!--Email input--> */}
          <div className="relative mb-4" data-te-input-wrapper-init>
            <input
              type="text"
              name="email"
              onChange={handleInputChange}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
              Email
            </label>
          </div>

          {/* <!--Password input--> */}
          <div className="relative mb-4" data-te-input-wrapper-init>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">
              Password
            </label>
          </div>

          {/* <!--Submit button--> */}
          <div className="mb-12 pb-1 pt-1 text-center">
            <button
              className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
              type="submit"
              data-te-ripple-init
              data-te-ripple-color="light">
              Log in
            </button>

            {/* <!--Forgot password link--> */}
            <a href="#!">Forgot password?</a>
          </div>

          {/* <!--Register button--> */}
          <div className="flex items-center justify-between pb-6">
            <p className="mb-0 mr-2">Don&apos;t have an account?</p>
            <button
              type="button"
              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light">
              Register
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
