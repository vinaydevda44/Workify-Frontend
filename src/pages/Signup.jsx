import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignUpData } from "../redux/slices/authSlice";
import { toast } from "react-hot-toast";

const WorkifySignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const [role, setRole] = useState("Customer");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, phone } = formData;

    
    if (!name || !email || !password || !phone) {
      toast.error("Please fill all the fields.");
      return;
    }

    const signupData = {
      ...formData,
      role: role,
    };
    dispatch(setSignUpData(signupData));

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/send-otp",
        {
          email: formData.email,
        }
      );

      if (response.data.success) {
        toast.success("OTP sent to your email. Please verify!");
        navigate("/verify-otp");
      } else {
        toast.error(response.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error(
        error?.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex items-center justify-center px-4">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/60 rounded-2xl shadow-2xl shadow-black/40 p-8 md:p-10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-900/40">
        
          <div className="mb-6 flex items-center gap-3">
            <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 shadow-lg shadow-emerald-900/60">
              <span className="text-2xl">🛠️</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                Workify
              </h1>
              <p className="text-xs md:text-sm text-slate-300/80">
                Where workers find their next daily job 💼
              </p>
            </div>
          </div>

       
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              Create your worker account
              <span className="text-base md:text-lg animate-pulse">🚀</span>
            </h2>
          </div>

      
          <form className="space-y-5" onSubmit={handleSubmit}>
           
            <div className="space-y-2">
              <label className="text-xs md:text-sm font-medium text-slate-200">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm">
                  👤
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Kumar"
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-9 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs md:text-sm font-medium text-slate-200">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm">
                  📩
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-9 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

          
            <div className="space-y-2">
              <label className="text-xs md:text-sm font-medium text-slate-200">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm">
                  🔒
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-9 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs md:text-sm font-medium text-slate-200">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm">
                  📞
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-9 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs md:text-sm font-medium text-slate-200">
                Select Role
              </label>

              <div className="flex items-center justify-between rounded-xl bg-slate-900/80 border border-slate-700/80 p-1">
                <button
                  type="button"
                  onClick={() => setRole("Customer")}
                  className={`w-1/2 py-2 text-sm rounded-lg transition-all duration-200 font-medium
                  ${
                    role === "Customer"
                      ? "bg-emerald-600 text-white shadow"
                      : "bg-transparent text-slate-400 hover:bg-emerald-600/20"
                  }`}
                >
                  Customer
                </button>
                <button
                  type="button"
                  onClick={() => setRole("Provider")}
                  className={`w-1/2 py-2 text-sm rounded-lg transition-all duration-200 font-medium
                  ${
                    role === "Provider"
                      ? "bg-blue-600 text-white shadow"
                      : "bg-transparent text-slate-400 hover:bg-blue-600/20"
                  }`}
                >
                  Provider
                </button>
              </div>

              <p className="text-[11px] md:text-xs text-slate-400">
                Choose your purpose on Workify.
              </p>
            </div>

          
            <button
              type="submit"
              className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 px-4 py-2.5 text-sm md:text-base font-semibold text-white shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-95 transition"
            >
              Sign up & start working 🚀
            </button>
          </form>

         
          <div className="mt-6 flex items-center justify-between text-[11px] md:text-xs text-slate-400">
            <p>
              Already have an account?{" "}
              <button
                className="text-emerald-400 hover:text-emerald-300 underline"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
            </p>
            <button className="hover:text-slate-200 transition">
              Need help? 💬
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkifySignup;
