import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice"; // adjust if needed
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();


  const token = useSelector((state) => state.auth.token);
  const loggedIn = Boolean(token);

  const dispatch = useDispatch();

  const handleLogout = async () => {
  try {
    const res = await axios.post(
      "http://localhost:4000/api/auth/logout",
      {},
      { withCredentials: true }
    );

    if (res.data.success) {
      toast.success("Logged out successfully!");

      localStorage.removeItem("token");    
      dispatch(setToken(null));            

      navigate("/");
    }
  } catch (err) {
    console.error(err);
    toast.error("Logout failed!");
  }
};


  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-slate-800/70">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
        
        
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 shadow-lg shadow-emerald-900/60">
            <span className="text-xl">🛠️</span>
          </div>
          <div>
            <p className="text-lg md:text-xl font-semibold tracking-tight text-white">
              Workify
            </p>
            <p className="text-[11px] md:text-xs text-slate-300/80">
              Daily jobs. Real workers. Real work.
            </p>
          </div>
        </div>

      
        <div className="hidden md:flex items-center gap-6 text-sm">
          <button className="text-slate-300 hover:text-white transition">Home</button>
          <button
            className="text-slate-300 hover:text-white transition"
            onClick={() => navigate("/signup")}
          >
            Find Provider
          </button>
          <button
            className="text-slate-300 hover:text-white transition"
            onClick={() => navigate("/signup")}
          >
            Post a Job
          </button>
          <button className="text-slate-300 hover:text-white transition">About</button>
        </div>

     
        <div className="flex items-center gap-3">

          {!loggedIn ? (
            <>
             
              <button
                onClick={() => navigate("/login")}
                className="text-xs md:text-sm px-3 py-1.5 rounded-lg border border-slate-600/70 bg-slate-900/40 hover:bg-slate-800/70 text-slate-200 transition"
              >
                Log in
              </button>

             
              <button
                onClick={() => navigate("/signup")}
                className="text-xs md:text-sm px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 shadow-lg hover:brightness-110 active:scale-95 font-semibold text-white transition"
              >
                Join now 🚀
              </button>
            </>
          ) : (
            <>
              
              <button
                onClick={() => navigate("/profile")}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/40 border border-slate-700 text-slate-200 hover:bg-slate-800 transition"
              >
                <span className="text-lg">👤</span>
                <span className="text-xs md:text-sm font-medium">Profile</span>
              </button>

           
              <button
                onClick={handleLogout}
                className="text-xs md:text-sm px-3 py-1.5 rounded-lg border border-red-600/70 bg-red-900/40 hover:bg-red-800/70 text-red-200 transition"
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </header>
  );
};

export default Navbar;
