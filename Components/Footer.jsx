import React from 'react'

function Footer() {
  return (
    <div>
        <div className='flex md:flex-row flex-col items-center gap-5 -translate-y-14 md:justify-around bg-[#031033]/60 min-h-screen'>
            <div className='flex-col'>
              <p className='text-blue-200'>CODEWIKI</p>
              <p>ENGINE-4.0 STABLE</p>
            </div>
            <div className='flex md:flex-row flex-col gap-5'>
              <p>DOCUMENTATION</p>
              <p>PRIVACY</p>
              <p>GITHUB</p>
              <p>TWITTER</p>
            </div>
            <div>
              <p>@2025 CodeMap Architecture Code Intelligence</p>
            </div>
        </div>
    </div>
  )
}

export default Footer