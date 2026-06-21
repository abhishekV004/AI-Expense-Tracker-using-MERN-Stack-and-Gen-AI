import React from 'react'
import { FaRobot } from 'react-icons/fa'

function AiPreviewCard() {
  return (
    <>
    <div className='bg-white rounded-2xl border border-gray-100 p-5 h-full'>
        <div className={`w-11 h-11 rounded-xl  flex items-center justify-center
         bg-[#f4f1ff]
         text-[#5b3df5]
         `}>
            <FaRobot/>
        </div>

        <h3 className='font-semibold mb-5'>AI Quick Insight</h3>
            <div className='space-y-3 mb-5'>
                <div className='bg-[#f8f7ff] border border-[#ddd8ff] rounded-xl p-3 text-sm text-gray-700'>
                    Shopping expenses  are rising  faster than average. 
                </div>
                <div className='bg-red-50 border border-red-100 rounded-xl p-3 text-sm text-gray-700'>
                    3 recurring subscriptions detected this month. 
                </div>
                <div className='bg-green-50 border border-green-100 rounded-xl p-3 text-sm text-gray-700'>
                    Potential monthly saving opportunity: ₹3,500. 
                </div>

            </div>

            <button className='w-full bg-[#5b3df5] text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2'>
                View Full Advisory →

            </button>
    
    
    </div>

    </>
  )
}

export default AiPreviewCard