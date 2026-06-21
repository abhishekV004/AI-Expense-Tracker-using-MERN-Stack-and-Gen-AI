import React from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'

function Expense() {
     const transactions = [
    {
      title: "Grocery Shopping",
      amount: "2,300",
      category: "Food ",
      date: "01 May 2026",
    },
    {
      title: "Petrol",
      amount: "1,500",
      category: "Transport ",
      date: "05 May 2026",
    },
    {
      title: "Netflix Subscriptions",
      amount: "499",
      category: "Entertainment ",
      date: "06 May 2026",
    },
    {
      title: "Online Shopping",
      amount: "3,300",
      category: "Shopping ",
      date: "08 May 2026",
    },
  ];


  return (

    <>
      <DashboardLayout title={"Expense"}>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-6">Add New Expense</h3>

              <form action="" className="space-y-5">
                <div>
                  <label htmlFor="" className="text-sm font-medium mb-2 block">
                    Expense Title
                  </label>

                  <input
                    type="text"
                    placeholder="Groceries / Rent / Petrol"
                    className="w-full border border-gray-300 rouned-xl px-4 py-3 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm font-medium mb-2 block">
                    Amount
                  </label>

                  <input
                    type="number"
                    placeholder="Enter expense amount"
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
                    <option value="">Food & Dining</option>
                    <option value="">Transportation</option>
                    <option value="">Entertainment</option>
                    <option value="">Shopping</option>
                    <option value="">Housing</option>
                    <option value="">Utilities</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="" className="text-sm font-medium mb-2 block">
                   Date
                  </label>

                  <input
                    type="date"
                    className="w-full border border-gray-300 rouned-xl px-4 py-3 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm font-medium mb-2 block">
                    Payment Method
                  </label>

                  <select
                    name=""
                    id=""
                    className="w-full border border-gray-300 rounded-xl px-3 py-4 outline-none"
                  >
                    <option value="">Bank Transfer</option>
                    <option value="">UPI</option>
                    <option value="">Cash</option>
                    <option value="">Cheque</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="" className="text-sm font-medium mb-2 block">
                    Notes
                  </label>

                  <textarea
                    name=""
                    id=""
                    placeholder="Additional note ... "
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none"
                    cols={75}
                    rows={5}
                  ></textarea>
                </div>
                <button className="w-full bg-[#5b3df5] text-white py-3 rounded-xl font-medium hover:bg-[#4c31db] transition cursor-pointer">
                  Save Expense
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-6">Expense Summary</h3>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-3  ">
                  <span className="text-gray-500">This Month Expense</span>
                  <span className="font-semibold text-red-600">₹42,000</span>
                </div>

                <div className="flex justify-between border-b border-gray-100 pb-3  ">
                  <span className="text-gray-500">Top Category</span>
                  <span className="font-semibold">Housing</span>
                </div>

                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500">Entries Added</span>
                  <span className="font-semibold">12</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-lg mb-6">Recent ExpenseHistory</h3>
                <p className="text-sm text-[#5b3df5] font-medium ">View All</p>
              </div>

              <div className="space-y-4">
                {transactions.map((item, index) => (
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4  last:border-0">
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.category} • {item.date}</p>
                      
                    </div>

                    <div className="text-right">
                      <p
                        className={`font-semibold  text-sm
                   text-red-600 `}
                            
                      >
                       ₹{item.amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
  
}

export default Expense