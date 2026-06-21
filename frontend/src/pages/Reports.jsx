import React, { useMemo, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  FaArrowDown,
  FaArrowTrendUp,
  FaArrowUp,
  FaDownload,
  FaFileCsv,
  FaFileLines,
  FaPiggyBank,
} from "react-icons/fa6";

const monthlyData = [
  { month: "Jan", income: 72000, expenses: 39000, savings: 33000 },
  { month: "Feb", income: 76000, expenses: 42000, savings: 34000 },
  { month: "Mar", income: 80500, expenses: 45500, savings: 35000 },
  { month: "Apr", income: 79000, expenses: 40200, savings: 38800 },
  { month: "May", income: 85000, expenses: 42650, savings: 42350 },
  { month: "Jun", income: 88000, expenses: 44800, savings: 43200 },
];

const categoryData = [
  { name: "Housing", amount: 18500, color: "#5b3df5" },
  { name: "Food & Dining", amount: 8200, color: "#10b981" },
  { name: "Shopping", amount: 7300, color: "#f43f5e" },
  { name: "Transport", amount: 4200, color: "#0ea5e9" },
  { name: "Entertainment", amount: 2900, color: "#f59e0b" },
];

const transactions = [
  {
    date: "01 Jun 2026",
    title: "Salary Credited",
    category: "Salary",
    type: "Income",
    amount: 85000,
  },
  {
    date: "02 Jun 2026",
    title: "House Rent",
    category: "Housing",
    type: "Expense",
    amount: 18500,
  },
  {
    date: "05 Jun 2026",
    title: "Grocery Shopping",
    category: "Food & Dining",
    type: "Expense",
    amount: 4200,
  },
  {
    date: "08 Jun 2026",
    title: "Online Shopping",
    category: "Shopping",
    type: "Expense",
    amount: 3300,
  },
  {
    date: "11 Jun 2026",
    title: "Petrol",
    category: "Transport",
    type: "Expense",
    amount: 1500,
  },
  {
    date: "14 Jun 2026",
    title: "Movie Night",
    category: "Entertainment",
    type: "Expense",
    amount: 1200,
  },
];

const reportPeriods = ["This Month", "Last 3 Months", "Last 6 Months"];

function Reports() {
  const [period, setPeriod] = useState("Last 6 Months");

  const totals = useMemo(() => {
    const income = monthlyData.reduce((sum, item) => sum + item.income, 0);
    const expenses = monthlyData.reduce((sum, item) => sum + item.expenses, 0);
    const savings = income - expenses;
    const savingsRate = income ? Math.round((savings / income) * 100) : 0;

    return { income, expenses, savings, savingsRate };
  }, []);

  const downloadCsv = () => {
    const rows = [
      ["Date", "Title", "Category", "Type", "Amount"],
      ...transactions.map((item) => [
        item.date,
        item.title,
        item.category,
        item.type,
        item.amount,
      ]),
    ];

    const csv = rows
      .map((row) =>
        row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")
      )
      .join("\n");

    downloadFile(csv, "finwise-transactions-report.csv", "text/csv");
  };

  const downloadJson = () => {
    const report = {
      period,
      generatedAt: new Date().toISOString(),
      summary: totals,
      monthlyData,
      categoryData,
      transactions,
    };

    downloadFile(
      JSON.stringify(report, null, 2),
      "finwise-full-report.json",
      "application/json"
    );
  };

  return (
    <DashboardLayout title={"Reports"}>
      <div className="space-y-6">
        <section className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          <div>
            <h3 className="text-xl font-semibold mb-2">Financial Reports</h3>
            <p className="text-sm text-gray-500">
              Review income, expenses, savings and category spending trends.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5b3df5]"
            >
              {reportPeriods.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <button
              onClick={downloadCsv}
              className="px-5 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition cursor-pointer"
            >
              <FaFileCsv />
              Download CSV
            </button>

            <button
              onClick={downloadJson}
              className="px-5 py-3 rounded-xl bg-[#5b3df5] text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#4c31db] transition cursor-pointer"
            >
              <FaDownload />
              Download Report
            </button>
          </div>
        </section>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <ReportCard
            title="Total Income"
            value={totals.income}
            note="+12.4% from last period"
            icon={<FaArrowUp />}
            tone="bg-emerald-50 text-emerald-600"
          />
          <ReportCard
            title="Total Expenses"
            value={totals.expenses}
            note="+5.1% from last period"
            icon={<FaArrowDown />}
            tone="bg-rose-50 text-rose-600"
          />
          <ReportCard
            title="Net Savings"
            value={totals.savings}
            note={`${totals.savingsRate}% savings rate`}
            icon={<FaPiggyBank />}
            tone="bg-sky-50 text-sky-600"
          />
          <ReportCard
            title="Best Month"
            value={43200}
            note="June had the highest savings"
            icon={<FaArrowTrendUp />}
            tone="bg-[#f4f1ff] text-[#5b3df5]"
          />
        </div>

        <div className="grid xl:grid-cols-12 gap-6">
          <section className="xl:col-span-8 bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Monthly Trend</h3>
              <span className="text-sm text-gray-500">{period}</span>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip formatter={(value) => `₹${value.toLocaleString("en-IN")}`} />
                  <Bar dataKey="income" fill="#10b981" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="expenses" fill="#f43f5e" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="savings" fill="#5b3df5" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="xl:col-span-4 bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="text-lg font-semibold mb-6">Expense Breakdown</h3>

            <div className="h-64 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="amount"
                    nameKey="name"
                    innerRadius={62}
                    outerRadius={92}
                    paddingAngle={3}
                  >
                    {categoryData.map((item) => (
                      <Cell key={item.name} fill={item.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₹${value.toLocaleString("en-IN")}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3 mt-4">
              {categoryData.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                  <span className="font-medium">
                    ₹{item.amount.toLocaleString("en-IN")}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <h3 className="text-lg font-semibold">Recent Report Entries</h3>
              <p className="text-sm text-gray-500 mt-1">
                These entries are included in the downloadable reports.
              </p>
            </div>
            <button
              onClick={downloadCsv}
              className="px-5 py-3 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition cursor-pointer"
            >
              <FaFileLines />
              Export Entries
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="text-left text-gray-500 border-b border-gray-100">
                  <th className="py-3 font-medium">Date</th>
                  <th className="py-3 font-medium">Title</th>
                  <th className="py-3 font-medium">Category</th>
                  <th className="py-3 font-medium">Type</th>
                  <th className="py-3 font-medium text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((item) => (
                  <tr key={`${item.date}-${item.title}`} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 text-gray-500">{item.date}</td>
                    <td className="py-4 font-medium">{item.title}</td>
                    <td className="py-4 text-gray-600">{item.category}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.type === "Income"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-rose-50 text-rose-600"
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td
                      className={`py-4 text-right font-semibold ${
                        item.type === "Income"
                          ? "text-emerald-600"
                          : "text-rose-600"
                      }`}
                    >
                      {item.type === "Income" ? "+" : "-"}₹
                      {item.amount.toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

function ReportCard({ icon, note, title, tone, value }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-sm text-gray-500 mb-2">{title}</p>
          <h3 className="text-2xl font-bold">
            ₹{value.toLocaleString("en-IN")}
          </h3>
        </div>
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center ${tone}`}
        >
          {icon}
        </div>
      </div>
      <p className="text-sm text-gray-500 font-medium">{note}</p>
    </div>
  );
}

function downloadFile(content, fileName, mimeType) {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8;` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  link.click();

  URL.revokeObjectURL(url);
}

export default Reports;
