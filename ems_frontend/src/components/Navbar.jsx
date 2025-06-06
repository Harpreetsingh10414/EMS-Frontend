import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";

import { logout } from "../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch(); // ✅ Call this at the top
  const navigate = useNavigate(); // ✅ Call this at the top
  const [showMenu, setShowMenu] = useState(false);

  const [isTouch, setIsTouch] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia(
      "(hover: none) and (pointer: coarse)"
    ).matches;
    setIsTouch(isTouchDevice);
  }, []);
  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // Toggle menu on click
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const handleMouseEnter = () => setShowMenu(true);
  const handleMouseLeave = () => setShowMenu(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="w-full h-[50px] flex justify-between items-center px-4 py-2 bg-neutral-200 relative">
      <h3 className="text-sm md:text-xl font-semibold text-black">
        OTW SOLUTIONS.
      </h3>

      <div
        className="relative"
        onClick={toggleMenu}
        onMouseEnter={!isTouch ? handleMouseEnter : undefined}
        onMouseLeave={!isTouch ? handleMouseLeave : undefined}
      >
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <svg
            className="w-[28px] h-[28px] md:w-[32px] md:[32px] text-gray-800  "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 20a7.966 7.966 0 0 1-5.002-1.756v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10H12C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-sm md:text-lg md:font-semibold text-black">
            User
          </h2>
          {showMenu ? (
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
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              className="w-[24px] h-[24px] text-gray-800 
              xmlns="
              http:width="24" //www.w3.org/2000/svg"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 9-7 7-7-7"
              />
            </svg>
          )}
        </div>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50"
            >
              <ul className="py-2 text-sm text-gray-800">
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-1"
                >
                  <svg
                    className="w-[21px] h-[21px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Profile
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-1"
                >
                  <svg
                    className="w-[21px] h-[21px] text-gray-800 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Settings
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onClick={handleLogout}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-1"
                >
                  <svg
                    className="w-[21px] h-[21px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Logout
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
