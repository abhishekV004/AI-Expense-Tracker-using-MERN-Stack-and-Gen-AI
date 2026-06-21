import React from "react";
import { FaWallet } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";
import { FaBullseye } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";

function FeaturesSection() {
  const features = [
    {
      icon:<FaWallet/>,
      title: "Track Every Income & Expense ",
      label:
        "Maintain a complete record of all your salary, freelancing, bills, shopping and daily spending transactions.",
    },

    {
      icon:<FaRobot/>,
      title: "AI Financial Advisory ",
      label:
        "Receive smart monthly analysis, saving opportunities, money waste alerts and AI generated budget suggestions.",
    },

    {
      icon:<FaChartLine/>,
      title: "Budget & Category Insights ",
      label:
        "Understand where you money goes with category wise spending, limits, overspending warnings and monthly control.",
    },

    {
      icon:<FaBullseye/>,
      title: "Financial Goals Tacking ",
      label:
        "Create saving goals for emergency fund, gadgets, vacations or investments and monitor your progress visually. ",
    },

    {
      icon:<BiSolidReport/>,
      title: "Professional Monthly Reports ",
      label:
        "Generate financial summaries with total income, total expense, net savings and monthly behavioral observations. ",
    },

    {
      icon:<RiStackFill/>,
      title: "Unified Financial Dashboard  ",
      label: "Everything from transactions to AI chat advisor stays in one responsive and centralized dashboard experience. ",
    },
  ];

  return (
    <>
      <section id="features" className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need For Smarter Money Control
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-8">
            FinWise AI combines expense management, savings discipline and
            intelligent AI analysis into easy dashboard.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            
            features.map((data, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              
              <div  className="w-12 h-12 bg-[#f4f1ff] text-[#5b3df5] flex items-center justify-center text-xl mb-5">
                {data.icon}
              </div>

              <h3 className="font-semibold text-lg mb-3">{data.title}</h3>
              <p className="text-gray-500 text-sm leading-7"> {data.label}</p>
            </div>
          ))
          
          }
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;
