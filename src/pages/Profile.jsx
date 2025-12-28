import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const name = user?.name || "New User";
  const email = user?.email || "No email added";
  const avatar = user?.avatar || null;
  const location = user?.location || "Not added yet";
  const gender = user?.gender || "Not added yet";
  const dob = user?.dob || "Not added yet";

  const handleUpdate = () => {
    navigate("/profile/update");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-slate-50 pt-24 pb-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Your Profile
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            View and update your basic details.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900/80 border border-slate-700/70 p-5 md:p-6 shadow-xl shadow-black/50 flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/3">
            <div className="relative">
              {avatar ? (
                <img
                  src={avatar}
                  alt="Profile"
                  className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover border border-emerald-400/70 shadow-lg"
                />
              ) : (
                <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600/80">
                  <span className="text-3xl">👤</span>
                </div>
              )}
            </div>

            <div className="text-center md:text-left">
              <p className="text-lg md:text-xl font-semibold text-white">
                {name}
              </p>
              <p className="text-xs md:text-sm text-slate-400">{email}</p>
            </div>

            <button
              onClick={handleUpdate}
              className="mt-1 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 text-xs md:text-sm font-semibold shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-95 transition"
            >
              Update Profile ✏️
            </button>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-900/70 border border-slate-700/70 p-3">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Location
              </p>
              <p
                className={`mt-1 text-sm md:text-base ${
                  location === "Not added yet"
                    ? "text-slate-500 italic"
                    : "text-slate-100"
                }`}
              >
                {location}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/70 border border-slate-700/70 p-3">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Gender
              </p>
              <p
                className={`mt-1 text-sm md:text-base ${
                  gender === "Not added yet"
                    ? "text-slate-500 italic"
                    : "text-slate-100"
                }`}
              >
                {gender}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/70 border border-slate-700/70 p-3">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Date of Birth
              </p>
              <p
                className={`mt-1 text-sm md:text-base ${
                  dob === "Not added yet"
                    ? "text-slate-500 italic"
                    : "text-slate-100"
                }`}
              >
                {dob}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/70 border border-slate-700/70 p-3">
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Profile Picture
              </p>
              <p
                className={`mt-1 text-sm md:text-base ${
                  avatar ? "text-slate-100" : "text-slate-500 italic"
                }`}
              >
                {avatar ? "Profile picture added" : "No picture added yet"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
