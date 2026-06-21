import React from "react";
import { FaRobot } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

function AiHighlight() {
  const box = [
    "AI scans monthly expenses and finds unusual spending patterns.",
    "Detects subscriptions, impulse shopping and recurring money leaks.",
    "Builds a practical category wise budget recommendation.",
    "Lets user directly chat and ask personalized financial questions.",
  ];


  return (
    <>
      <section id="aiadvisor" className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#f4f1ff] text-[#5b3df5] flex items-center justify-center text-xl mb-5">
              <FaRobot />
            </div>
            <div className="mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                Not Just An Expense Tracker - A Real AI Financial Assistant{" "}
              </h2>

              <p className="text-gray-500 max-w-2xl mx-auto leading-8">
                FinWise AI continously analyzes your financial behaviour and
                gives practical money management suggestions instead of generic
                charts alone.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {box.map((data, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-4 text-sm text-gray-700"
                >
                  {data}
                </div>
              ))}
            </div>

            <button className="px-7 py-4 text-white bg-[#5b3df5] rounded-lg text-sm font-medium hover:bg-[#4c31db] transition cursor-pointer">
              Experience AI Finance Planning ➜
            </button>
          </div>


          <div className="grid grid-cols-2 gap-5">
            
            <div className="bg-white rounded-2xl border border-black p-6 shadow-sm hover:translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2">AI Spending Analysis </h3>
              <p className="text-gray-500 text-sm">
                AI identifies top categories rising expenses and unstable spending patterns.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-black p-6 shadow-sm hover:translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2">Money Waste Detection </h3>
              <p className="text-gray-500 text-sm">
                Recurring subscriptions and hidden small leakages are automatically highlighted.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-black p-6 shadow-sm hover:translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2">Budget Recommendation</h3>
              <p className="text-gray-500 text-sm">
                AI creates a safer monthly allocation model based on real usage behaviour.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-black p-6 shadow-sm hover:translate-y-1 transition">  
              <h3 className="font-semibold text-lg mb-2">AI Chat Advisor</h3>
              <p className="text-gray-500 text-sm">
                Users can ask direct questions related to debt, saving, spending and discipline.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default AiHighlight;
