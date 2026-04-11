import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
 
  
  return (
    <BrowserRouter>
    <Navbar token={token} setToken={setToken}/>
      <Routes>
        <Route path="/" element={<Login token={token} setToken={setToken} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;