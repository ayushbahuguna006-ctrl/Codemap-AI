import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className='flex gap-10  p-1 pt-2 items-center justify-between bg-[#0F162A] '>
        <div className='flex items-center gap-15'>
          <div className='flex items-center gap-1'>
            <FaLaptopCode className='text-blue-300' size={35} />
            <p className='text-xl text-blue-200'>CodeWiki</p>
          </div>

          <div className='flex text-sm text-gray-500 gap-5 '>
            <div>
              <p className='cursor-pointer'>HOME</p>
            </div>
            <div>
              <p className='cursor-pointer'>ABOUT</p>
            </div>
          </div>
        </div>
        <div className='flex text-sm items-center gap-5'>
          <div className='border rounded-sm text-base px-2 border-white/20  p-1 cursor-pointer hover:bg-blue-500'>
            <p>Login</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header