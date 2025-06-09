import React, { useState } from "react";
import api from "../../routes/Api";

const It_AddNew = () => {
  const [formData, setFormData] = useState({
    empName: '',
    email: '',
    phone: '',
    aadhaar: '',
    passport: '',
    dl: '',
    voter: '',
    pan: '',
    designation: '',
    salary: '',
    gender: '',
    status: 'inactive',
    role: 'employee', 
    profilePic: null,
    aadhaarPic: null,
    passportPic: null,
    dlPic: null,
    voterPic: null,
    panPic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await api.post("http://localhost:8081/admin/add", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload successful:", response.data);

      window.alert("Employee added successfully!");

    
      handleReset();
    } catch (error) {
      if (error.response) {
        console.error("Upload failed with response:", error.response.status, error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error during setup:", error.message);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      empName: '',
      email: '',
      phone: '',
      aadhaar: '',
      passport: '',
      dl: '',
      voter: '',
      pan: '',
      designation: '',
      salary: '',
      gender: '',
      status: 'inactive',
      role: 'employee',
      aadhaarPic: null,
      passportPic: null,
      dlPic: null,
      voterPic: null,
      panPic: null,
    });
  };

  return (
    <div className="w-full min-h-screen overflow-y-auto flex items-center justify-center p-6">
      <div className="p-6 bg-white max-w-4xl mx-auto shadow-md rounded-md mt-10">
        <h2 className="text-xl text-red-500 font-semibold mb-6">Add IT Professional</h2>
        <form className="space-y-4" onSubmit={handleSubmit} onReset={handleReset}>

          {/* Text Inputs */}
          {[
            ['Full Name', 'empName', 'text', 'Full Name'],
            ['Email ID', 'email', 'email', 'abc123@gmail.com'],
            ['Phone Number', 'phone', 'tel', '1234567890'],
            ['Adhaar Number', 'aadhaar', 'text', 'Aadhar No.'],
            ['Passport Number', 'passport', 'text', 'Passport No.'],
            ['DL Number', 'dl', 'text', 'Dl No.'],
            ['Voter ID Number', 'voter', 'text', 'Voter Id No.'],
            ['PAN Number', 'pan', 'text', 'Pan No.'],
            ['Designation', 'designation', 'text', 'Designation'],
            ['Monthly Salary(in INR)', 'salary', 'number', 'Salary'],
          ].map(([label, name, type, placeholder]) => (
            <div key={name} className="flex items-center space-x-4">
              <label className="w-1/3 text-sm font-medium text-gray-700">{label}:</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                placeholder={placeholder}
                onChange={handleChange}
                className="flex-1 border border-gray-300 p-2 rounded bg-gray-100 text-black"
              />
            </div>
          ))}

          {/* Gender Dropdown */}
          <div className="flex items-center space-x-4">
            <label className="w-1/3 text-sm font-medium text-gray-700">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="flex-1 border border-gray-300 p-2 rounded bg-gray-100 text-black"
              required
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          {/* File Uploads */}
          {[
            ['Profile Picture', 'profilePic'],
            ['Adhaar Card Picture', 'aadhaarPic'],
            ['Passport Picture', 'passportPic'],
            ['DL Picture', 'dlPic'],
            ['Voter Card Picture', 'voterPic'],
            ['PAN Card Picture', 'panPic'],
          ].map(([label, name]) => (
            <div key={name} className="flex items-center space-x-4">
              <label className="w-1/3 text-sm font-medium text-gray-700">{label}:</label>
              <input
                type="file"
                name={name}
                onChange={handleChange}
                className="flex-1 border border-gray-300 p-2 rounded bg-gray-100 text-black"
                accept="image/*"
              />
            </div>
          ))}

          {/* Buttons */}
          <div className="flex space-x-4 mt-6 justify-end">
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default It_AddNew;
