import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProileImg from "../../public/dummy_img.jpg";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [checkSidebar, setCheckSidebar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientX <= 10) {
        setShowSidebar(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setShowSidebar(false);
      }
    };
    if (showSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);
  const toggleSidebar = () => {
    setCheckSidebar((prev) => !prev);
    setShowSidebar((prev) => !prev);
  };

  const handleItemClick = () => {
    setShowSidebar(false);
  };

  const sidebarItems = [
    { label: "Dashboard", icon: "🏠" },
    { label: "IT Person", icon: "👨‍💻" },
    { label: "Leave Management", icon: "📝" },
    { label: "Attendence", icon: "📅" },
    { label: "Task Management", icon: "🗂️" },
    { label: "Chat", icon: "💬" },
  ];
  return (
    <div>
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="max-w-fit h-[100dvh]  bg-neutral-200 shadow-md z-50"
            onMouseLeave={() => {
              if (!checkSidebar) setShowSidebar(false);
            }}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center flex-col justify-center mt-4 gap-1 mb-4 ">
                <img
                  className="w-[100px] h-[100px] rounded-full mb-2 ring-2 ring-amber-300"
                  src={ProileImg}
                  alt="profile photo"
                />
                <h2 className="text-black text-sm md:text-[16px]">
                  Abhishek Kumar.
                </h2>
                <h3 className="text-black text-sm md:text-[16px]">
                  Software Developer
                </h3>
              </div>
              {sidebarItems.map((item, index) => (
                <button
                  key={index}
                  onClick={handleItemClick}
                  className="flex gap-1 items-center p-0.5 px-2 hover:bg-gray-300 cursor-pointer"
                >
                  <span className="w-[24px] text-lg">{item.icon}</span>
                  <h3 className="text-black text-sm md:text-[16px]">
                    {item.label}
                  </h3>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="fixed bg-amber-600 p-4  rounded-full bottom-4  left-4 "
        onClick={toggleSidebar}
      >
        <svg
          className="w-[24px] h-[24px] text-gray-800 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h10"
          />
        </svg>
      </div>
    </div>
  );
}

export default Sidebar;
