import React, { useState } from "react";
import dummyImage from "/dummy_img.jpg";

function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [employeeData, setEmployeeData] = useState({
    name: "John Doe",
    empId: "EMP001",
    designation: "Software Engineer",
    email: "john@example.com",
    phone: "9876543210",
    joiningDate: "2023-01-15",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow rounded text-black">
      <h2 className="text-2xl font-bold mb-4">Employee Profile</h2>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex flex-col items-center">
          <img
            src={profileImage || dummyImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border border-gray-300"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-2 text-sm"
          />
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(employeeData).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label className="font-semibold capitalize">{key}</label>
              <input
                type="text"
                name={key}
                value={value}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
