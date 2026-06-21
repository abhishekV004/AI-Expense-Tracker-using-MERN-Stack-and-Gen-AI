import React from "react";
import { Link } from "react-router";

function  Header() {
  return (
    <>
      <header className="w-full bg-white border-b  border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
         
          <h1 className="text-2xl font-bold text-[#5b3df5]">FinWise AI</h1>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-00">
            <a href="features" className="hover:text-[#5b3df5]">
              Features
            </a>
            <a href="howitworks" className="hover:text-[#5b3df5]">
              How It Works
            </a>
            <a href="aiadvisor" className="hover:text-[#5b3df5]">
              Ai Advisor
            </a>
            <a href="reviews" className="hover:text-[#5b3df5]">
              Reviews
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link  to="/login" className="px-5 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-100 transition cursor-pointer">
              Login
            </Link>
            <Link to="/register" className="px-5 py-2 text-white bg-[#5b3df5] rounded-xl text-sm font-medium hover:bg-[#4c31db] transition cursor-pointer">
              Get Started
            </Link>
          </div>

        </div>
      </header>
    </>
  );
}

export default Header;
