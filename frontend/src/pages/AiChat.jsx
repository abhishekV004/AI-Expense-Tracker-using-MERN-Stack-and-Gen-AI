import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { FaPaperPlane } from "react-icons/fa";

function AiChat() {
  return (
    <>
      <DashboardLayout title={"AI Chat Advisor"}>
        <div className="grid lg:grid-cols-12 gap-6 h-[calc(100vh-150px)] overflow-hidden">
          <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-100 p-6 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-5">
              Quick Financial Questions
            </h3>

            <div className="space-y-4">
              <button className="w-full text-left bg-[#f8f7ff] border border-[#ddd8ff] rounded-xl p-4 text-sm hover:bg-[#f1edff] transition">
                How can I save more money monthly?
              </button>
              <button className="w-full text-left bg-[#f8f7ff] border border-[#ddd8ff] rounded-xl p-4 text-sm hover:bg-[#f1edff] transition">
                Where am I wasting money?
              </button>
              <button className="w-full text-left bg-[#f8f7ff] border border-[#ddd8ff] rounded-xl p-4 text-sm hover:bg-[#f1edff] transition">
                Suggest a budget plan for ₹85,000 income.
              </button>
              <button className="w-full text-left bg-[#f8f7ff] border border-[#ddd8ff] rounded-xl p-4 text-sm hover:bg-[#f1edff] transition">
                How to control shopping expenses?
              </button>
            </div>
          </div>

          <div className="lg:col-span-8  bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden min-h-0">
            <div className="flex-1 min-h-0 overflow-y-auto p-6 space-y-5">
              <div
                className={`max-w-[80%] px-5 py-4 rounded-2xl text-sm leading-7 ml-auto bg-[#5b3df5] text-white `}
              >
                Hii
              </div>

              <div
                className={`max-w-[80%] px-5 py-4 rounded-2xl text-sm leading-7 a bg-gray-200 text-gray-700 `}
              >
                Hello Abhishek 🤟 I am your AI Financial Advisor. Ask me
                anything about savings, budgeting, money waste, expense planning
                or financial discipline.
              </div>
              <div
                className={`max-w-[80%] px-5 py-4 rounded-2xl text-sm leading-7 ml-auto bg-[#5b3df5] text-white `}
              >
                Explain my next month budget plant...
              </div>
              <div
                className={`max-w-[80%] px-5 py-4 rounded-2xl text-sm leading-7 a bg-gray-200 text-gray-700 `}
              >
                Hello Abhishek 🤟 I am your AI Financial Advisor. Ask me
                anything about savings, budgeting, money waste, expense planning
                or financial discipline.
              </div>
              <div
                className={`max-w-[80%] px-5 py-4 rounded-2xl text-sm leading-7 ml-auto bg-[#5b3df5] text-white `}
              >
                Explain my next month budget plant...
              </div>
              <div
                className={`max-w-[80%] px-5 py-4 rounded-2xl text-sm leading-7 a bg-gray-200 text-gray-700 `}
              >
                Hello Abhishek 🤟 I am your AI Financial Advisor. Ask me
                anything about savings, budgeting, money waste, expense planning
                or financial discipline.
              </div>
              <div
                className={`max-w-[80%] px-5 py-4 rounded-2xl text-sm leading-7 ml-auto bg-[#5b3df5] text-white `}
              >
                Explain my next month budget plant...
              </div>
            </div>

            <div className="border-t border-gray-100 p-4 flex items-center gap-4 shrink-0">
              <input
                type="text"
                placeholder="Ask your financial question..."
                className="flex-1 border border-gray-100 rounded-xl px-4 py-3 outline-none"
              />

              <button className="w-12 h-12 rounded-xl bg-[#5b3df5] text-white flex items-center justify-center shrink-0 cursor-pointer">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
export default AiChat;
