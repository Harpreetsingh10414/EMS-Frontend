import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "./Leave.css";

const leaveTypes = ["Sick Leave", "Casual Leave", "Special Leave"];

export default function ApplyLeave() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [duration, setDuration] = useState(0);
  const [leaveType, setLeaveType] = useState("");
  const [contact, setContact] = useState("");
  const [responsible, setResponsible] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    if (fromDate && toDate) {
      const days =
        (toDate.setHours(0, 0, 0, 0) - fromDate.setHours(0, 0, 0, 0)) /
          (1000 * 60 * 60 * 24) +
        1;
      setDuration(days > 0 ? days : 0);
    }
  }, [fromDate, toDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit to backend (use service layer)
    console.log({
      fromDate,
      toDate,
      duration,
      leaveType,
      contact,
      responsible,
      reason,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-xl mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Apply for Leave
      </h2>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">From Date</label>
          <DatePicker
            selected={fromDate}
            onChange={setFromDate}
            className="w-full px-3 py-2 border rounded"
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">To Date</label>
          <DatePicker
            selected={toDate}
            onChange={setToDate}
            className="w-full px-3 py-2 border rounded"
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Leave Duration</label>
          <input
            type="text"
            value={duration}
            readOnly
            className="w-full px-3 py-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Leave Type</label>
          <select
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select type</option>
            {leaveTypes.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium mb-1">Emergency Contact</label>
          <input
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            Responsible Person in Absence
          </label>
          <input
            type="text"
            value={responsible}
            onChange={(e) => setResponsible(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Leave Reason</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Leave Request
        </button>
      </form>
    </div>
  );
}
