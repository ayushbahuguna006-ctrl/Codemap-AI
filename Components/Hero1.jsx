"use client"

import React, { useEffect, useState } from 'react'

function Hero1() {

 const words = ["Ease", "Comfort"]

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
    <div className='h-fit overflow-x-hidden md:flex justify-between md:pt-[20vh] pt-[10vh] md:px-[10vw] px-5 bg-gradient-to-b from-[#0F162A] to-[#15262f]/70'>

      <div className='w-full md:-translate-y-10 max-w-lg md:max-w-xl md:ml-4 ml-0'>
        

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

        <div className='md:mt-14 mt-10 pr-0 md:pr-5 flex w-full max-w-full'>
          <input
            type="text"
            className='border md:text-base text-blue-300 text-base bg-gray-500/20 md:pl-5 border-gray-500/20 outline-none md:h-[6vh] md:w-[25vw] h-[6vh] w-full rounded-l-sm p-3'
            placeholder='🔗 https://github.com/facebook/react'
          />

          <button className='border-l font-medium rounded-r-sm text-sm border-gray-500/10 text-yellow-100 bg-gradient-to-b from-blue-400 to-blue-600 md:px-2 px-3 cursor-pointer whitespace-nowrap'>
            Analyse⚡
          </button>
        </div>

      </div>

      <div className='mt-10 md:-translate-y-10 md:mt-0 text-center md:max-w-md md:mr-4 w-full md:w-auto mx-auto'>
        <img
          src="/rocket.webp"
          className='rounded-xl border border-white/20 md:-mt-7 max-w-full block mx-auto'
          alt="rocket-img"
        />

        <div className='h-[5vh] hover:text-black rounded-xl bg-gray-500/20 flex items-center justify-center w-full'>
          <p className='text-xs text-gray-400'>
            READING DOCS MADE EASY
          </p>
        </div>

        <div className='md:h-[23vh] h-[10vh]'></div>
      </div>

    </div>
  )
}

export default Hero1