import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { FaEdit, FaMoneyBillWave, FaShoppingBag } from "react-icons/fa";
import { MdDelete, MdEmojiTransportation } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";

function Categories() {
  const data = [
    {
      name: "Food & Dining",
      type: "Expense",
      limit: "10,000",
      icon: <IoFastFoodSharp />,
    },
    {
      name: "Transport",
      type: "Expense",
      limit: "5,000",
      icon: <MdEmojiTransportation />,
    },
    {
      name: "Shopping",
      type: "Expense",
      limit: "8,000",
      icon: <FaShoppingBag />,
    },
    {
      name: "Housing",
      type: "Expense",
      limit: "20,000",
      icon: <FaHouseChimney />,
    },
    {
      name: "Entertainment",
      type: "Expense",
      limit: "4,000",
      icon: <MdLocalMovies />,
    },
    { name: "Salary", type: "Income", limit: "", icon: <FaMoneyBillWave /> },
  ];

  return (
    <>
      <DashboardLayout title={"Category"}>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-6">Add New Category</h3>

              <form action="" className="space-y-5">
                <div>
                  <label htmlFor="" className="text-sm font-medium mb-2 block">
                    Category Name
                  </label>

                  <input
                    type="text"
                    placeholder="Food / Transport / Bills"
                    className="w-full border border-gray-300 rouned-xl px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="" className="text-sm font-medium mb-2 block">
                    Expense Category
                  </label>

                  <select
                    name=""
                    id=""
                    className="w-full border border-gray-300 rounded-xl px-3 py-4 outline-none"
                  >
                    <option value="">Income</option>
                    <option value="">Budget</option>
                    <option value="">Expense</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="text-sm font-medium mb-2 block">
                    Monthly Limit (Optional)
                  </label>

                  <input
                    type="number"
                    placeholder="Enter monthly budget limit"
                    className="w-full border border-gray-300 rouned-xl px-4 py-3 outline-none"
                  />
                </div>

                <button className="w-full bg-[#5b3df5] text-white py-3 rounded-xl font-medium hover:bg-[#4c31db] transition cursor-pointer">
                  Save Category
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Manage Category</h3>
                <p className="text-sm text-gray-500">{data.length} categories</p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {
                  data.map((item, index) => (
                  <div  key={item} className="border border-gray-300 rounded-2xl p-5">
                    
                    <div className="flex items-center justify-between mb-4">
                      
                      <div className="w-11 h-11 rounded-xl bg-[#f4f1ff] text-[#5b3df5] flex items-center justify-center">
                        {item.icon}
                      </div>

                      <div className="flex gap-3 text-gray-500">
                       
                        <button>
                          <FaEdit />
                        </button>
                        
                        <button>
                          <MdDelete />
                        </button>
                      
                      </div>
                    
                    </div>

                    <h4 className="font-semibold mb-2">{item.name}</h4>
                    <p className="text-gray-500">Type: {item.type}</p>
                    <p className="text-gray-500">Monthly Limit: ₹{item.limit}</p>
                  </div>
                ))
                }

              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default Categories;
