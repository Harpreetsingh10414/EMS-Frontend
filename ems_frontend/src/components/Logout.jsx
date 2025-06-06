import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slice/authSlice"; // adjust path as needed
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout()); // Clears Redux + localStorage
    navigate("/login"); // Redirect to login
  }, [dispatch, navigate]);

  return <p>Logging out...</p>; // Optional message or spinner
};

export default Logout;
