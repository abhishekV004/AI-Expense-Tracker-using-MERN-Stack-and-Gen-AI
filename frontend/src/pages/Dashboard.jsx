import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import SummaryCards from "../components/dashboard/SummaryCards";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import AiPreviewCard from "../components/dashboard/AiPreviewCard";

function Dashboard() {
  return (
    <>
      <DashboardLayout title={"Dashboard"}>
        <SummaryCards />
        <div className="grid lg:grid-cols-12 gap-6 mb-6">
          
          <div className="lg:col-span-4">
            <ExpenseChart />
          </div>

          <div className="lg:col-span-4">
          <RecentTransactions/>
          </div>

          <div className="lg:col-span-4">
            <AiPreviewCard/>
          </div>
        
        </div>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
