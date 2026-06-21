import React,{useState} from 'react'
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu'
import Topbar from './Topbar';

function DashboardLayout({title , children}) {
    
    const [isOpen,setIsOpen]=useState(false);

    return (
    <>
        <div className='w-full h-screen bg-[#f6f7fb] overflow-hidden'>
            <Sidebar/>
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            <main className='lg:ml-[250px] h-screen overflow-y-auto p-4 sm:p-6 lg:p-8'>
                <Topbar title={title} setIsOpen={setIsOpen}/>
                {children}
            </main>
        </div>
    </>
  )
}

export default DashboardLayout