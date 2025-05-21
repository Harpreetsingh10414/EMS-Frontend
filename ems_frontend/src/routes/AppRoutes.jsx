import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import PostUser from "../pages/employee/PostUser";
import ApplyLeave from "../pages/ApplyLeave";
import MyLeaves from "../pages/MyLeaves";
import AllLeaves from "../pages/AllLeaves"; // Manager view

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manager/PostUser" element={<PostUser />} />

        {/* Leave Management Routes */}
        <Route path="/apply-leave" element={<ApplyLeave />} />
        <Route path="/my-leaves" element={<MyLeaves />} />
        <Route path="/all-leaves" element={<AllLeaves />} />
      </Routes>
    </BrowserRouter>
  );
}
