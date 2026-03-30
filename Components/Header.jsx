import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className='flex gap-10  p-1 pt-2 items-center justify-between md:pr-10 bg-[#0F162A] '>
        <div className='flex items-center gap-9 md:gap-20 md:px-10 pl-2'>
          <div className='flex items-center gap-1'>
            <FaLaptopCode className='text-blue-300'  size={20} />
            <p className='text-xl text-blue-200'>CodeWiki</p>
          </div>

          <div className='flex text-sm font-bold text-gray-500 gap-5 mt-2'>
            <div>
              <p className='cursor-pointer hover:text-green-500'>HOME</p>
            </div>
            <div>
              <p className='cursor-pointer hover:text-green-500'>ABOUT</p>
            </div>
          </div>
        </div>
        <div className='flex text-sm items-center gap-5'>
          <div className='border rounded-sm text-base px-2 border-white/10 text-white/50 mt-2  p-1 cursor-pointer hover:bg-blue-500'>
            <p>Login</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header