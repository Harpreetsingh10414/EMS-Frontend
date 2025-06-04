import React, { useEffect, useState } from "react";
import axios from "axios";

const It_ViewALL = () => {
  const [professionals, setProfessionals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/admin/getAllEmployees") 
      .then(response => setProfessionals(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">View IT Professional</h1>
      <div className="mb-4">
        <select className="border p-2 rounded">
          <option>Export Basic</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-sm">
          <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="border px-3 py-2 text-left"><input type="checkbox" /></th>
              <th className="border px-3 py-2">#</th>
              <th className="border px-3 py-2">Person Name</th>
              <th className="border px-3 py-2">Gender</th>
              <th className="border px-3 py-2">Email ID</th>
              <th className="border px-3 py-2">Phone No.</th>
              <th className="border px-3 py-2">Adhaar No.</th>
              <th className="border px-3 py-2">Passport No.</th>
              <th className="border px-3 py-2">DL No.</th>
              <th className="border px-3 py-2">Voter ID No.</th>
              <th className="border px-3 py-2">PAN No.</th>
              <th className="border px-3 py-2">Designation</th>
              <th className="border px-3 py-2">Monthly Salary (in INR)</th>
              <th className="border px-3 py-2">Action</th>
              <th className="border px-3 py-2">Comment</th>
            </tr>
          </thead>
          <tbody>
            {professionals.map((person, index) => (
              <tr key={person.id} className="text-sm text-gray-800">
                <td className="border px-3 py-2">
                  <input type="checkbox" />
                </td>
                <td className="border px-3 py-2">{index + 1}</td>
                <td className="border px-3 py-2">{person.empName}</td>
                <td className="border px-3 py-2">{person.gender}</td>
                <td className="border px-3 py-2">{person.email}</td>
                <td className="border px-3 py-2">{person.phone}</td>
                <td className="border px-3 py-2">{person.aadhaar}</td>
                <td className="border px-3 py-2">{person.passport}</td>
                <td className="border px-3 py-2">{person.dl}</td>
                <td className="border px-3 py-2">{person.voter}</td>
                <td className="border px-3 py-2">{person.pan}</td>
                <td className="border px-3 py-2">{person.designation}</td>
                <td className="border px-3 py-2">{person.salary}</td>
                <td className="border px-3 py-2">
                  <select
                      name="gender"n
                      required
                  >
                      <option value="">Select Status</option>
                      <option value="active">Active</option>
                      <option value="nonactive">Non-Active</option>
                    </select>
                </td>
                <td className="border px-3 py-2 text-center">
                  <textarea
                    
                    reqired />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default It_ViewALL;
