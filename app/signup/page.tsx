import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
    <div className="md:w-[500px] mx-auto my-8 p-6 bg-gray-100 rounded-xl">
      <h2 className='text-center text-3xl font-bold'>Sign Up</h2>
      <form className='mt-3'>
        <div>
          <p className="font-bold text-sm">Full Name:</p>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 rounded-lg mt-2 outline-none border-1 border-black"
          />
        </div>
        <div className="mt-3">
          <p className="font-bold text-sm">Email:</p>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 rounded-lg mt-2 outline-none border-1 border-black"
          />
        </div>
        <div className="mt-3">
          <p className="font-bold text-sm">Password:</p>
          <input
            type="password"
            name="password"
            className="w-full px-3 py-2 rounded-lg mt-2 outline-none border-1 border-black"
          />
        </div>
        <div className="mt-3">
          <p className="font-bold text-sm">Confirm Password:</p>
          <input
            type="password"
            name="confirmPassword"
            className="w-full px-3 py-2 rounded-lg mt-2 outline-none border-1 border-black"
          />
        </div>
        <div className='mt-4 text-center'>
          <button className='bg-black text-white text-md px-[35px] py-3 rounded-lg'>Sign up</button>
        </div>
        <div className='mt-3 text-center'>
          <p className='text-sm font-bold '>Do you have an account? <Link className='underline' href={'/'}>Login</Link> </p>
        </div>
      </form>
    </div>
  )
}

export default Signup

