"use client"


import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

function Hero1() {
const imageRef = useRef(null)
 const words = ["Structure", "Flow","Control"]

const [wordIndex, setWordIndex] = useState(0)
const [text, setText] = useState("")
const [isDeleting, setIsDeleting] = useState(false)

useEffect(() => {
  const currentWord = words[wordIndex]
  const speed = isDeleting ? 100 : 150
  

  const timeout = setTimeout(() => {
    if (!isDeleting) {
      setText(currentWord.slice(0, text.length + 1))

      if (text.length + 1 === currentWord.length) {
        setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      setText(currentWord.slice(0, text.length - 1))

      if (text.length === 1) {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }
  }, speed)
  

  return () => clearTimeout(timeout)
}, [text, isDeleting, wordIndex])

  return (
    <div className='h-fit overflow-hidden md:flex justify-between md:pt-[20vh] pt-[7vh] md:px-[10vw] px-5 bg-black'>

      <div className='w-full flex-col md:-translate-y-10 max-w-lg md:max-w-xl md:ml-4 ml-0'>
        

        <div className='text-3xl md:text-5xl flex flex-col'>
          <p className='text-blue-200 font-semibold text-center md:text-start'>
            ARCHITECTURAL
          </p>

          <p className='text-green-400 font-semibold text-center md:text-start'>
            INTELLIGENCE
          </p>
        </div>
         <div className='md:mt-7 md:pl-1 mt-5 text-2xl text-center md:text-start text-white'>
          <p>
            Analyse any repo with <span className='text-blue-500'>{text}</span>
            <span className='animate-pulse'>|</span>
          </p>
        </div>

        <div className='text-gray-300 md:text-start text-center md:pl-1 text-xs md:text-sm mt-5'>
          <p>Navigate deep respository structures with high-</p>
          <p>
            fidelity mapping and AI driven pattern recognition.
            The future of code analysis is synthetic.
          </p>
        </div>

        <div className='md:mt-11 mt-10 pr-0 md:pr-5 flex w-full max-w-full'>
          <input
            type="text"
            className='border md:text-base text-white/50 text-base bg-gray-500/20 md:pl-5 border-gray-500/20 outline-none md:h-[6vh] md:w-[30vw] h-[6vh] w-full rounded-l-sm p-3'
            placeholder='🔗 https://github.com/facebook/react'
          />

          <button className='border-l font-medium rounded-r-sm text-sm border-gray-500/10 text-yellow-100 bg-gradient-to-b from-blue-400 to-blue-600 md:px-2 px-3 cursor-pointer whitespace-nowrap'>
            Analyse⚡
          </button>
        </div>
        <div className="mt-10 flex custom-scrollbar w-full md:w-[600px] pl-1 md:pl-2 border border-gray-300/30  pt-4 rounded-xl overflow-x-scroll">
  <div className="flex gap-4 w-max px-1 pb-4">

    <div className="w-[260px] flex-shrink-0 rounded-xl border border-white/10 bg-gray-500/10 p-4">
      <p className="text-green-400 font-semibold text-sm">Entry Point</p>
      <p className="text-xs text-gray-400 mt-2">
        Detects main files like index.js, main.py, app.jsx.
      </p>
    </div>

    <div className="w-[260px] flex-shrink-0 rounded-xl border border-white/10 bg-gray-500/10 p-4">
      <p className="text-blue-300 font-semibold text-sm">File Mapping</p>
      <p className="text-xs text-gray-400 mt-2">
        Shows project structure like VS Code file tree.
      </p>
    </div>

    <div className="w-[260px] flex-shrink-0 rounded-xl border border-white/10 bg-gray-500/10 p-4">
      <p className="text-yellow-300 font-semibold text-sm">AI Summary</p>
      <p className="text-xs text-gray-400 mt-2">
        Explains folders, components and architecture.
      </p>
    </div>

  </div>
</div>


      </div>
      

      <div ref={imageRef} className='mt-10  md:mt-0 text-center md:max-w-md md:mr-4 w-full md:w-auto mx-auto'>
        <img
          src="/space.gif"
          className='rounded-xl border border-black md:-mt-7 max-w-full block mx-auto md:h-[450px] md:w-auto object-contain'
          alt="rocket-img"
        />

        {/* <div className='h-[4vh] hover:text-black rounded-full bg-gray-500/20 flex items-center justify-center w-full'>
          <p className='text-xs text-gray-400'>
            READING DOCS MADE EASY
          </p>
        </div> */}

        <div className='md:h-[23vh] h-[10vh]'></div>
      </div>
      

    </div>
  )
}

export default Hero1