import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentAvatar = avatarFile ? URL.createObjectURL(avatarFile) : null;

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) setAvatarFile(file);
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-slate-50 pt-24 pb-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Update Profile
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Add your basic details so your profile looks complete.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-slate-900/80 border border-slate-700/70 p-5 md:p-6 shadow-xl shadow-black/50 space-y-5"
        >
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex items-center gap-4">
              {currentAvatar ? (
                <img
                  src={currentAvatar}
                  alt="Avatar preview"
                  className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover border border-emerald-400/70 shadow-lg"
                />
              ) : (
                <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600/80">
                  <span className="text-3xl">👤</span>
                </div>
              )}
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-slate-100">
                Profile Picture
              </p>
              <p className="text-xs text-slate-400 mb-2">
                Upload a clear picture so customers or workers can easily
                recognize you.
              </p>
              <label className="inline-flex items-center px-3 py-2 rounded-xl bg-slate-800 border border-slate-600 text-xs md:text-sm text-slate-100 cursor-pointer hover:bg-slate-700 transition">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
                Choose Image
              </label>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs uppercase tracking-wide text-slate-400">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g. Ahmedabad, Gujarat"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-xl bg-slate-950/70 border border-slate-700/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wide text-slate-400">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full rounded-xl bg-slate-950/70 border border-slate-700/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wide text-slate-400">
                Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full rounded-xl bg-slate-950/70 border border-slate-700/70 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded-xl border border-slate-600/70 bg-slate-900/60 text-xs md:text-sm text-slate-200 hover:bg-slate-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-blue-600 text-xs md:text-sm font-semibold text-white shadow-lg shadow-emerald-900/60 hover:brightness-110 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {loading ? "Saving..." : "Save Changes ✅"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
