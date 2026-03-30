import React from 'react'

function Hero2() {
    return (
        <div className='bg-[#15263f]/70 min-h-screen flex justify-between items-start px-[3vw] py-[5vh]'>
            <div className='text-blue-200 font-semibold text-sm md:text-xl flex flex-col max-w-[60vw]'>
                <p className='pl-[2vw]'>ANALYSIS ENGINE</p>
                <div className='  bg-[#15263f]/70 h-[50vh] w-[90vw] mt-5 border-t-2 rounded-md border-t-green-500'>
                    <div className=''>

                    </div>
                </div>
            </div>
            <div className='text-green-500/50 text-xs md:text-sm flex items-center gap-1 pr-[5vw] flex-shrink-0'>
                <p>⚆</p>
                <p>KERNEL</p>
                <p>FEED</p>
            </div>
        </div>
    )
}

export default Hero2