import React, { useEffect, useState } from "react";
import axios from "axios";

const It_ViewALL = () => {
  const [professionals, setProfessionals] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8081/admin/getAllEmployees")
      .then(response => setProfessionals(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (email, field, value) => {
    setFormData(prev => ({
      ...prev,
      [email]: {
        ...prev[email],
        [field]: value
      }
    }));
  };

  const handleSubmit = (email) => {
    const payload = {
      email,
      status: formData[email]?.status || "",
      comment: formData[email]?.comment || ""
    };

    axios.post("http://localhost:8081/admin/updateStatus", payload)
      .then(() => {
        alert(`Status updated for ${email}`);
      })
      .catch(error => {
        console.error("Failed to update status:", error +">>>>"+formData);
        alert("Error while updating.");
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">View IT Professional</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-sm">
          <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="border px-3 py-2"><input type="checkbox" /></th>
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
              <th className="border px-3 py-2">Monthly Salary</th>
              <th className="border px-3 py-2">Status</th>
              <th className="border px-3 py-2">Comment</th>
              <th className="border px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {professionals.map((person, index) => (
              <tr key={person.id} className="text-sm text-gray-800">
                <td className="border px-3 py-2"><input type="checkbox" /></td>
                <td className="border px-3 py-2">{index + 1}</td>
                <td className="border px-3 py-2">{person.empName}</td>
                <td className="border px-3 py-2">{person.gender}</td>
                <td className="border px-3 py-2">{person.email}</td> {/* email shown but not editable */}
                <td className="border px-3 py-2">{person.phone}</td>
                <td className="border px-3 py-2">{person.aadhaar}</td>
                <td className="border px-3 py-2">{person.passport}</td>
                <td className="border px-3 py-2">{person.dl}</td>
                <td className="border px-3 py-2">{person.voter}</td>
                <td className="border px-3 py-2">{person.pan}</td>
                <td className="border px-3 py-2">{person.designation}</td>
                <td className="border px-3 py-2">{person.salary}</td>

                {/* Editable Status */}
                <td className="border px-3 py-2">
                  <select
                    value={formData[person.email]?.status || ""}
                    onChange={(e) => handleChange(person.email, "status", e.target.value)}
                    className="border p-1 rounded"
                  >
                    <option value="">Select Status</option>
                    <option value="active">Active</option>
                    <option value="nonactive">Non-Active</option>
                  </select>
                </td>

                {/* Editable Comment */}
                <td className="border px-3 py-2">
                  <textarea
                    value={formData[person.email]?.comment || ""}
                    onChange={(e) => handleChange(person.email, "comment", e.target.value)}
                    className="border p-1 rounded w-full"
                    rows={2}
                  />
                </td>

                {/* Submit Button */}
                <td className="border px-3 py-2 text-center">
                  <button
                    onClick={() => handleSubmit(person.email)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Submit
                  </button>
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
