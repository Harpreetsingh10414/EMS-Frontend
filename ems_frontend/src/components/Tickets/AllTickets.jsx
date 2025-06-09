import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../UI/Button";
//import { Button } from "@/components/ui/button";
//import { saveAs } from "file-saver";

function AllTickets() {
  const [tickets, setTickets] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    // Simulated API call with dummy data
    const dummyData = [
      {
        id: 1,
        description:
          "Kindly accomplish following tasks: Tasks-1: Make Home page and Project page dynamic in eecd.in domain. Task-2: Make a dropdown in Our Gallery section in eecd.in domain. Task 3: Delete Newsgroup Videos, Make Documentation in detail of all the work done and also do proper research on all the sites that were given earlier.",
        documentUrl: "",
        raisedByRole: "It Manager(2)",
        raisedByName: "Arnav Sinha",
        raisedByEmail: "arnavfizzy@gmail.com",
        status: "closed",
        userIP: "49.37.71.186",
        raisedOn: "2022-06-02 13:05:12",
      },
      {
        id: 2,
        description: "test",
        documentUrl:
          "https://www.ticket.fizzyhomes.com/assets/ticket_docs/WhatsApp_Image_2022-12-26_at_11_05_19_AM.jpeg",
        raisedByRole: "It Professional(4)",
        raisedByName: "Sandeep Oraon",
        raisedByEmail: "sandeepfizzy@gmail.com",
        status: "open",
        userIP: "106.216.126.56",
        raisedOn: "2022-12-30 15:46:45",
      },
    ];
    setTickets(dummyData);
  }, []);

  const toggleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const exportCSV = () => {
    const header = [
      "Ticket ID",
      "Description",
      "Support Document",
      "Raised By",
      "Ticket Status",
      "User IP",
      "Raised On",
    ];
    const rows = tickets.map((t) => [
      t.id,
      t.description,
      t.documentUrl || "Not Available",
      `${t.raisedByRole} / ${t.raisedByName} / ${t.raisedByEmail}`,
      t.status,
      t.userIP,
      t.raisedOn,
    ]);

    const csvContent = [header, ...rows]
      .map((e) => e.map((val) => `"${val}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "tickets_export.csv");
  };

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-semibold mb-4">All Raised Tickets</h1>
      <div className="mb-4 flex justify-between items-center">
        <select className="border rounded p-2" onChange={exportCSV}>
          <option value="">Export Basic</option>
          <option value="csv">Export as CSV</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded ml-4 w-1/3"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedRows(
                      e.target.checked ? tickets.map((t) => t.id) : []
                    )
                  }
                  checked={selectedRows.length === tickets.length}
                />
              </th>
              <th className="p-2 border">#</th>
              <th className="p-2 border">Ticket ID</th>
              <th className="p-2 border">Ticket Description</th>
              <th className="p-2 border">Support Document</th>
              <th className="p-2 border">Raised By</th>
              <th className="p-2 border">Ticket Status</th>
              <th className="p-2 border">User IP</th>
              <th className="p-2 border">Raised On</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket.id} className="odd:bg-white even:bg-gray-50">
                <td className="p-2 border text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(ticket.id)}
                    onChange={() => toggleSelectRow(ticket.id)}
                  />
                </td>
                <td className="p-2 border text-center">{index + 1}</td>
                <td className="p-2 border text-center">{ticket.id}</td>
                <td className="p-2 border">{ticket.description}</td>
                <td className="p-2 border">
                  {ticket.documentUrl ? (
                    <a
                      href={ticket.documentUrl}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                    >
                      View Documents
                    </a>
                  ) : (
                    "Not Available"
                  )}
                </td>
                <td className="p-2 border">
                  {ticket.raisedByRole} / {ticket.raisedByName} /{" "}
                  {ticket.raisedByEmail}
                </td>
                <td className="p-2 border text-center">{ticket.status}</td>
                <td className="p-2 border text-center">{ticket.userIP}</td>
                <td className="p-2 border text-center">{ticket.raisedOn}</td>
                <td className="p-2 border text-center space-y-1">
                  <Button className="bg-blue-500 text-white w-full">
                    View Comments
                  </Button>
                  {ticket.status === "open" && (
                    <Button className="bg-blue-500 text-white w-full">
                      Add Comment
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-gray-600 mt-2">
          Showing {tickets.length > 0 ? `1 to ${tickets.length}` : 0} of{" "}
          {tickets.length} rows
        </p>
      </div>
    </div>
  );
}

export default AllTickets;
