import { useState } from "react";
import API from "../api/api";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "Customer",
    otp: ""
  });

  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // 🔥 SEND OTP
  const handleSendOTP = async () => {
    try {
      const res = await API.post("/auth/send-otp", {
        email: form.email
      });

      alert("OTP Sent Successfully");
      console.log("OTP:", res.data.otp); // dev only
      setOtpSent(true);

    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  // 🔥 SIGNUP
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", form);
      alert("Signup Successful");
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>

      <form onSubmit={handleSignup}>

        <input className="form-control my-2"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input className="form-control my-2"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        {/* 🔥 SEND OTP BUTTON */}
        <button
          type="button"
          className="btn btn-warning my-2"
          onClick={handleSendOTP}
        >
          Send OTP
        </button>

        {otpSent && (
          <input
            className="form-control my-2"
            name="otp"
            placeholder="Enter OTP"
            onChange={handleChange}
          />
        )}

        <input className="form-control my-2"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <input className="form-control my-2"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <select
          className="form-control my-2"
          name="role"
          onChange={handleChange}
        >
          <option value="Customer">Customer</option>
          <option value="Provider">Provider</option>
        </select>

        <button className="btn btn-success">Signup</button>
      </form>
    </div>
  );
}

export default Signup;