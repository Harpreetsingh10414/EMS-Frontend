import React from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

function Allocated_task() {
  const theme = useTheme([
    getTheme(),
    {
      Table: `
        --data-table-library_grid-template-columns: repeat(6, minmax(180px, 1fr));
        overflow-x: auto;
      `,
      Cell: `
        white-space: normal;
        text-overflow: unset;
        overflow: visible;
      `,
    },
  ]);

  const allocatedTaskData = [
    {
      id: 1,
      title: "Design homepage",
      status: "completed",
      empName: "Anjali Mehta",
      empId: "EMP1023",
      contact: "9876543210",
      deadline: "2025-06-15",
    },
    {
      id: 2,
      title: "Fix login bug",
      status: "pending",
      empName: "Ravi Sharma",
      empId: "EMP1047",
      contact: "9123456780",
      deadline: "2025-06-10",
    },
    {
      id: 3,
      title: "Update user profile UI",
      status: "completed",
      empName: "Priya Nair",
      empId: "EMP1092",
      contact: "9812345678",
      deadline: "2025-06-20",
    },
    {
      id: 4,
      title: "Write unit tests",
      status: "pending",
      empName: "Amit Verma",
      empId: "EMP1065",
      contact: "9012345678",
      deadline: "2025-06-25",
    },
    {
      id: 5,
      title: "Deploy to staging",
      status: "completed",
      empName: "Sneha Rao",
      empId: "EMP1018",
      contact: "9988776655",
      deadline: "2025-06-30",
    },
  ];

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
    { label: "Employee ID", renderCell: (item) => item.empId },
    { label: "Employee Name", renderCell: (item) => item.empName },
    { label: "Task Title", renderCell: (item) => item.title },
    { label: "Deadline", renderCell: (item) => item.deadline },
    { label: "Contact Number", renderCell: (item) => item.contact },
  ];

  return (
    <div className="bg-white w-full rounded p-2 flex flex-col gap-2 md:gap-4">
      <div>
        <h2 className="text-red-500 text-lg font-semibold">Allocated Tasks</h2>
      </div>

      {/* Table with horizontal scroll */}
      <div className="overflow-x-auto">
        <CompactTable
          columns={COLUMNS}
          data={{ nodes: allocatedTaskData }}
          theme={theme}
          layout={{ custom: true, horizontalScroll: true }}
        />
      </div>
    </div>
  );
}

export default Allocated_task;
