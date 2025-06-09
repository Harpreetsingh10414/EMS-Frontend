import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { punchIn, punchOut } from "../../redux/slice/attendanceSlice";
import toast from "react-hot-toast";

function Attendance() {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.attendance?.records || []);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1); // 1-based month

  // Helpers
  const pad = (n) => (n < 10 ? "0" + n : n);
  const today = new Date();
  //   const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(
  //     today.getDate()
  //   )}`;
  const todayStr = new Date().toISOString().split("T")[0];

  // Filter records by selected year/month
  const filteredRecords = records.filter((r) => {
    const [y, m] = r.date.split("-");
    return parseInt(y) === selectedYear && parseInt(m) === selectedMonth;
  });

  // Generate all dates for selected month
  const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
  const monthDates = [];
  for (let day = 1; day <= daysInMonth; day++) {
    monthDates.push(`${selectedYear}-${pad(selectedMonth)}-${pad(day)}`);
  }

  // Check attendance status per date
  const attendanceByDate = monthDates.map((date) => {
    const record = filteredRecords.find((r) => r.date === date);
    const day = new Date(date).getDay(); // 0 = Sunday, 6 = Saturday
    const isHoliday = day === 0 || day === 6;
    const punchIn = record?.punchIn || null;
    const punchOut = record?.punchOut || null;
    const isExtraWorkDay = isHoliday && punchIn;

    return {
      date,
      punchIn,
      punchOut,
      isHoliday,
      isExtraWorkDay,
    };
  });

  // Count present days (punchIn recorded)
  const presentDays = attendanceByDate.filter((a) => a.punchIn !== null).length;
  const extraWorkDays = attendanceByDate.filter((a) => a.isExtraWorkDay).length;

  // Year options (last 5 years)
  const yearOptions = [];
  const currentYear = new Date().getFullYear();
  for (let y = currentYear - 4; y <= currentYear; y++) yearOptions.push(y);

  const handlePunchIn = () => {
    const alreadyPunchedIn = records.some(
      (r) => r.date === todayStr && r.punchIn
    );

    if (alreadyPunchedIn) {
      toast.error("You already punched in!");
      return;
    }

    dispatch(punchIn(todayStr));
    toast.success("Punched in successfully!");
  };

  const handlePunchOut = () => {
    const record = records.find((r) => r.date === todayStr);

    if (!record || !record.punchIn) {
      toast.error("Punch in first!");
      return;
    }

    if (record.punchOut) {
      toast.error("Already punched out today!");
      return;
    }

    dispatch(punchOut(todayStr));
    toast.success("Punched out successfully!");
  };

  return (
    <div className="w-full  mx-auto p-4 bg-white rounded shadow-md text-black">
      <h2 className="text-2xl font-bold mb-4">Attendance</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-4 items-center justify-between ">
        <div className="flex gap-2 ">
          <button
            onClick={handlePunchIn}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Punch In
          </button>

          <button
            onClick={handlePunchOut}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Punch Out
          </button>
        </div>
        <div className="flex gap-4">
          <div>
            <label className="mr-2 font-semibold">Year:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {yearOptions.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mr-2 font-semibold">Month:</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
              className="border border-gray-300 rounded px-2 py-1"
            >
              {[...Array(12).keys()].map((m) => (
                <option key={m + 1} value={m + 1}>
                  {new Date(0, m).toLocaleString("default", { month: "long" })}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <p className="mt-4 font-semibold">
        Total Present Days in{" "}
        {new Date(selectedYear, selectedMonth - 1).toLocaleString("default", {
          month: "long",
        })}
        : {presentDays} / {daysInMonth}
      </p>
      <p className="font-semibold text-purple-700 mb-4">
        Extra Work Days on Holidays: {extraWorkDays}
      </p>
      <table className="w-full border border-gray-300 rounded text-left">
        <thead className="bg-blue-400 text-white">
          <tr>
            <th className="p-2 border border-gray-300">Date</th>
            <th className="p-2 border border-gray-300">Punch In</th>
            <th className="p-2 border border-gray-300">Punch Out</th>
            <th className="p-2 border border-gray-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceByDate.map(
            ({ date, punchIn, punchOut, isHoliday, isExtraWorkDay }) => {
              let status = "Absent";
              if (isHoliday && punchIn) {
                status = "Extra Work Day";
              } else if (isHoliday) {
                status = "Holiday";
              } else if (punchIn) {
                status = "Present";
              }

              let rowClass = "";
              if (isExtraWorkDay) rowClass = "bg-purple-100";
              else if (isHoliday) rowClass = "bg-yellow-100";
              else if (status === "Absent") rowClass = "bg-red-100";
              else rowClass = "bg-green-100";

              return (
                <tr key={date} className={rowClass}>
                  <td className="p-2 border border-gray-300">{date}</td>
                  <td className="p-2 border border-gray-300">
                    {punchIn || "-"}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {punchOut || "-"}
                  </td>
                  <td className="p-2 border border-gray-300 font-semibold">
                    {status}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;
