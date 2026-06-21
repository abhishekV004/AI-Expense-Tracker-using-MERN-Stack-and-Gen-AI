import React from "react";
import { FaChartPie , FaRobot } from "react-icons/fa";
import { PiPiggyBankFill } from "react-icons/pi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { Link } from "react-router";

function HeroSection() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">
        
        <div>
          
          <p className="text-sm uppercase tracking-[3px] text-[#5b3df5]">
            Smart Personal Finance Platform
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Track Money Smarter.Save Better With AI.
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-8 max-w-xl">
            FinWise AI helps you manage income, expenses, budgets, reports and
            financial goals while AI continuously analyzes your habits to
            uncover money waste and saving opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link to="/register" className="px-7 py-4 text-white bg-[#5b3df5] rounded-lg text-sm font-medium hover:bg-[#4c31db] transition cursor-pointer">
              Create Free Accounts ➜
            </Link>
            <button className="px-7 py-4 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-100 transition cursor-pointer">
              Explore Features
            </button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-medium">
            <span>✓ Income & Expense Tracking</span>
            <span>✓ AI Financial Advisory</span>
            <span>✓ Monthly Reports</span>
          </div>
        
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl border border-black p-6 shadow-sm hover:translate-y-1 transition">
              <FaChartPie className="text-[#5b3df5] text-2xl mb-4"/>
              <h3 className="font-semibold text-lg mb-2">Expense Analytics</h3>
              <p className="text-gray-500 text-sm">Visual spending category breakdown with charts.</p>
          </div>
          <div className="bg-white rounded-2xl border border-black p-6 shadow-sm hover:translate-y-1 transition">
              <PiPiggyBankFill className="text-[#5b3df5] text-2xl mb-4"/>
              <h3 className="font-semibold text-lg mb-2">Saving Planner</h3>
              <p className="text-gray-500 text-sm">Goal based monthly smart saving discipline.</p>
          </div>
          
          <div className="bg-white rounded-2xl border border-black p-6 shadow-sm hover:translate-y-1 transition">
              <FaRobot className="text-[#5b3df5] text-2xl mb-4"/>
              <h3 className="font-semibold text-lg mb-2">AI Insights</h3>
              <p className="text-gray-500 text-sm">AI detects money leakage and wasteful habits.</p>
          </div>
          <div className="bg-white rounded-2xl border border-black p-6 shadow-sm hover:translate-y-1 transition">
              <HiOutlineDocumentReport className="text-[#5b3df5] text-2xl mb-4"/>
              <h3 className="font-semibold text-lg mb-2">Monthly Reports</h3>
              <p className="text-gray-500 text-sm">Clear financial health summary every month.</p>
          </div>

        </div>
      
      </section>
    </>
  );
}

export default HeroSection;
