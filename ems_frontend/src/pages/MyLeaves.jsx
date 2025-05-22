import React from "react";
import "../UI/MyLeaves.css";


const MyLeaves = () => {
  const leaves = [
    {
      id: 1,
      from: "2025-05-01",
      to: "2025-05-03",
      duration: 3,
      type: "Sick Leave",
      reason: "Fever and cold",
      status: "Approved",
    },
    {
      id: 2,
      from: "2025-04-18",
      to: "2025-04-19",
      duration: 2,
      type: "Casual Leave",
      reason: "Family event",
      status: "Pending",
    },
  ];

  return (
    <div className="leaves-container">
      <h2>My Leaves</h2>
      <table className="leaves-table">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Duration</th>
            <th>Leave Type</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.from}</td>
              <td>{leave.to}</td>
              <td>{leave.duration} day(s)</td>
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

export default MyLeaves;
