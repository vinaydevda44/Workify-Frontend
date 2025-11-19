import React from "react";

const WorkifyHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-slate-100">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-32 -left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-20 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-500 shadow-lg shadow-emerald-900/60">
              <span className="text-xl">🛠️</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Workify</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition">About</a>
            <a href="#features" className="hover:text-emerald-400 transition">Features</a>
            <a href="#jobs" className="hover:text-emerald-400 transition">Jobs</a>
            <a href="#future" className="hover:text-emerald-400 transition">Future</a>
            <a href="#contact" className="hover:text-emerald-400 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex text-xs md:text-sm px-3 py-1.5 rounded-lg border border-slate-700 hover:border-emerald-500 text-slate-200 hover:text-emerald-300 transition">
              Log in
            </button>
            <button className="text-xs md:text-sm px-3 md:px-4 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 font-medium shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-[0.97] transition">
              Sign up
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-16">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 pt-10 md:pt-16">
          {/* Left */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-emerald-500/30 px-3 py-1 text-xs md:text-sm text-emerald-300 mb-4">
              <span className="text-base">⚡</span>
              <span>Daily work opportunities for real workers</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
              Find daily jobs. <br className="hidden sm:block" />
              Build stable income with <span className="text-emerald-400">Workify</span>.
            </h1>

            <p className="text-sm md:text-base text-slate-300/90 max-w-xl mb-6">
              Workify connects skilled workers, helpers, and professionals with verified
              daily and short-term jobs in their area — quickly, safely, and transparently.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base font-semibold text-white shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-95 transition">
                I’m a worker 👷‍♂️
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base text-slate-100 hover:border-emerald-500 hover:text-emerald-300 transition">
                I want to hire 🧑‍💼
              </button>
            </div>

            {/* Small stats */}
            <div className="grid grid-cols-3 gap-3 max-w-sm text-xs md:text-sm">
              <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-3">
                <p className="font-semibold text-white">10k+</p>
                <p className="text-slate-400">Shifts filled</p>
              </div>
              <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-3">
                <p className="font-semibold text-white">4.8⭐</p>
                <p className="text-slate-400">Worker ratings</p>
              </div>
              <div className="rounded-xl bg-slate-900/70 border border-slate-800 p-3">
                <p className="font-semibold text-white">24/7</p>
                <p className="text-slate-400">Smart matching</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 w-full">
            <div className="relative max-w-md mx-auto">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-blue-500/10 to-transparent blur-2xl -z-10" />
              <div className="rounded-3xl bg-slate-900/80 border border-slate-700/70 p-5 shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-slate-400">Next best matches</p>
                    <p className="text-sm font-medium text-white">Today’s jobs 🔍</p>
                  </div>
                  <span className="px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-[11px] text-emerald-300">
                    Smart matched
                  </span>
                </div>

                <div className="space-y-3 text-xs md:text-sm">
                  {[
                    { title: "Electrician for home wiring", tag: "Skilled", pay: "₹1,800 / day" },
                    { title: "Warehouse packing helper", tag: "Entry Level", pay: "₹900 / day" },
                    { title: "Office cleaning (evening shift)", tag: "Part-time", pay: "₹700 / shift" },
                  ].map((job, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-2xl bg-slate-900 border border-slate-700/80 px-3 py-2.5 hover:border-emerald-500/60 hover:bg-slate-900/90 transition"
                    >
                      <div>
                        <p className="font-medium text-slate-100">{job.title}</p>
                        <p className="text-[11px] text-slate-400 flex items-center gap-2">
                          <span className="px-2 py-[2px] rounded-full bg-slate-800 text-emerald-300 border border-emerald-500/40">
                            {job.tag}
                          </span>
                          <span>{job.pay}</span>
                        </p>
                      </div>
                      <button className="text-[11px] px-2 py-1 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/25 transition">
                        View
                      </button>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-[11px] text-slate-400 flex items-center gap-1">
                  ✨ Tip: Complete your profile to unlock higher-paying jobs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="mt-16 md:mt-20">
          <div className="flex items-center justify-between gap-4 mb-5">
            <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
              About Us <span className="text-lg">📌</span>
            </h2>
            <span className="hidden md:inline text-xs text-slate-400">
              Built for real-world workers & real-time hiring.
            </span>
          </div>

          <div className="grid md:grid-cols-[3fr,2fr] gap-6">
            <div className="rounded-2xl bg-slate-900/75 border border-slate-800 p-5 md:p-6 text-sm md:text-base text-slate-200 leading-relaxed">
              Workify is a digital bridge between **workers** looking for daily income and
              **employers** needing reliable manpower on demand.  
              <br />
              <br />
              Our mission is to bring structure, trust, and speed to the informal job market —
              making it easier for people to find work without long processes, agencies, or
              middlemen. Verified profiles, transparent pay ranges, and clear job details
              help everyone make better decisions, faster.
            </div>

            <div className="rounded-2xl bg-slate-900/75 border border-slate-800 p-5 flex flex-col justify-between text-sm">
              <div>
                <p className="text-slate-400 mb-2 text-xs uppercase tracking-wide">
                  Why Workify?
                </p>
                <ul className="space-y-2 text-slate-200">
                  <li>✅ Real workers, real jobs, no fake postings</li>
                  <li>✅ Location-based job matching</li>
                  <li>✅ Rating system for both workers & employers</li>
                  <li>✅ Simple, mobile-friendly interface</li>
                </ul>
              </div>
              <p className="mt-4 text-xs text-emerald-300">
                “Work today, get opportunities tomorrow – that’s the Workify mindset.”
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mt-16 md:mt-20">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
              Platform Features <span className="text-lg">💡</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 text-sm">
            <div className="rounded-2xl bg-slate-900/75 border border-slate-800 p-5">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                Smart Match Engine <span>🧠</span>
              </h3>
              <p className="text-slate-300">
                Our algorithm matches workers to jobs based on skills, location, timings, and
                reliability history, so you see only relevant opportunities.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/75 border border-slate-800 p-5">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                Secure Profiles <span>🛡️</span>
              </h3>
              <p className="text-slate-300">
                Workers and employers maintain verified profiles with ratings, reviews, and
                basic verification indicators to build trust on both ends.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900/75 border border-slate-800 p-5">
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                Job Tracking & History <span>📊</span>
              </h3>
              <p className="text-slate-300">
                Workers can monitor their job history, earnings trends, and performance
                ratings, helping them grow and aim for higher-paying roles.
              </p>
            </div>
          </div>
        </section>

        {/* All Types of Jobs */}
        <section id="jobs" className="mt-16 md:mt-20">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
              All Types of Jobs Available <span className="text-lg">🧩</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-slate-300 mb-4 max-w-2xl">
            Workify caters to multiple categories of work – from skilled trades to general
            labour, service roles, and quick gig-based jobs, so no worker is left out.
          </p>

          <div className="grid md:grid-cols-4 gap-4 text-sm">
            {[
              {
                title: "Skilled Trades",
                emoji: "🔧",
                items: ["Electrician", "Plumber", "Carpenter", "Mechanic"],
              },
              {
                title: "General & Field Work",
                emoji: "🧱",
                items: ["Construction helper", "Loader/Unloader", "Warehouse work"],
              },
              {
                title: "Service & Office",
                emoji: "🧹",
                items: ["Cleaning staff", "Office boy", "Reception support"],
              },
              {
                title: "Gigs & Events",
                emoji: "🎪",
                items: ["Event helper", "Catering support", "Promotional staff"],
              },
            ].map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 hover:border-emerald-500/60 hover:-translate-y-1 transition"
              >
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span>{cat.emoji}</span> {cat.title}
                </h3>
                <ul className="text-slate-300 text-xs space-y-1">
                  {cat.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Future Advancements */}
        <section id="future" className="mt-16 md:mt-20">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
              Future Advancements <span className="text-lg">🚀</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-[2.2fr,2.8fr] gap-6 text-sm">
            <div className="rounded-2xl bg-slate-900/75 border border-slate-800 p-5">
              <p className="text-slate-300">
                Workify is evolving from a job listing tool into a full ecosystem for
                blue-collar and grey-collar workers. Our roadmap focuses on financial safety,
                reliability, and long-term growth for workers.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "In-app payments & payout tracking",
                  desc: "Secure, on-time payments with clear records for both workers and employers.",
                },
                {
                  title: "Skill verification & micro-certifications",
                  desc: "Workers can prove their skill with short tests and verified badges.",
                },
                {
                  title: "Smart scheduling & recurring shifts",
                  desc: "Workers can lock weekly patterns, so income becomes more predictable.",
                },
                {
                  title: "Regional language support",
                  desc: "Full experience in local languages to make Workify accessible to everyone.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3 rounded-2xl bg-slate-900/80 border border-slate-800 p-3"
                >
                  <div className="mt-1 h-6 w-6 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-xs text-emerald-300">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-medium text-slate-100">{item.title}</p>
                    <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="mt-16 md:mt-20 mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
              Contact Us <span className="text-lg">📬</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-[3fr,2fr] gap-6">
            <form className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-4 text-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-xl bg-slate-950/70 border border-slate-700 px-3 py-2 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-xl bg-slate-950/70 border border-slate-700 px-3 py-2 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full rounded-xl bg-slate-950/70 border border-slate-700 px-3 py-2 text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-95 transition"
              >
                Send Message 💬
              </button>
            </form>

            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 text-sm flex flex-col justify-between">
              <div>
                <p className="text-slate-300 mb-3">
                  Have a question, suggestion, or partnership idea? Reach out anytime and
                  our team will get back to you.
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>📧 support@workify.com</li>
                  <li>📞 +91-98XXXXXX00</li>
                  <li>📍 India (expanding soon)</li>
                </ul>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                We’re committed to building Workify with feedback directly from workers and
                employers using the platform every day.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/90 text-[11px] text-slate-500">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Workify. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for workers first <span>❤️</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WorkifyHome;
