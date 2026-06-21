import React from "react";
import { Cell, ResponsiveContainer, Pie, PieChart } from "recharts";

function ExpenseChart() {
  const data = [
    { name: "Housing", value: 15000 },
    { name: "Food and Drink", value: 15000 },
    { name: "Transport", value: 4200 },
    { name: "Shopping", value: 4200 },
    { name: "Entertainment", value: 2950 },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  const color = ["#6d5dfc", "#8b7fff", "#b3abff", "#d7d2ff", "#ece9ff"];

  return (
    <>
  
      <div className="bg-white rounded-2xl border border-gray-100 p-5 h-full">
  
        <h3 className="font-semibold mb-5">Expense Overview</h3>

        <div className="w-full h-55 relative ">
          
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={85}
                paddingAngle={3}
                dataKey={"value"}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={color[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-xs text-gray-500">Total Expense</p>
            <h4 className="font-bold text-lg">₹ {total.toLocaleString()}</h4>
          </div>
        
        </div>
        
        <div className="space-y-3 mt-2">
      
          {data.map((item, index) => (
      
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center justify-center gap-3">

              <span className="w-3 h-3 rounded-full" 
              style={{backgroundColor:color[index]}}></span>
              <span className="text-gray-600">{item.name}</span>

              </div>
              <span className="font-medium">₹ {item.value}</span>
            </div>
          ))}
        
        </div>
      
      </div>
    </>
  );
}

export default ExpenseChart;
