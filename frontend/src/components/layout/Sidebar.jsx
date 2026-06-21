import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaMoneyBillWave,FaWallet,FaChartBar,FaRobot,FaCog } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router'
import { BsStack } from 'react-icons/bs'
import { HiDocumentChartBar } from 'react-icons/hi2'


function Sidebar() {

    const navigate=useNavigate()
    const menus=[
      {name:"Dashboard", path:'/dashboard', icon:<MdDashboard/>},
      {name:"Income", path:'/income', icon:<FaMoneyBillWave/>},
      {name:"Expenses", path:'/expense', icon:<FaWallet/>},
      {name:"Categories", path:'/categories', icon:<BsStack/>},
      {name:"Budgets", path:'/budgets', icon:<FaChartBar/>},
      {name:"Reports", path:'/reports', icon:<HiDocumentChartBar/>},
      {name:"Ai Advisor", path:'/ai-advisor', icon:<FaRobot/>},
      {name:"Settings", path:'/setting', icon:<FaCog/>}

    ]
  return (
    <>
        <aside className='w-[250px] bg-white border-r border-gray-100 h-screen fixed top-0 px-5 py-6 hidden lg:block overflow-y-auto'>

            <h1 className='text-2xl font-bold text-[#5b3df5] mb-10'>
              FinWise
            </h1>

            <div className='flex flex-col gap-2'>
                {
                  menus.map((item,index )=>(
                      <NavLink 
                      key={index}
                      to={item.path}
                      className={({ isActive })=>`
                      flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-[#5b3df5] text-white' : 'text-gray-600 hover:bg-gray-100'}
                      `}>
                      {item.icon} {item.name}
                    </NavLink>
                  ))
                }
            </div>
                <div className='mt-12 bg-[#f8f7ff] border border-[#ddd8ff] rounded-2xl p-4'>
                  <p className='text-sm font-semibold mb-2'>Your AI Financial Assistant</p>
                  <p className='text-xs text-gray-500 mb-4 '>Get smart monthly insights and improve your saving habits.</p>
                  <button className='w-full bg-[#5b3df5] text-white py-2 rounded-lg text-sm cursor-pointer'>Ask AI Advisor</button>
                </div>
        </aside>
    </>
  )
}

export default Sidebar