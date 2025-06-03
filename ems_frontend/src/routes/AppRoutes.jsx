import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";

import NotFound from "../pages/NotFound";
import Layout from "../pages/Layout";
import It_AddNew from "../components/It_person/It_AddNew";
import It_ViewAll from "../components/It_person/It_ViewAll";
import Employee_wise from "../components/Leave_management/Employee_wise_leave";
import All_leave from "../components/Leave_management/All_leave";
import Employee_wise_attendence from "../components/Attendence/Employee_wise_attendence";
import All_attendence from "../components/Attendence/All_attendence";
import Allocate_task from "../components/Task_Management/Allocate_task";
import Allocated_task from "../components/Task_Management/Allocated_task";
import All_task from "../components/Task_Management/All_task";

import AllLeaves from "../components/Leave_management/AllLeaves"; // Manager view
import ApplyLeave from "../components/My_Leave/ApplyLeave";
import MyLeaves from "../components/My_Leave/MyLeaves";

import AllTickets from "../components/Tickets/AllTickets";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* IT Person Routes */}
          <Route path="/it-person/add-new" element={<It_AddNew />} />
          <Route path="/it-person/view-all" element={<It_ViewAll />} />
          {/* Attendece Routes */}
          <Route
            path="/attendence/employee-wise"
            element={<Employee_wise_attendence />}
          />
          <Route
            path="/attendence/all-attendence"
            element={<All_attendence />}
          />
          {/* Task Management Routes */}
          <Route
            path="/task-management/allocate-task"
            element={<Allocate_task />}
          />
          <Route
            path="/task-management/allocated-task"
            element={<Allocated_task />}
          />
          <Route path="/task-management/all-task" element={<All_task />} />

          {/* Leave Management Routes */}
          <Route
            path="/leave-management/employee-wise"
            element={<Employee_wise />}
          />
          <Route path="/leave-management/all_leave" element={<All_leave />} />
          <Route path="/my-leave/apply-leave" element={<ApplyLeave />} />
          <Route path="/my-leave/my-leaves" element={<MyLeaves />} />


          <Route path="/tickets/all_tickets" element={<AllTickets />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
