import "./AdminNav.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AdminNav = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const role = localStorage.getItem("role");

  const navigate = useNavigate();

  const toggleLoginDropdown = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const closeLoginDropdown = (e) => {
    if (!e.target.closest(".account-dropdown")) {
      setIsLoginOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", closeLoginDropdown);
    return () => {
      window.removeEventListener("click", closeLoginDropdown);
    };
  }, []);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div className="admin-nav">
        <div className="home-logo-container">
          <div className="home-logo">
            <Link to="/" className="logo-link">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
                alt="airbnb-logo"
              />
            </Link>
          </div>
        </div>

        <div className="listings-right-container">
          {username ? (
            <span className="listings-link">Welcome, {username}</span>
          ) : (
            <Link to="/login">
              <button className="listings-link host-btn">
                Airbnb your home
              </button>
            </Link>
          )}
          <div className="home-menu-profile">
            <MenuOutlinedIcon fontSize="small" />
            <button
              className="home-account-circle"
              onClick={toggleLoginDropdown}
            >
              <AccountCircleIcon fontSize="large" />
            </button>
            {isLoginOpen && (
              <div id="accountDropdown" className="account-dropdown-content">
                {role ? (
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
                {role && <Link to="/view-reservations">View Reservations</Link>}
              </div>
            )}
          </div>
        </div>
      </div>

      {role === "host" && (
        <div className="filter-header">
          <div className="filter-header-container">
            <Link to="/view-reservations">
              <button className="filter-reservation">View Reservations</button>
            </Link>
            <Link to="/view-listings">
              <button className="filter-listing">View Listings</button>
            </Link>
            <Link to="/create-listing">
              <button className="filter-create">Create Listing</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminNav;
