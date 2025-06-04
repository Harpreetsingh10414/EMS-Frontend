import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom"; // For rendering nested routes
// import AnimatedOutlet from "../components/AniOutlet";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <Navbar />

      {/* Main content area: Sidebar + Dynamic Content */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-fit">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <motion.div
          layout
          transition={{ duration: 0.3 }}
          className="flex-1 p-4 overflow-y-auto"
        >
          <Outlet />
        </motion.div>
      </div>

      {/* Bottom Footer <Footer /> */}
    </div>
  );
}

export default Layout;
