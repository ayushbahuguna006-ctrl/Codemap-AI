import React from 'react'

function Footer() {
  //footer 
  return (
    <div>
        <div className='flex md:flex-row flex-col items-center gap-5  md:justify-around bg-[#031033]/60 h-[30vh]'>
            <div className='flex-col'>
              <p className='text-blue-200 text-xl'>CodeWiki</p>
              <p className='text-sm md:mt-2 text-gray-600'>ENGINE-4.0 STABLE</p>
            </div>
            <div className='flex md:flex-row flex-col gap-5'>
              <p className='text-sm text-gray-600'>DOCUMENTATION</p>
              <p className='text-sm text-gray-600'>PRIVACY</p>
              <p className='text-sm text-gray-600 '>GITHUB</p>
              <p className='text-sm text-gray-600'>TWITTER</p>
            </div>
            <div>
              <p className='text-gray-600'>@2025 CodeMap Architecture Code Intelligence</p>
            </div>
        </div>
    </div>
  )
}

export default Footer