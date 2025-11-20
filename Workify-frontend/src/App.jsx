// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/slices/authSlice";
import { Toaster } from "react-hot-toast";

import WorkifyHome from "./pages/Home";
import WorkifyLogin from "./pages/Login";
import WorkifySignup from "./pages/Signup";
import VerifyOtp from "./pages/Verifyotp";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.defaults.baseURL = "http://localhost:4000/api";

    const savedToken = localStorage.getItem("token");

    if (savedToken) {
      const token = JSON.parse(savedToken);

      
      dispatch(setToken(token));

      
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [dispatch]);

  return (<>
    <Toaster position="top-center"/> 
    <Routes>
      <Route path="/" element={<WorkifyHome />} />
      <Route path="/login" element={<WorkifyLogin />} />
      <Route path="/signup" element={<WorkifySignup />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
    </Routes>
  </>
    
  );
};

export default App;
