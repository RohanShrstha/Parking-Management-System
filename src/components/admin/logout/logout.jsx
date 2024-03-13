import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication token from localStorage
    localStorage.removeItem("auth");
    // Navigate back to the login page
    navigate("/login");
  };

  return (
    <div>
      <h2>Logout Page</h2>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
