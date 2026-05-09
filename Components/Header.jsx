"use client"

import React from 'react'
import { FaLaptopCode } from "react-icons/fa"
import { signIn } from "next-auth/react"
//Header page
//o-auth success

function Header() {
  return (
    <div className='flex gap-6 md:gap-10 p-1 pt-2 items-center justify-between md:pr-10 bg-[#0F162A] overflow-x-hidden'>

      <div className='flex items-center gap-8 md:gap-20 md:px-10 pl-2 min-w-0'>
        <div className='flex items-center gap-1 flex-shrink-0'>
          <FaLaptopCode className='text-blue-300' size={20} />
          <p className='text-xl text-blue-200 whitespace-nowrap'>CodeWiki</p>
        </div>

        <div className='flex text-sm font-bold text-gray-500 gap-3 md:gap-5 mt-2 flex-wrap'>
          <p className='cursor-pointer hover:text-green-500'>HOME</p>
          <p className='cursor-pointer hover:text-green-500'>ABOUT</p>
        </div>
      </div>

      <button
        onClick={() => signIn("github")}
        className='border rounded-sm text-base px-2 text-green-500 border-white/10 text-blue-200 mt-2 p-1 cursor-pointer hover:bg-white/20 whitespace-nowrap'
      >
        Login
      </button>
    </div>
  )
}

export default Header