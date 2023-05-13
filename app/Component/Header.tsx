import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/logo.png'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex justify-between items-center px-[70px] py-4 max-w-screen-2xl bg-slate-50 shadow-zinc-200 shadow-md border-b-4 border-slate-950">
      <div className="flex items-center gap-x-4">
        <Image src={logo} width={120} height={50} alt="logo" />
        {/* <h2 className='bold text-white text-2xl'>Panaverse <br /> DAO</h2> */}
      </div>
      <div>
        <ul className="flex items-center gap-x-6 ">
          <li>
            <Link href={'/'} className="text-md font-medium ">
              Home
            </Link>
          </li>
          <li>
            <Link href={'/'} className="text-md font-medium ">
              Courses
            </Link>
          </li>
          <li>
            <Link
              href={'/'}
              className="text-md font-medium px-8 bg-slate-950 text-white py-3 rounded-md"
            >
              Login
            </Link>
          </li>
          {/* <li>
            <p className=""></p>
          </li> */}
          <li>
            <Link
              href={'/signup'}
              className="text-md font-medium px-8 bg-slate-950 text-white py-3 rounded-md"
            >
              Create account
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
