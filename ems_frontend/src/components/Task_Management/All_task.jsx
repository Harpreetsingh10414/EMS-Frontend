import React, { useState } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

function All_task() {
  const [search, setSearch] = useState("");

  const theme = useTheme([
    getTheme(),
    {
      Table: `
        --data-table-library_grid-template-columns: repeat(5, minmax(180px, 1fr));
        overflow-x: auto;
      `,
      Cell: `
        white-space: normal;
        text-overflow: unset;
        overflow: visible;
      `,
    },
  ]);

  const [filter, setFilter] = useState("all");

  const taskData = [
    {
      id: 1,
      title: "Design homepage",
      status: "completed",
      empName: "Anjali Mehta",
      empId: "EMP1023",
      contact: "9876543210",
    },
    {
      id: 2,
      title: "Fix login bug",
      status: "pending",
      empName: "Ravi Sharma",
      empId: "EMP1047",
      contact: "9123456780",
    },
    {
      id: 3,
      title: "Update user profile UI",
      status: "completed",
      empName: "Priya Nair",
      empId: "EMP1092",
      contact: "9812345678",
    },
    {
      id: 4,
      title: "Write unit tests",
      status: "pending",
      empName: "Amit Verma",
      empId: "EMP1065",
      contact: "9012345678",
    },
    {
      id: 5,
      title: "Deploy to staging",
      status: "completed",
      empName: "Sneha Rao",
      empId: "EMP1018",
      contact: "9988776655",
    },
  ];

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const filteredData = taskData.filter((task) => {
    const matchesFilter = filter === "all" || task.status === filter;
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.empName.toLowerCase().includes(search.toLowerCase()) ||
      task.empId.toLowerCase().includes(search.toLowerCase()) ||
      task.contact.includes(search);
    return matchesFilter && matchesSearch;
  });

  const COLUMNS = [
    {
      label: "Status",
      renderCell: (item) => (
        <span
          className={`font-semibold px-2 py-1 rounded ${
            item.status === "completed"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    { label: "Employee Name", renderCell: (item) => item.empName },
    { label: "Employee ID", renderCell: (item) => item.empId },
    { label: "Task Title", renderCell: (item) => item.title },
    { label: "Contact Number", renderCell: (item) => item.contact },
  ];

  return (
    <div className="bg-white w-full rounded p-2 flex flex-col gap-2 md:gap-4">
      <div>
        <h2 className="text-red-500 text-lg font-semibold">All Tasks</h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 text-sm">
        <button
          onClick={() => setFilter("all")}
          className={`py-1 px-2 rounded font-semibold shadow-sm cursor-pointer ${
            filter === "all"
              ? "bg-blue-700 text-white"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          ALL TASKS
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={`py-1 px-2 rounded font-semibold shadow-sm cursor-pointer ${
            filter === "pending"
              ? "bg-red-700 text-white"
              : "bg-red-100 text-red-700"
          }`}
        >
          PENDING TASKS
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`py-1 px-2 rounded font-semibold shadow-sm cursor-pointer ${
            filter === "completed"
              ? "bg-green-700 text-white"
              : "bg-green-100 text-green-700"
          }`}
        >
          COMPLETED TASKS
        </button>
      </div>

      {/* Table with horizontal scroll */}
      <div className="overflow-x-auto">
        <div className="w-full flex justify-end">
          <input
            className="border-2 py-0.5 rounded px-2 placeholder-black text-black"
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search"
          />
        </div>
        <CompactTable
          columns={COLUMNS}
          data={{ nodes: filteredData }}
          theme={theme}
          layout={{ custom: true, horizontalScroll: true }}
        />
      </div>
    </div>
  );
}

export default All_task;
