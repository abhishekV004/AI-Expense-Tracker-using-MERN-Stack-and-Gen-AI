import React from "react";
import { FaHome } from "react-icons/fa";
import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Categories from "./pages/Categories";
import Reports from "./pages/Reports";
import Budgets from "./pages/Budgets";
import AiAdvisor from "./pages/AiAdvisor";
import AiChat from "./pages/AiChat";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/budgets" element={<Budgets/>} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/ai-advisor" element={<AiAdvisor />} />
        <Route path="/ai-chat" element={<AiChat />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
}
export default App;
