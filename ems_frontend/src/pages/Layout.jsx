import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function Layout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // 👈 Controls when to show layout

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/login");
    } else {
      setLoading(false); // ✅ Show layout only when user exists
    }
  }, [navigate]);

  if (loading) return null; // 👈 Avoid showing layout during auth check

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Top Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex">
        <div className="bg-neutral-200 min-h-[calc(100vh-50px)] overflow-auto">
          <Sidebar />
        </div>

        <motion.div
          layout
          transition={{ duration: 0.3 }}
          className="flex-1 p-4 overflow-y-auto"
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
}

export default Layout;
