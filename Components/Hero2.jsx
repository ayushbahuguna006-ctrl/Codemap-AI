import React from 'react'

function Hero2() {
  return (
    <div className='bg-[#15262f]/70 min-h-screen px-[4vw] py-[2.5vh]'>
      
      <div className='flex items-center -translate-y-10 md:-translate-y-7 justify-between mb-4'>
        <p className='text-blue-200 font-semibold text-sm md:text-lg'>
          ANALYSIS ENGINE
        </p>

        <div className='text-green-500/60 text-[10px] md:text-sm flex items-center gap-1'>
          <p>⚆</p>
          <p>KERNEL</p>
          <p>FEED</p>
        </div>
      </div>

      <div className='bg-[#0d1b2a] -translate-y-10 border md:-translate-y-7 border-white/10 border-t-2 border-t-green-500 rounded-md p-3 md:p-5'>
        
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex-1'>
            <p className='text-[10px] md:text-xs text-green-400 mb-2'>
              # PROCESS_ID: 8829
            </p>

            <p className='text-[10px] md:text-xs text-gray-400 mb-4 break-all'>
              # SOURCE: packages/react-reconciler/src/ReactFiberBeginWork.js
            </p>

            <div className='text-[10px] md:text-sm leading-6 text-blue-200 font-mono'>
              <p><span className='text-blue-300'>function</span> <span className='text-green-400'>beginWork</span>(current, workInProgress, renderLanes) {'{'}</p>
              <p className='text-gray-500 pl-3'>// AI Insight: Potential performance bottleneck in reconciliation logic</p>
              <p className='pl-3'><span className='text-blue-300'>const</span> updateLanes = workInProgress.lanes;</p>
              <p className='pl-3'><span className='text-blue-300'>if</span> (current !== <span className='text-green-400'>null</span>) {'{'}</p>
              <p className='pl-6'><span className='text-blue-300'>const</span> oldProps = current.memoizedProps;</p>
              <p className='pl-6'><span className='text-blue-300'>const</span> newProps = workInProgress.pendingProps;</p>
              <p className='pl-3'>{'}'}</p>
              <p>{'}'}</p>
            </div>
          </div>
          <div className='w-full md:w-[280px] flex flex-col gap-3'>
            <div className='bg-[#202b3c] rounded-md p-3'>
              <p className='text-gray-400 text-[10px] md:text-xs mb-1'>COMPLEXITY PATTERN</p>
              <p className='text-white text-lg md:text-xl font-semibold'>O(log n)</p>
            </div>

            <div className='bg-[#0bb07b] rounded-md p-3'>
              <p className='text-black text-[10px] md:text-xs mb-1 font-semibold'>SECURITY AUDIT</p>
              <p className='text-black text-sm md:text-base font-semibold'>No vulnerabilities detected</p>
            </div>

            <div className='bg-[#202b3c] rounded-md p-3'>
              <p className='text-gray-400 text-[10px] md:text-xs mb-1'>DEPENDENCY DEPTH</p>
              <p className='text-white text-lg md:text-xl font-semibold'>14 Layers</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero2