import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function Login({token , setToken}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("email", email , "password" , password);
    
    try {
      const res = await API.post("/auth/login", {
        email,
        password
      });

      // Save token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Login Successful");
setToken(localStorage.getItem("token"))


      // navigate("/services");
      navigate("/home")

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          className="form-control my-2"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control my-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;