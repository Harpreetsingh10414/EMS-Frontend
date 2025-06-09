import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../../routes/Api";
import Button from "../../UI/Button";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function submitForm(e) {
    e.preventDefault();

    try {
      // 🔒 Simulate login or use actual API
      // const response = await api.post("/auth/login", formData);
      // const user = response.data.user;

      // Temporary mocked user (for demo)
      const user = {
        email: formData.email,
        role: "employee", // or "manager"
      };

      // ✅ Store in localStorage
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login success");
      navigate("/"); // Redirect to protected route
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  return (
    <div className="w-full h-dvh p-8 flex flex-col justify-center items-center">
      <div className="md:w-[50%] lg:w-[40%] xl:w-[30%] h-dvh bg-amber-50 p-4 md:p-8 rounded-xl">
        <div className="h-2/6 flex flex-col justify-center items-center ">
          <h2 className=" font-bold text-2xl md:text-2xl text-black">
            OTW SOLUTIONS.
          </h2>
        </div>
        <div className="h-4/6 flex flex-col gap-4">
          <h2 className="text-black text-center font-bold text-xl md:text-2xl">
            Employee/ Manager Login
          </h2>
          <form onSubmit={submitForm}>
            <input
              type="text"
              name="email"
              value={formData.email}
              autoComplete="off"
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 mb-4 border rounded placeholder-black border-black text-black"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2  border rounded placeholder-black border-black text-black mb-4"
            />
            {/* <p className="text-end text-black text-lg md:text-sm mb-4 opacity-70 cursor-pointer">
              Forgot Password
            </p> */}
            <Button
              type="submit"
              className="w-full text-lg py-2"
              text="Login"
              color="blue" // You can change this to "red", "green", etc.
              onClick={() => console.log("Button clicked")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
