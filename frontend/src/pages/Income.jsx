import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";

function Income() {
    const transactions = [
    {
      title: "Salary Credited",
      amount: "50,000",
      date: "01 May 2026",
    },
    {
      title: "Freelance Project",
      amount: "20,500",
      date: "05 May 2026",
    },
    {
      title: "Affiliate Income",
      amount: "8,000",
      date: "08 May 2026",
    },
    {
      title: "Part Time Work",
      amount: "10,000",
      date: "10 May 2026",
    },
  ];

  return (
    <>
      <DashboardLayout title={"Income"}>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-6">Add New Income</h3>

              <form action="" className="space-y-5">
                <div>
                  <label htmlFor="" className="text-sm font-medium mb-2 block">
                    Income Source
                  </label>

                  <input
                    type="text"
                    placeholder="Salary / Freelancing / Business"
                    className="w-full border border-gray-300 rouned-xl px-4 py-3 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm font-medium mb-2 block">
                    Amount
                  </label>

                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full border border-gray-300 rouned-xl px-4 py-3 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm font-medium mb-2 block">
                    Full Name
                  </label>

                  <input
                    type="date"
                    placeholder="dd/mm/yyy"
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
                  Save Income
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold mb-6">Income Summary</h3>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-3  ">
                  <span className="text-gray-500">This Month Income</span>
                  <span className="font-semibold text-green-600">₹85,000</span>
                </div>

                <div className="flex justify-between border-b border-gray-100 pb-3  ">
                  <span className="text-gray-500">Highest Source</span>
                  <span className="font-semibold">Salary</span>
                </div>

                <div className="flex justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500">Entries Added</span>
                  <span className="font-semibold">4</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold text-lg mb-6">Recent Income History</h3>
                <p className="text-sm text-[#5b3df5] font-medium ">View All</p>
              </div>

              <div className="space-y-4">
                {transactions.map((item, index) => (
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4  last:border-0">
                    <div>
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                    </div>

                    <div className="text-right">
                      <p
                        className={`font-semibold  text-sm
                   text-green-600 `}
                            
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

export default Income;
