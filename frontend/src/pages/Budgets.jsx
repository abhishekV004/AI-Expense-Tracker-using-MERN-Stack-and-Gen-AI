import React, { useMemo, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import {
  FaChartPie,
  FaEdit,
  FaLightbulb,
  FaPlus,
  FaRegCalendarCheck,
  FaTrash,
  FaWallet,
} from "react-icons/fa";

const initialBudgets = [
  {
    category: "Housing",
    limit: 20000,
    spent: 18500,
    color: "bg-[#5b3df5]",
  },
  {
    category: "Food & Dining",
    limit: 10000,
    spent: 8200,
    color: "bg-emerald-500",
  },
  {
    category: "Transport",
    limit: 6000,
    spent: 4200,
    color: "bg-sky-500",
  },
  {
    category: "Shopping",
    limit: 7000,
    spent: 7300,
    color: "bg-rose-500",
  },
  {
    category: "Entertainment",
    limit: 4000,
    spent: 2900,
    color: "bg-amber-500",
  },
];

const emptyForm = {
  category: "",
  limit: "",
  spent: "",
  cycle: "Monthly",
};

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#5b3df5] focus:ring-4 focus:ring-[#5b3df5]/10 transition";

function Budgets() {
  const [budgets, setBudgets] = useState(initialBudgets);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const totalLimit = useMemo(
    () => budgets.reduce((sum, budget) => sum + budget.limit, 0),
    [budgets]
  );

  const totalSpent = useMemo(
    () => budgets.reduce((sum, budget) => sum + budget.spent, 0),
    [budgets]
  );

  const remaining = totalLimit - totalSpent;
  const usedPercent = totalLimit
    ? Math.min(Math.round((totalSpent / totalLimit) * 100), 100)
    : 0;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.category || !form.limit) {
      return;
    }

    const budgetData = {
      category: form.category,
      limit: Number(form.limit),
      spent: Number(form.spent || 0),
      color:
        editingIndex === null ? "bg-[#5b3df5]" : budgets[editingIndex].color,
    };

    setBudgets((current) => {
      if (editingIndex === null) {
        return [...current, budgetData];
      }

      return current.map((budget, index) =>
        index === editingIndex ? budgetData : budget
      );
    });

    setForm(emptyForm);
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    const budget = budgets[index];

    setEditingIndex(index);
    setForm({
      category: budget.category,
      limit: String(budget.limit),
      spent: String(budget.spent),
      cycle: "Monthly",
    });
  };

  const handleDelete = (index) => {
    setBudgets((current) =>
      current.filter((budget, itemIndex) => itemIndex !== index)
    );

    if (editingIndex === index) {
      handleCancelEdit();
      return;
    }

    if (editingIndex !== null && index < editingIndex) {
      setEditingIndex((current) => current - 1);
    }
  };

  const handleCancelEdit = () => {
    setForm(emptyForm);
    setEditingIndex(null);
  };

  return (
    <DashboardLayout title={"Budgets"}>
      <div className="space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <SummaryCard
            icon={<FaWallet />}
            label="Total Budget"
            value={`Rs. ${totalLimit.toLocaleString("en-IN")}`}
            tone="bg-[#f4f1ff] text-[#5b3df5]"
          />
          <SummaryCard
            icon={<FaChartPie />}
            label="Spent This Month"
            value={`Rs. ${totalSpent.toLocaleString("en-IN")}`}
            tone="bg-rose-50 text-rose-600"
          />
          <SummaryCard
            icon={<FaRegCalendarCheck />}
            label="Remaining"
            value={`Rs. ${remaining.toLocaleString("en-IN")}`}
            tone={
              remaining >= 0
                ? "bg-emerald-50 text-emerald-600"
                : "bg-rose-50 text-rose-600"
            }
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <section className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold">Monthly Budget Plan</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Track category limits against actual monthly spending.
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Used</p>
                <p className="text-xl font-bold text-[#5b3df5]">
                  {usedPercent}%
                </p>
              </div>
            </div>

            <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-[#5b3df5] rounded-full transition-all"
                style={{ width: `${usedPercent}%` }}
              />
            </div>

            <div className="space-y-5">
              {budgets.map((budget, index) => (
                <BudgetRow
                  key={`${budget.category}-${index}`}
                  budget={budget}
                  isEditing={editingIndex === index}
                  onDelete={() => handleDelete(index)}
                  onEdit={() => handleEdit(index)}
                />
              ))}
            </div>
          </section>

          <section className="lg:col-span-5 bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-[#f4f1ff] text-[#5b3df5] flex items-center justify-center">
                <FaPlus />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  {editingIndex === null ? "Add Budget" : "Edit Budget"}
                </h3>
                <p className="text-sm text-gray-500">
                  {editingIndex === null
                    ? "Create a spending limit for a category."
                    : "Update the selected category budget."}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium block mb-2">
                  Category
                </label>
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  type="text"
                  placeholder="Food / Shopping / Utilities"
                  className={inputClass}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-2">
                    Budget Limit
                  </label>
                  <input
                    name="limit"
                    value={form.limit}
                    onChange={handleChange}
                    min="0"
                    type="number"
                    placeholder="10000"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium block mb-2">
                    Already Spent
                  </label>
                  <input
                    name="spent"
                    value={form.spent}
                    onChange={handleChange}
                    min="0"
                    type="number"
                    placeholder="0"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Budget Cycle
                </label>
                <select
                  name="cycle"
                  value={form.cycle}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {editingIndex !== null && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="w-full border border-gray-200 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-50 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                )}

                <button className="w-full bg-[#5b3df5] text-white py-3 rounded-xl font-medium hover:bg-[#4c31db] transition cursor-pointer flex items-center justify-center gap-2">
                  <FaPlus />
                  {editingIndex === null ? "Save Budget" : "Update Budget"}
                </button>
              </div>
            </form>
          </section>
        </div>

        <section className="bg-[#f8f7ff] rounded-2xl border border-[#ddd8ff] p-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-white text-[#5b3df5] flex items-center justify-center shrink-0">
              <FaLightbulb />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Smart Budget Recommendations
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                <p className="bg-white border border-[#ddd8ff] rounded-xl p-4">
                  Shopping has crossed the planned limit. Reduce this category
                  by Rs. 1,500 next week to recover the budget.
                </p>
                <p className="bg-white border border-[#ddd8ff] rounded-xl p-4">
                  Food & Dining is close to the limit. Set a daily cap to avoid
                  late-month overspending.
                </p>
                <p className="bg-white border border-[#ddd8ff] rounded-xl p-4">
                  Transport is under control. You can move part of the unused
                  amount into savings.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

function SummaryCard({ icon, label, tone, value }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-between gap-4">
      <div>
        <p className="text-sm text-gray-500 mb-2">{label}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${tone}`}
      >
        {icon}
      </div>
    </div>
  );
}

function BudgetRow({ budget, isEditing, onDelete, onEdit }) {
  const percent = budget.limit
    ? Math.min(Math.round((budget.spent / budget.limit) * 100), 100)
    : 0;
  const isOverBudget = budget.spent > budget.limit;
  const remaining = budget.limit - budget.spent;

  return (
    <div
      className={`border rounded-xl p-4 ${
        isEditing ? "border-[#5b3df5] bg-[#f8f7ff]" : "border-gray-100"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
        <div>
          <h4 className="font-semibold text-sm">{budget.category}</h4>
          <p className="text-xs text-gray-500 mt-1">
            Rs. {budget.spent.toLocaleString("en-IN")} spent of Rs.{" "}
            {budget.limit.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3">
          <span
            className={`text-sm font-semibold ${
              isOverBudget ? "text-rose-600" : "text-emerald-600"
            }`}
          >
            {isOverBudget
              ? `Rs. ${Math.abs(remaining).toLocaleString("en-IN")} over`
              : `Rs. ${remaining.toLocaleString("en-IN")} left`}
          </span>

          <div className="flex items-center gap-2 text-gray-500">
            <button
              type="button"
              onClick={onEdit}
              className="w-9 h-9 rounded-lg border border-gray-100 bg-white flex items-center justify-center hover:text-[#5b3df5] transition cursor-pointer"
              title="Edit budget"
            >
              <FaEdit />
            </button>
            <button
              type="button"
              onClick={onDelete}
              className="w-9 h-9 rounded-lg border border-gray-100 bg-white flex items-center justify-center hover:text-rose-600 transition cursor-pointer"
              title="Delete budget"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>

      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${
            isOverBudget ? "bg-rose-500" : budget.color
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default Budgets;
