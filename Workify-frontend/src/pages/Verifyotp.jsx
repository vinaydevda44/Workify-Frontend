// src/pages/VerifyOtp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUpData } = useSelector((state) => state.auth) || {};
  const email = signUpData?.email || "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error("Please enter the OTP.");
      return;
    }

    if (!signUpData) {
      toast.error("Signup data not found. Please signup again.");
      navigate("/signup");
      return;
    }

    const { name, email, password, phone, role } = signUpData;

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:4000/api/auth/signup", {
        name,
        email,
        password,
        phone,
        role,
        otp, 
      });

      if (res.data.success) {
        toast.success("OTP verified successfully! You can now log in.");
        setTimeout(() => {
          navigate("/login");
        }, 800);
      } else {
        toast.error(res.data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong while verifying OTP."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!signUpData) {
      toast.error("Signup data not found. Please signup again.");
      navigate("/signup");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:4000/api/auth/send-otp",
        {
          email,
        }
      );

      if (res.data.success) {
        toast.success("A new OTP has been sent to your email.");
      } else {
        toast.error(res.data.message || "Unable to resend OTP.");
      }
    } catch (error) {
      console.error("Error resending OTP", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong while resending OTP."
      );
    } finally {
      setLoading(false);
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
              <span className="text-2xl">🔐</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                Workify
              </h1>
              <p className="text-xs md:text-sm text-slate-300/80">
                Secure your account with OTP verification ✅
              </p>
            </div>
          </div>

         
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-white tracking-tight flex items-center gap-2">
              Verify your OTP
              <span className="text-base md:text-lg animate-pulse">🔎</span>
            </h2>
            {email && (
              <p className="mt-1 text-[11px] md:text-xs text-slate-400">
                We have sent a 6-digit OTP to{" "}
                <span className="text-emerald-400">{email}</span>. Please enter
                it below.
              </p>
            )}
          </div>

          
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            <div className="space-y-2">
              <label className="text-xs md:text-sm font-medium text-slate-200">
                Enter OTP
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 text-sm">
                  🔢
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="e.g. 123456"
                  className="w-full rounded-xl bg-slate-900/80 border border-slate-700/80 px-9 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <p className="text-[11px] md:text-xs text-slate-400">
                OTP is valid for a limited time. Do not share it with anyone.
              </p>
            </div>

            
            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 px-4 py-2.5 text-sm md:text-base font-semibold text-white shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Verifying..." : "Verify OTP ✅"}
            </button>
          </form>

         
          <div className="mt-6 flex items-center justify-between text-[11px] md:text-xs text-slate-400">
            <button
              type="button"
              onClick={handleResendOtp}
              disabled={loading}
              className="text-emerald-400 hover:text-emerald-300 underline disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Didn’t receive OTP? Resend 🔁
            </button>

            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="hover:text-slate-200 transition"
            >
              Change details ✏️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
