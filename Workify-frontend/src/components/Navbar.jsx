import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function WorkifyNavbar() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const loggedIn = Boolean(token);

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 shadow-lg shadow-emerald-900/60">
            <span className="text-xl">🛠️</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">Workify</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-emerald-400 transition">About</a>
          <a href="#features" className="hover:text-emerald-400 transition">Features</a>
          <a href="#jobs" className="hover:text-emerald-400 transition">Jobs</a>
          <a href="#future" className="hover:text-emerald-400 transition">Future</a>
          <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          {loggedIn ? (
            <button
              onClick={() => navigate("/profile")}
              className="text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-lg bg-slate-900/80 border border-emerald-500/60 text-emerald-300 font-medium hover:bg-emerald-500/10 hover:border-emerald-400 transition"
            >
              Profile 👤
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="hidden sm:inline-flex text-xs md:text-sm px-3 py-1.5 rounded-lg border border-slate-700 hover:border-emerald-500 text-slate-200 hover:text-emerald-300 transition"
              >
                Log in
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 font-medium shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-[0.97] transition"
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
