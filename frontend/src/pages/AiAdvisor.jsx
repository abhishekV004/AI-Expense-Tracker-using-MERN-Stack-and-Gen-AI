import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { FaArrowRight, FaEdit, FaRobot } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function AiAdvisor() {
  const navigate = useNavigate();
  const category = [
    { title: "Housing", bal: "20,000" },
    { title: "Food & Dining", bal: "8,000" },
    { title: "Shopping", bal: "5,000" },
    { title: "Transport", bal: "5,000" },
    { title: "Entertainment", bal: "3,000" },
  ];
  return (
    <>
      <DashboardLayout title={"AI Financial Advisor"}>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center mb-4 gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#f4f1ff] text-[#5b3df5] flex items-center justify-center">
                  <FaRobot />
                </div>
                <h3 className="text-xl font-semibold">
                  AI Monthly Financial Analysis Ready
                </h3>
              </div>

              <p className="text-gray-500 leading-7 max-w-3xl">
                Personalized financial observations generated after scanning
                your monthly income, expenses, recurring patterns and saving
                behavior.
              </p>
            </div>

            <button
              className="px-7 py-4 bg-[#5b3df5] text-white rounded-lg text-sm font-medium hover:bg-[#4c31db] transition cursor-pointer flex items-center gap-4 mx-auto "
              onClick={() => navigate("/ai-chat")}
            >
              Chat With AI Advisor <FaArrowRight />
            </button>
          </div>

          <div className="bg-[#f8f7ff] rounded-2xl border border-[#ddd8ff] p-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center mb-4 gap-3">
                <h3 className="text-xl font-semibold">AI Executive Summary</h3>
              </div>

              <p className="text-gray-500 leading-7 ">
                Your monthly finances are stable overall, but AI detected rising
                shopping frequency,recurring entertainment subscriptions and
                slightly elevated food delivery spending. This is a clear
                opportunity to improve your monthly savings by restructuring
                category limits .
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-lg mb-5">
                Spending Pattern Analysis
              </h3>

              <div className="space-y-4">
                <div className="border border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  Housing remained the highest spending category this month.
                </div>
                <div className="border border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  Food & Dining consumed nearly 20% of total expenses.
                </div>
                <div className="border border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  Shopping increased by 12% compared to previous month.
                </div>
                <div className="border border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  Transport spending stayed within controlled budget.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-lg mb-5">
                Smart Saving opportunities
              </h3>
              <div className="space-y-4">
                <div className="border bg-[#f8f7ff] border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  Reduce food delivery orders by ₹2,000 monthly.
                </div>
                <div className="border bg-[#f8f7ff] border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  Pause or remove 2 low-value subscriptions.
                </div>
                <div className="border  bg-[#f8f7ff] border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  Move fixed 15% salary directly to savings.
                </div>
                <div className="border  bg-[#f8f7ff] border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  Set weekly shopping spending cap.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-lg mb-5">
                Money Waste Detected
              </h3>
              <div className="space-y-4">
                <div className="border bg-[#faece0fb] border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  3 recurring subscriptions costing ₹1,200 detected.
                </div>
                <div className="border bg-[#faece0fb] border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  Frequent impulse UPI shopping payments noticed.
                </div>
                <div className="border  bg-[#faece0fb] border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  Weekend entertainment exceeded usual pattern.
                </div>
                <div className="border  bg-[#faece0fb] border-gray-100 rounded-xl p-4 text-sm text-gray-700">
                  Small repeated cash withdrawals indicate leakage.
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-lg mb-5">
                Recommended Next Month Budget
              </h3>

              <div className="space-y-4">
                {category.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
                  >
                    <span className="">{item.title}</span>
                    <span className="font-semibold">₹{item.bal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 lg:px-10 pb-10">
            <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
              <div className="text-center mb-4 ">
                <h2 className="text-2xl font-bold mb-4">
                  Need More Personalized Answers?
                </h2>
                <p>
                  Ask custom questions related to debt control, spending habits,
                  subscriptions, savings or monthly planning.
                </p>
              </div>

              <button
                className="px-7 py-4 bg-[#5b3df5] text-white rounded-lg text-sm font-medium hover:bg-[#4c31db] transition cursor-pointer flex items-center gap-4 mx-auto"
                onClick={() => navigate("/ai-chat")}
              >
                Open Ai Chat Advisor
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default AiAdvisor;
