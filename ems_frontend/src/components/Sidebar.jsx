import { useState, useEffect, useRef, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaCalendarAlt,
  FaRegCalendarTimes,
  FaRocketchat,
  FaTicketAlt,
  FaUsers,
  FaUserFriends,
} from "react-icons/fa";
import { MdPersonAdd, MdAddTask, MdTaskAlt } from "react-icons/md";
import ProileImg from "/dummy_img.jpg";

function Sidebar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [showSidebar, setShowSidebar] = useState(false);
  const [showTaskSubmenu, setShowTaskSubmenu] = useState(false);
  const [showItSubmenu, setShowItSubmenu] = useState(false);
  const [showLeaveSubmenu, setShowLeaveSubmenu] = useState(false);
  const [showAttSubmenu, setShowAttSubmenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    // Set initial sidebar state
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div>
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="w-screen md:max-w-fit px-2 z-50"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center flex-col justify-center mt-4 gap-1 mb-4 px-2">
                <img
                  className="w-[100px] h-[100px] rounded-full mb-2 ring-2 ring-amber-300"
                  src={ProileImg}
                  alt="profile photo"
                />
                <h2 className="text-black text-sm md:text-[16px]">
                  {user?.name}
                </h2>
                <h3 className="text-black text-sm md:text-[16px]">
                  Software Developer
                </h3>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex mx-auto  px-2 py-2 text-black opacity-60 font-semibold tracking-wide text-base">
                  MAIN MENU
                </div>
                <button
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setShowSidebar(false);
                    }
                    navigate("/dashboard");
                  }}
                  className="flex gap-1 items-center p-0.5 px-2 hover:bg-gray-300 cursor-pointer"
                >
                  <span className="w-[24px] text-lg text-black">
                    <FaHome />
                  </span>
                  <h3 className="text-black text-sm md:text-[16px]">
                    Dashboard
                  </h3>
                </button>
                <button
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setShowSidebar(false);
                    }
                    navigate("/my-tasks");
                  }}
                  className="flex gap-1 items-center p-0.5 px-2 hover:bg-gray-300 cursor-pointer"
                >
                  <span className="w-[24px] text-lg text-black">
                    <FaTasks />
                  </span>
                  <h3 className="text-black text-sm md:text-[16px]">
                    My Tasks
                  </h3>
                </button>
                <button
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setShowSidebar(false);
                    }
                    navigate("/attendance");
                  }}
                  className="flex gap-1 items-center p-0.5 px-2 hover:bg-gray-300 cursor-pointer"
                >
                  <span className="w-[24px] text-lg text-black">
                    <FaCalendarAlt />
                  </span>
                  <h3 className="text-black text-sm md:text-[16px]">
                    Attendance
                  </h3>
                </button>
                <button
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setShowSidebar(false);
                    }
                    navigate("/dashboard");
                  }}
                  className="flex gap-1 items-center p-0.5 px-2 hover:bg-gray-300 cursor-pointer"
                >
                  <span className="w-[24px] text-lg text-black">
                    <FaRegCalendarTimes />
                  </span>
                  <h3 className="text-black text-sm md:text-[16px]">Leaves</h3>
                </button>

                <button className="flex gap-1 items-center p-0.5 px-2 hover:bg-gray-300 cursor-pointer">
                  <span className="w-[24px] text-lg text-black">
                    <FaRocketchat />
                  </span>
                  <h3 className="text-black text-sm md:text-[16px]">Chat</h3>
                </button>

                <button
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setShowSidebar(false);
                    }
                    navigate("/dashboard");
                  }}
                  className="flex gap-1 items-center p-0.5 px-2 hover:bg-gray-300 cursor-pointer"
                >
                  <span className="w-[24px] text-lg text-black">
                    <FaTicketAlt />
                  </span>
                  <h3 className="text-black text-sm md:text-[16px]">Ticket</h3>
                </button>
                {(user?.role === "admin" || user?.role === "manager") && (
                  <div className="flex mx-auto  px-2 py-2 text-black opacity-60 font-semibold tracking-wide text-base">
                    MANAGEMENT MENU
                  </div>
                )}
                {(user?.role === "admin" || user?.role === "manager") && (
                  <div className="flex flex-col">
                    <button
                      onClick={() => setShowItSubmenu((prev) => !prev)}
                      className="flex gap-1 items-center p-0.5 px-2 hover:bg-gray-300 cursor-pointer"
                    >
                      <span className="w-[24px] text-lg text-black">
                        <FaUsers />
                      </span>
                      <h3 className="text-black text-sm md:text-[16px]">
                        IT Person
                      </h3>
                    </button>

                    <AnimatePresence>
                      {showItSubmenu && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-6 flex flex-col"
                        >
                          <button
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                setShowSidebar(false);
                              }
                              navigate("/it-person/add-new");
                            }}
                            className="flex gap-1 items-center text-left text-black text-sm py-1 px-2 hover:bg-gray-300  cursor-pointer"
                          >
                            <span className="text-lg  text-black">
                              <MdPersonAdd />
                            </span>
                            Add New
                          </button>

                          <button
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                setShowSidebar(false);
                              }
                              navigate("/it-person/view-all");
                            }}
                            className="flex items-center gap-1 text-left text-black text-sm py-1 px-2 hover:bg-gray-300  cursor-pointer"
                          >
                            <span className="text-lg text-black">
                              <FaUserFriends />
                            </span>
                            View All
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
                {(user?.role === "admin" || user?.role === "manager") && (
                  <div className="flex flex-col">
                    <button
                      onClick={() => setShowLeaveSubmenu((prev) => !prev)}
                      className="flex gap-1 items-center p-0.5 px-2 hover:bg-gray-300 cursor-pointer"
                    >
                      <span className="w-[24px] text-lg text-black">
                        <FaRegCalendarTimes />
                      </span>
                      <h3 className="text-black text-sm md:text-[16px]">
                        Leave Management
                      </h3>
                    </button>

                    <AnimatePresence>
                      {showLeaveSubmenu && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-6 flex flex-col"
                        >
                          <button
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                setShowSidebar(false);
                              }
                              navigate("/leave-management/employee-wise");
                            }}
                            className="flex items-center gap-1 text-left text-black text-sm py-1 px-2 hover:bg-gray-300  cursor-pointer"
                          >
                            <span className="text-lg  text-black">
                              <FaUserFriends />
                            </span>
                            Employee Wise
                          </button>

                          <button
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                setShowSidebar(false);
                              }
                              navigate("/leave-management/all_leave");
                            }}
                            className="flex items-center gap-1 text-left text-black text-sm py-1 px-2 hover:bg-gray-300  cursor-pointer"
                          >
                            <span className="w-[24px] text-lg text-black">
                              <FaUsers />
                            </span>
                            All Leaves
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
                {(user?.role === "admin" || user?.role === "manager") && (
                  <div className="flex flex-col">
                    <button
                      onClick={() => setShowAttSubmenu((prev) => !prev)}
                      className="flex gap-1 items-center p-0.5 px-2 hover:bg-gray-300 cursor-pointer"
                    >
                      <span className="w-[24px] text-lg text-black">
                        <FaCalendarAlt />
                      </span>
                      <h3 className="text-black text-sm md:text-[16px]">
                        Attendence
                      </h3>
                    </button>

                    <AnimatePresence>
                      {showAttSubmenu && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-6 flex flex-col"
                        >
                          <button
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                setShowSidebar(false);
                              }
                              navigate("/attendance/employee-wise");
                            }}
                            className="flex items-center gap-1 text-left text-black text-sm py-1 px-2 hover:bg-gray-300  cursor-pointer"
                          >
                            <span className="text-lg  text-black">
                              <FaUserFriends />
                            </span>
                            Employee Wise
                          </button>

                          <button
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                setShowSidebar(false);
                              }
                              navigate("/attendance/all-attendence");
                            }}
                            className=" flex items-center gap-1 text-left text-black text-sm py-1 px-2 hover:bg-gray-300  cursor-pointer"
                          >
                            <span className="w-[24px] text-lg text-black">
                              <FaUsers />
                            </span>
                            All Attendence
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
                {(user?.role === "admin" || user?.role === "manager") && (
                  <div className="flex flex-col">
                    <button
                      onClick={() => setShowTaskSubmenu((prev) => !prev)}
                      className="flex gap-1 items-center p-0.5 px-2 hover:bg-gray-300 cursor-pointer"
                    >
                      <span className="w-[24px] text-lg text-black">
                        <FaTasks />
                      </span>
                      <h3 className="text-black text-sm md:text-[16px]">
                        Task Management
                      </h3>
                    </button>

                    <AnimatePresence>
                      {showTaskSubmenu && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-6 flex flex-col"
                        >
                          <button
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                setShowSidebar(false);
                              }
                              navigate("/task-management/allocate-task");
                            }}
                            className="flex items-center gap-1 text-left text-black text-sm py-1 px-2 hover:bg-gray-300  cursor-pointer"
                          >
                            <span className="w-[24px] text-lg text-black">
                              <MdAddTask />
                            </span>
                            Allocate Task
                          </button>
                          <button
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                setShowSidebar(false);
                              }
                              navigate("/task-management/allocated-task");
                            }}
                            className="flex items-center gap-1 text-left text-black text-sm py-1 px-2 hover:bg-gray-300  cursor-pointer"
                          >
                            <span className="w-[24px] text-lg text-black">
                              <MdTaskAlt />
                            </span>
                            Allocated Task
                          </button>
                          <button
                            onClick={() => {
                              if (window.innerWidth < 768) {
                                setShowSidebar(false);
                              }
                              navigate("/task-management/all-task");
                            }}
                            className="flex items-center gap-1 text-left text-black text-sm py-1 px-2 hover:bg-gray-300  cursor-pointer"
                          >
                            <span className="w-[24px] text-lg text-black">
                              <FaTasks />
                            </span>
                            All Tasks
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {(user?.role === "admin" || user?.role === "manager") && (
                  <button
                    className="flex gap-1 items-center p-0.5 px-2 mb-2 hover:bg-gray-300 cursor-pointer"
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setShowSidebar(false);
                      }
                      navigate("/tickets/all_tickets");
                    }}
                  >
                    <span className="w-[24px] text-lg text-black">
                      <FaTicketAlt />
                    </span>
                    <h3 className="text-black text-sm md:text-[16px]">
                      Ticket Management
                    </h3>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="block md:hidden  fixed bg-amber-600 p-4  rounded-full bottom-4  left-4 cursor-pointer"
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
