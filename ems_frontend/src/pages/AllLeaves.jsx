import React from "react";
import "../UI/AllLeaves.css";

const AllLeaves = () => {
  const employeeLeaves = [
    {
      name: "John Doe",
      from: "2025-05-01",
      to: "2025-05-03",
      duration: 3,
      type: "Sick Leave",
      reason: "Medical",
      status: "Approved",
    },
    {
      name: "Jane Smith",
      from: "2025-05-02",
      to: "2025-05-04",
      duration: 3,
      type: "Casual Leave",
      reason: "Wedding",
      status: "Pending",
    },
    {
      name: "Michael Johnson",
      from: "2025-05-05",
      to: "2025-05-05",
      duration: 1,
      type: "Special Leave",
      reason: "Voting",
      status: "Approved",
    },
    {
      name: "Anita Sharma",
      from: "2025-05-03",
      to: "2025-05-04",
      duration: 2,
      type: "Casual Leave",
      reason: "Function",
      status: "Rejected",
    },
    {
      name: "Rahul Verma",
      from: "2025-05-10",
      to: "2025-05-12",
      duration: 3,
      type: "Sick Leave",
      reason: "Fever",
      status: "Pending",
    },
    {
      name: "Sneha Roy",
      from: "2025-05-15",
      to: "2025-05-16",
      duration: 2,
      type: "Casual Leave",
      reason: "Travel",
      status: "Approved",
    },
    {
      name: "Aman Kumar",
      from: "2025-05-11",
      to: "2025-05-12",
      duration: 2,
      type: "Special Leave",
      reason: "Training",
      status: "Approved",
    },
    {
      name: "Neha Gupta",
      from: "2025-05-18",
      to: "2025-05-18",
      duration: 1,
      type: "Casual Leave",
      reason: "Exam",
      status: "Pending",
    },
    {
      name: "Vikram Singh",
      from: "2025-05-20",
      to: "2025-05-22",
      duration: 3,
      type: "Sick Leave",
      reason: "Surgery",
      status: "Approved",
    },
    {
      name: "Priya Mehra",
      from: "2025-05-25",
      to: "2025-05-27",
      duration: 3,
      type: "Casual Leave",
      reason: "Family Function",
      status: "Approved",
    },
  ];

  return (
    <div className="leaves-container">
      <h2>All Leaves</h2>
      <table className="leaves-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>From</th>
            <th>To</th>
            <th>Duration</th>
            <th>Leave Type</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employeeLeaves.map((leave, idx) => (
            <tr key={idx}>
              <td>{leave.name}</td>
              <td>{leave.from}</td>
              <td>{leave.to}</td>
              <td>{leave.duration}</td>
              <td>{leave.type}</td>
              <td>{leave.reason}</td>
              <td>{leave.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllLeaves;
