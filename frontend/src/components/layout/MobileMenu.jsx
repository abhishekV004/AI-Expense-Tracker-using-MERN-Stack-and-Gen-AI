import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { FaMoneyBillWave,FaWallet,FaChartBar,FaRobot,FaCog } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router'
import { BsStack } from 'react-icons/bs'
import { HiDocumentChartBar } from 'react-icons/hi2'

function MobileMenu({isOpen,setIsOpen}) {
  const navigate=useNavigate()
    const menus=[
      {name:"Dashboard", path:'/dashboard', icon:<MdDashboard/>},
      {name:"Income", path:'/income', icon:<FaMoneyBillWave/>},
      {name:"Expenses", path:'/expense', icon:<FaWallet/>},
      {name:"Categories", path:'/categories', icon:<BsStack/>},
      {name:"Budgets", path:'/budgets', icon:<FaChartBar/>},
      {name:"Reports", path:'/reports', icon:<HiDocumentChartBar/>},
      {name:"Ai Advisor", path:'/ai-advisor', icon:<FaRobot/>},
      {name:"Settings", path:'/settings', icon:<FaCog/>}

    ]

  return (
    <>
      <div
      className={`fixed inset-0 bg-black/40 z-40 transition ${isOpen ? 'block' :'hidden'}`}
      onClick={()=>setIsOpen(false)}
      >

        <aside className={`fixed top-0 left-0 w-[260px] h-screen bg-white z-50 p-5 overflow-auto transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

          <div className='flex items-center justify-between mb-8'>
            <h1 className='text-2xl font-bold text-[#5b3df5] mb-10'>
              FinWise
            </h1>

            <button
            onClick={()=>setIsOpen(true)}
            // className='w-10 h-10 rounded-full border border-gray-100 flex lg:hidden items-center justify-center'
            >
            <FaTimes size={14}/>
            </button>
            </div>
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
          
        </aside>

      </div>
    </>
  )
}

export default MobileMenu