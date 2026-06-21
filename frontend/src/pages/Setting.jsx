import React, { useMemo, useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import {
  FaBell,
  FaCheck,
  FaLock,
  FaRegCreditCard,
  FaRotateLeft,
  FaUser,
} from "react-icons/fa6";
import { FaSave } from "react-icons/fa";

const initialSettings = {
  fullName: "Abhishek",
  email: "abhishek@gmail.com",
  monthlyIncomeGoal: "85000",
  monthlySavingsTarget: "40000",
  currency: "INR",
  language: "English",
  budgetCycle: "Monthly",
  autoCategorize: true,
  weeklySummary: true,
  billReminder: true,
  overspendingAlert: true,
  aiTips: true,
  twoFactorAuth: false,
  newPassword: "",
  confirmPassword: "",
};

const inputClass =
  "w-full border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-[#5b3df5] focus:ring-4 focus:ring-[#5b3df5]/10 transition";

function Setting() {
  const [settings, setSettings] = useState(initialSettings);
  const [saved, setSaved] = useState(false);

  const savingsRate = useMemo(() => {
    const income = Number(settings.monthlyIncomeGoal);
    const savings = Number(settings.monthlySavingsTarget);

    if (!income || income <= 0) {
      return 0;
    }

    return Math.min(Math.round((savings / income) * 100), 100);
  }, [settings.monthlyIncomeGoal, settings.monthlySavingsTarget]);

  const passwordMessage = useMemo(() => {
    if (!settings.newPassword && !settings.confirmPassword) {
      return "";
    }

    if (settings.newPassword.length < 8) {
      return "Password must be at least 8 characters.";
    }

    if (settings.newPassword !== settings.confirmPassword) {
      return "Passwords do not match.";
    }

    return "Password looks good.";
  }, [settings.newPassword, settings.confirmPassword]);

  const passwordIsValid =
    !passwordMessage || passwordMessage === "Password looks good.";

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    setSettings((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!passwordIsValid) {
      return;
    }

    setSaved(true);
  };

  const handleReset = () => {
    setSettings(initialSettings);
    setSaved(false);
  };

  return (
    <DashboardLayout title={"Settings"}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {saved && (
          <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-2xl px-5 py-4 flex items-center gap-3 text-sm font-medium">
            <FaCheck />
            Settings saved successfully.
          </div>
        )}

        <div className="grid xl:grid-cols-3 gap-6">
          <section className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-[#f4f1ff] text-[#5b3df5] flex items-center justify-center">
                <FaUser />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Profile Information</h3>
                <p className="text-sm text-gray-500">
                  Manage the personal details used across your dashboard.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium block mb-2">
                  Full Name
                </label>
                <input
                  name="fullName"
                  value={settings.fullName}
                  onChange={handleChange}
                  type="text"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Email</label>
                <input
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  type="email"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Monthly Income Goal
                </label>
                <input
                  name="monthlyIncomeGoal"
                  value={settings.monthlyIncomeGoal}
                  onChange={handleChange}
                  min="0"
                  type="number"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Monthly Savings Target
                </label>
                <input
                  name="monthlySavingsTarget"
                  value={settings.monthlySavingsTarget}
                  onChange={handleChange}
                  min="0"
                  type="number"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          <section className="bg-[#f8f7ff] rounded-2xl border border-[#ddd8ff] p-6">
            <h3 className="text-lg font-semibold mb-2">Savings Snapshot</h3>
            <p className="text-sm text-gray-500 mb-6">
              Your target saves {savingsRate}% of your planned monthly income.
            </p>

            <div className="h-3 bg-white rounded-full overflow-hidden mb-5">
              <div
                className="h-full bg-[#5b3df5] rounded-full transition-all"
                style={{ width: `${savingsRate}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded-xl p-4 border border-[#ddd8ff]">
                <p className="text-gray-500 mb-1">Income</p>
                <p className="font-semibold">
                  {settings.currency} {settings.monthlyIncomeGoal || 0}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#ddd8ff]">
                <p className="text-gray-500 mb-1">Savings</p>
                <p className="font-semibold">
                  {settings.currency} {settings.monthlySavingsTarget || 0}
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-[#eef8f4] text-emerald-600 flex items-center justify-center">
              <FaRegCreditCard />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Financial Preferences</h3>
              <p className="text-sm text-gray-500">
                Tune how FinWise formats and organizes your money data.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div>
              <label className="text-sm font-medium block mb-2">Currency</label>
              <select
                name="currency"
                value={settings.currency}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Language</label>
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
                className={inputClass}
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Spanish</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">
                Budget Cycle
              </label>
              <select
                name="budgetCycle"
                value={settings.budgetCycle}
                onChange={handleChange}
                className={inputClass}
              >
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Quarterly</option>
              </select>
            </div>
          </div>

          <label className="mt-5 flex items-center justify-between gap-4 border border-gray-100 rounded-xl p-4 cursor-pointer">
            <div>
              <p className="text-sm font-semibold">Auto-categorize Expenses</p>
              <p className="text-sm text-gray-500">
                Let the app place new transactions into matching categories.
              </p>
            </div>
            <input
              name="autoCategorize"
              checked={settings.autoCategorize}
              onChange={handleChange}
              type="checkbox"
              className="w-5 h-5 accent-[#5b3df5]"
            />
          </label>
        </section>

        <div className="grid lg:grid-cols-2 gap-6">
          <section className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <FaBell />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Notifications</h3>
                <p className="text-sm text-gray-500">
                  Choose the money alerts you want to receive.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <SettingToggle
                checked={settings.weeklySummary}
                name="weeklySummary"
                onChange={handleChange}
                title="Weekly Summary"
                description="Receive a short overview of income, expenses and savings."
              />
              <SettingToggle
                checked={settings.billReminder}
                name="billReminder"
                onChange={handleChange}
                title="Bill Reminders"
                description="Get notified before recurring bills are due."
              />
              <SettingToggle
                checked={settings.overspendingAlert}
                name="overspendingAlert"
                onChange={handleChange}
                title="Overspending Alerts"
                description="Warn me when a category crosses its budget limit."
              />
              <SettingToggle
                checked={settings.aiTips}
                name="aiTips"
                onChange={handleChange}
                title="AI Saving Tips"
                description="Show personalized tips from the AI advisor."
              />
            </div>
          </section>

          <section className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <FaLock />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Security</h3>
                <p className="text-sm text-gray-500">
                  Update your password and sign-in protection.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium block mb-2">
                  New Password
                </label>
                <input
                  name="newPassword"
                  value={settings.newPassword}
                  onChange={handleChange}
                  type="password"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-sm font-medium block mb-2">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  value={settings.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  className={inputClass}
                />
              </div>
            </div>

            {passwordMessage && (
              <p
                className={`mt-3 text-sm ${
                  passwordIsValid ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {passwordMessage}
              </p>
            )}

            <SettingToggle
              checked={settings.twoFactorAuth}
              name="twoFactorAuth"
              onChange={handleChange}
              title="Two-factor Authentication"
              description="Require an extra verification step when signing in."
              className="mt-5"
            />
          </section>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition cursor-pointer"
          >
            <FaRotateLeft />
            Reset
          </button>
          <button
            type="submit"
            disabled={!passwordIsValid}
            className="px-6 py-3 rounded-xl bg-[#5b3df5] text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#4c31db] disabled:opacity-60 disabled:cursor-not-allowed transition cursor-pointer"
          >
            <FaSave />
            Save Settings
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
}

function SettingToggle({
  checked,
  className = "",
  description,
  name,
  onChange,
  title,
}) {
  return (
    <label
      className={`flex items-center justify-between gap-4 border border-gray-100 rounded-xl p-4 cursor-pointer ${className}`}
    >
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <input
        name={name}
        checked={checked}
        onChange={onChange}
        type="checkbox"
        className="w-5 h-5 accent-[#5b3df5] shrink-0"
      />
    </label>
  );
}

export default Setting;
