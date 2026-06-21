import React from 'react'
import { FaArrowDown, FaArrowUp, FaPiggyBank, FaWallet } from 'react-icons/fa'

function SummaryCards() {
  const summary=[
    {
      title:"Total Balance",
      amt:"42,350", 
      change:"+8.2% this month",
      icon:<FaWallet/>,
      bg:"bg-[#f4f1ff]",
      txt:"text-[#5b3df5]",
    },
    {
      title:"Total Income",
      amt:"85,000", 
      change:"+12.4% this month",
      icon:<FaArrowUp/>,
      bg:"bg-green-50",
      txt:"text-[#00a63d]",
    },
    {
      title:"Total Expenses",
      amt:"42,650", 
      change:"+5.1% this month",
      icon:<FaArrowDown/>,
      bg:"bg-red-50",
      txt:"text-red-500",
    },
    {
      title:"Net Savings",
      amt:"42,350", 
      change:"+49.8% saved",
      icon:<FaPiggyBank/>,
      bg:"bg-blue-50",
      txt:"text-blue-500",
    },
  ]

  return (
    <>
      <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6'>
          {
              summary.map((item,index)=>(
                
              <div key={index} className='bg-white rounded-2xl border border-gray-100  p-5 shadow-sm  hover:shadow-md  hover:-translate-y-1 transition'>

              <div  className='flex items-center justify-between mb-5'>

                  <div>
                    <p className='text-sm text-gray-500 mb-2'>{item.title}</p>
                    <h3 className='text-2xl font-bold'>₹{item.amt}</h3>
                  </div>
                  <div className={`w-11 h-11 rounded-xl  ${item.bg} ${item.txt} flex items-center justify-center`}>
                      {item.icon}
                  </div>
              </div>
              <p className={`text-sm ${item.txt} font-medium`}>{item.change} </p>

          </div>
              ))
          }

      </div>
    </>
  )
}

export default SummaryCards




