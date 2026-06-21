import React from "react";
import { MdCategory } from "react-icons/md";

function RecentTransactions() {
  const transactions = [
    {
      title: "Salary Credited",
      category: "Income",
      amount: "50,000",
      type: "credit",
      date: "03 may",
    },
    {
      title: "Grocery Shopping",
      category: "Food",
      amount: "2300",
      type: "expense",
      date: "05 may",
    },
    {
      title: "Petrol",
      category: "Transport",
      amount: "1500",
      type: "expense",
      date: "06 may",
    },
    {
      title: "Netflix Subscription",
      category: "Entertainment",
      amount: "499",
      type: "expense",
      date: "06 may",
    },
    {
      title: "Freelance Payment",
      category: "Income",
      amount: "15000",
      type: "credit",
      date: "07 may",
    },
  ];
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 p-5 h-full">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold">Recent Transactions</h3>
          <p className="text-sm text-[#5b3df5] font-medium ">View All</p>
        </div>


        <div className="space-y-4">
          {transactions.map((item, index) => (
            <div
              className="flex items-center justify-between border-b border-gray-100 pb-4  last:border-0"
            >
              <div>
                <h4 className="font-medium text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.category}</p>
              </div>

              <div className="text-right">
                <p
                  className={`font-semibold  text-sm
                  ${item.type == "credit" ? "text-green-600" : "text-red-500"}
                            `}
                >
                  {item.type=='credit' ? '+' :'-'} ₹{item.amount}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecentTransactions;
