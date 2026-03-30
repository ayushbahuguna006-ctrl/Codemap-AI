import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

function Header() {
  return (
 <>
 <div className='flex gap-10 p-1'>
     <div className='flex items-center gap-1'>
        <div>
          <FaLaptopCode />
        </div>
        <div>
          <p>CodeWiki</p>
        </div>
     </div>
     <div className='flex text-sm items-center gap-5'>
        <div>
           <p>HOME</p>
        </div>
        <div>
            <p>ABOUT</p>
        </div>
        <div className='border rounded-xl border-blue-200 p-1'>
          <p>LOGIN</p>
        </div>
     </div>
 </div>
 </>
  )
}

export default Header