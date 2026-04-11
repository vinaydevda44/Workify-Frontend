import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/Navbar.module.scss";

function Navbar({token , setToken}) {
  const navigate = useNavigate();

  

  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // ✅ trigger update
    window.dispatchEvent(new Event("authChange"));

    setToken(null);
    setUser(null);
    setIsOpen(false);

    navigate("/");
  };

  return (
    <nav className={styles.navbar}>
      
      {/* Logo */}
      <Link to="/services" className={styles.logo}>
        Workify
      </Link>

      {/* Toggle */}
      <button
        className={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Menu */}
      <ul className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        {token ? (
          <>
            <li>
              <Link
                to="/services"
                className={styles.link}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/profile"
                className={styles.link}
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
            </li>

            <li className={styles.user}>
              {user?.name || user?.username || "User"}
            </li>

            <li>
              <button
                className={styles.button}
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/"
                className={styles.link}
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                className={styles.link}
                onClick={() => setIsOpen(false)}
              >
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;