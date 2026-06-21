import React from 'react'
import { Link } from 'react-router'

function Register() {
  return (
  <>
        <div className='min-h-screen bg-[#f6f7fb] flex items-center justify-center px-5 py-10'>
            <div className='max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center'>
                
                <div className='hidden lg:block'>
                    <h1 className='text-5xl font-bold leading-tight mb-6'> Build Better Financial Habits Starting Today.</h1>
                    <p className='text-gray-500 text-lg leading-8 max-w-xl '>Create your free account to start monitoring income, expenses, budgets, goals and AI-based financial recommendations.</p>
                </div>
                
                <div className='max-w-md w-full mx-auto'>
                    <div className='w-full bg-white border border-gray-100 rounded-2xl p-8 shadow-sm'>
                        <h2 className='text-3xl font-bold mb-2'>Create Account</h2>
                        <p className='text-gray-500 text-lg leading-8 max-w-xl mb-8'>Starting tracking your money smarter with AI assistance.</p>
                    
                        <form action="" className='space-y-5'>
                      
                        <div>
                            <label htmlFor='' className='text-sm font-medium mb-2 block'>Full Name </label>
                            <input type='text' placeholder='Enter your name' className='w-full border border-gray-300 roudned-xl px-4 py-3 outline-none'/>    
                        </div>

                        <div>
                            <label htmlFor='' className='text-sm font-medium mb-2 block'>Email Address</label>
                            <input type='email' placeholder='Enter your email' className='w-full border border-gray-300 roudned-xl px-4 py-3 outline-none'/>    
                        </div>

                        <div>
                            <label htmlFor='' className='text-sm font-medium mb-2 block'>Password</label>
                            <input type='password' placeholder='Enter your password' className='w-full border border-gray-300 roudned-xl px-4 py-3 outline-none'/>
                        </div>

                        <div>
                            <label htmlFor='' className='text-sm font-medium mb-2 block'>Confirm Password</label>
                            <input type='password' placeholder='Confirm password' className='w-full border border-gray-300 roudned-xl px-4 py-3 outline-none'/>
                        </div>

                        <button className='w-full bg-[#5b3df5] text-white py-3 rounded-xl font-medium hover:bg-[#4c31db] transition cursor-pointer '>
                         Create Account
                        </button>

                        <p className='text-gray-500 text-sm mt-6 text-center '>Already have an account? 
                        <Link to="/login" className='text-[#5b3df5]'> Login</Link>
                        </p>
                        
                        </form>
                    </div>

                </div>
            
            </div>
        </div>
    </>
  )
}

export default Register