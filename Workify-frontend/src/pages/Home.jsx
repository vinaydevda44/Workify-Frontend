import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const WorkifyHome = () => {
  const navigate = useNavigate();

  const handleFindWork = () => {
    navigate("/signup");
  };

  const handlePostJob = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-slate-50 relative overflow-hidden">
      
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-8">
       
        <Navbar/>

      
        <main className="mt-6 md:mt-10 space-y-10 md:space-y-14">
          
          <section className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          
            <div className="space-y-5 md:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-[11px] md:text-xs text-emerald-300">
                <span className="text-sm">⚡</span>
                <span>Find daily work and gigs around you</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                Find work. Get hired.{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Every day.
                </span>
              </h1>

              <p className="text-sm md:text-base text-slate-300/90 max-w-xl">
                Workify connects local workers and customers for daily wage
                jobs, small tasks, and quick help — simple, fast, and clear.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleFindWork}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 px-4 md:px-5 py-2.5 text-sm md:text-base font-semibold text-white shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-95 transition"
                >
                  Find work now 💼
                </button>
                <button
                  onClick={handlePostJob}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600/70 bg-slate-900/40 px-4 md:px-5 py-2.5 text-sm md:text-base font-medium text-slate-100 hover:bg-slate-800/80 transition"
                >
                  Post a job 📢
                </button>
              </div>

              <div className="flex flex-wrap gap-4 text-[11px] md:text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">✅</span>
                  <span>Verified workers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">💳</span>
                  <span>Clear payments</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">📍</span>
                  <span>Local jobs near you</span>
                </div>
              </div>
            </div>

           
            <div className="md:flex items-center justify-end">
              <div className="w-full md:w-[360px] lg:w-[380px] backdrop-blur-xl bg-slate-900/80 border border-slate-700/60 rounded-2xl shadow-2xl shadow-black/50 p-5 md:p-6 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-emerald-300/90">
                      Live gigs
                    </p>
                    <p className="text-sm text-slate-300">
                      Workers applying in real-time
                    </p>
                  </div>
                  <span className="text-xl">📡</span>
                </div>

                <div className="space-y-3">
                 
                  {[
                    {
                      title: "House Cleaning Help",
                      location: "Ahmedabad",
                      pay: "₹600 / day",
                      time: "Today • 4 PM",
                      icon: "🧹",
                    },
                    {
                      title: "Loading / Unloading",
                      location: "Surat",
                      pay: "₹750 / day",
                      time: "Today • 2 PM",
                      icon: "📦",
                    },
                    {
                      title: "Electrician Visit",
                      location: "Vadodara",
                      pay: "₹500 / visit",
                      time: "Tomorrow • 11 AM",
                      icon: "💡",
                    },
                  ].map((gig, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl bg-slate-900/60 border border-slate-700/70 px-3 py-2.5 hover:border-emerald-500/60 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-800/80">
                          <span className="text-lg">{gig.icon}</span>
                        </div>
                        <div>
                          <p className="text-xs md:text-sm font-medium text-slate-50">
                            {gig.title}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {gig.location} • {gig.time}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs md:text-sm font-semibold text-emerald-300">
                        {gig.pay}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleFindWork}
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-95 transition"
                >
                  View all nearby jobs 🔍
                </button>
              </div>
            </div>
          </section>

          
          <section className="space-y-4 md:space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg md:text-xl font-semibold text-white tracking-tight">
                Popular categories
              </h2>
              <span className="text-[11px] md:text-xs text-slate-400">
                Choose a category and start exploring work.
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { label: "House Cleaning", icon: "🧹" },
                { label: "Electrician", icon: "💡" },
                { label: "Plumber", icon: "🔧" },
                { label: "Delivery & Pickup", icon: "📦" },
                { label: "Carpenter", icon: "🪚" },
                { label: "Painter", icon: "🎨" },
                { label: "Cook", icon: "🍳" },
                { label: "Helpers & Labour", icon: "👷" },
              ].map((item, idx) => (
                <button
                  key={idx}
                  className="group flex flex-col items-start gap-1 rounded-xl bg-slate-900/70 border border-slate-700/70 px-3 py-3 md:px-4 md:py-4 hover:border-emerald-500/70 hover:bg-slate-900 transition text-left"
                >
                  <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-slate-100">
                    {item.label}
                  </span>
                  <span className="text-[10px] md:text-[11px] text-slate-400">
                    View gigs in this category
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* How it works */}
            <div className="rounded-2xl bg-slate-900/70 border border-slate-700/70 p-5 md:p-6 space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-white flex items-center gap-2">
                How Workify works
                <span>🧭</span>
              </h3>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                <div className="flex gap-3">
                  <div className="h-7 w-7 flex items-center justify-center rounded-full bg-emerald-600/80 text-xs font-semibold">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-slate-50">
                      Create your profile
                    </p>
                    <p className="text-xs md:text-sm text-slate-400">
                      Sign up as a worker or customer with your basic details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-7 w-7 flex items-center justify-center rounded-full bg-emerald-600/80 text-xs font-semibold">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-slate-50">
                      Browse or post gigs
                    </p>
                    <p className="text-xs md:text-sm text-slate-400">
                      Workers find nearby jobs, and customers post what they
                      need.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-7 w-7 flex items-center justify-center rounded-full bg-emerald-600/80 text-xs font-semibold">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-slate-50">
                      Connect and start working
                    </p>
                    <p className="text-xs md:text-sm text-slate-400">
                      Chat, confirm the work, and complete the job with clear
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="rounded-2xl bg-slate-900/70 border border-slate-700/70 p-5 md:p-6 space-y-4">
              <h3 className="text-base md:text-lg font-semibold text-white flex items-center gap-2">
                Why workers & customers use Workify
                <span>⭐</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                <div className="rounded-xl bg-slate-900/70 border border-slate-700/70 px-3 py-3 flex flex-col gap-1">
                  <span className="text-lg">🚀</span>
                  <p className="font-medium text-slate-50">Fast matching</p>
                  <p className="text-[11px] text-slate-400">
                    Find work or workers quickly with clear job details.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/70 border border-slate-700/70 px-3 py-3 flex flex-col gap-1">
                  <span className="text-lg">🛡️</span>
                  <p className="font-medium text-slate-50">More clarity</p>
                  <p className="text-[11px] text-slate-400">
                    Clear expectations on pay, timing, and type of work.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/70 border border-slate-700/70 px-3 py-3 flex flex-col gap-1">
                  <span className="text-lg">📍</span>
                  <p className="font-medium text-slate-50">Local focus</p>
                  <p className="text-[11px] text-slate-400">
                    Connect with people close to your area.
                  </p>
                </div>
                <div className="rounded-xl bg-slate-900/70 border border-slate-700/70 px-3 py-3 flex flex-col gap-1">
                  <span className="text-lg">📲</span>
                  <p className="font-medium text-slate-50">Simple to use</p>
                  <p className="text-[11px] text-slate-400">
                    Clean, simple interface for all types of users.
                  </p>
                </div>
              </div>
            </div>
          </section>

       
          <section className="mt-4 md:mt-6">
            <div className="rounded-2xl bg-gradient-to-r from-emerald-600/90 via-emerald-500/90 to-blue-600/90 px-5 md:px-8 py-4 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 shadow-xl shadow-emerald-900/60">
              <div>
                <p className="text-sm md:text-base font-semibold text-white flex items-center gap-2">
                  Ready to start with Workify?
                  <span>🔥</span>
                </p>
                <p className="text-[11px] md:text-xs text-emerald-50/90 max-w-lg">
                  Create your free account now, find work near you, or post your
                  first job in a few steps.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleFindWork}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-950/90 px-4 md:px-5 py-2 text-xs md:text-sm font-semibold text-white hover:bg-slate-900 transition"
                >
                  Get started for free 🚀
                </button>
                <button
                  onClick={handleLogin}
                  className="inline-flex items-center justify-center rounded-xl border border-emerald-100/70 px-4 md:px-5 py-2 text-xs md:text-sm font-medium text-emerald-50 hover:bg-emerald-50/10 transition"
                >
                  Log in instead
                </button>
              </div>
            </div>
          </section>
        </main>

        
        <footer className="mt-8 md:mt-10 py-4 border-t border-slate-800/80 text-[11px] md:text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Workify. All rights reserved.</p>
          <div className="flex gap-4">
            <button className="hover:text-slate-300 transition">Help</button>
            <button className="hover:text-slate-300 transition">
              Terms
            </button>
            <button className="hover:text-slate-300 transition">
              Privacy
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WorkifyHome;
