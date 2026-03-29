import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

function Header() {
  return (
    <div>
      <div className='flex'>
        <div>
          <FaLaptopCode size={25} />
        </div>
        <div className='text-base font-semibold'>
           CodeWiki
        </div>
      </div>
    </div>
  )
}

export default Header