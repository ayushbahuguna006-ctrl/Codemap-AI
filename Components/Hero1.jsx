import React from 'react'


function Hero1() {
  return (
    <div className='h-fit md:flex justify-around md:pt-[20vh] pt-[10vh] pl-[3vw] bg-gradient-to-b from-[#0F162A] to-[#15263f]/70'>
      <div>
        <div className='text-3xl md:text-5xl flex flex-col'>
            <p className='text-blue-200 font-semibold text-center md:text-start'>ARCHITECTURAL</p>
            <p className='text-green-400 font-semibold text-center md:text-start'>INTELLIGENCE</p>
        </div>
        <div className='text-gray-300 text-center md:text-start mt-5 mr-2'>
          <p>Navigate deep respository structures with high-</p>
          <p>fidelity mapping and AI driven pattern recognition.</p>
          <p>The future of code analysis is synthetic.</p>
        </div>
        <div className='mt-10 mr-5 flex'>
            <input type="text" className='border bg-gray-500/20 border-gray-500/20 outline-none md:h-[7vh] md:w-[25vw] h-[7vh] w-[70vw] rounded-sm p-3' placeholder='🔗      https://github.com/facebook/react' />
            <button className='border font-medium rounded-r-sm text-sm border-black/20 text-black bg-gradient-to-b from-blue-400 to-blue-600 md:px-2 px-1  cursor-pointer'>Analyse⚡</button>
        </div>
      </div>
      <div className='mt-10 md:mt-0 text-center mr-3'>
        <img src="./rocket.webp" className='rounded-xl border border-white/20 md:-mt-10' alt="rocket-img" />
        <div className='h-[7vh] rounded-xl bg-gray-500/20 flex items-center justify-center'>
            <p className='text-xs text-gray-400'>READING DOCS MADE EASY</p>
        </div>
        <div className='md:h-[23vh] h-[10vh]'>

        </div>
      </div>
    </div>
  )
}

export default Hero1