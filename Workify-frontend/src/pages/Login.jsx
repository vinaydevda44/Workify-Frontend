import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/slices/authSlice";
import { toast } from "react-hot-toast";

const WorkifyLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        { email, password }
      );

      if (res.data.success) {
        const token = res.data.token;

       
        dispatch(setToken(token));
        localStorage.setItem("token", JSON.stringify(token));

      
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        toast.success("Logged in successfully! 🎉");
        navigate("/");
      } else {
        toast.error(res.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error?.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex items-center justify-center px-4">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
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
                Welcome back, let’s get to work 👋
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              Log in to your account
              <span className="text-base md:text-lg animate-pulse">🔑</span>
            </h2>
            <p className="mt-1 text-xs md:text-sm text-slate-300/80">
              Access your jobs, shifts and profile in one place.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="identifier"
                className="text-xs md:text-sm font-medium text-slate-200"
              >
                Email or Username
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm">
                  📩
                </span>
                <input
                  id="identifier"
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="you@example.com or username"
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-9 py-2.5 text-sm md:text-base text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs md:text-sm font-medium text-slate-200"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="text-[11px] md:text-xs text-emerald-400 hover:text-emerald-300 transition"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm">
                  🔒
                </span>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-9 py-2.5 text-sm md:text-base text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 shadow-inner"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] md:text-xs text-slate-300">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                />
                <span>Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 px-4 py-2.5 text-sm md:text-base font-semibold text-white shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-[0.98] transition-all duration-200"
            >
              <span>Log in</span>
              <span className="text-lg">🚀</span>
            </button>
          </form>

          <div className="mt-5 flex items-center gap-3 text-[11px] md:text-xs text-slate-500">
            <div className="h-px flex-1 bg-slate-700/70" />
            <span>or</span>
            <div className="h-px flex-1 bg-slate-700/70" />
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] md:text-xs text-slate-400">
            <p className="flex items-center gap-1">
              New to Workify?
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-emerald-400 hover:text-emerald-300 font-medium underline-offset-2 hover:underline transition"
              >
                Create account
              </button>
            </p>
            <span className="hidden sm:inline text-emerald-300 flex items-center gap-1">
              ⚡ Quick access to today’s jobs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkifyLogin;
