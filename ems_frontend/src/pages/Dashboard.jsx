import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="relative ">
        <Sidebar />
      </div>

      {/* <div className="fixed bottom-0 w-full">
        <Footer />
      </div> */}
    </div>
  );
}

export default Dashboard;
